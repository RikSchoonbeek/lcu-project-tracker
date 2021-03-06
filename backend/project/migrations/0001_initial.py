# Generated by Django 2.2.11 on 2020-03-07 22:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('general_models', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProjectIdea',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('recomended_languages', models.ManyToManyField(to='general_models.ProgrammingLanguage')),
                ('recommended_frameworks', models.ManyToManyField(to='general_models.Framework')),
                ('skill_level', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='general_models.SkillLevel')),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('frameworks', models.ManyToManyField(to='general_models.Framework')),
                ('languages', models.ManyToManyField(to='general_models.ProgrammingLanguage')),
                ('resources', models.ManyToManyField(to='general_models.Resource')),
                ('skill_level', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='general_models.SkillLevel')),
            ],
        ),
    ]
