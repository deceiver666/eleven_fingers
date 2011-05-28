from django.conf.urls.defaults import *
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
	(r'^$', 'kapusta.eleven_fingers.views.main_view'),
	(r'^login/$', 'kapusta.eleven_fingers.views.login_view'),
	(r'^logout/$', 'kapusta.eleven_fingers.views.logout_view'),
	(r'^do_login/$', 'kapusta.eleven_fingers.views.do_login_view'),
	(r'^do_register/$', 'kapusta.eleven_fingers.views.do_register_view'),
	(r'^register/$', 'kapusta.eleven_fingers.views.register_view'),
	(r'^error/$', 'kapusta.eleven_fingers.views.error_view'),
	(r'^eleven_fingers/$', 'kapusta.eleven_fingers.views.eleven_fingers_view'),
	(r'^mystats/$', 'kapusta.eleven_fingers.views.mystats_view'),
	(r'^rank/$', 'kapusta.eleven_fingers.views.rank_view'),
	(r'^game_over/$', 'kapusta.eleven_fingers.views.game_over_view'),
    # Example:
    # (r'^kapusta/', include('kapusta.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # (r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
   	(r'^admin/', include(admin.site.urls)),
)

urlpatterns+=staticfiles_urlpatterns()
