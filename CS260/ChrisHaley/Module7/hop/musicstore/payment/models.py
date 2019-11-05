from django.db import models

# Create your models here.
class Payment(models.Model):
    card_number = models.BigIntegerField(unique=True)
    card_type = models.CharField(max_length=30)
    billing_address = models.CharField(max_length=1000)

    class Meta:
        # The ordering option tells Django that when a query is made on the model it orders
        # the resutls by the state field in descending order
        ordering = ['-card_number']