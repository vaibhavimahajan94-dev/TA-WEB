# TECHNO AMAZE — CAREERS & RECRUITMENT MANAGEMENT SYSTEM
## Complete System Documentation, Architecture & Non-Technical Admin Guide

> **Project:** Techno Amaze IT Solutions — Dynamic Careers, Job Applications & Recruitment Portal  
> **Status:** Production-Ready, Database-Backed, Fully Responsive  
> **Date:** October 2026  

---

## TABLE OF CONTENTS
1. [Executive Summary & What Was Built](#1-executive-summary--what-was-built)
2. [Quick Reference & Admin Login Details](#2-quick-reference--admin-login-details)
3. [Non-Technical User / HR Guide (Zero Coding Required)](#3-non-technical-user--hr-guide-zero-coding-required)
   - [How to Log In](#a-how-to-log-in)
   - [How to Post a New Job](#b-how-to-post-a-new-job)
   - [How to Edit or Update a Job](#c-how-to-edit-or-update-a-job)
   - [How to Close / Reopen a Job with 1 Click](#d-how-to-close--reopen-a-job-with-1-click)
   - [How to Delete a Job](#e-how-to-delete-a-job)
   - [How to Review Applications & Download Resumes](#f-how-to-review-applications--download-resumes)
   - [How to Update Candidate Recruitment Stages](#g-how-to-update-candidate-recruitment-stages)
   - [How to Download 1-Click Database Backups](#h-how-to-download-1-click-database-backups)
4. [Public Candidate Journey & Flow](#4-public-candidate-journey--flow)
5. [Complete Architecture & Data Flow Diagram](#5-complete-architecture--data-flow-diagram)
6. [Technology Stack](#6-technology-stack)
7. [Database Architecture & Backup Strategy](#7-database-architecture--backup-strategy)
   - [Dual-Sync Storage Engine](#a-dual-sync-storage-engine)
   - [Database Tables Schema (MySQL & SQLite)](#b-database-tables-schema-mysql--sqlite)
   - [Backup Levels & Locations](#c-backup-levels--locations)
8. [Automated Email Notification System](#8-automated-email-notification-system)
   - [Recipient & Email Specifications](#a-recipient--email-specifications)
   - [Format & Sample Body](#b-format--sample-body)
   - [Security & Error Handling](#c-security--error-handling)
9. [Server Setup & Deployment Instructions](#9-server-setup--deployment-instructions)
   - [Live Hosting (cPanel / Hostinger / Apache / Nginx)](#a-live-hosting-cpanel--hostinger--apache--nginx)
   - [MySQL Database Connection (30 Seconds Setup)](#b-mysql-database-connection-30-seconds-setup)
   - [Folder Permissions](#c-folder-permissions)
   - [Local Testing (PHP / XAMPP / Browser Preview)](#d-local-testing-php--xampp--browser-preview)
10. [Folder & File Directory Map](#10-folder--file-directory-map)
11. [Troubleshooting & FAQs](#11-troubleshooting--faqs)

---

## 1. Executive Summary & What Was Built

The existing static website for **Techno Amaze** was upgraded with an end-to-end **Careers & Recruitment Management System** designed with two main priorities:

1. **Brand Fidelity:** Matches the existing website layout, typography (`Poppins` & `Inter`), color palette (`#C8006E`), dark/light theme, header, footer, and mobile navigation without modifying or disrupting existing service/industry pages.
2. **Zero-Tech Admin Management:** Non-technical HR managers and business owners can manage job postings, review applicants, download resumes, change candidate hiring stages, and download database backups through a simple web dashboard **without writing code or editing files manually**.
3. **Database-Backed Redundancy:** Works on a **Dual-Sync engine** supporting MySQL / MariaDB in production, zero-config SQLite fallback, real-time JSON backups, and automatic SQL dump exports.

---

## 2. Quick Reference & Admin Login Details

| Feature | Details |
|---|---|
| **Admin Login URL** | `/admin/login.html` *(or open `/admin/`)* |
| **Admin Dashboard URL** | `/admin/dashboard.html` |
| **Default Admin Username / Email** | `admin@technoamaze.in` *(or simply `admin`)* |
| **Default Admin Password** | `Admin@Techno2026` |
| **How to Change Password** | Edit `api/config.php` Line 23: `define('ADMIN_PASS', 'YourNewPassword');` |
| **Public Careers Main URL** | `/careers.html` |
| **Job Details Route** | `/job-details.html?job=[job-id-slug]` |
| **Job Application Route** | `/apply.html?job=[job-id-slug]` |
| **Success Confirmation Route** | `/application-success.html` |
| **Email Notification Target** | `info@technoamaze.in` |

---

## 3. Non-Technical User / HR Guide (Zero Coding Required)

The person who will add and manage jobs does not need to understand HTML, JSON, PHP, or SQL. Everything is managed through visual forms.

### A. How to Log In
1. Open **`/admin/login.html`** in your browser (or click the discreet **`🔒 Recruiter Portal`** link in the footer of the public careers page).
2. Enter:
   * **Username:** `admin@technoamaze.in` *(or `admin`)*
   * **Password:** `Admin@Techno2026`
3. Click **Sign In to Dashboard**. The system automatically redirects to the Recruitment Dashboard.

---

### B. How to Post a New Job
1. On the Admin Dashboard, click the purple **`+ Post New Job`** button at the top right.
2. A pop-up form will appear. Fill in the fields:
   * **Job Title:** *(e.g. "Senior React Developer" or "WordPress Developer")*
   * **Department:** Choose from dropdown *(e.g. Engineering, AI & Data, Design, Marketing, QA, etc.)*
   * **Location:** *(e.g. "Remote / Pune" or "Hybrid")*
   * **Employment Type:** *(Full Time, Part Time, Contract, Internship)*
   * **Experience Required:** *(e.g. "1–2 Years" or "Fresher")*
   * **Salary / CTC:** *(e.g. "₹5,00,000 - ₹8,00,000 P.A." or leave blank for "Competitive")*
   * **Application Deadline:** Pick a date from the date picker *(or leave blank for rolling applications)*
   * **Publish Status:** Choose **Open** to show on the website immediately.
   * **Short Job Description:** Write a 2-3 sentence overview of the role.
   * **Key Responsibilities:** Type 1 responsibility per line:
     ```text
     Design and build custom WordPress themes
     Integrate WooCommerce and REST APIs
     Optimize website loading speeds and Core Web Vitals
     ```
     > **Tip:** You do not need to type dashes or bullet points. Press Enter between each point, and the system automatically formats them with checkmark icons on the live website!
   * **Required Qualifications & Skills:** Type 1 requirement per line.
   * **Preferred Qualifications:** Optional, type 1 per line.
   * **Benefits & Perks:** Type 1 per line *(e.g. Flexible remote work, Health insurance)*.
3. Click **Save Job Position**.
4. The job is saved to the database and appears on the public website **immediately**.

---

### C. How to Edit or Update a Job
1. In the **Job Postings** table, locate the job you want to modify.
2. Click the **Pencil Icon** (Edit) on the right side of the row.
3. Update any field (change salary, change deadline, modify requirements).
4. Click **Save Changes**. The live website updates instantly.

---

### D. How to Close / Reopen a Job with 1 Click
* In the **Job Postings** table, click the **Toggle Icon** (power switch) next to any job:
  * If the job was **Open**, it immediately switches to **Closed**. On the website, the Apply button will be disabled, and an alert will inform candidates that hiring for this position has closed.
  * If the job was **Closed**, clicking the button reopens it immediately.

---

### E. How to Delete a Job
1. In the **Job Postings** table, click the **Trash Can Icon** (Delete).
2. A confirmation modal will appear asking: *"Are you sure you want to permanently delete this job?"*
3. Click **Yes, Delete**. The job is removed from the database and backup files.

---

### F. How to Review Applications & Download Resumes
1. In the sidebar, click the **Applications** tab.
2. You will see all candidates who applied from the public website with:
   * Candidate Name & Generated Reference ID (`TA-APP-...`)
   * Position Applied For
   * Contact Information (Email link & clickable Phone number)
   * Experience & Submission Date
   * Current Recruitment Stage
3. Click the **Resume** button to open and download the candidate's uploaded resume (PDF/Word document).
4. Click the **Eye Icon** (View Full Profile) to open a modal showing their full cover letter, LinkedIn profile, portfolio link, and submission history.

---

### G. How to Update Candidate Recruitment Stages
In the **Applications** table, change the stage dropdown for any candidate:
* `New` (Unreviewed application)
* `Reviewing` (HR reviewing resume)
* `Shortlisted` (Passed resume screen)
* `Interview` (Technical/HR interview scheduled)
* `Selected` (Offer extended / hired)
* `Rejected` (Candidate not selected)

The stage updates immediately in the database.

---

### H. How to Download 1-Click Database Backups
At the top right of the Admin Dashboard, click the **`Backup (SQL)`** button.  
A complete `.sql` backup file (e.g. `technoamaze_backup_20261007_120000.sql`) containing all job postings and candidate records will download to your computer in 1 second.

---

## 4. Public Candidate Journey & Flow

```text
/careers.html 
     ↓ Candidate browses active roles, filters by department or searches keywords.
     ↓ Clicks "View Details" or "Apply Now".
/job-details.html?job=[job-id] 
     ↓ Reviews overview, responsibilities, requirements, benefits, and deadline.
     ↓ Clicks "Apply Now".
/apply.html?job=[job-id] 
     ↓ Form automatically detects and pre-fills selected role.
     ↓ Candidate enters Name, Email, Phone, Location, Experience, LinkedIn, Cover Letter.
     ↓ Uploads Resume (drag & drop, max 5MB, PDF/DOC/DOCX).
     ↓ Checks Consent checkbox and clicks "Submit Application".
/api/apply.php (Backend)
     ↓ 1. Validates inputs & scans file MIME type.
     ↓ 2. Saves resume securely to uploads/resumes/ with sanitized name.
     ↓ 3. Inserts application into Database (ta_applications) & updates applications.json.
     ↓ 4. Sends notification email with resume attachment to info@technoamaze.in.
/application-success.html?ref=TA-APP-...&job=...&name=... 
     ↓ Displays Reference ID, role, timestamp, next steps, and return buttons.
```

---

## 5. Complete Architecture & Data Flow Diagram

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                             PUBLIC FRONTEND                                 │
│                                                                             │
│  careers.html          job-details.html          apply.html                 │
│  (Browse & Filter)     (Read Specifications)    (Submit Resume)            │
└──────────────┬───────────────────────────────────────┬──────────────────────┘
               │                                       │
               │ Fetch Jobs (GET)                      │ Submit Form (POST)
               ▼                                       ▼
┌─────────────────────────────────┐   ┌───────────────────────────────────────┐
│     api/manage-jobs.php         │   │            api/apply.php              │
│     (List, Create, Update)      │   │   (Validate, Upload, Persist, Email)  │
└────────────────┬────────────────┘   └───────────────────┬───────────────────┘
                 │                                        │
                 └───────────────────┬────────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           BACKEND DATABASE ENGINE                           │
│                              (api/db.php)                                   │
│                                                                             │
│        ┌────────────────────────────┬────────────────────────────┐          │
│        ▼                            ▼                            ▼          │
│   [ MySQL Database ]          [ SQLite DB ]             [ JSON Sync ]       │
│   • ta_jobs table             • database.sqlite         • jobs.json         │
│   • ta_applications table     • Auto-fallback           • applications.json │
│                                                                             │
│        └────────────────────────────┬────────────────────────────┘          │
│                                     ▼                                       │
│                       [ data/backups/ Directory ]                           │
│                       • Historical timestamp snapshots                      │
│                       • 1-Click .SQL Export Dump                            │
└─────────────────────────────────────┬───────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        ADMIN RECRUITMENT PORTAL                             │
│                                                                             │
│  admin/login.html                  admin/dashboard.html                     │
│  (Session Auth: api/auth.php)      (Job CRUD, Candidate Screening, Backups) │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. Technology Stack

* **Frontend:**
  * **HTML5:** Semantic, SEO-optimized markup.
  * **CSS3:** Custom properties/variables (`--ta-primary: #C8006E`), responsive grid/flexbox, dark/light theme support.
  * **JavaScript (ES6):** Vanilla JS without bulky external build tools (React/Angular/Vue not required). Lightweight, high-performance, mobile-touch responsive.
  * **Icons & Fonts:** FontAwesome 6, Google Fonts (`Poppins` headings, `Inter` body text).
* **Backend:**
  * **PHP 7.4 / 8.x:** Native session handling, file upload processing, multipart MIME email dispatch.
  * **Database Layer (`PDO`):** Prepared statements preventing SQL injection attacks.
* **Storage & Relational Databases:**
  * **MySQL / MariaDB:** Primary production database engine.
  * **SQLite:** Self-contained file database fallback (`data/database.sqlite`).
  * **JSON Storage:** Atomic file locking (`LOCK_EX`) on `data/jobs.json` and `data/applications.json`.
* **Security:**
  * Apache `.htaccess` rule blocking PHP/CGI/Perl script execution in `uploads/resumes/`.
  * Upload validation: 5MB size limit, extension whitelist (`.pdf`, `.doc`, `.docx`), and MIME type verification.
  * Admin session authentication with password hashing (`password_hash` & `password_verify`).

---

## 7. Database Architecture & Backup Strategy

### A. Dual-Sync Storage Engine
Every create, update, or candidate submission automatically writes to:
1. **The Active Database** (MySQL or SQLite via `api/db.php`).
2. **The JSON Backup File** (`data/jobs.json` or `data/applications.json`).

**Why this is superior:**
* If your MySQL database server ever disconnects or goes down for maintenance, the website automatically falls back to the JSON files and keeps running without error.
* If a JSON file is accidentally deleted, the database regenerates it immediately.
* If you migrate servers, you have both a SQL dump and JSON files ready.

---

### B. Database Tables Schema (MySQL & SQLite)

The database schema is defined in [`SDLC/data/schema.sql`](file:///c:/Users/Admin/Downloads/SDLC%20%282%29/SDLC/data/schema.sql):

#### Table: `ta_jobs`
| Column | Type | Description |
|---|---|---|
| `id` | VARCHAR(100) PK | Unique URL slug ID (e.g. `wordpress-developer`) |
| `title` | VARCHAR(255) | Position title |
| `department` | VARCHAR(100) | Department (Engineering, Design, AI, etc.) |
| `location` | VARCHAR(150) | Location (Remote / Pune) |
| `employment_type` | VARCHAR(50) | Full Time, Part Time, Contract |
| `experience` | VARCHAR(50) | Experience requirement |
| `salary` | VARCHAR(100) | Compensation range |
| `description` | TEXT | Job overview paragraph |
| `responsibilities` | TEXT (JSON) | Array of responsibilities |
| `requirements` | TEXT (JSON) | Array of qualifications |
| `preferred` | TEXT (JSON) | Array of preferred skills |
| `benefits` | TEXT (JSON) | Array of perks & benefits |
| `deadline` | VARCHAR(50) | Application cutoff date |
| `status` | VARCHAR(20) | `open` or `closed` |
| `posted_date` | VARCHAR(50) | Date posted |
| `created_at` | TIMESTAMP | Record creation timestamp |

#### Table: `ta_applications`
| Column | Type | Description |
|---|---|---|
| `id` | INT AUTO_INCREMENT PK | Primary auto-incrementing key |
| `ref_id` | VARCHAR(50) UNIQUE | Reference ID (e.g. `TA-APP-20261007-ABC1`) |
| `job_id` | VARCHAR(100) | Associated job ID slug |
| `job_title` | VARCHAR(255) | Position name |
| `candidate_name` | VARCHAR(150) | Full name |
| `email` | VARCHAR(150) | Email address |
| `phone` | VARCHAR(50) | Phone number |
| `location` | VARCHAR(100) | Candidate city/location |
| `experience` | VARCHAR(50) | Total experience |
| `linkedin` | VARCHAR(255) | LinkedIn URL |
| `portfolio` | VARCHAR(255) | Portfolio / GitHub URL |
| `cover_letter` | TEXT | Candidate message / cover letter |
| `resume_file` | VARCHAR(255) | Stored unique filename in `uploads/resumes/` |
| `resume_original` | VARCHAR(255) | Original filename uploaded |
| `resume_url` | VARCHAR(500) | Public download link |
| `status` | VARCHAR(50) | `New`, `Reviewing`, `Shortlisted`, `Interview`, `Selected`, `Rejected` |
| `submitted_at` | VARCHAR(100) | Submission timestamp |
| `created_at` | TIMESTAMP | Record creation timestamp |

---

### C. Backup Levels & Locations

1. **Level 1 (Live Database):** MySQL or SQLite stores live indexed records.
2. **Level 2 (JSON Mirror):** `data/jobs.json` and `data/applications.json` updated on every write.
3. **Level 3 (Automated Snapshot Directory):** Every change creates a dated file in `data/backups/` (e.g. `jobs_backup_20261007_120000.json`).
4. **Level 4 (On-Demand .SQL Dump):** Admin Dashboard topbar button `Backup (SQL)` streams a complete MySQL dump file directly to the user's computer.

---

## 8. Automated Email Notification System

### A. Recipient & Email Specifications
* **Target Address:** `info@technoamaze.in`
* **Sender:** `Techno Amaze Careers <no-reply@technoamaze.in>`
* **Reply-To:** The candidate's email address (allows clicking "Reply" in Outlook/Gmail to respond directly to the applicant).
* **Exact Subject Line:** `New Job Application – [Job Title] – [Candidate Name]`  
  *(Example: `New Job Application – WordPress Developer – Rahul Sharma`)*

---

### B. Format & Sample Body
The email is delivered as a **multipart MIME email** containing both rich HTML formatting, a clean plain-text fallback, and the candidate's resume attached directly:

```text
New Career Application

Position Applied For: WordPress Developer
Candidate Name: Rahul Sharma
Email: rahul@example.com
Phone: +91 98765 43210
Location: Pune, Maharashtra
Experience: 2 Years
LinkedIn: https://linkedin.com/in/rahul
Portfolio: https://github.com/rahul

Cover Letter:
I have 2 years of hands-on experience developing custom WordPress themes, WooCommerce stores, and REST API integrations...

Resume:
http://technoamaze.in/uploads/resumes/resume_wordpress_20261007_9a8b.pdf

Application Date:
2026-10-07 14:30:15 IST
Reference ID: TA-APP-20261007-4C9A
```

---

### C. Security & Error Handling
* Email dispatch occurs **after** the resume is securely validated and uploaded.
* Email credentials and API keys are **never** exposed in frontend JavaScript.
* **Error Safety:** If the email fails to dispatch on a live server, the backend catches the error and informs the candidate appropriately rather than showing a false success message. The candidate's record is preserved in the database.

---

## 9. Server Setup & Deployment Instructions

### A. Live Hosting (cPanel / Hostinger / Apache / Nginx)
1. Upload the entire `SDLC` contents into your web root (typically `public_html/` or a subfolder like `public_html/careers/`).
2. Verify PHP is version **7.4, 8.0, 8.1, 8.2, or 8.3**.

---

### B. MySQL Database Connection (30 Seconds Setup)
1. Open cPanel ➔ **MySQL Databases**.
2. Create a new database (e.g. `technoamaze_careers`).
3. Create a MySQL user and grant **All Privileges** to that database.
4. Open [`SDLC/api/config.php`](file:///c:/Users/Admin/Downloads/SDLC%20%282%29/SDLC/api/config.php) and update lines 40-47:
   ```php
   define('DB_ENABLED', true);
   define('DB_DRIVER',  'mysql');
   define('DB_HOST',    'localhost');
   define('DB_NAME',    'your_cpanel_database_name');
   define('DB_USER',    'your_cpanel_database_user');
   define('DB_PASS',    'your_cpanel_database_password');
   ```
5. **No manual table creation needed:** On the very first page load, `api/db.php` automatically creates the tables `ta_jobs` and `ta_applications`, and automatically imports all existing jobs into MySQL!

---

### C. Folder Permissions
Ensure the following directories have write permissions on your server (`chmod 755` or `775`):
* `SDLC/uploads/resumes/`
* `SDLC/data/`
* `SDLC/data/backups/`

---

### D. Local Testing (PHP / XAMPP / Browser Preview)
* **Using PHP CLI:**
  ```powershell
  cd "path\to\SDLC"
  php -S localhost:8000
  ```
  Open `http://localhost:8000/careers.html` and `http://localhost:8000/admin/login.html`.
* **Using XAMPP / WAMP:**
  Place the folder in `C:/xampp/htdocs/sdlc` and open `http://localhost/sdlc/careers.html`.
* **Direct Browser Preview (`file:///`):**
  If double-clicked without a running web server, built-in JavaScript simulation fallbacks allow full visual testing of all pages, forms, and modals.

---

## 10. Folder & File Directory Map

```text
SDLC/
│
├── careers.html                      # Careers Landing Page (Hero, Value Pillars, Openings, Search)
├── job-details.html                  # Dynamic Job Overview (Responsibilities, Skills, Benefits)
├── apply.html                        # Application Form (Role detection, Drag & drop resume upload)
├── application-success.html          # Confirmation Page (Reference ID, Return buttons)
├── index.html, about.html, etc.      # Core website pages (Navigation and footers updated with Careers)
│
├── admin/                            # RECRUITMENT ADMIN PORTAL
│   ├── index.html                    # Session router (redirects to login or dashboard)
│   ├── login.html                    # Admin Sign-In page (Credential verification)
│   ├── dashboard.html                # Recruiter Dashboard (KPIs, Job CRUD, Candidate Screening)
│   ├── css/
│   │   └── admin.css                 # Admin UI styling (SaaS cards, modals, tables, dark mode)
│   └── js/
│       └── admin.js                  # Admin interactive logic, AJAX calls, modal workflows
│
├── api/                              # BACKEND PHP ENGINE
│   ├── config.php                    # Admin credentials, paths, and MySQL settings
│   ├── db.php                        # PDO Database Engine (MySQL + SQLite + Dual-Sync + SQL Dump)
│   ├── auth.php                      # Admin Login / Logout / Session Check endpoint
│   ├── manage-jobs.php               # Job Create, Read, Update, Toggle Status, Delete endpoint
│   ├── manage-applications.php       # Candidate Screening, Stage Updates, SQL Backup export endpoint
│   └── apply.php                     # Candidate Application submission & Email dispatch endpoint
│
├── data/                             # DATA STORAGE & BACKUPS
│   ├── jobs.json                     # Live JSON backup of job postings
│   ├── applications.json             # Live JSON backup of candidate applications
│   ├── schema.sql                    # Standalone MySQL schema definition for phpMyAdmin
│   ├── database.sqlite               # Self-contained SQLite database file (fallback)
│   └── backups/                      # Automatic timestamped backup snapshots folder
│
├── uploads/
│   └── resumes/                      # RESUME STORAGE
│       └── .htaccess                 # Security rule blocking script execution in upload dir
│
├── css/
│   ├── style.css                     # Existing website stylesheet
│   └── careers.css                   # Careers styling (Cards, filters, upload zone, badges)
│
└── js/
    ├── main.js                       # Main site script (Updated with Careers in site search)
    └── careers.js                    # Careers frontend controller and API service
```

---

## 11. Troubleshooting & FAQs

#### Q1: A non-technical person forgets the admin password. How do I reset it?
**Answer:** Open `SDLC/api/config.php` in any text editor. Look at Line 23:
```php
define('ADMIN_PASS', 'Admin@Techno2026');
```
Change `'Admin@Techno2026'` to any new password you prefer, save the file, and log in with the new password immediately.

#### Q2: Where do resumes get saved if someone uploads them?
**Answer:** Resumes are saved in `SDLC/uploads/resumes/`. They can be downloaded directly from the Admin Dashboard in the **Applications** tab by clicking the green **`Resume`** button.

#### Q3: What happens if our hosting does not have MySQL set up yet?
**Answer:** The system automatically uses SQLite (`data/database.sqlite`) and JSON flat storage. Nothing crashes, jobs can still be posted, applications will still be received, and resumes will still upload. Once MySQL is configured in `api/config.php`, it transitions seamlessly.

#### Q4: How do I change the notification email from `info@technoamaze.in` to another address?
**Answer:** Open `SDLC/api/apply.php` and search for Line 165:
```php
$to = 'info@technoamaze.in';
```
Change it to your desired recipient address (or add multiple comma-separated addresses).

#### Q5: Can candidates upload large files or dangerous scripts?
**Answer:** No. Files larger than 5MB are rejected both by client-side JavaScript and by backend PHP. Only `.pdf`, `.doc`, and `.docx` extensions are permitted. The `.htaccess` file inside `uploads/resumes/` completely disables PHP, Python, and CGI script execution, rendering uploaded files inert and safe.

---

*Documentation maintained by Techno Amaze Engineering Team.*
