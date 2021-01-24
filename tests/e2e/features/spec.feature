@debug
Feature: Fill the name
    Scenario: Fill the name to see with hello
        Given The user go to "http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile"
        When The user adds "Maria" in the name field
        And The user adds "email@test.com" in the email field
        And press "Next section" button
        Then "Interests" is active section
        When I choose Xbox radio
        And press "Next section" button
        Then I see "Test Completed, WooHoo!"