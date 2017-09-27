import graphene

from graphene_django.types import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from .models import (Farm, Budget, Plot)


class FarmType(DjangoObjectType):
    class Meta:
        model = Farm
        filter_fields = {'name': ['exact', 'icontains']}
        interfaces = (graphene.Node,)
        

class BudgetType(DjangoObjectType):
    class Meta:
        model = Budget
        filter_fields = {'farm__name': ['exact', 'icontains']}
        interfaces = (graphene.Node,)


class Query(graphene.AbstractType):
    all_farms = DjangoFilterConnectionField(FarmType)
    farm = graphene.relay.Node.Field(FarmType)
    all_budgets = DjangoFilterConnectionField(BudgetType)
    budget = graphene.relay.Node.Field(BudgetType)

    def resolve_all_farms(self, args, context, info):
        return Farm.objects.all()

    # def resolve_farm(self, args, context, info):
    #     print('resolve!')
    #     id = args.get('id')
    #     name = args.get('name')

    #     if id is not None:
    #         return Farm.objects.get(pk=id)

    #     if name is not None:
    #         return Farm.objects.get(name=name)

    #     return None

    def resolve_all_budgets(self, args, context, info):
        return Budget.objects.all()

    # def resolve_budget(self, args, context, info):
    #     id = args.get('id')
    #     name = args.get('name')

    #     if id is not None:
    #         return Budget.objects.get(pk=id)

    #     if name is not None:
    #         return Budget.objects.filter(farm__name=name).last()

    #     return None
