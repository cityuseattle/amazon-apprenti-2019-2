# Generated by Django 2.2.7 on 2019-11-06 00:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('song_mgt', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='song',
            name='title',
            field=models.CharField(max_length=20),
        ),
    ]
