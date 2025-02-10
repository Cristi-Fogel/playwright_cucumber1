Feature: User Login

  Scenario: Successful login to the application
    Given I open the login page
    When I enter username "admin" and password "admin123"
    And I click on the login button
    Then I should see a successful login message

  Scenario: Unsuccessful login attempt
    Given I open the login page
    When I enter username "wrongUser" and password "wrongPass"
    And I click on the login button
    Then I should see an error message
