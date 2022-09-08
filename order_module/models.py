from django.db import models
from account_module.models import User
from product_module.models import Product


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    is_paid = models.BooleanField()
    payment_date = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    def __str__(self):
        return self.user.username

    def calculate_total_price(self):
        total_price = 0

        for order_detail in self.orderdetail_set.all():
            if self.is_paid:
                total_price += order_detail.final_price * order_detail.count
            else:
                total_price += order_detail.product.price * order_detail.count

        tax = int(total_price * (9 / 100))
        total_price += tax

        return total_price


class OrderDetail(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    final_price = models.IntegerField(null=True, blank=True)
    count = models.IntegerField()

    def __str__(self):
        return f'{self.product.title} - {self.order.user.username}'
