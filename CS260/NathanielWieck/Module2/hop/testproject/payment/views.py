from django.shortcuts import render

# Create your views here.
def pay(request, payment_type="Creditcard",discount=0):
    city = request.GET.get('city', 'N/A')
    zipcode = request.GET.get('zipcode', 'N/A')
    address = {'city':city, 'zipcode':zipcode}
    # must route to correct specific directory using correct specific file name
    return render(request,'payment/pay.html', {'address': address, 'payment_type' : payment_type, 'discount': discount})

def help(request):
    return render(request,'payment/help.html')