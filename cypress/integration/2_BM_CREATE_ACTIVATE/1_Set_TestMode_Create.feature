@Set_TestMode
Feature: Set TestMode 

  I want to be able to login, go to Application Parameters, enable Test Mode

  Scenario: Enable Test Mode by setting date and time for create
    Given That I login as "admin"  
    When  I open the Application Parameters page
    And   I navigate to the Test Mode Parameter and enable TestMode
    And   Tree is already open so I navigate to the Test Mode Date and set to "04/03/2021"
    And   Tree is already open so I navigate to the Test Mode Time and set to "10:05 AM"

    




     
 
