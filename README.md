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


