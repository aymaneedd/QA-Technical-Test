# QA Technical Test – Full-Stack FastAPI Template

This repository contains the solution for a QA Technical Assessment. It includes a full test plan, automated tests, and documented bugs based on the [full-stack FastAPI template](https://github.com/fastapi/full-stack-fastapi-template) project.

---

## Selected GitHub Project

**Repository**: [full-stack FastAPI template](https://github.com/fastapi/full-stack-fastapi-template)

**Why this project was selected**:

- Realistic full-stack app using FastAPI (backend) and React (frontend)
- Includes user authentication, protected routes, and data manipulation (CRUD) — ideal for real-world testing scenarios
- Complex enough for meaningful QA analysis, but not overly difficult to set up
- Clean Docker-based setup for consistent local testing

---

## Part 1: Test Planning

The test plan is located in the [`test-plan.md`](./test-plan.md) file.

---

## Part 2: Automated Testing

The automated tests are located in the [`automated-tests/tests`](./automated-tests/tests) folder and use **Playwright with TypeScript**.

---

### How to Set Up and Run the Automated Tests

**1. Install Dependencies**

```bash
cd automated-tests
npm install
npx playwright install
```
- This installs all required dependencies and browsers for Playwright.

**2.  Run All Tests**

- Make sure the full-stack app is running at http://localhost:5173 (via Docker), then run:

```bash
npx playwright test
```

**3.  Run Tests in Headed Mode (for visibility)**

```bash
npx playwright test --headed
```

---

## Part 3: Bug Documentation

The Bug documentation is located in the [`bug_documentation.md`](./bug_documentation.md) file.

---

### Notes

- Tests are written in TypeScript using Playwright.

- For login-based tests, enter : email: admin@example.com / password: changethis .

- Make sure the backend is exposed at http://localhost:8000 and frontend at http://localhost:5173.
