from django.db import models

# Create your models here.

class SimpleStats(models.Model):
	stat_name = models.CharField(max_length=30)
	value = models.IntegerField()
