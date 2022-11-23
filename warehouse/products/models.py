from django.db import models


class Product(models.Model):
    product_name = models.CharField(max_length=255, verbose_name="Название товара")
    description = models.CharField(max_length=255, verbose_name="Описание")
