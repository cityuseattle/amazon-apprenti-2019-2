from django.shortcuts import render
from django.template.response import TemplateResponse

# Create your views here.
def pay(request, payment_type="Creditcard",discount=0):
    city = request.GET.get('city', 'N/A')
    zipcode = request.GET.get('zipcode', 'N/A')
    address = {'city': city, 'zipcode': zipcode}
    return render(request,'payment/pay.html', {'address': address, 'payment_type': payment_type, 'discount': discount})

def help(request):
    contact_name = 'Miriam'
    contact_address = {'sector':'385','city':'College Blvd','planet':'Washington'}
    contact_phone = ['123-456-789','987-654-321']
    contact_hours = ((0,'Mon-Thu 7AM-12AM'),(1,'Fri 1PM-5PM'),(2,'Sat-Sun 7AM-10AM'))
    contact_info = {'contact_name':contact_name, 'contact_address':contact_address, 'contact_phone':contact_phone, 'contact_hours':contact_hours}
    return render(request, 'payment/help.html', contact_info)

def refund(request):
    contact_name = 'Clark'
    contact_address = {'sector':'385','city':'College Blvd','planet':'Washington'}
    contact_phone = ['123-456-789','987-654-321']
    contact_hours = ((0,'Mon-Thu 7AM-12AM'),(1,'Fri 1PM-5PM'),(2,'Sat-Sun 7AM-10AM'))
    contact_info = {'contact_name':contact_name, 'contact_address':contact_address, 'contact_phone':contact_phone, 'contact_hours':contact_hours}
    return TemplateResponse(request, 'payment/refund.html', contact_info)