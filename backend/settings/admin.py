from django.contrib import admin
from .models import Settings, Social, Link

admin.site.register(Settings)
admin.site.register(Link)
admin.site.register(Social)

