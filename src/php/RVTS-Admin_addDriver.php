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
$lisenceNo = $_GET['lisenceNo'];
$experience = $_GET['experience'];
$phoneNo=$_GET['phoneNo'];

//-------- Build Query --------------------------
$sql = "INSERT INTO Driver (FirstName,LastName,DrivingLisenceNo,Experience,PhoneNo)
VALUES ('$firstName','$lastName','$lisenceNo','$experience','$phoneNo')";

//------- Execute Query -------------------------
if($connection->query($sql)==TRUE)
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