from django.contrib import admin
from django.urls import path, include
from .views import earnings_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('calculator.urls')),  # <== App routing
]