from django.shortcuts import render
from django.template.response import TemplateResponse

# Create your views here.

# Set default payment type to creditcard
def pay(request, payment_type="Creditcard",discount=0):
    # 'city' has value 'Seattle' or '' if city not in url
    # 'zipcode' has value '98101' or '' if zipcode not in url
    city = request.GET.get('city', 'N/A')
    zipcode = request.GET.get('zipcode', 'N/A')
    # Create an address dictionary
    address = {'city':city, 'zipcode':zipcode}
    return render(request,'payment/pay.html', {'address': address, 'payment_type' : payment_type, 'discount': discount})

def help(request):
    contact_name = 'Caleb'
    contact_address = {'sector':'9045XY','city':'Unknown','planet':'Namek'}
    contact_phone = ['123-456-7890','987-654-3210']
    contact_hours = ((0,'Monday-Thursday 0700-0000'),(1,'Friday 1300-1700'),(2,'Saturday-Sunday 0700-2200'))
    # Package up all variables into a dictionary
    contact_info = {'contact_name':contact_name, 'contact_address':contact_address, 'contact_phone':contact_phone, 'contact_hours':contact_hours}
    return render(request,'payment/help.html', contact_info)

def refund(request):
    contact_name = 'Caleb'
    contact_address = {'sector':'9045XY','city':'Unknown','planet':'Namek'}
    contact_phone = ['123-456-7890','987-654-3210']
    contact_hours = ((0,'Monday-Thursday 0700-0000'),(1,'Friday 1300-1700'),(2,'Saturday-Sunday 0700-2200'))
    # Package up all variables into a dictionary
    contact_info = {'contact_name':contact_name, 'contact_address':contact_address, 'contact_phone':contact_phone, 'contact_hours':contact_hours}
    return TemplateResponse(request,'payment/refund.html', contact_info)
    