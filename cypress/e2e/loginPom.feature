Feature: login test

  Scenario: login page object model
    Given pom navigate to url
    Then pom click signup/login button
    When pom enter email and password
    And pom click login button
    And pom verify login