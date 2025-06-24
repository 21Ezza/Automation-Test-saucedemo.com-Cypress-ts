# Automation Test: saucedemo.com with Cypress & TypeScript

This project showcases robust end-to-end testing of `saucedemo.com` functionalities using Cypress with TypeScript, integrated with GitHub Actions for automated daily runs and comprehensive, per-test-suite artifact reporting.

## 🌟 Features

* **Automated End-to-End Tests:** Comprehensive test suites covering critical user flows on `saucedemo.com`, including:
    * Authentication (Login/Logout)
    * Sorting Functionality
    * Shopping Cart Management
    * Checkout Process
* **Daily Scheduled Runs:** Cypress tests automatically execute daily at 00:00 UTC via GitHub Actions.
* **Manual Workflow Trigger:** Option to manually trigger the test workflow directly from the GitHub Actions UI.
* **Detailed Reporting per Test Suite:** Generates Mochawesome JSON reports (for rich visualization) and JUnit XML reports (for CI/CD tool integration) for **each individual test folder**.
* **Screenshot & Video Capture:** Automatically captures screenshots on test failures and records videos of test runs for easy debugging, all organized by test suite.
* **Artifact Uploads (Per Test Suite):** All test reports, screenshots, and videos for each functional area are uploaded as separate build artifacts for easy access and review on GitHub. This provides a focused report for each tested feature.

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

* [Node.js](https://nodejs.org/en/download/) (version 18 or higher recommended)
* [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
* [Git](https://git-scm.com/downloads)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/21Ezza/Automation-Test-saucedemo.com-Cypress-ts.git
    cd Automation-Test-saucedemo.com-Cypress-ts
    ```
2.  **Install project dependencies:**
    ```bash
    npm install
    ```
    This will install Cypress and all other required packages.

## 🏃 Usage

### Running Cypress Tests Locally

To run the Cypress tests on your local machine, use the following commands:

* **Run all tests in headless mode (recommended for CI):**
    ```bash
    npx cypress run
    ```
* **Open the Cypress Test Runner UI:**
    ```bash
    npx cypress open
    ```
  This will open the Cypress UI where you can select and run individual test files (`.cy.ts` files).

### Running Specific Test Suites

To run a specific test suite locally:

```bash
npx cypress run --spec "cypress/e2e/authentication/authentication.cy.ts"
# Replace 'authentication' with 'sortingFunctionality', 'shoppingCartFunctionality', or 'checkoutProcess'
```

## ⚙️ CI/CD with GitHub Actions

This project uses GitHub Actions for continuous integration and continuous delivery (CI/CD) to automate the execution of Cypress tests.

The workflow is defined in `.github/workflows/cypress-tests.yml`.

### Workflow Triggers

* **Scheduled Daily Run:** The workflow runs automatically every day at 00:00 UTC.
* **Manual Trigger:** You can manually dispatch the workflow from the "Actions" tab in your GitHub repository. Select the "Run Cypress Tests Daily" workflow, and click "Run workflow".

### How it Works

The CI/CD pipeline consists of a single main job:

1.  **`prepare-and-run-tests`**:
    * Checks out the repository.
    * Sets up Node.js (with npm caching for faster installs).
    * Installs project dependencies.
    * Runs each Cypress test suite (`authentication`, `sortingFunctionality`, `shoppingCartFunctionality`, `checkoutProcess`) in parallel using a `strategy.matrix`.
    * Generates individual Mochawesome JSON and JUnit reports, captures screenshots on failure, and records videos for each test run.
    * **Crucially, it uploads these individual reports, screenshots, and videos as separate, distinct artifacts for each test suite** (e.g., `authentication-test-artifacts`, `sorting-functionality-test-artifacts`). This ensures you get a dedicated report bundle per functional area.

### Accessing Test Reports & Artifacts

After a workflow run completes:

1.  Navigate to the **"Actions"** tab in your GitHub repository.
2.  Click on the specific workflow run you wish to inspect.
3.  Scroll down to the **"Artifacts"** section.

You will find the following downloadable artifacts, each containing the reports, screenshots, and videos for its respective test suite:

* `authentication-test-artifacts.zip`
* `sorting-functionality-test-artifacts.zip`
* `shopping-cart-functionality-test-artifacts.zip`
* `checkout-process-test-artifacts.zip`

Each `.zip` file contains the respective test reports (JSON, XML), and videos. To view the HTML report, you would typically need to extract the JSON file from the artifact and use `mochawesome-report-generator` locally.

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

Eza Nanda - eza.nda21@gmail.com

Project Link: [https://github.com/21Ezza/Automation-Test-saucedemo.com-Cypress-ts](https://github.com/21Ezza/Automation-Test-saucedemo.com-Cypress-ts)
