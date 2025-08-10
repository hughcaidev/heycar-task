Feature: Product Page

    # The following scenario checks that the address modal appears when clicking on the "Please select the address you want to ship to" CTA on a product page
    Scenario: Clicking on the Address CTA opens the address modal
        Given I land on "https://demo.nopcommerce.com/camera-photo"
        When I click on the "Apple iCam" product item card
        And I click on "Please select the address you want to ship to"
        Then the address modal appears