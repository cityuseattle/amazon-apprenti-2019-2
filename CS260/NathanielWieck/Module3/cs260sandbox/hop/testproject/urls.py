"""testproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from django.views.generic import TemplateView
from django.contrib import admin
from testproject.payment import views as payment_views
from django.urls import include
# MAIN URL
urlpatterns = [
    # POINTS TO APP METHOD, NOT TO DIRECTLY TO TEMPLATE
    url(r'^admin/', admin.site.urls),
    # POINTS DIRECTLY TO TEMPLATE
    url(r'^$',TemplateView.as_view(template_name='homepage.html')),
    # keyword include imports specific url file from appropriate apps folder to here
    url(r'^payment/', include('testproject.payment.urls',namespace="payment_ns")),
]