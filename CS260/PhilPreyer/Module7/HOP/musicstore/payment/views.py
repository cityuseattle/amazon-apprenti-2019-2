from django.shortcuts import render
from django.template.response import TemplateResponse
from django.contrib import messages
from . import forms

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
    contact_name = 'Dustin'
    contact_address = {'sector':'#385','city':'Sabody','planet':'Moon'}
    contact_phone = ['123-456-789','987-654-321']
    contact_hours = ((0,'Mon-Thu 7AM-12PM'),(1,'Fri 1PM-5PM'),(2,'Sat-Sun 7AM-10AM'))
    # Package up all variables into a dictionary
    contact_info = {'contact_name':contact_name, 'contact_address':contact_address, 'contact_phone':contact_phone, 'contact_hours':contact_hours}
    return render(request,'payment/help.html', contact_info)

def add_payment(request):
    title = 'Add a new payment method'
    if request.method == 'POST':
        # POST, generate form with data from the request
        form = forms.PaymentForm(request.POST)
        # Reference is now a bound instance with user data sent in POST
        # Call is_valid() to validate data and create cleaned_data and errors dict
        if form.is_valid():
            action='POST_SUCCESSFULL'
            # Form data is valid, you can now access validated values in the cleaned_data dict
            # e.g. form.cleaned_data['title']
        else:
            action='POST_FAILED'
    else:
        action='GET'
        # Disable auto_id to prevent the form from generating verbose information.
        # Also, we set the initial value to the album image field
        form = forms.PaymentForm(auto_id=False)
        # Reference is now an unbound (empty) form
    # Reference form instance (bound/unbound) is sent to template for rendering
    return render(request,'payment/payment_form.html',{'action':action,'form':form,'title':title})

