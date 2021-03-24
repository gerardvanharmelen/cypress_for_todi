@Bm_OrderBook_Delete
Feature: Bm OrderBook Delete

  I want to be able to login , go to OrderBook, and delete orders

  Scenario: Delete Last Order from bottom of grid list 
    Given That I login as "david@eskom"  
    When  I open the Balancing Market page
    And   I select the "ESKOM-RSAN-C1" portfolio
    And   I press the Search button
    Then  I must see "ESKOM-RSAN-C1" area orders 
    When  I select the last entered order and I delete it
    Then  I have deleted an order



 

