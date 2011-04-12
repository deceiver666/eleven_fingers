# Create your views here.
from django.http import HttpRequest
from django.shortcuts import render_to_response, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.template import RequestContext
from szkielet.models import SimpleStats
from django.db import IntegrityError

licznik=0

def main_view(request):
	global licznik

	try:
		visits = SimpleStats.objects.get(stat_name='visits')
	except Exception:
		visits = SimpleStats(stat_name='visits', value=0)
		visits.save()
	visits.value += 1
	visits.save()

	stats = SimpleStats.objects.all()
	licznik+=1
	debug=''
	user = request.user
	return render_to_response('main.html', {'licznik': licznik, 'debug': debug, 'user': request.user, 'stats': stats})

def login_view(request):
	return render_to_response('login.html', {'user': request.user}, context_instance=RequestContext(request))

def do_login_view(request):
	username = request.POST['username']
	password = request.POST['password']
	user = authenticate(username=username, password=password)
	if user is not None:
		login(request, user)
		return render_to_response('login.html', {'user': user})
	else:
		return render_to_response('login.html', {'message': 'Bad username/password combination. Try again.'},
				context_instance=RequestContext(request))

def logout_view(request):
	logout(request)
	return redirect('/')

def register_view(request):
	return render_to_response('register.html', {'user': request.user}, context_instance=RequestContext(request))

def do_register_view(request):
	login = request.POST['login']
	password = request.POST['password']
	confirm = request.POST['confirm']
	email = request.POST['email']
	nickname = request.POST['nickname']
	#user = User(username=login, first_name=nickname, last_name='pazdzioch',
			#email=email, password=password, is_staff=False, is_superuser=False)
	#user.save()
	try:
		user = User.objects.create_user(login, email, password)
		user.save()
	except IntegrityError:
		return redirect('/error/', {'message': 'test'})
	return redirect('/')

def error_view(request):
	return render_to_response('error.html',{'user': request.user})

def eleven_fingers_view(request):
	return render_to_response('eleven_fingers.html',{'user': request.user})
