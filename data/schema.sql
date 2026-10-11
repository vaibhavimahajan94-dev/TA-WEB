-- =====================================================================
-- TECHNO AMAZE - RECRUITMENT & CAREERS DATABASE SCHEMA
-- Compatible with MySQL 5.7+, MySQL 8.0+, MariaDB 10+, and SQLite
-- =====================================================================

CREATE DATABASE IF NOT EXISTS `technoamaze_careers` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `technoamaze_careers`;

-- ---------------------------------------------------------------------
-- TABLE 1: ta_jobs (Open & Closed Career Positions)
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ta_jobs` (
  `id` VARCHAR(100) NOT NULL PRIMARY KEY COMMENT 'Unique URL slug ID e.g. wordpress-developer',
  `title` VARCHAR(255) NOT NULL COMMENT 'Display title of the position',
  `department` VARCHAR(100) NOT NULL DEFAULT 'Engineering',
  `location` VARCHAR(150) NOT NULL DEFAULT 'Remote / Pune',
  `employment_type` VARCHAR(50) NOT NULL DEFAULT 'Full Time',
  `experience` VARCHAR(50) NOT NULL DEFAULT '1-2 Years',
  `salary` VARCHAR(100) DEFAULT NULL COMMENT 'Compensation or CTC range',
  `description` TEXT NOT NULL COMMENT 'Summary overview of the role',
  `responsibilities` TEXT DEFAULT NULL COMMENT 'JSON array of responsibilities',
  `requirements` TEXT DEFAULT NULL COMMENT 'JSON array of required qualifications',
  `preferred` TEXT DEFAULT NULL COMMENT 'JSON array of preferred skills',
  `benefits` TEXT DEFAULT NULL COMMENT 'JSON array of perks & benefits',
  `deadline` VARCHAR(50) DEFAULT NULL COMMENT 'Application cutoff date YYYY-MM-DD',
  `status` VARCHAR(20) NOT NULL DEFAULT 'open' COMMENT 'open | closed',
  `posted_date` VARCHAR(50) DEFAULT NULL COMMENT 'Date posted YYYY-MM-DD',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_status` (`status`),
  INDEX `idx_department` (`department`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- TABLE 2: ta_applications (Candidate Submissions & Resumes)
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ta_applications` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `ref_id` VARCHAR(50) NOT NULL UNIQUE COMMENT 'Application Reference ID e.g. TA-APP-20261007-ABC',
  `job_id` VARCHAR(100) NOT NULL COMMENT 'Associated job ID slug',
  `job_title` VARCHAR(255) NOT NULL,
  `candidate_name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `phone` VARCHAR(50) NOT NULL,
  `location` VARCHAR(100) DEFAULT NULL,
  `experience` VARCHAR(50) DEFAULT NULL,
  `linkedin` VARCHAR(255) DEFAULT NULL,
  `portfolio` VARCHAR(255) DEFAULT NULL,
  `cover_letter` TEXT DEFAULT NULL,
  `resume_file` VARCHAR(255) NOT NULL COMMENT 'Stored unique filename in uploads/resumes/',
  `resume_original` VARCHAR(255) DEFAULT NULL COMMENT 'Original file name uploaded by candidate',
  `resume_url` VARCHAR(500) DEFAULT NULL COMMENT 'Public download URL',
  `status` VARCHAR(50) NOT NULL DEFAULT 'New' COMMENT 'New | Reviewing | Shortlisted | Interview | Selected | Rejected',
  `submitted_at` VARCHAR(100) DEFAULT NULL COMMENT 'Submission date timestamp string',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_job_id` (`job_id`),
  INDEX `idx_app_status` (`status`),
  INDEX `idx_candidate_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
