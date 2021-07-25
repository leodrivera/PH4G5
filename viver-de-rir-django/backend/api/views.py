from django.db.models import query

from django.shortcuts import render
from rest_framework import viewsets

from api.serializer import AtualizaImagemSerializer, TimeVoluntariosSerializer, FotosAcoesSerializer, FotoPrincipalSerializer, DepoimentosSerializer, NewsLetterSerializer
from api.models import FotoPrincipal, FotosAcoes, TimeVoluntarios, Depoimentos, NewsLetter

class ImagemViewSet(viewsets.ModelViewSet):
    queryset = FotoPrincipal.objects.all()
    serializer_class = AtualizaImagemSerializer


class ImagePrincipalUrl(viewsets.ModelViewSet):
    queryset = FotoPrincipal.objects.all().order_by('-id')[:1]
    serializer_class = FotoPrincipalSerializer

class FotosAcoesView(viewsets.ModelViewSet):
    queryset = FotosAcoes.objects.all()
    serializer_class = FotosAcoesSerializer

      
class TimeVoluntariosView(viewsets.ModelViewSet):
    queryset = TimeVoluntarios.objects.all()
    serializer_class = TimeVoluntariosSerializer

class DepoimentosView(viewsets.ModelViewSet):
    queryset = Depoimentos.objects.all()
    serializer_class = DepoimentosSerializer

class NewsLetterView(viewsets.ModelViewSet):
    queryset = NewsLetter.objects.all()
    serializer_class = NewsLetterSerializer
