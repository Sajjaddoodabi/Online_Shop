from django import forms


class PriceFilterForm(forms.Form):
    starting_price = forms.IntegerField()
    ending_price = forms.IntegerField()
