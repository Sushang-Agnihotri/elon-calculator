from django.urls import path
from .views import earnings_view

urlpatterns = [
    path('', earnings_view, name='earnings'),  # Homepage
]
