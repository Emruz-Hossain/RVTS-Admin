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
$vesselName =$_GET['vesselName'];
$lisenceNo = $_GET['lisenceNo'];
$category = $_GET['category'];
$maxCapacity=$_GET['maxCapacity'];
$dimension=$_GET['dimension'];
$ownerId=$_GET['ownerId'];
$dirverId=$_GET['dirverId'];

//-------- Build Query --------------------------
$sql = "INSERT INTO Vessel (VesselName,LisenceNo,Category,MaxCapacity,Dimension,OwnerID,DriverID)
VALUES ('$vesselName','$lisenceNo','$category','$maxCapacity','$dimension','$ownerId','$dirverId')";

//------- Execute Query -------------------------
$result = $connection->query($sql);

echo json_encode($result);
//------ Build response string ------------------
    
    
    $connection->close();

?>