<?php
function logged_in()
{ 
	return(isset($_session['uid']))?true:false;
}																																																																																
function user_exists($username)
{
	$username=sanitize($username);
	$query= mysql_query("SELECT COUNT ('uid') FROM 'users' where 'username'='$username'");
return(mysql_result($query,0)==1)?true:false;
	}
	function user_active($username)
{
	$username=sanitize($username);
	$query= mysql_query("SELECT COUNT ('uid') FROM 'users' where 'username'='$username' AND 'active'=1 ");
return(mysql_result($query,0)==1)?true:false;
	}
	
	function uid_from_username($username)
	{
		
		$username=sanitize($username);
		return mysql_result(mysql_query("SELECT 'uid' FROM 'users' where 'username'='$username'"),0,'uid');
	}
	function login($username,$password)
	{
		$uid=uid_from_username($username);
		$username=sanitize($username);
		$password =md5($password);
		return (mysql_result(mysql_query("SELECT COUNT('uid')FROM 'users' WHERE 'username'='$username' AND 'password'='$password'" ),0)==1)?$uid:false;
		
	}
?>