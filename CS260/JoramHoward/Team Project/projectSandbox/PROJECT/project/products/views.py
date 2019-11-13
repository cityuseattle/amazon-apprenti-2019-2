from django.shortcuts import render

# Create your views here.
def products(request):
    return render(request,'products/products.html')

def standard(request):
    return render(request,'products/standard.html')

def premium(request):
    return render(request,'products/premium.html')

def specOps(request):
    return render(request,'products/specOps.html')