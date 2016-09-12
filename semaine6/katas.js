//Écrivez une fonction hello() qui :renvoie "Hello LeNom!" si un "LeNom" est passé en paramètre renvoie "Hello World!" si aucun paramètre n'est passé


function hello(nom){
	if(nom===undefined){
	   return "Hello World!"
}
else{
    return "Hello "+ nom+"!";
}
}
hello("Joe");
hello();

//Secondes en minutes Écrivez une fonction sec2m() qui convertit des secondes en minutes et secondes

function sec2m(sec){
 var minutes =Math.floor( sec/60);
var secondes=sec%60;
if(sec<=60){
return secondes+"s";
}
else{
	return minutes+"m"+secondes+"s";
}
}
sec2m(123);// renvoie '2m 3s'
sec2m(53);// renvoie '53s'
}
