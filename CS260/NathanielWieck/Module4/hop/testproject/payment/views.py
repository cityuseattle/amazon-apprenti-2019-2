from django.shortcuts import render
from django.template.response import TemplateResponse

# Create your views here.
def pay(request, payment_type="Creditcard",discount=0):
    city = request.GET.get('city', 'N/A')
    zipcode = request.GET.get('zipcode', 'N/A')
    address = {'city':city, 'zipcode':zipcode}
    # must route to correct specific directory using correct specific file name
    # return request, to specified html, with specified data from function
    return render(request,'payment/pay.html', {'address': address, 'payment_type' : payment_type, 'discount': discount})

def refund(request):
    contact_name = 'Miriam'
    contact_address = {'sector':'#001','city':'X','planet':'Venus'}
    contact_phone = ['999-999-9999','111-111-1111']
    contact_hours = ((0,'Mon-Thu 10AM-1PM'),(1,'Fri 2PM-5PM'),(2,'Sat-Sun 2AM-3PM'))
    contact_info = {'contact_name':contact_name, 'contact_address':contact_address, 'contact_phone':contact_phone, 'contact_hours':contact_hours}
    return TemplateResponse(request,'payment/refund.html', contact_info)

def help(request):
    contact_name = 'Nathaniel'
    contact_address = {'sector':'#775','city':'Z','planet':'Mars'}
    contact_phone = ['123-456-7890','000-000-0001']
    contact_hours = ((0,'Mon-Thu 7AM-12PM'),(1,'Fri 1PM-5PM'),(2,'Sat-Sun 7AM-10AM'))
    contact_info = {'contact_name':contact_name, 'contact_address':contact_address, 'contact_phone':contact_phone, 'contact_hours':contact_hours}
    return render(request,'payment/help.html', contact_info)