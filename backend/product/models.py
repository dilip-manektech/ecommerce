from django.db import models


# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=50, null=False, blank=False)
    description = models.TextField(null=True, blank=True)
    price = models.IntegerField(null=False, blank=False)
    image = models.ImageField(upload_to="static/product", null=True, blank=True)

    def __str__(self):
        return f"{self.id}-{self.name}"
