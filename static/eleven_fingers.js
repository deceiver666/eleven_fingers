var kapusta = {};

kapusta.TIMEOUT=30;
kapusta.COLORCHANGE=15;
kapusta.timeouts = new Array();
kapusta.color = new Array();
kapusta.TEXTLENGTH=30;
kapusta.letters = 'qwertyuiopasdfghjklzxcvbnm ';
kapusta.score = 0;
kapusta.wordNumber = 20;
kapusta.wordSpeed = new Array();
kapusta.maxSpeed = 1;
kapusta.minSpeed = 1;
kapusta.wordTop= new Array();
kapusta.lives = 10;
kapusta.dict = new Array("able","about","account","acid","across","act","addition","adjustment","advertisement","after","again","against","agreement","air","all","almost","among","amount","amusement","and","angle","angry","animal","answer","ant","any","apparatus","apple","approval","arch","argument","arm","army","art","as","at","attack","attempt","attention","attraction","authority","automatic","awake","baby","back","bad","bag","balance","ball","band","base","basin","basket","bath","be","beautiful","because","bed","bee","before","behaviour","belief","bell","bent","berry","between","bird","birth","bit","bite","bitter","black","blade","blood","blow","blue","board","boat","body","boiling","bone","book","boot","bottle","box","boy","brain","brake","branch","brass","bread","breath","brick","bridge","bright","broken","brother","brown","brush","bucket","building","bulb","burn","burst","business","but","butter","button","by","cake","camera","canvas","card","care","carriage","cart","cat","cause","certain","chain","chalk","chance","change","cheap","cheese","chemical","chest","chief","chin","church","circle","clean","clear","clock","cloth","cloud","coal","coat","cold","collar","colour","comb","come","comfort","committee","common","company","comparison","competition","complete","complex","condition","connection","conscious","control","cook","copper","copy","cord","cork","cotton","cough","country","cover","cow","crack","credit","crime","cruel","crush","cry","cup","cup","current","curtain","curve","cushion","damage","danger","dark","daughter","day","dead","dear","death","debt","decision","deep","degree","delicate","dependent","design","desire","destruction","detail","development","different","digestion","direction","dirty","discovery","discussion","disease","disgust","distance","distribution","division","do","dog","door","doubt","down","drain","drawer","dress","drink","driving","drop","dry","dust","ear","early","earth","east","edge","education","effect","egg","elastic","electric","end","engine","enough","equal","error","even","event","ever","every","example","exchange","existence","expansion","experience","expert","eye","face","fact","fall","false","family","far","farm","fat","father","fear","feather","feeble","feeling","female","fertile","fiction","field","fight","finger","fire","first","fish","fixed","flag","flame","flat","flight","floor","flower","fly","fold","food","foolish","foot","for","force","fork","form","forward","fowl","frame","free","frequent","friend","from","front","fruit","full","future","garden","general","get","girl","give","glass","glove","go","goat","gold","good","government","grain","grass","great","green","grey","grip","group","growth","guide","gun","hair","hammer","hand","hanging","happy","harbour","hard","harmony","hat","hate","have","he","head","healthy","hear","hearing","heart","heat","help","high","history","hole","hollow","hook","hope","horn","horse","hospital","hour","house","how","humour","ice","idea","if","ill","important","impulse","in","increase","industry","ink","insect","instrument","insurance","interest","invention","iron","island","jelly","jewel","join","journey","judge","jump","keep","kettle","key","kick","kind","kiss","knee","knife","knot","knowledge","land","language","last","late","laugh","law","lead","leaf","learning","leather","left","leg","let","letter","level","library","lift","light","like","limit","line","linen","lip","liquid","list","little","living","lock","long","look","loose","loss","loud","love","low","machine","make","male","man","manager","map","mark","market","married","mass","match","material","may","meal","measure","meat","medical","meeting","memory","metal","middle","military","milk","mind","mine","minute","mist","mixed","money","monkey","month","moon","morning","mother","motion","mountain","mouth","move","much","muscle","music","nail","name","narrow","nation","natural","near","necessary","neck","need","needle","nerve","net","new","news","night","no","noise","normal","north","nose","not","note","now","number","nut","observation","of","off","offer","office","oil","old","on","only","open","operation","opinion","opposite","or","orange","order","organization","ornament","other","out","oven","over","owner","page","pain","paint","paper","parallel","parcel","part","past","paste","payment","peace","pen","pencil","person","physical","picture","pig","pin","pipe","place","plane","plant","plate","play","please","pleasure","plough","pocket","point","poison","polish","political","poor","porter","position","possible","pot","potato","powder","power","present","price","print","prison","private","probable","process","produce","profit","property","prose","protest","public","pull","pump","punishment","purpose","push","put","quality","question","quick","quiet","quite","rail","rain","range","rat","rate","ray","reaction","reading","ready","reason","receipt","record","red","regret","regular","relation","religion","representative","request","respect","responsible","rest","reward","rhythm","rice","right","ring","river","road","rod","roll","roof","room","root","rough","round","rub","rule","run","sad","safe","sail","salt","same","sand","say","scale","school","science","scissors","screw","sea","seat","second","secret","secretary","see","seed","seem","selection","self","send","sense","separate","serious","servant","sex","shade","shake","shame","sharp","sheep","shelf","ship","shirt","shock","shoe","short","shut","side","sign","silk","silver","simple","sister","size","skin","skirt","sky","sleep","slip","slope","slow","small","smash","smell","smile","smoke","smooth","snake","sneeze","snow","so","soap","society","sock","soft","solid","some","son","song","sort","sound","soup","south","space","spade","special","sponge","spoon","spring","square","stage","stamp","star","start","statement","station","steam","steel","stem","step","stick","sticky","stiff","still","stitch","stocking","stomach","stone","stop","store","story","straight","strange","street","stretch","strong","structure","substance","such","sudden","sugar","suggestion","summer","sun","support","surprise","sweet","swim","system","table","tail","take","talk","tall","taste","tax","teaching","tendency","test","than","that","the","then","theory","there","thick","thin","thing","this","thought","thread","throat","through","through","thumb","thunder","ticket","tight","till","time","tin","tired","to","toe","together","tomorrow","tongue","tooth","top","touch","town","trade","train","transport","tray","tree","trick","trouble","trousers","true","turn","twist","umbrella","under","unit","up","use","value","verse","very","vessel","view","violent","voice","waiting","walk","wall","war","warm","wash","waste","watch","water","wave","wax","way","weather","week","weight","well","west","wet","wheel","when","where","while","whip","whistle","white","who","why","wide","will","wind","window","wine","wing","winter","wire","wise","with","woman","wood","wool","word","work","worm","wound","writing","wrong","year","yellow","yes","yesterday","you","young");
kapusta.nrOfWordsInDict=848;
kapusta.frequencyOfWords = 1500;

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

