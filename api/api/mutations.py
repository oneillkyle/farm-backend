import graphene

from graphene_django.types import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from graphql_relay.node.node import from_global_id

from .schema import (FarmType, BudgetType)
from .models import (Farm, Budget, Plot)

class CreateFarm(graphene.Mutation):

    class Input:
        name = graphene.String(required=True)

    farm = graphene.Field(FarmType)

    @staticmethod
    def mutate(root, args, context, info):
        name = args.get('name')
        farm, created = Farm.objects.get_or_create(name=name)
        return CreateFarm(farm=farm)

class CreateBudget(graphene.Mutation):

    class Input:
        name = graphene.String(required=True)
        amount = graphene.Float(required=True)
        startDate = graphene.types.datetime.DateTime(required=True)
        endDate = graphene.types.datetime.DateTime(required=True)

    budget = graphene.Field(BudgetType)

    @staticmethod
    def mutate(root, args, context, info):
        farm = Farm.objects.get(name=args.get('name'))
        budget = Budget.objects.create(
            farm=farm,
            amount=args.get('amount'),
            start_date=args.get('startDate'),
            end_date=args.get('endDate'),
        )
        return CreateBudget(budget=budget)

class DeleteBudget(graphene.Mutation):

    class Input:
        id = graphene.String(required=True)

    id = graphene.String()
    # budget = graphene.Field(BudgetType)

    @staticmethod
    def mutate(root, args, context, info):
        obj, id = from_global_id(args.get('id'))
        budget = Budget.objects.get(id=id)
        budget.delete()
        return DeleteBudget(id=args.get('id'))

# class UpdateBudget(graphene.Mutation):

#     class Input:
#         id = graphene.String(required=True)
#         amount = graphene.Float(required=True)
#         start_date = graphene.types.datetime.DateTime(required=True)
#         end_date = graphene.types.datetime.DateTime(required=True)

#     budget = graphene.Field(BudgetType)

#     @staticmethod
#     def mutate(root, args, context, info):
#         budget = Budget.objects.get(id=id)
#         budget = Budget.objects.create(
#             farm__name=args.get('name'),
#             amount=args.get('amount'),
#             start_date=args.get('start_date'),
#             end_date=args.get('end_date'),
#         )
#         return CreateBudget(budget=budget)

class Mutations(graphene.AbstractType):
    create_farm = CreateFarm.Field()
    create_budget = CreateBudget.Field()
    delete_budget = DeleteBudget.Field()