Feature: Call current weather data for several cities

    Scenario: Cities within a rectangle zone

        Given A rectangle zone '<bbox>'
        When I send GET request to weather service api endpoint
        Then I get response code 200