kapusta.game = function(){
	for(i=0;i<kapusta.wordNumber;i++){	
		kapusta.create_word(i);
	}
	kapusta.down_words();
	kapusta.activateWord();
}

kapusta.game_over = function(){
	if( kapusta.lives < 1 ){

			document.getElementById("endOfAGame").elements["score"].value = kapusta.score; 		
			document.getElementById("endOfAGame").submit();
		
	}
}

kapusta.activateWord = function(){
	var flaga=0;
	for(i=0;i<kapusta.wordNumber;i++){
		if(kapusta.wordTop[i]==0 && flaga==0){
			var word = document.getElementById("word"+i);
			word.style['top'] = "1px";
			word.style['left'] = (Math.floor(Math.random()*425))+'px';
			var tekst = kapusta.dict[Math.floor(Math.random()*kapusta.nrOfWordsInDict)];
	 		word.firstChild.nodeValue = tekst;
			kapusta.wordSpeed[i] = Math.floor(Math.random()*(kapusta.maxSpeed-kapusta.minSpeed))+kapusta.minSpeed;
			kapusta.wordTop[i]=1;
			word.style['display'] = "inline";
			flaga=1;
		}		
	}
	setTimeout(kapusta.activateWord,kapusta.frequencyOfWords);
}

		
kapusta.create_word = function(N){
	var mainboard = document.getElementById("mainboard");
	var word = document.createElement("span");	
	var tekst = kapusta.dict[Math.floor(Math.random()*kapusta.nrOfWordsInDict)];
	word.appendChild(document.createTextNode(tekst));
	word.id = "word"+N;
	word.setAttribute('class', 'word_eleven_fingers');
	word.style['top'] = '1px';  
	word.style['left'] = (Math.floor(Math.random()*425))+'px';
	word.style['display']= "none";
	kapusta.wordTop[N]=0; 	
	kapusta.wordSpeed[N]= Math.floor(Math.random()*(kapusta.maxSpeed-kapusta.minSpeed))+kapusta.minSpeed;
	mainboard.appendChild(word); 
}

kapusta.down_words = function(){
	for(i = 0 ; i < kapusta.wordNumber ; i++){
		if(kapusta.wordTop[i]!=0){
			var word = document.getElementById("word"+i);
			kapusta.wordTop[i]+=kapusta.wordSpeed[i];
			word.style['top'] = kapusta.wordTop[i]+"px";
			if(kapusta.wordTop[i]>370){
				kapusta.lives--;
				kapusta.game_over();
				kapusta.wordTop[i] = 0;
				word.style['display']="none";
			}
		}
	}
	setTimeout(kapusta.down_words,50)
	
} 

kapusta.checkwords = function(line){
	for(i=0; i<kapusta.wordNumber; i++){
		if(kapusta.wordTop[i]!=0){
			var word = document.getElementById("word"+i);
			if(":"+word.firstChild.nodeValue == line){
				kapusta.score++;
                if(kapusta.score %10 == 0){
                    kapusta.maxSpeed++;
                    if(kapusta.frequencyOfWords>500) kapusta.frequencyOfWords-=50;
                }
				kapusta.wordTop[i]=0;
				word.style['display']="none";
			}
		}
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
			line = ":"+line.substring(2);
		}
		
		if(String.fromCharCode(keyval).toLowerCase()==' '){
			kapusta.checkwords(line);
			line = ":";		
								
		}
		else{
			line = line+String.fromCharCode(keyval).toLowerCase();
		}
		textline.firstChild.nodeValue = line;
		

		
		keyval = String.fromCharCode(keyval).toLowerCase().charCodeAt(0);
		val = String.fromCharCode(keyval).toLowerCase().charCodeAt(0);

		kapusta.create_fadeout(val);

		if (typeof ev.preventDefault != "undefined") {
			ev.preventDefault();
		} else {
			alert('prevent default undefined :{');
		}

	}
}

kapusta.create_eleven_fingers = function () {
	var maindiv = document.getElementById("eleven_fingers");
	if(maindiv) {
		textline = document.createElement('div');
		textline.id='textline';
		textline.appendChild(document.createTextNode(":"));
		maindiv.appendChild(textline);
		maindiv.appendChild(document.createElement('br'));

		mainboard = document.createElement('div');
		mainboard.id = 'mainboard';
		maindiv.appendChild(mainboard);
		//kapusta.mainboardX = mainboard.style['top'];
		//kapusta.mainboardY = mainboard.style['left'];
		kapusta.game();
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
