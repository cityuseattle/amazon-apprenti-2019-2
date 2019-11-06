from django.urls import include
from django.conf.urls import url
from django.views.generic import TemplateView
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$',TemplateView.as_view(template_name='homepage.html')),
    url(r'^payment/', include('musicstore.payment.urls',namespace="payment_ns")),
    url(r'^refund/$', views.refund, name="refund"),
    url(r'^(?P<payment_type>\D+)/',
        views.pay, {'discount':'40'}, name="pay_details"),
]

