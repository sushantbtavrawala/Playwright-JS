# Run Specific tests page with specific Browser
```npx playwright test HomePage.spec.js --project=chromium --headed 

# 🧪 Playwright Test Automation Framework

This project uses **[Playwright](https://playwright.dev/)** for end-to-end UI testing across Chromium, Firefox, and WebKit browsers.

## 📁 Project Structure

```
.
├── tests/                 # Test specs (e.g. HomePage.spec.js, LoginPage.spec.js)
├── pages/                 # Page Object Models
├── playwright.config.js   # Playwright configuration
├── package.json           # Project dependencies & scripts
└── README.md              # This file
```

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Install Browsers

```bash
npx playwright install
```

## ▶️ Running Tests

### Run All Tests (Default browser)

```bash
npx playwright test
```

### Run a Specific Test File (e.g., HomePage)

```bash
npx playwright test tests/HomePage.spec.js
```

### Run in a Specific Browser (e.g., Chromium)

```bash
npx playwright test tests/HomePage.spec.js --project=chromium
```

### Run in Headed Mode (watch the test run)

```bash
npx playwright test tests/HomePage.spec.js --project=chromium --headed
```

## 🎯 Filter Tests

### Run a Test by Title

```bash
npx playwright test -g "should display the home page"
```

## 📊 Generate HTML Report

After running tests:

```bash
npx playwright show-report
```

## 🔧 Configuration

Modify your `playwright.config.js` file to set timeouts, browsers, base URL, and other options:

```js
use: {
  baseURL: 'https://example.com',
  headless: true,
  screenshot: 'only-on-failure',
}
```