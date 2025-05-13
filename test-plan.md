# QA Test Plan – Full-Stack FastAPI Template

## 1. Project Summary

**Project**: [full-stack-fastapi-template](https://github.com/fastapi/full-stack-fastapi-template)  
**Description**: A production-ready full-stack application with FastAPI (Python) for the backend, React for the frontend, PostgreSQL as the database, and Docker Compose. It includes user registration, login, protected routes, and basic CRUD operations.

**Reason for Selection**:
- Realistic and modern full-stack architecture
- Includes authentication and user interaction features
- Reasonable local setup via Docker Compose
- Provides enough complexity to demonstrate QA strategy and automation

---

## 2. Test Scope and Objectives

### Scope
This test plan focuses on verifying the core functionality of:
- User registration and authentication
- Protected route access
- CRUD operations
- Frontend/backend validation

### Objectives
- Validate critical user flows work correctly
- Ensure form validations are enforced
- Confirm authentication and access control logic
- Identify defects through manual and automated testing

---

## 3. Test Approach

| Type              | Tool / Method                               |
|------------------ |-------------------------------------------- |
| Manual Testing    |  For exploratory testing & bug discovery    |
| Automated Testing |  Playwright (TypeScript) for E2E UI testing |
| Environment       |  Local setup via Docker Compose             |

---

## 4. Test Environment

- OS: Windows 11
- Browser: Chrome (latest)
- Containerized stack:
  - FastAPI backend (`http://localhost:8000`)
  - React frontend (`http://localhost:5173`)
  - PostgreSQL DB
- Tools: Docker Desktop (WSL2), VS Code, Playwright

---

## 5. Test Cases for Critical User Flows

| TC ID | Test Case Description                   | Steps                                        | Expected Result                         |
|-------|-----------------------------------------|----------------------------------------------|---------------------------------------- |
| TC01  | User registration (valid input)         | Go to `/signup`, enter valid info, submit    | User registered, redirected             |
| TC02  | Registration – invalid email format     | Enter incorrect email, submit form           | Error shown, no account created         |
| TC03  | Login with valid credentials            | Enter correct email/password, submit         | User logged in, redirected to dashboard |
| TC04  | Login with incorrect password           | Enter wrong password, submit                 | Error message shown                     |
| TC05  | Access protected route (unauthenticated)| Open dashboard URL directly while logged out | Redirected to login page                |
| TC06  | Logout functionality                    | Login, click logout                          | User logged out, redirected             |
| TC07  | Add new item (valid data)               | Login, go to item form, submit valid data    | Item appears in list                    |
| TC08  | Edit item details                       | Click edit → change → save                   | Changes reflected in list               |
| TC09  | Delete item                             | Click delete icon → confirm                  | Item removed from list                  |
| TC10  | Submit form with empty fields           | Leave form blank → submit                    | Validation error shown                  | 

---

## 6. Risk Assessment & Prioritization

| Feature              | Risk Level | Priority |
|----------------------|------------|----------|
| Login/Auth           | High       | High     |
| Registration         | Medium     | High     |
| CRUD Operations      | Medium     | High     |
| Form Validation      | Medium     | Medium   |
| Protected Routes     | High       | High     |
| Data Persistence     | Low        | Medium   |

---

## 7. Defect Reporting Procedure

All bugs identified during testing will be documented in a markdown file (`bug-reports.md`) located in the project repository. Each bug report will include:

- **Title**: Concise bug name
- **Environment**: Browser, OS, app version
- **Steps to Reproduce**: Clear, numbered steps to replicate the issue
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happened
- **Severity**: Critical / Major / Minor
- **Priority**: High / Medium / Low
- **Suggested Fix or Area**: Recommendations or suspected root cause

---

## End of Test Plan
