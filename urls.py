from django.conf.urls.defaults import *
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
	(r'^$', 'kapusta.szkielet.views.main_view'),
	(r'^login/$', 'kapusta.szkielet.views.login_view'),
	(r'^logout/$', 'kapusta.szkielet.views.logout_view'),
	(r'^do_login/$', 'kapusta.szkielet.views.do_login_view'),
	(r'^do_register/$', 'kapusta.szkielet.views.do_register_view'),
	(r'^register/$', 'kapusta.szkielet.views.register_view'),
	(r'^error/$', 'kapusta.szkielet.views.error_view'),
	(r'^eleven_fingers/$', 'kapusta.szkielet.views.eleven_fingers_view'),
    # Example:
    # (r'^kapusta/', include('kapusta.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # (r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
   	(r'^admin/', include(admin.site.urls)),
)

urlpatterns+=staticfiles_urlpatterns()
