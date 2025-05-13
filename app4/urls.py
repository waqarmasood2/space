from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('',views.home,name='home'),
    # path('/feature',views.Feature,name='Feature'),
    # path('/pricing',views.Pricing,name='Pricing'),
    path('/contact',views.contact,name='Contact'),
    path('/About',views.about,name='About'),
]