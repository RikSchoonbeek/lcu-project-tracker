# Generated by Django 2.2.11 on 2020-03-07 22:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Framework',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='ProgrammingLanguage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('related_frameworks', models.ManyToManyField(to='general_models.Framework')),
            ],
        ),
        migrations.CreateModel(
            name='SkillLevel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('level', models.CharField(choices=[('beginner', 'Beginner'), ('intermediate', 'Intermediate'), ('advanced', 'Advanced')], max_length=15)),
            ],
        ),
        migrations.CreateModel(
            name='Resource',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('web_link', models.URLField()),
                ('frameworks', models.ManyToManyField(to='general_models.Framework')),
                ('languages', models.ManyToManyField(to='general_models.ProgrammingLanguage')),
                ('skill_level', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='general_models.SkillLevel')),
            ],
        ),
        migrations.AddField(
            model_name='programminglanguage',
            name='skill_level',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='general_models.SkillLevel'),
        ),
        migrations.AddField(
            model_name='framework',
            name='skill_level',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='general_models.SkillLevel'),
        ),
    ]
