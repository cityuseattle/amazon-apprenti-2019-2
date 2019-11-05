from django.db import models

# Create your models here.
class Payment(models.Model):
    card_number = models.BigIntegerField(unique=True)
    card_type = models.CharField(max_length=30)
    billing_address = models.CharField(max_length=1000)

    class Meta:
        ordering = ['-card_number']