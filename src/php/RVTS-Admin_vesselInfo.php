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
$sql = "SELECT * FROM Vessel";

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
        $response->lisenceNo = $row["LisenceNo"];
        $response->category = $row["Category"];
        $response->maxCapacity = $row["MaxCapacity"];
        $response->dimension = $row["Dimension"];
        $response->ownerID = $row["OwnerID"];
        $response->driverID=$row["DriverID"];

        array_push($responseArray,$response);
    }
}
    
    $connection->close();
    echo json_encode($responseArray);

?>