from django.shortcuts import render

def earnings_view(request):
    return render(request, 'calculator/earnings.html')
