from django import template

register = template.Library()


@register.filter(name='three_digits_price')
def three_digits_price(value: int):
    return '{:,}'.format(value) + ' $'
