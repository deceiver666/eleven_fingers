from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class SimpleStats(models.Model):
	stat_name = models.CharField(max_length=30)
	value = models.IntegerField()

class Game(models.Model):
	user = models.ForeignKey(User)
	date = models.DateTimeField();
	score = models.IntegerField();


