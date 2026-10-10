# TECHNO AMAZE — Official Website & Careers Portal

Comprehensive website codebase for **Techno Amaze IT Solutions** featuring all 25 IT services, industry solutions, proprietary products, and the new **Careers & Recruitment Management System**.

---

## Quick Navigation

* **Public Website:**
  * Home: [`index.html`](index.html)
  * Services (25+ Offerings): [`services.html`](services.html)
  * Industries: [`industries.html`](industries.html)
  * Products: [`products.html`](products.html)
  * Careers & Openings: [`careers.html`](careers.html)
  * Contact Us: [`contact.html`](contact.html)
* **Recruitment Admin Portal (For HR & Managers):**
  * Admin Login: [`admin/login.html`](admin/login.html)
  * Admin Dashboard: [`admin/dashboard.html`](admin/dashboard.html)
  * Default Credentials: `admin@technoamaze.in` / `Admin@Techno2026`
* **Complete System Documentation & Architecture Guide:**
  * Detailed Handover Guide: [`CAREERS_SYSTEM_GUIDE.md`](CAREERS_SYSTEM_GUIDE.md)

---

## Key Backend Features
* **Zero-Tech Admin Portal:** Visual dashboard for posting, editing, closing, and deleting jobs.
* **Dual-Sync Database Engine:** MySQL / MariaDB + SQLite + Real-time JSON mirror backup (`data/jobs.json` & `data/applications.json`).
* **1-Click SQL Backup:** Download entire database as `.sql` directly from the dashboard.
* **Candidate Application Flow:** Automatic role detection, 5MB drag-and-drop resume upload (PDF/DOCX), secure sanitized file storage in `uploads/resumes/`.
* **Automated Email Notifications:** Dispatched to `info@technoamaze.in` with full candidate profile, reference ID, and attached resume.

*For full setup, database configuration, security policies, and technical architecture, see [CAREERS_SYSTEM_GUIDE.md](CAREERS_SYSTEM_GUIDE.md).*
