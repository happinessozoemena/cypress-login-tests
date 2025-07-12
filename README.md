## Why I Chose Cypress Instead of Puppeteer

Purpose-Built for Testing

Cypress is designed specifically for end-to-end testing, with built-in support for assertions, test runner, and time-travel debugging.

Puppeteer is a general-purpose browser automation library (great for web scraping or simple scripting), not testing-specific.

Better Developer Experience

Cypress provides an interactive Test Runner that shows each test step and its result in real time with a snapshot of the app state.

Easier debugging thanks to time-travel and built-in stack traces.

Built-in Assertions & Wait Handling

Cypress automatically waits for elements to appear or load—no need for manual wait() or retry logic.

Puppeteer requires more manual handling for waits, increasing test flakiness.

Faster Setup for Web UI Testing

Cypress comes preloaded with testing tools (Mocha, Chai, etc.), while Puppeteer would require extra setup and integration.

# 🔐 Cypress Automated Test Suite - Login Page

This repository contains an automated test suite built using **Cypress** and the **Page Object Model (POM)** for testing the login functionality of [The Internet Herokuapp](https://the-internet.herokuapp.com/login).

---

## ✅ Test Scenarios Covered

| Test Case ID | Description                                         | Expected Outcome                              |
|--------------|-----------------------------------------------------|-----------------------------------------------|
| TC001        | Valid login with correct credentials                | Redirects to Secure Area with success message |
| TC002        | Invalid login with incorrect username               | Error: "Your username is invalid!"            |
| TC003        | Invalid login with incorrect password               | Error: "Your password is invalid!"            |
| TC004        | Invalid login with both incorrect username/password | Error: "Your username is invalid!"            |

---

## 🛠 Tech Stack

- **Framework:** Cypress
- **Language:** JavaScript
- **Design Pattern:** Page Object Model (POM)
- **Test Runner:** Cypress GUI & CLI (`npx cypress open/run`)

---


---

## ⚙️ How to Install & Run the Tests

```bash
# 1. Clone the repo
git clone <your-repo-url>
cd "Test Automation Login page"

# 2. Install dependencies
npm install

# 3. Open Cypress Test Runner (GUI)
npx cypress open

# OR run tests headlessly in CLI
npx cypress run


