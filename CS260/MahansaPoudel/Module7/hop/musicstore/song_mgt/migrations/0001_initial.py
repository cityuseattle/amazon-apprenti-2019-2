# Generated by Django 2.2.6 on 2019-10-30 17:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Song',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30)),
                ('artists', models.CharField(max_length=30)),
                ('album', models.CharField(max_length=30)),
                ('genre', models.CharField(max_length=30)),
                ('year', models.IntegerField()),
                ('album_image', models.URLField(max_length=1000)),
            ],
            options={
                'unique_together': {('title', 'artists')},
            },
        ),
    ]
