import graphene

import api.schema
import api.mutations


class Query(api.schema.Query, graphene.ObjectType):
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass

class Mutations(api.mutations.Mutations, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutations)