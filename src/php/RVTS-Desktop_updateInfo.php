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
$id=$_GET['id'];
$destination =$_GET['destination'];
$loadStatus = $_GET['loadStatus'];
$loadPercentage = $_GET['loadPercentage'];
$latitude = $_GET['latitude'];
$longitude=$_GET['longitude'];
$speed = $_GET['speed'];

//-------- Build Query --------------------------
$sql = "UPDATE Vessel SET Destination='$destination', LoadStatus='$loadStatus',LoadPercentage='$loadPercentage',
Latitude='$latitude',Longitude='$longitude',Speed='$speed' WHERE VesselID='$id'";


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