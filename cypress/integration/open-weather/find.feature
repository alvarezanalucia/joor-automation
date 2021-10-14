Feature: Call current weather data for several cities
        
    Scenario: Current weather data by cities in circle

        Given The latitude '<Lat>' and the longitud '<Lon>'
        When I send GET request to weather service api endpoint
        Then I get response code 200