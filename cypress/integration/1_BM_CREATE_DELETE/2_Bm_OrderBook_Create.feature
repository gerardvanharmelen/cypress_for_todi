@Bm_OrderBook_Create
Feature: Bm OrderBook Create

  I want to be able to login, got BM order book, select portfolio, enter 2 up and 2 down orders

  Scenario: Enter Orders via OrderBook 
    Given That I login as "david@eskom"  
    When  I open the Balancing Market page
    And   I select the "ESKOM-RSAN-C1" portfolio
    And   I press the Search button
    Then  I must see "ESKOM-RSAN-C1" area orders 
    When  I enter orders of QTY:q_field  MINQ:minq_field  MULP: mulp_field X AreaPrice
       | q_field | minq_field | mulp_field |
       | 110     | 11         | 1.1        |
       | 120     | 12         | 1.2        |
       | 80      | 8          | 0.8        |
       | 90      | 9          | 0.9        |

 

