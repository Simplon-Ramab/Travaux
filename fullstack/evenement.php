
<?php
try {
  $bdd =new PDO('mysql:host=mysql.hostinger.fr;dbname=u795502412_ramas;charset=utf8', 'u795502412_rama','fatou12');
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
header('Location:index.php');
 ?>
