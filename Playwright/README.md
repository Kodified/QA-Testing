# Playwright Sample Project

This folder contains a minimal Playwright setup with simple HTML pages so you can answer the questions in **../CandidateEvaluation.md**. Each test file in `tests/` includes TODO comments where you can implement your solutions.

## Setup

1. Install dependencies (requires internet access):

   ```zsh or bash
   npm install
   ```

2. Install Playwright browsers:

   ```zsh or bash
   npx playwright install
   ```

3. Run the tests:
   ```zsh or bash
   npm test
   ```

## Included pages

- `../public/login.html` – simple login form used for the end-to-end login test.
- `../public/dropdown.html` – page with a dropdown menu that appears on hover.
- `../public/api.html` – page that fetches data from `https://dummyjson.com/users/1` and displays it.

Feel free to modify the tests or pages as needed when completing the evaluation questions.
