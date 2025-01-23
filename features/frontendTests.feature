Feature: LoginTest

    Scenario: Login 
        When I log in
        Then I should see the login successfull message
