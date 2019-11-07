from django.conf.urls import url
from . import views

from bananastore.product import views as product_views

app_name = "product_ns"

urlpatterns = [
    url(r'^$', product_views.pay, name="pay"),
    url(r'^help/$', product_views.help, name="help"),
    url(r'^(?P<product_type>\D+)/',
        product_views.pay, {'price': '40'}),
]