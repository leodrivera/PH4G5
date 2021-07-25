from django.shortcuts import render
from api.models import FotoPrincipal
from api.serializer import FotoPrincipalSerializer
import requests
# Create your views here.

def index(request):
    image_url = requests.get('http://localhost:8000/api/foto-principal/?format=json').json()[0]['image_url']
    

    context = {
        'image_url': image_url
    }
    
    return render(request, 'base.html', context)