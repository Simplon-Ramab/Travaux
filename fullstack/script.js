var listeEvents;
function traiteResultat(event){
  console.log("resultat", event.target.responseText);
  data = JSON.parse(event.target.responseText);
  console.log('Classe', data.items);
  listeEvents=data.items;
  affichEvent();
  return data;
}
var titre = document.getElementById('titre');
var debut = document.getElementById('debut');
var fin = document.getElementById('fin');
var createur = document.getElementById('createur');
var requete = new XMLHttpRequest();
requete.onloadend = traiteResultat.bind(this);
requete.open("get", "https://www.googleapis.com/calendar/v3/calendars/simplon.co_7sc0sp073u3svukpopmhob9fmg%40group.calendar.google.com/events?key=AIzaSyADm7UvQFnHmkfo_sei1oZoLvx_X-_mhFI", true)
requete.send();


var index =0;



function affichEvent(){
  var titre = document.getElementById('titre');
  var debut = document.getElementById('debut');
  var fin = document.getElementById('fin');
  var createur = document.getElementById('createur');
  var eventCours = listeEvents[index].summary;
  var eventsDebut=listeEvents[index].start.dateTime;
  var eventsFin=listeEvents[index].end.dateTime;
  var createurMail=listeEvents[index].creator.email;
  titre.innerText = eventCours;
  debut.innerText = eventsDebut;
  fin.innerText = eventsFin;
  createur.innerText = createurMail;

// }
