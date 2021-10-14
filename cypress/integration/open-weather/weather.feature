Feature: Current weather data for one location

    Scenario: Current weather data by city name
        Given A city name London
        When I send GET request to weather service api endpoint
        Then I get response code 200
    
    Scenario: Current weather data by geographic coordinates
        Given The latitude '<Lat>' and the longitud '<Lon>'
        When I send GET request to weather service api endpoint
        Then I get response code 200
        
    Scenario: Current weather data by ZIP code
        Given The ZIP code '<ZIP>'
        When I send GET request to weather service api endpoint
        Then I get response code 200

    # Scenario Outline: Current weather data by city name
    #     Given A city name <city>
    #     When I send GET request to weather service api endpoint
    #     Then I get response code 200

    #     Examples:
    #     | city          | id    |
    #     | London        | 1     |
    #     | Buenos Aires  | 2     |