# Joor Automation Test
## API Tests with BDD approach

For this challenge I've chosen the following tools, language and framework
### Technology stack

- Testing Tool: Cypress
- Language: JavaScript
- Framework: Cucumber
- IDE: Visual Studio Code
  
### Reasons
Cypress, I think it's one of a few testing tool that provides a fast and reliable way to test front-end and back-end applications. It also provides the availability to perform end-to-end functional testing of web applications by automating browser actions in a simpler manner. Despite of being relatively new it has a great adoption by the tester community. It is flexible, easy to set up and it has the capability to use frameworks that improves it, such as Cucumber.

Also in my case, since Cypress is purely based on JavaScript, it looks more familiar to me ... I have a lot of experience as a developer :)

I also selected Cucumber because is a well-known framework that supports Behavior-Driven Development (BDD), which enable us to write test cases that anyone can easily understand regardless of their professional background or technical.

Taking the BDD approach has the benefits that allow us to think and define behaviours instead of just tests, and by using plain language also improves collaboration since all are able to write behavior scenarios.

### Guidelines
I have taken into account some guidelines to make the source code  readable and structured.
For example, for each of the API paths I have created a feature file to group behaviours. 
On the other hand, I started outlining a small strategy to be able to use different environment variables configuration files.
Also, I have kept the data within an object structure, in this case a constant object with information from a single city that is used in requests to all API endpoints.

### Installation
#### Pre-requisites
- Node.js (npm)
- Git

#### Setup 
- Create a new directory for the project and navigate to that path
  ```
  mkdir joor-automation & cd joor-automation
  ```
- Download source code from GitHub
  ```
  git clone https://github.com/alvarezanalucia/joor-automation
  ```
- Setup a new npm package 
  ```
  npm init -y
  ```
- Install cypress 
  ```
  npm i cypress
- Install the cucumber plugin 
  ```
  npm install --save-dev cypress-cucumber-preprocessor
- Run the joor-automation project
  ```
  npm run cypress:open
  ```
After executing this command, the Cypress joor-automation project will be started, and you can select the test to run.

### Roadmap
There is a lot of improvements that can be done in this project. 
The following are the main ones:
- Change scripts to run parameterized tests dynamically.
- Improve the environments variables/files strategy that it's different across multiple environments.
- Rewrite the BDD test to pass values dynamically.
- Define better assertions to test whether the API endpoints are actually retrieving the necessary data.
- Verify that the required input data is present before submitting the requests.
- Add tags as a way to organize different scenario executions.
