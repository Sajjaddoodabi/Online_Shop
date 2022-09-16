from django.db import models

from account_module.models import User


# Create your models here.

class ArticleCategory(models.Model):
    parent = models.ForeignKey('ArticleCategory', on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField(max_length=200)
    url_title = models.CharField(max_length=200)
    is_active = models.BooleanField()

    def __str__(self):
        return self.title


class Article(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=400, db_index=True, allow_unicode=True)
    image = models.ImageField(upload_to='images/articles')
    short_description = models.TextField()
    text = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    article_category = models.ManyToManyField(ArticleCategory)
    is_active = models.BooleanField()
    date = models.DateTimeField(auto_now_add=True, editable=False)

    def __str__(self):
        return f'{self.author} - {self.title}'


class ArticleComment(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    is_delete = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.user.username} - {self.article.title}'
