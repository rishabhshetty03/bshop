<?php
session_start();
$username=$_POST['username'];
$password=$_POST['password'];


$con = mysqli_connect('localhost','root','','log') or die("Connection to database failed, perhaps the service is down !!");


$query = "select * from users where Username = '$username' and password = '$password'";
$result = mysqli_query($con,$query);

if((mysqli_num_rows($result))==1)

{
$users = mysqli_fetch_array($result);
$userid = $users['userid'];
$Qname = "select Username from users where userid='$userid'";		
$resultname = mysqli_query($con,$Qname);
$rowname = mysqli_fetch_array($resultname);
$name = $rowname['Username'];
$_SESSION['username'] = $name;
		
header ('Location: index1.php');
}
else
{
	header ('Location: log.php');
}
?>