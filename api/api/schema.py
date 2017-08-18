import graphene

from graphene_django.types import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from .models import (Farm, Budget, Plot)


class FarmType(DjangoObjectType):
    class Meta:
        model = Farm
        filter_fields = {'name': ['icontains']}
        interfaces = (graphene.Node,)

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

class BudgetType(DjangoObjectType):
    class Meta:
        model = Budget
        # filter_fields = {'name': ['icontains']}
        interfaces = (graphene.Node,)


class Query(graphene.AbstractType):
    all_farms = DjangoFilterConnectionField(FarmType)
    farm = graphene.Field(FarmType,
                          id=graphene.Int(),
                          name=graphene.String())

    all_budgets = DjangoFilterConnectionField(BudgetType)
    budget = graphene.Field(BudgetType,
                            id=graphene.Int(),
                            name=graphene.String())

    def resolve_all_farms(self, args, context, info):
        return Farm.objects.all()

    def resolve_farm(self, args, context, info):
        id = args.get('id')
        name = args.get('name')

        if id is not None:
            return Farm.objects.get(pk=id)

        if name is not None:
            return Farm.objects.get(name=name)

        return None

    def resolve_all_budgets(self, args, context, info):
        # We can easily optimize query count in the resolve method
        return Budget.objects.all()

    def resolve_budget(self, args, context, info):
        id = args.get('id')
        name = args.get('name')

        if id is not None:
            return Budget.objects.get(pk=id)

        if name is not None:
            return Budget.objects.filter(farm__name=name).last()

        return None
