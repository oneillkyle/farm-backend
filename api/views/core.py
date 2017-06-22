from rest_framework.viewsets import ModelViewSet

from api.serializer import *
from api.models import *


class FarmViewSet(ModelViewSet):
    queryset = Farm.objects.all()
    serializer_class = FarmSerializer