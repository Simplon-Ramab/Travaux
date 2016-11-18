
<?php
try {
  $bdd =new PDO('mysql:host=localhost;dbname=evenement;charset=utf8', 'root','');
} catch (Exception $e) {
  die('Erreur : '.$e->getMessage());
}
$titre = $_POST['titre'];
$debut = $_POST['debut'];
$fin = $_POST['fin'];
$createur = $_POST['createur'];

$reponse=$bdd->prepare('INSERT INTO events (titre, debut, fin, createur) VALUES(?, ?, ?, ?)');
$reponse->execute(array(
  $_POST['titre'],
$_POST['debut'],
  $_POST['fin'],
  $_POST['createur']
));
$ex = file_get_contents("https://www.googleapis.com/calendar/v3/calendars/simplon.co_7sc0sp073u3svukpopmhob9fmg%40group.calendar.google.com/events?key=AIzaSyADm7UvQFnHmkfo_sei1oZoLvx_X-_mhFI");
$parse = json_decode($ex)->{'items'};
for($i=0;$i < sizeof($parse); $i++){
	if(isset($parse[$i]->{'summary'} ) AND $parse[$i]->{'summary'} != null AND isset($parse[$i]->{'creator'}->{"email"} ) AND $parse[$i]->{'creator'}->{"email"} != null AND isset($parse[$i]->{'start'}->{"dateTime"} ) AND $parse[$i]->{'start'}->{"dateTime"} != null AND isset($parse[$i]->{'end'}->{"dateTime"} ) AND $parse[$i]->{'end'}->{"dateTime"} != null){
		$title = $parse[$i]->{'summary'};
		$creator = $parse[$i]->{'creator'}->{'email'};
		$debut = $parse[$i]->{'start'}->{'dateTime'};
		$fin = $parse[$i]->{'end'}->{'dateTime'};
		echo $title." ".$creator." ".$debut." ".$fin."<hr />";
	}
}
header('Location:index.php');
 ?>
