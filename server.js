/**
 * TECHNO AMAZE - LOCAL DEVELOPMENT & TESTING SERVER
 * Zero-dependency local server using built-in Node.js modules.
 * 
 * Runs the complete website, serves all static assets, and handles
 * real-time API routes (/api/apply.php, /api/manage-jobs.php, /api/auth.php, etc.)
 * saving data directly to data/jobs.json, data/applications.json, and uploads/resumes/.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
const ROOT_DIR = __dirname;
const DATA_DIR = path.join(ROOT_DIR, 'data');
const JOBS_FILE = path.join(DATA_DIR, 'jobs.json');
const APPS_FILE = path.join(DATA_DIR, 'applications.json');
const UPLOADS_DIR = path.join(ROOT_DIR, 'uploads', 'resumes');

// Ensure necessary directories exist
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.doc': 'application/msword',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.sql': 'application/sql; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8'
};

function readJsonFile(filePath, defaultValue) {
  try {
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
  } catch (e) {}
  return defaultValue;
}

function writeJsonFile(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (e) {
    return false;
  }
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  });
  res.end(JSON.stringify(payload));
}

// Simple multipart parser for resume uploads
function parseMultipart(buffer, boundary) {
  const result = { fields: {}, files: {} };
  const boundaryBuffer = Buffer.from('--' + boundary);
  let start = 0;

  while ((start = buffer.indexOf(boundaryBuffer, start)) !== -1) {
    start += boundaryBuffer.length;
    if (buffer.slice(start, start + 2).toString() === '--') break; // End of boundary
    if (buffer.slice(start, start + 2).toString() === '\r\n') start += 2;

    const nextBoundary = buffer.indexOf(boundaryBuffer, start);
    if (nextBoundary === -1) break;

    const partBuffer = buffer.slice(start, nextBoundary - 2); // Exclude \r\n
    const headerEnd = partBuffer.indexOf('\r\n\r\n');
    if (headerEnd === -1) {
      start = nextBoundary;
      continue;
    }

    const headersText = partBuffer.slice(0, headerEnd).toString('utf8');
    const bodyBuffer = partBuffer.slice(headerEnd + 4);

    const nameMatch = headersText.match(/name="([^"]+)"/);
    const filenameMatch = headersText.match(/filename="([^"]+)"/);

    if (nameMatch) {
      const fieldName = nameMatch[1];
      if (filenameMatch) {
        result.files[fieldName] = {
          filename: filenameMatch[1],
          data: bodyBuffer
        };
      } else {
        result.fields[fieldName] = bodyBuffer.toString('utf8').trim();
      }
    }
    start = nextBoundary;
  }
  return result;
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    return res.end();
  }

  // --------------------------------------------------------------------------
  // API ROUTING
  // --------------------------------------------------------------------------

  // 1. API: Auth (/api/auth.php)
  if (pathname === '/api/auth.php') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      let data = {};
      try { data = JSON.parse(body); } catch (e) { data = parsedUrl.query; }
      const action = data.action || parsedUrl.query.action || 'check';

      if (action === 'login') {
        const u = (data.username || '').trim().toLowerCase();
        const p = (data.password || '').trim();
        if ((u === 'admin' || u === 'admin@technoamaze.in') && p === 'Admin@Techno2026') {
          return sendJson(res, 200, {
            success: true,
            message: 'Login successful. Redirecting to dashboard...',
            user: { username: 'admin@technoamaze.in', displayName: 'Recruitment Administrator' }
          });
        }
        return sendJson(res, 200, { success: false, message: 'Invalid username or password.' });
      }

      if (action === 'check') {
        return sendJson(res, 200, { success: true, loggedIn: true, user: { username: 'admin@technoamaze.in' } });
      }

      if (action === 'logout') {
        return sendJson(res, 200, { success: true, message: 'Logged out successfully.' });
      }

      sendJson(res, 200, { success: false, message: 'Unknown action.' });
    });
    return;
  }

  // 2. API: Manage Jobs (/api/manage-jobs.php)
  if (pathname === '/api/manage-jobs.php') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      let data = {};
      try { data = JSON.parse(body); } catch (e) { data = parsedUrl.query; }
      const action = data.action || parsedUrl.query.action || 'list';

      const jobsData = readJsonFile(JOBS_FILE, { jobs: [] });
      const apps = readJsonFile(APPS_FILE, []);

      // Calculate applicant counts
      const counts = {};
      apps.forEach(a => {
        if (a.jobId) counts[a.jobId] = (counts[a.jobId] || 0) + 1;
      });

      if (action === 'list') {
        let openCount = 0;
        let closedCount = 0;
        jobsData.jobs.forEach(j => {
          j.applicantsCount = counts[j.id] || 0;
          if ((j.status || 'open').toLowerCase() === 'open') openCount++;
          else closedCount++;
        });

        return sendJson(res, 200, {
          success: true,
          jobs: jobsData.jobs,
          stats: {
            total: jobsData.jobs.length,
            open: openCount,
            closed: closedCount,
            totalApplications: apps.length
          },
          database: { driver: 'Local Node Engine (Dual-Sync)', status: 'connected' }
        });
      }

      if (action === 'create') {
        const title = (data.title || '').trim();
        if (!title) return sendJson(res, 200, { success: false, message: 'Job title is required.' });

        const baseSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || ('job-' + Date.now());
        let slug = baseSlug;
        let counter = 1;
        while (jobsData.jobs.some(j => j.id === slug)) {
          slug = `${baseSlug}-${++counter}`;
        }

        const newJob = {
          id: slug,
          title: title,
          department: data.department || 'Engineering',
          location: data.location || 'Remote / Pune',
          employmentType: data.employmentType || 'Full Time',
          experience: data.experience || '1–2 Years',
          salary: data.salary || '',
          description: data.description || '',
          responsibilities: Array.isArray(data.responsibilities) ? data.responsibilities : (data.responsibilities || '').split('\n').map(s => s.trim().replace(/^[-*•\d+.]\s*/, '')).filter(Boolean),
          requirements: Array.isArray(data.requirements) ? data.requirements : (data.requirements || '').split('\n').map(s => s.trim().replace(/^[-*•\d+.]\s*/, '')).filter(Boolean),
          preferred: Array.isArray(data.preferred) ? data.preferred : (data.preferred || '').split('\n').map(s => s.trim().replace(/^[-*•\d+.]\s*/, '')).filter(Boolean),
          benefits: Array.isArray(data.benefits) ? data.benefits : (data.benefits || '').split('\n').map(s => s.trim().replace(/^[-*•\d+.]\s*/, '')).filter(Boolean),
          deadline: data.deadline || '',
          status: (data.status || 'open').toLowerCase() === 'closed' ? 'closed' : 'open',
          postedDate: new Date().toISOString().split('T')[0]
        };

        jobsData.jobs.unshift(newJob);
        writeJsonFile(JOBS_FILE, jobsData);
        console.log(`[JOB CREATED] "${newJob.title}" (${newJob.id}) saved to data/jobs.json`);

        return sendJson(res, 200, { success: true, message: 'Job posted and saved successfully!', job: newJob });
      }

      if (action === 'update') {
        const jobId = data.id;
        const idx = jobsData.jobs.findIndex(j => j.id === jobId);
        if (idx === -1) return sendJson(res, 200, { success: false, message: 'Job not found.' });

        const existing = jobsData.jobs[idx];
        const updatedJob = Object.assign({}, existing, {
          title: data.title || existing.title,
          department: data.department || existing.department,
          location: data.location || existing.location,
          employmentType: data.employmentType || existing.employmentType,
          experience: data.experience || existing.experience,
          salary: data.salary !== undefined ? data.salary : existing.salary,
          deadline: data.deadline !== undefined ? data.deadline : existing.deadline,
          status: data.status || existing.status,
          description: data.description || existing.description,
          responsibilities: Array.isArray(data.responsibilities) ? data.responsibilities : (data.responsibilities || '').split('\n').map(s => s.trim().replace(/^[-*•\d+.]\s*/, '')).filter(Boolean),
          requirements: Array.isArray(data.requirements) ? data.requirements : (data.requirements || '').split('\n').map(s => s.trim().replace(/^[-*•\d+.]\s*/, '')).filter(Boolean),
          preferred: Array.isArray(data.preferred) ? data.preferred : (data.preferred || '').split('\n').map(s => s.trim().replace(/^[-*•\d+.]\s*/, '')).filter(Boolean),
          benefits: Array.isArray(data.benefits) ? data.benefits : (data.benefits || '').split('\n').map(s => s.trim().replace(/^[-*•\d+.]\s*/, '')).filter(Boolean)
        });

        jobsData.jobs[idx] = updatedJob;
        writeJsonFile(JOBS_FILE, jobsData);
        console.log(`[JOB UPDATED] "${updatedJob.title}" (${jobId}) saved to data/jobs.json`);

        return sendJson(res, 200, { success: true, message: 'Job details updated successfully!', job: updatedJob });
      }

      if (action === 'toggle_status') {
        const jobId = data.id;
        const job = jobsData.jobs.find(j => j.id === jobId);
        if (!job) return sendJson(res, 200, { success: false, message: 'Job not found.' });

        job.status = (job.status || 'open') === 'open' ? 'closed' : 'open';
        writeJsonFile(JOBS_FILE, jobsData);
        console.log(`[JOB STATUS TOGGLED] ${jobId} -> ${job.status}`);

        return sendJson(res, 200, { success: true, message: `Status changed to ${job.status.toUpperCase()}`, newStatus: job.status });
      }

      if (action === 'delete') {
        const jobId = data.id;
        const initial = jobsData.jobs.length;
        jobsData.jobs = jobsData.jobs.filter(j => j.id !== jobId);
        if (jobsData.jobs.length === initial) return sendJson(res, 200, { success: false, message: 'Job not found.' });

        writeJsonFile(JOBS_FILE, jobsData);
        console.log(`[JOB DELETED] ${jobId}`);

        return sendJson(res, 200, { success: true, message: 'Job position deleted permanently.' });
      }

      sendJson(res, 200, { success: false, message: 'Unknown jobs action.' });
    });
    return;
  }

  // 3. API: Manage Applications (/api/manage-applications.php)
  if (pathname === '/api/manage-applications.php') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      let data = {};
      try { data = JSON.parse(body); } catch (e) { data = parsedUrl.query; }
      const action = data.action || parsedUrl.query.action || 'list';

      const apps = readJsonFile(APPS_FILE, []);

      if (action === 'list') {
        const statusFilter = (data.status || parsedUrl.query.status || 'all').toLowerCase();
        const jobFilter = data.job_id || parsedUrl.query.job_id || 'all';
        const q = (data.search || parsedUrl.query.search || '').toLowerCase().trim();

        const stats = { total: apps.length, new: 0, reviewing: 0, shortlisted: 0, interview: 0, selected: 0, rejected: 0 };
        apps.forEach(a => {
          const st = (a.status || 'new').toLowerCase();
          if (stats[st] !== undefined) stats[st]++;
          else stats.new++;
        });

        const filtered = apps.filter(a => {
          if (statusFilter !== 'all' && (a.status || 'new').toLowerCase() !== statusFilter) return false;
          if (jobFilter !== 'all' && a.jobId !== jobFilter) return false;
          if (q) {
            const str = `${a.candidateName} ${a.email} ${a.phone} ${a.jobTitle} ${a.refId}`.toLowerCase();
            if (!str.includes(q)) return false;
          }
          return true;
        });

        return sendJson(res, 200, {
          success: true,
          applications: filtered,
          stats: stats,
          database: { driver: 'Local Node Engine (Dual-Sync)', status: 'connected' }
        });
      }

      if (action === 'update_status') {
        const refId = data.refId || data.ref_id;
        const newStatus = data.status;
        const app = apps.find(a => a.refId === refId);
        if (!app) return sendJson(res, 200, { success: false, message: 'Application not found.' });

        app.status = newStatus;
        writeJsonFile(APPS_FILE, apps);
        console.log(`[APPLICATION STAGE UPDATED] ${refId} -> ${newStatus}`);

        return sendJson(res, 200, { success: true, message: `Status updated to ${newStatus}`, refId: refId, status: newStatus });
      }

      if (action === 'download_sql_backup') {
        const jobsData = readJsonFile(JOBS_FILE, { jobs: [] });
        let sql = `-- TECHNO AMAZE LOCAL BACKUP\n-- Generated: ${new Date().toISOString()}\n\n`;
        sql += `CREATE TABLE IF NOT EXISTS ta_jobs (id VARCHAR(100) PRIMARY KEY, title VARCHAR(255), department VARCHAR(100), location VARCHAR(100), status VARCHAR(20));\n`;
        jobsData.jobs.forEach(j => {
          sql += `INSERT INTO ta_jobs (id, title, department, location, status) VALUES ('${j.id}', '${(j.title||'').replace(/'/g, "''")}', '${j.department}', '${j.location}', '${j.status}');\n`;
        });
        sql += `\nCREATE TABLE IF NOT EXISTS ta_applications (ref_id VARCHAR(50) PRIMARY KEY, candidate_name VARCHAR(150), email VARCHAR(150), job_title VARCHAR(255), status VARCHAR(50));\n`;
        apps.forEach(a => {
          sql += `INSERT INTO ta_applications (ref_id, candidate_name, email, job_title, status) VALUES ('${a.refId}', '${(a.candidateName||'').replace(/'/g, "''")}', '${a.email}', '${(a.jobTitle||'').replace(/'/g, "''")}', '${a.status}');\n`;
        });

        const filename = `technoamaze_backup_${Date.now()}.sql`;
        res.writeHead(200, {
          'Content-Type': 'application/sql; charset=utf-8',
          'Content-Disposition': `attachment; filename="${filename}"`
        });
        return res.end(sql);
      }

      sendJson(res, 200, { success: false, message: 'Unknown applications action.' });
    });
    return;
  }

  // 4. API: Apply Form Submission (/api/apply.php)
  if (pathname === '/api/apply.php') {
    const chunks = [];
    req.on('data', chunk => { chunks.push(chunk); });
    req.on('end', () => {
      const buffer = Buffer.concat(chunks);
      const contentType = req.headers['content-type'] || '';
      let fields = {};
      let uploadedFile = null;

      if (contentType.includes('multipart/form-data')) {
        const match = contentType.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
        if (match) {
          const boundary = match[1] || match[2];
          const parsed = parseMultipart(buffer, boundary);
          fields = parsed.fields;
          uploadedFile = parsed.files.resume || null;
        }
      } else {
        try { fields = JSON.parse(buffer.toString('utf8')); } catch (e) {}
      }

      // Validation
      const name = (fields.name || '').trim();
      const email = (fields.email || '').trim();
      const phone = (fields.phone || '').trim();
      const exp = (fields.experience || '').trim();
      const jobId = fields.job_id || 'general';
      const jobTitle = fields.job_title || 'Software Professional';

      if (!name || !email || !phone || !exp) {
        return sendJson(res, 200, { success: false, message: 'Please fill in all required fields.' });
      }

      // Save Resume File
      let savedFileName = 'sample_resume.pdf';
      let originalFileName = 'resume.pdf';
      if (uploadedFile && uploadedFile.data && uploadedFile.data.length > 0) {
        originalFileName = uploadedFile.filename || 'resume.pdf';
        const ext = path.extname(originalFileName) || '.pdf';
        const cleanJob = jobId.replace(/[^a-z0-9]/gi, '').slice(0, 15);
        savedFileName = `resume_${cleanJob}_${Date.now()}${ext}`;
        const filePath = path.join(UPLOADS_DIR, savedFileName);
        try {
          fs.writeFileSync(filePath, uploadedFile.data);
          console.log(`[RESUME UPLOADED] Saved to: uploads/resumes/${savedFileName} (${(uploadedFile.data.length / 1024).toFixed(1)} KB)`);
        } catch (e) {
          console.error('[UPLOAD ERROR]', e);
        }
      }

      const refId = `TA-APP-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${Math.floor(1000 + Math.random() * 9000)}`;
      const newApp = {
        refId: refId,
        jobId: jobId,
        jobTitle: jobTitle,
        candidateName: name,
        email: email,
        phone: phone,
        location: fields.location || 'Not specified',
        experience: exp,
        linkedin: fields.linkedin || '',
        portfolio: fields.portfolio || '',
        coverLetter: fields.cover_letter || '',
        resumeFile: savedFileName,
        resumeOriginal: originalFileName,
        resumeUrl: `../uploads/resumes/${savedFileName}`,
        status: 'New',
        submittedAt: new Date().toLocaleString()
      };

      const apps = readJsonFile(APPS_FILE, []);
      apps.unshift(newApp);
      writeJsonFile(APPS_FILE, apps);

      console.log('------------------------------------------------------------');
      console.log(`[EMAIL NOTIFICATION TO: info@technoamaze.in]`);
      console.log(`Subject: New Job Application – ${jobTitle} – ${name}`);
      console.log(`Candidate: ${name} (${email}, ${phone})`);
      console.log(`Ref ID: ${refId} | Resume: uploads/resumes/${savedFileName}`);
      console.log('------------------------------------------------------------');

      return sendJson(res, 200, {
        success: true,
        message: 'Application Submitted Successfully',
        refId: refId,
        jobTitle: jobTitle,
        candidateName: name
      });
    });
    return;
  }

  // --------------------------------------------------------------------------
  // STATIC FILE SERVING
  // --------------------------------------------------------------------------
  if (pathname === '/' || pathname === '') pathname = '/index.html';
  if (pathname === '/admin' || pathname === '/admin/') pathname = '/admin/index.html';

  let filePath = path.join(ROOT_DIR, pathname);

  // Security check: stay within ROOT_DIR
  if (!filePath.startsWith(ROOT_DIR)) {
    res.writeHead(403);
    return res.end('Access Denied');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end(`
        <h2 style="font-family:sans-serif;text-align:center;margin-top:60px;">404 Not Found: ${escape(pathname)}</h2>
        <p style="font-family:sans-serif;text-align:center;"><a href="/careers.html">Back to Careers</a> | <a href="/admin/login.html">Admin Login</a></p>
      `);
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log('============================================================');
  console.log(`🚀 TECHNO AMAZE LOCAL TEST SERVER RUNNING AT:`);
  console.log(`👉 http://localhost:${PORT}/careers.html`);
  console.log(`👉 http://localhost:${PORT}/admin/login.html`);
  console.log('============================================================');
  console.log(`• Admin Login: admin@technoamaze.in | Password: Admin@Techno2026`);
  console.log(`• Real-time data saves to: data/jobs.json & data/applications.json`);
  console.log(`• Resumes upload to: uploads/resumes/`);
  console.log(`Press Ctrl + C to stop the server.`);
});
