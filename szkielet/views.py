# Create your views here.
# -*- coding: utf-8 -*-
from django.http import HttpRequest
from django.shortcuts import render_to_response, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.template import RequestContext
from szkielet.models import SimpleStats, Game
from django.db import IntegrityError
from django.core.context_processors import csrf
from django.db.models import Avg, Max, Min, Count
import datetime

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
	#user = User(username=login, first_name=nickname, last_name='pazdzioch',
			#email=email, password=password, is_staff=False, is_superuser=False)
	#user.save()
	if password!=confirm:
		return render_to_response('register.html',{'message': u'Hasło i jego potwierdzenie się nie zgadzają. Spróbuj ponownie.'}, context_instance=RequestContext(request))

	try:
		user = User.objects.create_user(login, email, password)
		user.save()
	except IntegrityError:
		return redirect('/', {'message': 'test'})
	return render_to_response('register.html',{'message': u'Rejestracja przebiegła pomyślnie. Możesz się teraz zalogować.'}, context_instance=RequestContext(request))

def mystats_view(request):
	myGames = Game.objects.filter( user = request.user);
	numberOfGames = myGames.count(); 
	myGames = myGames.order_by('-date'); 
	if numberOfGames != 0 :
		bestScore = myGames.aggregate(Max('score'))['score__max'];
		avgScore = myGames.aggregate(Avg('score'))['score__avg'];
	else :
		bestScore = 0 
		avgScore = 0
	avgScore = round(avgScore,2);	

	if numberOfGames > 10 :
		lastGames = myGames[:10]
	else :
		lastGames = myGames
		
	return render_to_response('mystats.html', {'user': request.user, 'numberOfGames': numberOfGames, 
										'bestScore': bestScore,
										'avgScore' : avgScore,
										'lastGames': lastGames})

def rank_view(request):
	ranking = User.objects.annotate( best_score = Max('game__score')).values('username', 'best_score');
	ranking = ranking.exclude(best_score='None');
	ranking = ranking.order_by('-best_score');
	return render_to_response('rank.html', {'user': request.user, 'ranking': ranking})

def error_view(request):
	return render_to_response('error.html',{'user': request.user})

def eleven_fingers_view(request):
	return render_to_response('eleven_fingers.html',{'user': request.user}, context_instance=RequestContext(request))

def game_over_view(request):
	score = request.POST['score']
	if request.user.is_authenticated() :
		game = Game(user = request.user, date = datetime.datetime.now(), score = score)
		game.save()
	return render_to_response('game_over.html', {'user': request.user, 'score' : score})
