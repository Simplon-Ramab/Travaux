
<?php
if (isset($_POST['login']) && isset($_POST['password']) ) {
    try {
        $bdd = new PDO('mysql:host=localhost;dbname=login;charset=utf8', 'root', '');
    }
    catch (Exception $e) {
        die('Erreur : ' . $e->getMessage());
    }
    $login = $_POST['login'];
    $mdp = $_POST['password'];

    $db = $bdd->prepare("INSERT INTO `membres`(`login`, `password`) VALUES (:login,:password)");
    $db->execute(array(
        'login' => $login,
        'password' => md5($mdp)
        ));
    echo $_POST['login'] . " vous etes bien enregistré !" ;
    // header('location: membre.php');
} else {
    echo "erreur";
}

?>
