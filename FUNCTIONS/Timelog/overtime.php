<?php
require_once('../connect.php');
require_once('../../CLASSES/Overtime.php');

$class = new Overtime(
							NULL,
							$_POST['time_from'],
							$_POST['time_to'],
							$_POST['employees_pk'],
							NULL,
							NULL
						);
$extra['supervisor_pk'] = $_POST['supervisor_pk'];
$data = $class->overtime($_POST,$extra);

header("HTTP/1.0 404 User Internal Server Error");
if($data['status']){
	header("HTTP/1.0 200 OK");
}

header('Content-Type: application/json');
print(json_encode($data));

?>