from django.db import models

# Create your models here.
class Payment(models.Model):
    card_number = models.BigIntegerField(unique=True)
    card_type = models.CharField(max_length=30)
    billing_address = models.CharField(max_length=30)

    objects = models.Manager

    class Meta: 
        ordering = ['-card_number']

def create_process(_card_number, _card_type, _billing_address):
    payment = Payment(card_number=_card_number, card_type=_card_type, billing_address=_billing_address)

    # Validation - Ensure the instance values comply with those of the model definition
    # Raise ValidationError if the test failed
    payment.full_clean()

    # Create the record in the target database
    payment.save()

def fetch_all_pmt_methods_process():
    # Return a dict of payment mathods
    return Payment.objects.in_bulk()
    