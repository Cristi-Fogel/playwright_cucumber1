Feature: LoginTest

    Scenario: Login 
        Given a login to webpage with "username" and "password"
        When I log in
        Then I should see the login successfull message
