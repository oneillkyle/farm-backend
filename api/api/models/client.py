from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=256)
    description = models.TextField()
    slug = models.SlugField(unique=True, blank=True)
    section = models.ForeignKey(
        'Section', related_name='posts', blank=True, null=True)
    image = models.URLField(blank=True)
    published = models.BooleanField(default=True)
    tags = models.ManyToManyField('Tag', related_name='posts')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{0}.".format(self.title)

    class Meta:
        db_table = 'post'
        managed = True
        verbose_name = 'Post'
        ordering = ['created']


class Section(models.Model):
    title = models.CharField(max_length=256, unique=True)
    description = models.TextField()
    image = models.URLField(blank=True)
    allows_posts = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{0}.".format(self.title)

    class Meta:
        db_table = 'section'
        managed = True
        verbose_name = 'Section'
        ordering = ['title']


class Tag(models.Model):
    title = models.CharField(max_length=256, unique=True)
    icon = models.CharField(max_length=50, blank=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "{0}.".format(self.title)

    class Meta:
        db_table = 'tag'
        managed = True
        verbose_name = 'Tag'
        ordering = ['created']
