import graphene

from graphene_django.types import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from .schema import (FarmType, BudgetType)
from .models import (Farm, Budget, Plot)

class CreateFarm(graphene.Mutation):

    class Input:
        name = graphene.String(required=True)

    farm = graphene.Field(FarmType)

    @staticmethod
    def mutate(root, args, context, info):
        name = args.get('name')
        # farm = FarmType(name=name)
        farm, created = Farm.objects.get_or_create(name=name)
        return CreateFarm(farm=farm)

class Mutations(graphene.AbstractType):
    create_farm = CreateFarm.Field()