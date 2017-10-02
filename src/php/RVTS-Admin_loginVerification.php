<?php
$dbhost = "localhost";
$dbuser = "emruzcom_rvtsUsr";
$dbpass = "rvtsusr";
$dbname = "rvtsDB";

//----- connect to MySQL Server--------------
$connection = new mysqli($dbhost,$dbuser,$dbpass,$dbname);
if($connection->connect_error)
{
    die("Connection Failed: ".$connection->connect_error);
}


//----- Retrive data from Query String-------
$username = $_GET['username'];
$password = $_GET['password'];


//-------- Build Query --------------------------
$sql = "SELECT * FROM Admin WHERE UserName='$username' AND Password = '$password' ";

//------- Execute Query -------------------------
$result = $connection->query($sql);

//------ Build response string ------------------
$response = new stdClass();
if($result->num_rows > 0)
{
    $response->valid = "true";
}
else
    $response->valid = "false";

 $connection->close();
echo json_encode($response);

?>