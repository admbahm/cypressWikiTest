# MyCypressProject

This project uses Cypress for end-to-end testing of the Wikipedia main page.

## Prerequisites

- Node.js
- npm

## Setup

1. Clone the repository:

    ```sh
    git clone git@github.com:admbahm/cypressWikiTest.git
    cd MyCypressProject
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

## Running Tests

- To open the Cypress Test Runner:

    ```sh
    npx cypress open
    ```

- To run tests in headless mode:

    ```sh
    npx cypress run
    ```

## Project Structure

- `cypress/fixtures`: Test data files
- `cypress/integration`: Test cases
- `cypress/plugins`: Plugin configuration
- `cypress/support`: Custom commands and page objects
