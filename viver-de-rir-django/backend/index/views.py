from django.shortcuts import render
from api.models import FotoPrincipal
from api.serializer import FotoPrincipalSerializer
import requests
# Create your views here.

def index(request):
    image_url = requests.get('http://localhost:8000/api/foto-principal/?format=json').json()[0]

    acoes = requests.get('http://localhost:8000/api/acoes/?format=json').json()
    
    context = {
        'image_url': image_url,
        'acoes': acoes,
    }
    
    return render(request, 'base.html', context)