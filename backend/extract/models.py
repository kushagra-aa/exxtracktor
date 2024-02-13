from django.db import models


class Conversion(models.Model):
    user = models.CharField(max_length=200)
    image = models.CharField(max_length=200)
    text = models.TextField()
    bold_text = models.TextField()
