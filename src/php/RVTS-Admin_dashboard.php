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


//-------- Build Query --------------------------
$sql = "SELECT * FROM Vessel WHERE Speed>0.0";

//------- Execute Query -------------------------
$result = $connection->query($sql);

//------ Build response string ------------------

$responseArray = array();
if($result->num_rows > 0)
{
    while($row=$result->fetch_assoc())
    {
        
        $response = new stdClass();
        $response->id = $row["VesselID"];
        $response->name = $row["VesselName"];
        $response->loadStatus = $row["LoadStatus"];
        $response->loadPercentage = $row["LoadPercentage"];
        $response->lat = $row["Latitude"];
        $response->lng = $row["Longitude"];
        $response->speed = $row["Speed"];
        $response->destination = $row["Destination"];

        array_push($responseArray,$response);
    }
}
    
    $connection->close();
    echo json_encode($responseArray);

?>