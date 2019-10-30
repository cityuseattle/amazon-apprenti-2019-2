from . import views
from django.conf.urls import url

app_name = "payment_ns"

urlpatterns = [
    url(r'^$', views.pay, name="pay"),
    url(r'^help/$', views.help, name="help"),
    url(r'^(?P<payment_type>\D+)/',
        views.pay, {'discount': '40'}, name="pay_detals"),
]
