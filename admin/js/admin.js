/**
 * TECHNO AMAZE - ADMIN RECRUITMENT CONTROLLER
 * Full management of Job Postings and Candidate Applications.
 * Built for non-technical users with instant feedback, live search, and modal workflows.
 */

(function () {
  'use strict';

  // State
  var state = {
    jobs: [],
    applications: [],
    currentTab: 'jobs',
    confirmCallback: null
  };

  // DOM Elements
  var sidebar = document.getElementById('ta-sidebar');
  var headerTitle = document.getElementById('ta-header-title');
  var mobileToggle = document.getElementById('ta-mobile-menu-toggle');
  var themeToggle = document.getElementById('ta-theme-toggle-btn');
  var logoutBtn = document.getElementById('ta-logout-btn');

  // KPI elements
  var kpiOpenJobs = document.getElementById('kpi-open-jobs');
  var kpiTotalJobs = document.getElementById('kpi-total-jobs');
  var kpiTotalApps = document.getElementById('kpi-total-apps');
  var kpiNewApps = document.getElementById('kpi-new-apps');
  var sidebarJobsCount = document.getElementById('ta-sidebar-jobs-count');
  var sidebarAppsCount = document.getElementById('ta-sidebar-apps-count');

  // Jobs elements
  var jobsTbody = document.getElementById('ta-jobs-tbody');
  var jobsSearch = document.getElementById('jobs-search-input');
  var jobsFilterDept = document.getElementById('jobs-filter-dept');
  var jobsFilterStatus = document.getElementById('jobs-filter-status');
  var btnCreateJob = document.getElementById('ta-btn-create-job');

  // Applications elements
  var appsTbody = document.getElementById('ta-apps-tbody');
  var appsSearch = document.getElementById('apps-search-input');
  var appsFilterJob = document.getElementById('apps-filter-job');
  var appsFilterStatus = document.getElementById('apps-filter-status');

  // Modals
  var jobModal = document.getElementById('ta-job-modal');
  var jobForm = document.getElementById('ta-job-form');
  var jobModalTitle = document.getElementById('job-modal-title');
  var jobSubmitBtn = document.getElementById('ta-job-submit-btn');

  var candModal = document.getElementById('ta-candidate-modal');
  var candModalStatusSelect = document.getElementById('cand-modal-status-select');
  var candModalSaveStatusBtn = document.getElementById('cand-modal-save-status-btn');
  var currentViewingApp = null;

  var confirmModal = document.getElementById('ta-confirm-modal');
  var confirmTitle = document.getElementById('ta-confirm-title');
  var confirmDesc = document.getElementById('ta-confirm-desc');
  var confirmActionBtn = document.getElementById('ta-confirm-action-btn');

  var toastContainer = document.getElementById('ta-toast-container');

  // --------------------------------------------------------------------------
  // 1. UTILITIES & TOASTS
  // --------------------------------------------------------------------------
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function showToast(message, type) {
    type = type || 'success';
    var toast = document.createElement('div');
    toast.className = 'ta-toast ' + type;
    var icon = type === 'success' ? 'fa-circle-check' : (type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-info');
    toast.innerHTML = '<i class="fa-solid ' + icon + '"></i> <span>' + escapeHtml(message) + '</span>';
    toastContainer.appendChild(toast);

    setTimeout(function () {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(function () {
        if (toast.parentElement) toast.parentElement.removeChild(toast);
      }, 300);
    }, 3500);
  }

  function openModal(modalEl) {
    if (modalEl) modalEl.classList.add('active');
  }

  function closeModal(modalEl) {
    if (modalEl) modalEl.classList.remove('active');
  }

  // Bind close buttons on all modals
  document.querySelectorAll('[data-close-modal]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetId = this.getAttribute('data-close-modal');
      closeModal(document.getElementById(targetId));
    });
  });

  // Close modals on clicking backdrop
  document.querySelectorAll('.ta-modal-backdrop').forEach(function (backdrop) {
    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) {
        closeModal(backdrop);
      }
    });
  });

  // --------------------------------------------------------------------------
  // 2. AUTHENTICATION & NAVIGATION
  // --------------------------------------------------------------------------
  var adminUser = sessionStorage.getItem('ta_admin_user') || 'admin@technoamaze.in';
  var userDisplayEl = document.getElementById('ta-admin-user-display');
  if (userDisplayEl) userDisplayEl.textContent = adminUser;

  // Logout handler
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function () {
      fetch('../api/auth.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'logout' })
      }).finally(function () {
        sessionStorage.removeItem('ta_admin_logged_in');
        sessionStorage.removeItem('ta_admin_user');
        window.location.href = 'login.html';
      });
    });
  }

  // Mobile menu toggle
  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener('click', function () {
      sidebar.classList.toggle('open');
    });
  }

  // Theme toggle
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') || 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('ta-admin-theme', next);
      themeToggle.innerHTML = next === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });
  }

  // Tab switching
  function switchTab(tabName) {
    state.currentTab = tabName;
    document.querySelectorAll('.ta-nav-item').forEach(function (b) { b.classList.remove('active'); });
    document.querySelectorAll('.ta-tab-section').forEach(function (s) { s.style.display = 'none'; });

    if (tabName === 'jobs') {
      document.getElementById('nav-btn-jobs').classList.add('active');
      document.getElementById('section-jobs').style.display = 'block';
      headerTitle.textContent = 'Job Openings Management';
    } else {
      document.getElementById('nav-btn-applications').classList.add('active');
      document.getElementById('section-applications').style.display = 'block';
      headerTitle.textContent = 'Candidate Applications & Screening';
    }

    if (sidebar && window.innerWidth <= 768) {
      sidebar.classList.remove('open');
    }
  }

  document.getElementById('nav-btn-jobs').addEventListener('click', function () { switchTab('jobs'); });
  document.getElementById('nav-btn-applications').addEventListener('click', function () { switchTab('applications'); });

  // --------------------------------------------------------------------------
  // 3. JOBS MANAGEMENT
  // --------------------------------------------------------------------------
  function loadJobs() {
    fetch('../api/manage-jobs.php?action=list')
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data.success && Array.isArray(data.jobs)) {
          state.jobs = data.jobs;
          renderJobs();
          updateKPIs();
          populateJobFilterDropdown();

          var dbText = document.getElementById('ta-db-text');
          if (dbText && data.database && data.database.driver) {
            var driverName = data.database.driver.toUpperCase();
            dbText.textContent = 'DB: ' + driverName + ' (Dual-Sync)';
          }
        } else {
          fallbackLoadJobs();
        }
      })
      .catch(function () {
        fallbackLoadJobs();
      });
  }

  // Fallback for file:/// local preview without running PHP server
  function fallbackLoadJobs() {
    fetch('../data/jobs.json')
      .then(function (r) { return r.json(); })
      .then(function (d) {
        state.jobs = d.jobs || [];
        renderJobs();
        updateKPIs();
        populateJobFilterDropdown();
      })
      .catch(function () {
        jobsTbody.innerHTML = '<tr><td colspan="8" class="ta-table-empty"><i class="fa-solid fa-triangle-exclamation"></i> Could not load jobs. Please check network.</td></tr>';
      });
  }

  function renderJobs() {
    var q = (jobsSearch.value || '').toLowerCase().trim();
    var dept = jobsFilterDept.value;
    var status = jobsFilterStatus.value;

    var filtered = state.jobs.filter(function (job) {
      var matchQ = true;
      if (q) {
        matchQ = (job.title || '').toLowerCase().indexOf(q) !== -1 ||
                 (job.location || '').toLowerCase().indexOf(q) !== -1 ||
                 (job.department || '').toLowerCase().indexOf(q) !== -1;
      }
      var matchDept = dept === 'all' || job.department === dept;
      var matchStatus = status === 'all' || (job.status || 'open').toLowerCase() === status.toLowerCase();
      return matchQ && matchDept && matchStatus;
    });

    if (!filtered.length) {
      jobsTbody.innerHTML = '<tr><td colspan="8" class="ta-table-empty"><i class="fa-solid fa-folder-open"></i> No job postings match your filter.</td></tr>';
      return;
    }

    var html = '';
    filtered.forEach(function (job) {
      var isOpen = (job.status || 'open').toLowerCase() === 'open';
      var statusBadge = isOpen
        ? '<span class="ta-badge ta-badge-open"><i class="fa-solid fa-circle-check"></i> Open</span>'
        : '<span class="ta-badge ta-badge-closed"><i class="fa-solid fa-circle-xmark"></i> Closed</span>';

      html += '<tr>' +
        '<td>' +
          '<strong>' + escapeHtml(job.title) + '</strong><br>' +
          '<span style="font-size:12px;color:var(--ta-text-muted);">' + escapeHtml(job.department || 'Engineering') + '</span>' +
        '</td>' +
        '<td>' +
          '<span>' + escapeHtml(job.location || 'Remote') + '</span><br>' +
          '<span style="font-size:12px;color:var(--ta-text-muted);">' + escapeHtml(job.employmentType || 'Full Time') + '</span>' +
        '</td>' +
        '<td>' + escapeHtml(job.experience || '1-2 Years') + '</td>' +
        '<td>' + escapeHtml(job.salary || 'Best in Industry') + '</td>' +
        '<td>' + (job.deadline ? escapeHtml(job.deadline) : '<span style="color:var(--ta-text-muted);">Rolling</span>') + '</td>' +
        '<td><span class="ta-badge ta-badge-status-new">' + (job.applicantsCount || 0) + ' applied</span></td>' +
        '<td>' + statusBadge + '</td>' +
        '<td style="text-align:right;">' +
          '<div class="ta-action-btns">' +
            '<button type="button" class="ta-btn-action" title="Edit Job" data-edit-job="' + escapeHtml(job.id) + '"><i class="fa-solid fa-pencil"></i></button>' +
            '<button type="button" class="ta-btn-action" title="' + (isOpen ? 'Close Job' : 'Open Job') + '" data-toggle-job="' + escapeHtml(job.id) + '"><i class="fa-solid ' + (isOpen ? 'fa-toggle-on' : 'fa-toggle-off') + '" style="color:' + (isOpen ? 'var(--ta-success)' : 'var(--ta-text-muted)') + '"></i></button>' +
            '<a href="../job-details.html?job=' + encodeURIComponent(job.id) + '" target="_blank" class="ta-btn-action" title="View on Live Website"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>' +
            '<button type="button" class="ta-btn-action delete" title="Delete Job" data-delete-job="' + escapeHtml(job.id) + '"><i class="fa-solid fa-trash-can"></i></button>' +
          '</div>' +
        '</td>' +
      '</tr>';
    });

    jobsTbody.innerHTML = html;

    // Attach row listeners
    jobsTbody.querySelectorAll('[data-edit-job]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var jid = this.getAttribute('data-edit-job');
        openEditJobModal(jid);
      });
    });

    jobsTbody.querySelectorAll('[data-toggle-job]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var jid = this.getAttribute('data-toggle-job');
        toggleJobStatus(jid);
      });
    });

    jobsTbody.querySelectorAll('[data-delete-job]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var jid = this.getAttribute('data-delete-job');
        confirmDeleteJob(jid);
      });
    });
  }

  // Filter listeners for jobs
  jobsSearch.addEventListener('input', renderJobs);
  jobsFilterDept.addEventListener('change', renderJobs);
  jobsFilterStatus.addEventListener('change', renderJobs);

  // Open Create Job Modal
  btnCreateJob.addEventListener('click', function () {
    jobForm.reset();
    document.getElementById('job-form-id').value = '';
    jobModalTitle.textContent = 'Post New Job Opening';
    jobSubmitBtn.innerHTML = '<i class="fa-solid fa-plus"></i> <span>Publish Job</span>';
    openModal(jobModal);
  });

  // Open Edit Job Modal
  function openEditJobModal(jobId) {
    var job = state.jobs.find(function (j) { return j.id === jobId; });
    if (!job) return;

    jobForm.reset();
    document.getElementById('job-form-id').value = job.id;
    jobModalTitle.textContent = 'Edit Job: ' + job.title;
    jobSubmitBtn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> <span>Save Changes</span>';

    document.getElementById('job-title-inp').value = job.title || '';
    document.getElementById('job-dept-inp').value = job.department || 'Engineering';
    document.getElementById('job-loc-inp').value = job.location || '';
    document.getElementById('job-type-inp').value = job.employmentType || 'Full Time';
    document.getElementById('job-exp-inp').value = job.experience || '';
    document.getElementById('job-salary-inp').value = job.salary || '';
    document.getElementById('job-deadline-inp').value = job.deadline || '';
    document.getElementById('job-status-inp').value = (job.status || 'open').toLowerCase();
    document.getElementById('job-desc-inp').value = job.description || '';
    document.getElementById('job-resp-inp').value = (job.responsibilities || []).join('\n');
    document.getElementById('job-req-inp').value = (job.requirements || []).join('\n');
    document.getElementById('job-pref-inp').value = (job.preferred || []).join('\n');
    document.getElementById('job-ben-inp').value = (job.benefits || []).join('\n');

    openModal(jobModal);
  }

  // Save Job (Create or Update)
  jobForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var editId = document.getElementById('job-form-id').value.trim();
    var payload = {
      action: editId ? 'update' : 'create',
      id: editId,
      title: document.getElementById('job-title-inp').value.trim(),
      department: document.getElementById('job-dept-inp').value.trim(),
      location: document.getElementById('job-loc-inp').value.trim(),
      employmentType: document.getElementById('job-type-inp').value.trim(),
      experience: document.getElementById('job-exp-inp').value.trim(),
      salary: document.getElementById('job-salary-inp').value.trim(),
      deadline: document.getElementById('job-deadline-inp').value.trim(),
      status: document.getElementById('job-status-inp').value.trim(),
      description: document.getElementById('job-desc-inp').value.trim(),
      responsibilities: document.getElementById('job-resp-inp').value.trim(),
      requirements: document.getElementById('job-req-inp').value.trim(),
      preferred: document.getElementById('job-pref-inp').value.trim(),
      benefits: document.getElementById('job-ben-inp').value.trim()
    };

    jobSubmitBtn.setAttribute('disabled', 'disabled');
    jobSubmitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Saving...';

    fetch('../api/manage-jobs.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        jobSubmitBtn.removeAttribute('disabled');
        if (data.success) {
          showToast(data.message || (editId ? 'Job updated!' : 'Job published!'));
          closeModal(jobModal);
          loadJobs();
        } else {
          showToast(data.message || 'Could not save job.', 'error');
        }
      })
      .catch(function () {
        // Fallback simulation in local preview
        jobSubmitBtn.removeAttribute('disabled');
        var mockJob = Object.assign({}, payload, {
          id: editId || payload.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          responsibilities: payload.responsibilities.split('\n').filter(Boolean),
          requirements: payload.requirements.split('\n').filter(Boolean),
          preferred: payload.preferred.split('\n').filter(Boolean),
          benefits: payload.benefits.split('\n').filter(Boolean),
          applicantsCount: 0
        });

        if (editId) {
          var idx = state.jobs.findIndex(function (j) { return j.id === editId; });
          if (idx !== -1) state.jobs[idx] = mockJob;
          showToast('Job updated successfully (Local mode)');
        } else {
          state.jobs.unshift(mockJob);
          showToast('Job posted successfully (Local mode)');
        }
        closeModal(jobModal);
        renderJobs();
        updateKPIs();
      });
  });

  // Toggle Job Status
  function toggleJobStatus(jobId) {
    fetch('../api/manage-jobs.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'toggle_status', id: jobId })
    })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data.success) {
          showToast(data.message);
          loadJobs();
        } else {
          showToast(data.message || 'Error updating status.', 'error');
        }
      })
      .catch(function () {
        var j = state.jobs.find(function (item) { return item.id === jobId; });
        if (j) {
          j.status = (j.status || 'open') === 'open' ? 'closed' : 'open';
          renderJobs();
          updateKPIs();
          showToast('Job status toggled (Local mode)');
        }
      });
  }

  // Delete Job
  function confirmDeleteJob(jobId) {
    var j = state.jobs.find(function (item) { return item.id === jobId; });
    confirmTitle.textContent = 'Delete Job Posting?';
    confirmDesc.textContent = 'Are you sure you want to permanently delete "' + (j ? j.title : 'this role') + '"? This will remove it from the website.';
    
    state.confirmCallback = function () {
      fetch('../api/manage-jobs.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'delete', id: jobId })
      })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          closeModal(confirmModal);
          if (data.success) {
            showToast('Job position deleted permanently.');
            loadJobs();
          } else {
            showToast(data.message || 'Could not delete job.', 'error');
          }
        })
        .catch(function () {
          closeModal(confirmModal);
          state.jobs = state.jobs.filter(function (it) { return it.id !== jobId; });
          renderJobs();
          updateKPIs();
          showToast('Job removed (Local mode)');
        });
    };

    openModal(confirmModal);
  }

  // Confirmation button action
  confirmActionBtn.addEventListener('click', function () {
    if (typeof state.confirmCallback === 'function') {
      state.confirmCallback();
    }
  });

  // --------------------------------------------------------------------------
  // 4. APPLICATIONS MANAGEMENT
  // --------------------------------------------------------------------------
  function loadApplications() {
    fetch('../api/manage-applications.php?action=list')
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data.success && Array.isArray(data.applications)) {
          state.applications = data.applications;
          renderApplications();
          updateKPIs();
        } else {
          fallbackLoadApplications();
        }
      })
      .catch(function () {
        fallbackLoadApplications();
      });
  }

  function fallbackLoadApplications() {
    fetch('../data/applications.json')
      .then(function (r) { return r.json(); })
      .then(function (d) {
        state.applications = Array.isArray(d) ? d : [];
        renderApplications();
        updateKPIs();
      })
      .catch(function () {
        appsTbody.innerHTML = '<tr><td colspan="8" class="ta-table-empty"><i class="fa-solid fa-triangle-exclamation"></i> No candidate submissions found.</td></tr>';
      });
  }

  function populateJobFilterDropdown() {
    if (!appsFilterJob) return;
    var current = appsFilterJob.value;
    var html = '<option value="all">All Positions</option>';
    state.jobs.forEach(function (j) {
      html += '<option value="' + escapeHtml(j.id) + '">' + escapeHtml(j.title) + '</option>';
    });
    appsFilterJob.innerHTML = html;
    appsFilterJob.value = current || 'all';
  }

  function renderApplications() {
    var q = (appsSearch.value || '').toLowerCase().trim();
    var job = appsFilterJob.value;
    var status = appsFilterStatus.value;

    var filtered = state.applications.filter(function (a) {
      var matchQ = true;
      if (q) {
        matchQ = (a.candidateName || '').toLowerCase().indexOf(q) !== -1 ||
                 (a.email || '').toLowerCase().indexOf(q) !== -1 ||
                 (a.phone || '').toLowerCase().indexOf(q) !== -1 ||
                 (a.refId || '').toLowerCase().indexOf(q) !== -1;
      }
      var matchJob = job === 'all' || a.jobId === job;
      var matchStatus = status === 'all' || (a.status || 'New').toLowerCase() === status.toLowerCase();
      return matchQ && matchJob && matchStatus;
    });

    if (!filtered.length) {
      appsTbody.innerHTML = '<tr><td colspan="8" class="ta-table-empty"><i class="fa-solid fa-folder-open"></i> No candidate applications match your criteria.</td></tr>';
      return;
    }

    var html = '';
    filtered.forEach(function (app) {
      var st = app.status || 'New';
      var badgeClass = 'ta-badge-status-' + st.toLowerCase();
      var resumeLink = app.resumeUrl || (app.resumeFile ? ('../uploads/resumes/' + app.resumeFile) : '#');

      html += '<tr>' +
        '<td>' +
          '<strong>' + escapeHtml(app.candidateName) + '</strong><br>' +
          '<span style="font-family:monospace;font-size:11px;color:var(--ta-primary);">' + escapeHtml(app.refId) + '</span>' +
        '</td>' +
        '<td>' +
          '<strong>' + escapeHtml(app.jobTitle) + '</strong>' +
        '</td>' +
        '<td>' +
          '<a href="mailto:' + escapeHtml(app.email) + '" style="color:var(--ta-info);text-decoration:none;"><i class="fa-solid fa-envelope"></i> ' + escapeHtml(app.email) + '</a><br>' +
          '<a href="tel:' + escapeHtml(app.phone) + '" style="color:var(--ta-text-muted);text-decoration:none;font-size:12px;"><i class="fa-solid fa-phone"></i> ' + escapeHtml(app.phone) + '</a>' +
        '</td>' +
        '<td>' + escapeHtml(app.experience || 'N/A') + '</td>' +
        '<td>' + escapeHtml((app.submittedAt || '').split(' ')[0] || 'Recent') + '</td>' +
        '<td>' +
          '<select class="ta-status-select-inline" data-change-app-status="' + escapeHtml(app.refId) + '">' +
            '<option value="New"' + (st === 'New' ? ' selected' : '') + '>New</option>' +
            '<option value="Reviewing"' + (st === 'Reviewing' ? ' selected' : '') + '>Reviewing</option>' +
            '<option value="Shortlisted"' + (st === 'Shortlisted' ? ' selected' : '') + '>Shortlisted</option>' +
            '<option value="Interview"' + (st === 'Interview' ? ' selected' : '') + '>Interview</option>' +
            '<option value="Selected"' + (st === 'Selected' ? ' selected' : '') + '>Selected</option>' +
            '<option value="Rejected"' + (st === 'Rejected' ? ' selected' : '') + '>Rejected</option>' +
          '</select>' +
        '</td>' +
        '<td>' +
          '<a href="' + escapeHtml(resumeLink) + '" target="_blank" class="ta-btn-secondary" style="font-size:12px;padding:5px 10px;" title="View or download candidate resume">' +
            '<i class="fa-solid fa-file-arrow-down"></i> Resume' +
          '</a>' +
        '</td>' +
        '<td style="text-align:right;">' +
          '<div class="ta-action-btns">' +
            '<button type="button" class="ta-btn-action" title="View Full Profile" data-view-app="' + escapeHtml(app.refId) + '"><i class="fa-solid fa-eye"></i></button>' +
            '<button type="button" class="ta-btn-action delete" title="Delete Application" data-delete-app="' + escapeHtml(app.refId) + '"><i class="fa-solid fa-trash-can"></i></button>' +
          '</div>' +
        '</td>' +
      '</tr>';
    });

    appsTbody.innerHTML = html;

    // Attach application row listeners
    appsTbody.querySelectorAll('[data-change-app-status]').forEach(function (select) {
      select.addEventListener('change', function () {
        var ref = this.getAttribute('data-change-app-status');
        updateApplicationStatus(ref, this.value);
      });
    });

    appsTbody.querySelectorAll('[data-view-app]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var ref = this.getAttribute('data-view-app');
        openCandidateModal(ref);
      });
    });

    appsTbody.querySelectorAll('[data-delete-app]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var ref = this.getAttribute('data-delete-app');
        confirmDeleteApplication(ref);
      });
    });
  }

  // Filter listeners for applications
  appsSearch.addEventListener('input', renderApplications);
  appsFilterJob.addEventListener('change', renderApplications);
  appsFilterStatus.addEventListener('change', renderApplications);

  // Update Application Status
  function updateApplicationStatus(refId, newStatus) {
    fetch('../api/manage-applications.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'update_status', refId: refId, status: newStatus })
    })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data.success) {
          showToast('Status updated to ' + newStatus);
          var a = state.applications.find(function (it) { return it.refId === refId; });
          if (a) a.status = newStatus;
          updateKPIs();
        } else {
          showToast(data.message || 'Error updating status.', 'error');
        }
      })
      .catch(function () {
        var a = state.applications.find(function (it) { return it.refId === refId; });
        if (a) a.status = newStatus;
        updateKPIs();
        showToast('Status updated to ' + newStatus + ' (Local mode)');
      });
  }

  // Open Candidate Modal
  function openCandidateModal(refId) {
    var app = state.applications.find(function (a) { return a.refId === refId; });
    if (!app) return;

    currentViewingApp = app;

    document.getElementById('cand-modal-name').textContent = app.candidateName || 'Candidate';
    document.getElementById('cand-modal-ref').textContent = app.refId || 'N/A';
    document.getElementById('cand-modal-job').textContent = app.jobTitle || 'Role';
    document.getElementById('cand-modal-exp').textContent = app.experience || 'Not specified';
    
    var emailEl = document.getElementById('cand-modal-email');
    emailEl.textContent = app.email || '—';
    emailEl.href = 'mailto:' + (app.email || '');

    var phoneEl = document.getElementById('cand-modal-phone');
    phoneEl.textContent = app.phone || '—';
    phoneEl.href = 'tel:' + (app.phone || '');

    document.getElementById('cand-modal-loc').textContent = app.location || 'Not specified';
    document.getElementById('cand-modal-date').textContent = app.submittedAt || 'Recent';

    // Links
    var liEl = document.getElementById('cand-modal-linkedin');
    if (app.linkedin) {
      liEl.href = app.linkedin;
      liEl.style.display = 'inline-flex';
    } else {
      liEl.style.display = 'none';
    }

    var pfEl = document.getElementById('cand-modal-portfolio');
    if (app.portfolio) {
      pfEl.href = app.portfolio;
      pfEl.style.display = 'inline-flex';
    } else {
      pfEl.style.display = 'none';
    }

    // Cover letter
    document.getElementById('cand-modal-letter').textContent = app.coverLetter || 'No cover letter or notes provided by the candidate.';

    // Resume
    var resumeUrl = app.resumeUrl || (app.resumeFile ? ('../uploads/resumes/' + app.resumeFile) : '#');
    document.getElementById('cand-modal-resume-name').textContent = app.resumeOriginal || app.resumeFile || 'candidate_resume.pdf';
    document.getElementById('cand-modal-resume-btn').href = resumeUrl;

    // Status select
    candModalStatusSelect.value = app.status || 'New';

    openModal(candModal);
  }

  // Save status from Candidate modal
  candModalSaveStatusBtn.addEventListener('click', function () {
    if (!currentViewingApp) return;
    var newSt = candModalStatusSelect.value;
    updateApplicationStatus(currentViewingApp.refId, newSt);
    currentViewingApp.status = newSt;
    renderApplications();
    closeModal(candModal);
  });

  // Delete Application
  function confirmDeleteApplication(refId) {
    confirmTitle.textContent = 'Delete Candidate Application?';
    confirmDesc.textContent = 'Are you sure you want to permanently delete application ' + refId + '? This cannot be undone.';

    state.confirmCallback = function () {
      fetch('../api/manage-applications.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'delete', refId: refId })
      })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          closeModal(confirmModal);
          if (data.success) {
            showToast('Application deleted successfully.');
            loadApplications();
          } else {
            showToast(data.message || 'Could not delete application.', 'error');
          }
        })
        .catch(function () {
          closeModal(confirmModal);
          state.applications = state.applications.filter(function (it) { return it.refId !== refId; });
          renderApplications();
          updateKPIs();
          showToast('Application removed (Local mode)');
        });
    };

    openModal(confirmModal);
  }

  // --------------------------------------------------------------------------
  // 5. KPI METRICS UPDATE
  // --------------------------------------------------------------------------
  function updateKPIs() {
    var totalJobs = state.jobs.length;
    var openJobs = state.jobs.filter(function (j) { return (j.status || 'open').toLowerCase() === 'open'; }).length;
    var totalApps = state.applications.length;
    var newApps = state.applications.filter(function (a) { return (a.status || 'New').toLowerCase() === 'new'; }).length;

    if (kpiOpenJobs) kpiOpenJobs.textContent = openJobs;
    if (kpiTotalJobs) kpiTotalJobs.textContent = totalJobs;
    if (kpiTotalApps) kpiTotalApps.textContent = totalApps;
    if (kpiNewApps) kpiNewApps.textContent = newApps;

    if (sidebarJobsCount) sidebarJobsCount.textContent = totalJobs;
    if (sidebarAppsCount) sidebarAppsCount.textContent = totalApps;
  }

  // --------------------------------------------------------------------------
  // 6. INITIALIZATION
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', function () {
    loadJobs();
    loadApplications();
  });

})();
