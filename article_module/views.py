from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from django.views.generic import ListView, DetailView

from article_module.models import Article, ArticleComment


# Create your views here.

class ArticleList(ListView):
    model = Article
    template_name = 'article_module/blog.html'
    paginate_by = 10

    def get_queryset(self):
        query = super(ArticleList, self).get_queryset()
        query = query.filter(is_active=True)
        return query


class ArticleDetail(DetailView):
    model = Article
    template_name = 'article_module/blog_single.html'

    def get_context_data(self, **kwargs):
        context = super(ArticleDetail, self).get_context_data()
        loaded_article = self.object
        context['comments'] = ArticleComment.objects.filter(article_id=loaded_article.id, is_delete=False).order_by(
            '-date')
        context['comments_count'] = ArticleComment.objects.filter(article_id=loaded_article.id, is_delete=False).count()
        return context

    def get_queryset(self):
        query = super(ArticleDetail, self).get_queryset()
        query = query.filter(is_active=True)
        return query


def add_article_comment(request: HttpRequest):
    article_comment = request.GET.get('article_comment')
    article_id = request.GET.get('article_id')

    if request.user.is_authenticated:
        new_comment = ArticleComment(user_id=request.user.id, text=article_comment, article_id=article_id)
        new_comment.save()

        context = {
            'comments': ArticleComment.objects.filter(article_id=article_id, is_delete=False).order_by('-date'),
            'comments_count': ArticleComment.objects.filter(article_id=article_id, is_delete=False).count(),
        }

        return render(request, 'article_module/includes/article_comment_component.html', context)

    return HttpResponse('done')
