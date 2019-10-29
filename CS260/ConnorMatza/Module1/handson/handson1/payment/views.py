from django.shortcuts import render


def pay(request):
    return render(request, 'payment/pay.html')
# Create your views here.
