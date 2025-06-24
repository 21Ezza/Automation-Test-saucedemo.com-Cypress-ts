Automation Test: saucedemo.com with Cypress & TypeScript
This project showcases robust end-to-end testing of saucedemo.com functionalities using Cypress with TypeScript, integrated with GitHub Actions for automated daily runs and comprehensive, per-test-suite artifact reporting.

🌟 Features
Automated End-to-End Tests: Comprehensive test suites covering critical user flows on saucedemo.com, including:

Authentication (Login/Logout)

Sorting Functionality

Shopping Cart Management

Checkout Process

Daily Scheduled Runs: Cypress tests automatically execute daily at 00:00 UTC via GitHub Actions.

Manual Workflow Trigger: Option to manually trigger the test workflow directly from the GitHub Actions UI.

Detailed Reporting per Test Suite: Generates Mochawesome JSON reports (for rich visualization) and JUnit XML reports (for CI/CD tool integration) for each individual test folder.

Screenshot & Video Capture: Automatically captures screenshots on test failures and records videos of test runs for easy debugging, all organized by test suite.

Artifact Uploads (Per Test Suite): All test reports, screenshots, and videos for each functional area are uploaded as separate build artifacts for easy access and review on GitHub. This provides a focused report for each tested feature.

🚀 Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Before you begin, ensure you have the following installed:

Node.js (version 18 or higher recommended)

npm (comes with Node.js)

Git

Installation
Clone the repository:

git clone https://github.com/21Ezza/Automation-Test-saucedemo.com-Cypress-ts.git
cd Automation-Test-saucedemo.com-Cypress-ts


Install project dependencies:

npm install


This will install Cypress and all other required packages.

🏃 Usage
Running Cypress Tests Locally
To run the Cypress tests on your local machine, use the following commands:

Run all tests in headless mode (recommended for CI):

npx cypress run


Open the Cypress Test Runner UI:

npx cypress open


This will open the Cypress UI where you can select and run individual test files (.cy.ts files).

Running Specific Test Suites
To run a specific test suite locally:

npx cypress run --spec "cypress/e2e/authentication/authentication.cy.ts"
# Replace 'authentication' with 'sortingFunctionality', 'shoppingCartFunctionality', or 'checkoutProcess'


⚙️ CI/CD with GitHub Actions
This project uses GitHub Actions for continuous integration and continuous delivery (CI/CD) to automate the execution of Cypress tests.

The workflow is defined in .github/workflows/cypress-tests.yml.

Workflow Triggers
Scheduled Daily Run: The workflow runs automatically every day at 00:00 UTC.

Manual Trigger: You can manually dispatch the workflow from the "Actions" tab in your GitHub repository. Select the "Run Cypress Tests Daily" workflow, and click "Run workflow".

How it Works
The CI/CD pipeline consists of a single main job:

prepare-and-run-tests:

Checks out the repository.

Sets up Node.js (with npm caching for faster installs).

Installs project dependencies.

Runs each Cypress test suite (authentication, sortingFunctionality, shoppingCartFunctionality, checkoutProcess) in parallel using a strategy.matrix.

Generates individual Mochawesome JSON and JUnit reports, captures screenshots on failure, and records videos for each test run.

Crucially, it uploads these individual reports, screenshots, and videos as separate, distinct artifacts for each test suite (e.g., authentication-test-artifacts, sorting-functionality-test-artifacts). This ensures you get a dedicated report bundle per functional area.

Accessing Test Reports & Artifacts
After a workflow run completes:

Navigate to the "Actions" tab in your GitHub repository.

Click on the specific workflow run you wish to inspect.

Scroll down to the "Artifacts" section.

You will find the following downloadable artifacts, each containing the reports, screenshots, and videos for its respective test suite:

authentication-test-artifacts.zip

sorting-functionality-test-artifacts.zip

shopping-cart-functionality-test-artifacts.zip

checkout-process-test-artifacts.zip

Each .zip file contains the respective test reports (JSON, XML), screenshots, and videos. To view the HTML report, you would typically need to extract the JSON file from the artifact and use mochawesome-report-generator locally.

🤝 Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

📧 Contact
Eza Nanda - eza.nda21@gmail.com

Project Link: https://github.com/21Ezza/Automation-Test-saucedemo.com-Cypress-ts