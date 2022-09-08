from django import template

register = template.Library()


@register.filter(name='three_digits_price')
def three_digits_price(value: int):
    return '{:,}'.format(value) + ' $'


@register.simple_tag
def multiply(quantity, price, *args, **kwargs):
    return three_digits_price(quantity * price)
