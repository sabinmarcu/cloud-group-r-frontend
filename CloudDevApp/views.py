from django.http import HttpResponse
from models import Post

# Create your views here.
def index(request):
    Post.objects.create(
        title='Hello Mon!',
        text='asdasdsad!',
        tags=['mongodb', 'django'])
    return HttpResponse("Hello, world!")