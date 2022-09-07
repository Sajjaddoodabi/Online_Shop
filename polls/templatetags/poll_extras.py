from django import template
from jalali_date import date2jalali

register = template.Library()


@register.filter(name='show_jalali_date')
def show_jalali_date(value):
    return date2jalali(value)


@register.filter(name='three_digits_price')
def three_digits_price(value: int):
    return '{:,}'.format(value) + ' $'
