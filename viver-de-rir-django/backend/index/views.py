from django.shortcuts import render
from api.models import FotoPrincipal
from api.serializer import FotoPrincipalSerializer
import requests
# Create your views here.

def index(request):
    imagem_principal = requests.get('http://localhost:8000/api/foto-principal/').json()[0]
    acoes = requests.get('http://localhost:8000/api/acoes/').json()
    dados_ong = requests.get('http://localhost:8000/api/nossos-dados/').json()[-1]
    voluntarios = requests.get('http://localhost:8000/api/voluntarios/').json()
    depoimentos = requests.get('http://localhost:8000/api/depoimentos/').json()

    context = {
        'image_url': imagem_principal,
        'acoes': acoes,
        'dados_ong': dados_ong,
        'voluntarios': voluntarios,
        'depoimentos': depoimentos,
    }
    
    return render(request, 'base.html', context)