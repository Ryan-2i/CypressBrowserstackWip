Feature: Testing API Call Functionality

  Scenario: Call a smoketest API
    Given The endpoint https://restcountries.eu/rest/v2/name/Denmark is available
    Then The status code is 200