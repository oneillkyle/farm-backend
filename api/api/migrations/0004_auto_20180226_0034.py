# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-02-26 00:34
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20180217_1928'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='published',
        ),
        migrations.AddField(
            model_name='post',
            name='publish_date',
            field=models.DateTimeField(default=datetime.datetime(2018, 2, 26, 0, 34, 4, 254982)),
            preserve_default=False,
        ),
    ]
