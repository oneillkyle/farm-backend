from rest_framework import serializers

from api.models import *

class FarmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Farm
        fields = (
            '__all__'
        )