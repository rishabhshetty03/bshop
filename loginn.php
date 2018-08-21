<?php
include 'core/init.php';

if(empty($_POST) === false)
{
	$username = $_POST['username'];
	$password = $_POST['password'];
	
	if (empty($username)== true ||empty($password)==true)
	{
		$errors[]='you need to enter a username and password';
		
}
else if(user_exists($username)=== false)
{
	$errors[]='we cant findusername and password';
}
else if(user_active($username)=== false)
{
	$errors[]='You havent activated ur account';
}
else{
	$login=login($username,$password);
	if($login==false)
	{
		$errors[]="username and password doesnt match "
	}
	else{
		
		$_session['uid']=$login;
		header('Location:index.html');
		exit();
	}
}
print_r($errors);

}
?>