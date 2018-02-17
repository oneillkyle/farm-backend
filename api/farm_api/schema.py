import graphene

import api.schema.farm
import api.schema.client
import api.mutations.farm
import api.mutations.client


class Query(api.schema.farm.Query, api.schema.client.Query, graphene.ObjectType):
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass

class Mutations(api.mutations.farm.Mutations, api.mutations.client.Mutations, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutations)