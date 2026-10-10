# TechnoAmaze Corporate IT — WordPress Environment & Setup Guide

A complete conversion of the **TechnoAmaze Corporate IT website & Careers system** into a **Full WordPress Environment & Custom Theme/Plugin**, structured following the modern WordPress architecture (`@wordpress/env`, Docker Desktop, custom Block/Classic Theme, custom Core Plugin, REST API, and automated WP-CLI provisioning).

---

## 1. Quick Start: How to Run Locally

### Option A: 1-Click Launcher (Windows Batch File)
1. Open the project folder: `c:\Users\Admin\Downloads\SDLC (2)\SDLC\`
2. Double-click **`start-wp.bat`**
3. It will automatically:
   - Verify Docker Desktop is active (starts it if needed).
   - Start the WordPress container on port `8888`.
   - Activate the custom theme: **TechnoAmaze Corporate IT** (`technoamaze-theme`).
   - Activate the custom plugin: **TechnoAmaze Core Engine** (`technoamaze-core`).
   - Run the automated page creator (`create-pages.php`) to generate all 50 site pages.
   - Open your browser at `http://localhost:8888` and `http://localhost:8888/wp-admin`.

### Option B: Terminal Command (npm / wp-env)
Open PowerShell or Command Prompt in the project folder and run:
```powershell
npm.cmd start
```
After startup completes, activate theme & plugin:
```powershell
npm.cmd exec -- wp-env run cli wp theme activate technoamaze-theme
npm.cmd exec -- wp-env run cli wp plugin activate technoamaze-core
npm.cmd exec -- wp-env run cli wp eval-file wp-content/themes/technoamaze-theme/scripts/create-pages.php
```

---

## 2. WordPress Access Credentials

| Item | Details |
| :--- | :--- |
| **Local Website URL** | [http://localhost:8888](http://localhost:8888) |
| **WP Admin URL** | [http://localhost:8888/wp-admin](http://localhost:8888/wp-admin) |
| **Admin Username** | `admin` |
| **Admin Password** | `password` |
| **Database Name** | `wordpress` |
| **Database Host** | `mysql` (Root password: `password`) |
| **PHP Version** | `8.3` |

---

## 3. Project Structure & Created Components

```text
SDLC/
├── .wp-env.json                        # WordPress local environment configuration
├── package.json                        # npm scripts ("start", "stop", "cli")
├── start-wp.bat                        # 1-Click Windows batch launcher
├── stop-wp.bat                         # 1-Click Windows batch shutdown script
│
├── themes/
│   └── technoamaze-theme/              # Custom WordPress Theme
│       ├── style.css                   # Theme metadata & CSS tokens
│       ├── functions.php               # Enqueue CSS/JS, Fonts, Menus, REST config
│       ├── theme.json                  # Theme styling & block layout tokens
│       ├── screenshot.png              # Theme preview image in WP-Admin
│       ├── header.php                  # Topbar, Logo, Dropdown Menus, Search modal
│       ├── footer.php                  # Footer grid, Social links, Modal, Back-to-top
│       ├── index.php                   # Fallback index template
│       ├── front-page.php              # Full Homepage template
│       ├── page.php                    # Generic WordPress page template
│       ├── single.php                  # Single blog post template
│       ├── single-job_posting.php      # Dynamic Single Job Opening template
│       ├── parts/                      # FSE Block Template Parts (header.html, footer.html)
│       ├── templates/                  # 50 FSE HTML Block Templates
│       │   ├── front-page.html
│       │   ├── page-about.html
│       │   ├── page-services.html
│       │   ├── page-careers.html
│       │   ├── page-job-details.html
│       │   ├── page-apply.html
│       │   ├── page-application-success.html
│       │   ├── page-contact.html
│       │   └── (all 25 services & 10 industries subpage templates)
│       ├── assets/                     # Complete theme stylesheets, scripts, images
│       │   ├── css/                    # style.css, careers.css
│       │   ├── js/                     # main.js, careers.js (REST-enabled)
│       │   └── images/                 # All company graphics and branding
│       └── scripts/
│           ├── pages.json              # Hierarchy manifest of all site pages
│           └── create-pages.php        # Auto-provisioning script for WP-CLI
│
└── plugins/
    └── technoamaze-core/               # Custom WordPress Core Plugin
        └── technoamaze-core.php        # Post types, admin meta boxes, REST API & emails
```

---

## 4. How the WordPress Backend Works

### 1. Job Management (For Recruiter / HR)
- In WP-Admin, click **Careers & Jobs > All Job Openings**.
- Click **Add New Job**:
  - Fill Title (e.g. `WordPress Developer`), Job Description.
  - Fill Specifications: Department, Location (`Remote / Pune`), Employment Type, Experience (`1–2 Years`), Salary Package, Application Deadline, and Job Status (`Active` / `Closed`).
  - Add bullet points for Key Responsibilities, Requirements, and Perks.
  - Click **Publish**. The job immediately appears on `/careers/` and `/job-details/?job=...`.

### 2. Candidate Application Screening & Resumes
- In WP-Admin, click **Careers & Jobs > Applications**.
- View all received candidate applications with:
  - Reference ID (e.g. `TA-APP-20261007-8492`)
  - Candidate Name, Email, Phone
  - Position Applied For
  - Status Badge (`New`, `Reviewing`, `Shortlisted`, `Interview`, `Selected`, `Rejected`)
  - **Download / View Resume** button (opens the uploaded PDF/DOCX file directly).
- Click on any candidate to inspect their full cover letter, LinkedIn profile, and update their recruitment status.

### 3. Automated Email Alerts
- Every candidate form submission triggers an email to `info@technoamaze.in` with the candidate's contact details, experience, cover letter, and resume link.

---

## 5. How to Stop the Environment

Whenever you finish working, double-click **`stop-wp.bat`** or run:
```powershell
npm.cmd run stop
```
This safely stops the Docker containers while preserving the WordPress database and all your pages/jobs.
