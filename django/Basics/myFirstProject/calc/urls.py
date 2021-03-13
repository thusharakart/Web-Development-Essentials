from django.urls import path

from . import views

urlpatterns = [
    # whenever someone call for the home page, call the home function in views
    path('', views.home, name='home'),
    
    path('add', views.add, name = 'add')
]
