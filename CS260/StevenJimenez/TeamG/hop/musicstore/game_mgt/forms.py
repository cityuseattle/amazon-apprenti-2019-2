from django import forms
from datetime import date

games = ((0, 'Monopoly'), (1, 'Munchkins'), (2, 'Sorry!'),
          (3, 'Exploding Kittens'), (4, 'Cards agaisnt Humanity'), (5, 'Select Other'))


class gameForm(forms.Form):
    Games = forms.ChoiceField(choices=games)
    Quantity = forms.CharField()
    # Override the default field order, which is the declaration order
    field_order = ['Games', 'Quantity']