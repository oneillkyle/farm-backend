from django.utils.text import slugify

import graphene
from graphene_django.types import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from graphql_relay.node.node import from_global_id

from ..schema import (SectionType, PostType, TagType)
from ..models import (Section, Post, Tag)


class CreateSection(graphene.Mutation):

    class Input:
        title = graphene.String(required=True)
        description = graphene.String(required=True)
        image = graphene.String(required=True)
        allows_posts = graphene.Boolean(required=True, default_value=True)

    section = graphene.Field(SectionType)

    @staticmethod
    def mutate(root, args, context, info):
        section, created = Section.objects.get_or_create(
            title=args.get('title'),
            description=args.get('description'),
            image=args.get('image'),
            allows_posts=args.get('allows_posts'),
        )
        return CreateSection(section=section)


class UpdateSection(graphene.Mutation):

    class Input:
        id = graphene.String(required=True)
        title = graphene.String(required=True)
        description = graphene.String(required=True)
        image = graphene.String(required=True)
        allows_posts = graphene.Boolean(required=True, default_value=True)

    section = graphene.Field(SectionType)

    @staticmethod
    def mutate(root, args, context, info):
        obj, id = from_global_id(args.get('id'))
        section = Section.objects.get(id=id)
        section.title = args.get('title')
        section.description = args.get('description')
        section.image = args.get('image')
        section.allows_posts = args.get('allows_posts')
        section.save()
        return CreateSection(section=section)


class DeleteSection(graphene.Mutation):

    class Input:
        id = graphene.String(required=True)

    id = graphene.String()

    @staticmethod
    def mutate(root, args, context, info):
        obj, id = from_global_id(args.get('id'))
        section = Section.objects.get(id=id)
        section.delete()
        return DeleteSection(id=args.get('id'))


class CreatePost(graphene.Mutation):

    class Input:
        title = graphene.String(required=True)
        description = graphene.String(required=True)
        section = graphene.String(required=True)
        image = graphene.String(required=True)
        published = graphene.Boolean(required=True, default_value=True)
        tags = graphene.List(graphene.String)

    post = graphene.Field(PostType)

    @staticmethod
    def mutate(root, args, context, info):
        tags = Tag.objects.filter(id__in=args.get('tags', []))
        section = Section.objects.get(id=args.get('section', []))
        post, created = Post.objects.get_or_create(
            title=args.get('title'),
            description=args.get('description'),
            slug=slugify(args.get('title')),
            section=section,
            image=args.get('image'),
            published=args.get('published'),
        )
        post.tags.set(tags)
        return CreatePost(post=post)


class UpdatePost(graphene.Mutation):

    class Input:
        id = graphene.String(required=True)
        title = graphene.String(required=True)
        description = graphene.String(required=True)
        section = graphene.String(required=True)
        image = graphene.String(required=True)
        published = graphene.Boolean(required=True, default_value=True)
        tags = graphene.List(graphene.String)

    post = graphene.Field(PostType)

    @staticmethod
    def mutate(root, args, context, info):
        obj, id = from_global_id(args.get('id'))
        post = Post.objects.get(id=id)
        section = Section.objects.get(id=args.get('section'))
        tags = Tag.objects.filter(id__in=args.get('tags', []))

        post.title = args.get('title')
        post.description = args.get('description')
        post.image = args.get('image')
        post.published = args.get('published')
        post.section = section
        post.save()
        post.tags.set(tags)
        return CreatePost(post=post)


class DeletePost(graphene.Mutation):

    class Input:
        id = graphene.String(required=True)

    id = graphene.String()

    @staticmethod
    def mutate(root, args, context, info):
        obj, id = from_global_id(args.get('id'))
        post = Post.objects.get(id=id)
        post.delete()
        return DeletePost(id=args.get('id'))


class CreateTag(graphene.Mutation):

    class Input:
        title = graphene.String(required=True)
        icon = graphene.String(required=True)

    tag = graphene.Field(TagType)

    @staticmethod
    def mutate(root, args, context, info):
        tag, created = Tag.objects.get_or_create(
            title=args.get('title'),
            icon=args.get('icon')
        )
        return CreateTag(tag=tag)


class UpdateTag(graphene.Mutation):

    class Input:
        id = graphene.String(required=True)
        title = graphene.String(required=True)
        icon = graphene.String(required=True)

    tag = graphene.Field(TagType)

    @staticmethod
    def mutate(root, args, context, info):
        obj, id = from_global_id(args.get('id'))
        tag = Tag.objects.get(id=id)

        tag.title = args.get('title')
        tag.icon = args.get('icon')=
        tag.save()
        return CreateTag(tag=tag)


class DeleteTag(graphene.Mutation):

    class Input:
        id = graphene.String(required=True)

    id = graphene.String()

    @staticmethod
    def mutate(root, args, context, info):
        obj, id = from_global_id(args.get('id'))
        tag = Tag.objects.get(id=id)
        tag.delete()
        return DeleteTag(id=args.get('id'))

class Mutations(graphene.AbstractType):
    create_section = CreateSection.Field()
    update_section = UpdateSection.Field()
    delete_section = DeleteSection.Field()

    create_post = CreatePost.Field()
    update_post = UpdatePost.Field()
    delete_post = DeletePost.Field()

    create_tag = CreateTag.Field()
    update_tag = UpdateTag.Field()
    delete_tag = DeleteTag.Field()
