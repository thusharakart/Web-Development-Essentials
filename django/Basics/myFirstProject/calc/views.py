from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def home(request):
    #return HttpResponse("Hello world!") ## this will just send the text as the output
    # but in order to response a page render the page template.
    return render(request, 'home.html', {'first_name' : "Rusiru", 'last_name' : 'Thushara'})

def add(request):
    val1 = request.POST['num1']
    val2 = request.POST['num2']

    ans = int(val1) + int(val2)
    return render(request, "result.html", {'ans': ans})

def Error404(request):
    return render(request, '404.html', status=404)