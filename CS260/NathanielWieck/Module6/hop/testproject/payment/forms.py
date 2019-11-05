from django import forms
from datetime import date
from django.core.validators import RegexValidator
import re

CARD_TYPES = ((0, 'American Express'), (1, 'Discover'),
              (2, 'Mastercard'), (3, 'Visa'))

class PaymentForm(forms.Form):
    # THESE FIELD TYPES WILL AUTO-POPULATE CORRECT DATA ENTRY FIELDS ON HTML PAGE FOR USER INTERFACE
    # if use default validator, can put specific parameters according to certain keywords into the forms.fields below, like maxchar=30
    card_type = forms.ChoiceField(choices=CARD_TYPES)
    card_number = forms.CharField()
    billing_address = forms.CharField()

    # THIS IS USED FOR THE FUCKING FOR LOOPOOOP IN HTML FILE TO DISPLAY THE TABLE CORRESPONDING TO THE DATA INPUT FIELDS
    field_order = ['card_type', 'card_number', 'billing_address']

    # This FUNCTION CLEAN_CARD_NUMBER validator is automatically called whenb is_valid() method gets called
    # clean is a keyword, and card_number must refer to specific form field
    def clean_card_number(self):
        error = False
        # Get the selected card type
        selected_card_type = CARD_TYPES[int(self.cleaned_data['card_type'])][1]
        # Get the field value from cleaned_data dict
        value = self.cleaned_data['card_number']
        # Check if the value is valid
        if(selected_card_type == 'American Express' and re.search(r"^3[47][0-9]{13}$", value) is None):
            error = True
        if(selected_card_type == 'Discover' and re.match(r"^6(?:011|5[0-9]{2})[0-9]{12}$", value) is None):
            error = True
        if(selected_card_type == 'Mastercard' and
           re.search(r"^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$", value) is None):
            error = True
        if(selected_card_type == 'Visa' and re.search(r"^4[0-9]{12}(?:[0-9]{3})?$", value) is None):
            error = True
        # Raise error
        if(error == True):
            raise forms.ValidationError(
                "Please enter a valid card number", code='cardnumber')
        # Always return value
        return value