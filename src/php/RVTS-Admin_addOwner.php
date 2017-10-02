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
$firstName =$_GET['firstName'];
$lastName = $_GET['lastName'];
$address = $_GET['address'];
$phoneNo=$_GET['phoneNo'];

//-------- Build Query --------------------------
$sql = "INSERT INTO Owner (FirstName,LastName,Address,PhoneNo)
VALUES ('$firstName','$lastName','$address','$phoneNo')";

//------- Execute Query -------------------------
if($connection->query($sql)===TRUE)
{
    $result ="true";
}
else
{
    $result="false";
}

echo json_encode($result);
//------ Build response string ------------------
    
    
    $connection->close();

?>