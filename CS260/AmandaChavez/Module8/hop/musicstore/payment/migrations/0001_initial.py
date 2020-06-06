# Generated by Django 2.2.6 on 2019-10-22 18:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('card_number', models.IntegerField(unique=True)),
                ('card_type', models.CharField(max_length=30)),
                ('billing_address', models.CharField(max_length=30)),
            ],
            options={
                'ordering': ['-card_number'],
            },
        ),
    ]