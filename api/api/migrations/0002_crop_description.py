# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-10-12 05:26
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='crop',
            name='description',
            field=models.CharField(blank=True, max_length=2000),
        ),
    ]
