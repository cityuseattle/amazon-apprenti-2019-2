from django.shortcuts import render
from django.template.response import TemplateResponse

# Create your views here.

# Set default payment type to Credit Card
def pay(request, payment_type="Credit Card",discount=0):
    # 'city' has value 'Seattle' or '' if city not in url
    # 'zipcode' has value '98101' of '' if zipcode not in url
    city = request.GET.get('city', 'N/A')
    zipcode = request.GET.get('zipcode', 'N/A')
    # Create an address directory
    address = {'city':city, 'zipcode':zipcode} 
    return render(request,'payment/pay.html', {'address': address, 'payment_type' : payment_type, 'discount' : discount})

def help(request):
    contact_name = 'Alex'
    contact_address = {'sector':'385', 'city':'Sabody','planet':'Moon'}
    contact_phone = ['123-456-7891', '987-654-3219']
    contact_hours = ((0, 'Mon-Thur 7AM-12PM'),(1,'Fri 1PM-5PM'),(2, 'Sat-Sun 7AM-10AM'))
    # Package up all variables into a dictionary
    contact_info = {'contact_name': contact_name, 'contact_address': contact_address, 'contact_phone': contact_phone, 'contact_hours': contact_hours}
    return render(request, 'payment/help.html', contact_info)

def refund(request):
    contact_name = 'James'
    contact_address = {'sector':'385', 'city':'Nobody','planet':'Mars'}
    contact_phone = ['123-456-7891', '987-654-3219']
    contact_hours = ((0, 'Mon-Thur 7AM-12PM'),(1,'Fri 1PM-5PM'),(2, 'Sat-Sun 7AM-10AM'))
    # Package up all variables into a dictionary
    contact_info = {'contact_name': contact_name, 'contact_address': contact_address, 'contact_phone': contact_phone, 'contact_hours': contact_hours}
    return TemplateResponse(request, 'payment/refund.html', contact_info)