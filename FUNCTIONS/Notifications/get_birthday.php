<?php
require_once('../connect.php');
require_once('../../CLASSES/Birthday.php');

$class = new Birthday_theme(
						Null, 
						Null,
						Null,
						Null,
						Null,
						Null
					);
$data = $class->get_birthday();

header("HTTP/1.0 404 User Not Found");
if($data['status']){
	header("HTTP/1.0 200 OK");
}

header('Content-Type: application/json');
print(json_encode($data));
?>