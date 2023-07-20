Feature: Register

  Scenario: Register Test
    Given navigate to url automationpractice
    Then enter valid email address and click submit button
    Then Fill details gender, firstname, lastname, password, date of birth
    And Click Register button
    And verify register