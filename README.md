# Playwright Project Setup and Guide

This project provides a framework to test web applications using Playwright. It includes setup instructions, file structure guidelines, and examples to run both frontend and backend tests efficiently.

playwright direct details: https://playwright.dev/docs/intro
--- 

# Setup:
* prerequisites such as Node.js 18+ are installed
1. run cmd: ```npm init playwright@latest```
1.1 if you want github to handle the CI/testing part make sure to set Github actions on ```true``` while setting it up
2. add tsc to project:
    ```npm install typescript```, then ```npx tsc --init```
3. set up config for desired use
4. add page objects, define locators per page (keep in mind to set them proper and extract login if needed separately)
5. set up the test:
    - each test will have .spec.ts or .test.ts appended to file name
    - import POM and any additional functionality class to desired test/file
    - define the test within file
    - remember async/await for frontend tests
    - remember to structure body/header for backend tests
    - make use of enough assertions 
6. run test(s)
    - explicit test: npx playwright test -g "frontend Heroku - Logout test"
    - all tests: npx playwrigh test
    - config1 file for custom runs;
        ex cmd: npx playwright test tests/RS_ClientAppPO.spec --config playwright.config1.js --project=safari   
    - tagging tests, to run just web/api tests
         // @Web --> tagged test 
        // can run with npx playwright test --grep @Web

----
# Cucumber:
1. install cmd @ project level:
cmd: npm install @cucumber/cucumber

2. cucumber plugin in VSC:
- File>Settings>Preferences>Extensions: Cucumber Gerkin 
- restart system

3. setup project
- create a 'features' folder (cucumber will look for that)
- add testName.feature file
    - create step definition file (with used tag -> description)
    - link steps to actions
      - skeleton can be defined by cucumber by default when trying to run the feature file for 1st time
        - can run by cmd: npx cucumber-js
          - this will execute node_modules->.bin-> cucumber-js 
          - will show in terminal what/how is missing
- inside the features folder, create 'step_definitions' folder
  - inside it, write 'steps.js' this will be where you partition existing test(s) and write all steps
  - can add code within the coresponding brackets -- marked with write code here 
    - if you have await in your code-block, make the function async
    - eliminate the return line;
- WORLD constructor:
  - use of this. to access classes across when/then blocks;
  - add timeout if a block might take more than 5seconds to loadup

- npx cucumber-js --exit to run (will run in headless mode) 
  - with the exit argument will come out of terminal

- can add cucumber.js file
  - add instructuions to it, on how to behave when running tests;

- create the support folder for HOOKS
  - with before: create the setup part
  - with after: close and cleanup environment, cookies
  - can use BeforeStep/AfterStep to take a screenshot (if step fails);

4. running an explicit cucumber features-test set:
  cmd: npx cucumber-js features/ErrorValidations.feature --exit
    - can use this to create syntax after it WILL fail 1st time

5. use of tags:
   tags: @Regression / @Validation  (with more than one tag, set one under the other)
   cmd: npx cucumber-js --tags "@Regression" --exit

5.1. tagged hooks:
  - tags can be used in hooks, so that they will run ONLY into certain test groups (ex: in hooks use regession tags to run regression setup)
  - can also set OR clauses
  Before({tags: "@foo or @bar"}, function(){ ////});


6. PARAMETRIZATION:
  @feature, instead of Scenario --> Scenario Outline
   <!-- Given a login to Ecommerce2 application with "<username>" and "<password>" -->
   to encapsulate in brackets <> the code will pick up examples/parameters
     Examples:
      | username          | password      |
      | cf@mailinator.com | Password1     |
       
7. Paralel execution:
  - test-scenarios can be run paralelly (but within a .feature-file); they cannot run 2x .feature-files at the same time
  cmd: npx cucumber-js features/Ecommerce.feature --parallel 2 --exit

8. Reports:
  cmd: npx cucumber-js features/Ecummerce.feature --exit --format html: cucumber-report.html

  - reports can be done in json, html, text format based on extension you pass
  - flaky tests can get rerun-retry with parameter:
  cmd: --retry 1  
    - can be done in either cmd or the cucumber.js file
    - can add the cmd within the package.json within the script-line area
      - cmd: npm run cucumberRegression



# Usability:
1. run tests:
- out of the box, can use cmd: ```npx playwright test``` to run all the tests
- or to run any specific test cmd: ```node path-testname.extension```
- run tests in ui mode, cmd: ```npx playwright test --ui```
2. reporting:
- cmd: ```npx playwright show-report```

# File structure:
- config.ts            | used for the backend/api & path creation
- urlbuilder.ts        | constructs url based on provided path passed
- baseCredentaials.ts  | user credentials with valid/invalid data
- validationstrings.ts | strings to use on assertions
- pageObjects.ts       | POM structure
- playwright.config    | used to set config(run on some browser with some config)
- backend/frontend folders will be used for corresponding test types
- playwright-report/test-results offer report and results(duh)


# TODO:
1. update config file with multiple variants 
2. cucumber it 
3. add extra functionality for utils folder