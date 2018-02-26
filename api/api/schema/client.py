import datetime
import graphene

from graphene_django.types import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from ..models import (Post, Section, Tag)


class SectionType(DjangoObjectType):
    class Meta:
        model = Section
        filter_fields = {'title': ['exact', 'icontains']}
        interfaces = (graphene.Node,)

    def resolve_posts(self, args, context, info):
        Post.objects.filter(publish_date__lte=datetime.date.today())
        

class PostType(DjangoObjectType):
    class Meta:
        model = Post
        filter_fields = {
            'section__title': ['exact'],
            'title': ['exact', 'icontains'],
            'slug': ['exact', 'icontains']
        }
        interfaces = (graphene.Node,)


class TagType(DjangoObjectType):
    class Meta:
        model = Tag
        filter_fields = {'title': ['exact', 'icontains']}
        interfaces = (graphene.Node,)

class Query(graphene.AbstractType):
    all_sections = DjangoFilterConnectionField(SectionType)
    section = graphene.relay.Node.Field(SectionType)
    all_posts = DjangoFilterConnectionField(PostType)
    published_posts = DjangoFilterConnectionField(PostType)
    post = graphene.relay.Node.Field(PostType)
    all_tags = DjangoFilterConnectionField(TagType)
    tag = graphene.relay.Node.Field(TagType)

    def resolve_all_section(self, args, context, info):
        return Section.objects.all()

    def resolve_all_posts(self, args, context, info):
        return Post.objects.all()
    
    def resolve_published_posts(self, args, context, info):
        return Post.objects.filter(publish_date__lte=datetime.date.today()).order_by('-publish_date')

    def resolve_all_tags(self, args, context, info):
        return Tag.objects.all()
