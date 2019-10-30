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
    contact_name = 'Marc'
    contact_address = {'street':'123', 'city':'Placefield','location':"Your mom's house"}
    contact_phone = ['123-456-7890']
    contact_hours = ((0,'Mon-Thu Never-30'),(1,'Fri 1PM-2PM'))
    # Package up all variable into dictionary
    contact_info = {'contact_name':contact_name, 'contact_address':contact_address, 'contact_phone':contact_phone, 'contact_hours':contact_hours}
    return render(request,'payment/help.html', contact_info)

def refund(request):
    contact_name = 'Marc'
    contact_address = {'street':'123', 'city':'Placefield','location':"Your mom's house"}
    contact_phone = ['123-456-7890']
    contact_hours = ((0,'Mon-Thu Never-30'),(1,'Fri 1PM-2PM'))
    # Package up all variable into dictionary
    contact_info = {'contact_name':contact_name, 'contact_address':contact_address, 'contact_phone':contact_phone, 'contact_hours':contact_hours}
    return TemplateResponse(request,'payment/refund.html', contact_info)
    