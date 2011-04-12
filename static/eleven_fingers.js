var kapusta = {};

kapusta.TIMEOUT=30;
kapusta.COLORCHANGE=15;
kapusta.timeouts = new Array();
kapusta.color = new Array();
kapusta.TEXTLENGTH=30;
kapusta.letters = 'qwertyuiopasdfghjklzxcvbnm ';

kapusta.fade = function(keyval) {
	var id = "klawisz_"+String.fromCharCode(keyval);
	var x = document.getElementById(id);
	colA = '255'; //kapusta.color[keyval].toString();
	colB = (255-kapusta.color[keyval]).toString();
	x.style['background'] = 'rgb('+colA+','+colB+','+colB+')';
	kapusta.color[keyval]-=kapusta.COLORCHANGE;
	if(kapusta.color[keyval]>0){
		kapusta.timeouts[keyval] = setTimeout("kapusta.fade("+keyval.toString()+")", kapusta.TIMEOUT);
	}
}

kapusta.create_fadeout = function(keyval) {
	clearTimeout(kapusta.timeouts[keyval]);
	kapusta.color[keyval]=255;
	kapusta.fade(keyval);
}

kapusta.keypressed = function (ev){
	var keyval = ev.which;
	var maindiv = document.getElementById("eleven_fingers");
	var id = ("klawisz_"+String.fromCharCode(ev.which)).toLowerCase();
	var x = document.getElementById(id);
	if(x) {
		var textline = document.getElementById('textline');
		var line = textline.firstChild.nodeValue;
		if(line.length>kapusta.TEXTLENGTH) {
			line = line.substring(1);
		}
		textline.firstChild.nodeValue = line+String.fromCharCode(keyval);

		keyval = String.fromCharCode(keyval).toLowerCase().charCodeAt(0);
		val = String.fromCharCode(keyval).toLowerCase().charCodeAt(0)

		kapusta.create_fadeout(val);
	}
}

kapusta.create_eleven_fingers = function () {
	var maindiv = document.getElementById("eleven_fingers");
	if(maindiv) {
		textline = document.createElement('div');
		textline.id='textline';
		textline.appendChild(document.createTextNode(': '));
		maindiv.appendChild(textline);
		maindiv.appendChild(document.createElement('br'));

		document.onkeypress = kapusta.keypressed;
		for(var i in kapusta.letters){
			var klawisz = kapusta.letters[i];
			//kapusta.timeouts[i] = setTimeout("", 1);
			var id = "klawisz_"+klawisz;
			var span = document.createElement("span");
			var tekst = "-" + klawisz + "-";
			if(klawisz==" ") tekst="____________";
			span.appendChild(document.createTextNode(tekst));
			span.id = id;
			span.setAttribute ('class', 'klawisz_eleven_fingers');
			maindiv.appendChild(span);
			if(klawisz=='p' || klawisz=='l' || klawisz=='m') 
				maindiv.appendChild(document.createElement('br'));
		}
	}
}

kapusta.process = function () {
	kapusta.create_eleven_fingers();
}
