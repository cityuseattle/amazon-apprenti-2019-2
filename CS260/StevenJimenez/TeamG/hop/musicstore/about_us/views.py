from django.shortcuts import render

# Create your views here.

def about_us(request):
    about_us = ["Miriam", "Sabuna", "Steven"]
    return render(request, 'about_us/about_us.html', {"about_us": about_us})
