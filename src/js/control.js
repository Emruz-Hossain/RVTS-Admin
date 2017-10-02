var lat, lng, vname;
function dashboardAddRow(data)
{
    var runnigVessel = data.length;
    var registeredVessel = 50;
    var endangered_flag = 0;
    $("#endangered_div").css("display", "none");
    for (var i = 1; i <= data.length; i++)
    {
        
        if (data[i - 1].loadStatus === "Safe")
        {

            $("#db_tbody").append("<tr><td>"+i+"</td><td>"+data[i-1].name+"</td><td>"+data[i-1].destination+"</td><td>"+data[i-1].loadStatus+"</td><td>"+data[i-1].loadPercentage+"%</td><td>"+data[i-1].lat+"</td><td>"+data[i-1].lng+"</td><td>"+data[i-1].speed+"kmph</td></tr>");
        }
        else
        {
            $("#db_tbody").append("<tr class=\"w3-red\"><td>"+i+"</td><td>"+data[i-1].name+"</td><td>"+data[i-1].destination+"</td><td>"+data[i-1].loadStatus+"</td><td>"+data[i-1].loadPercentage+"%</td><td>"+data[i-1].lat+"</td><td>"+data[i-1].lng+"</td><td>"+data[i-1].speed+"kmph</td></tr>");
        }
        if (data[i - 1].loadStatus === "Emergency")
        {
            endangered_flag = 1;
            lat = data[i - 1].lat;
            lng = data[i - 1].lng;
            vname = data[i - 1].name;
            $("#endangered_table_body").append("<tr onclick=\"showEndangeredVesselInMap();\" class=\"w3-hover-teal\"><td>"+data[i-1].name+"</td><td>"+data[i-1].destination+"</td><td>Emergency</td><td>"+data[i-1].lat+"</td><td>"+data[i-1].lng+"</td></tr>");
        }    
    }
    $("#db_card_running_vessel").text(runnigVessel);
    $("#db_card_stopped_vessel").text(registeredVessel - runnigVessel);
    if (endangered_flag == 1)
        $("#endangered_div").css("display", "block");    
}
function showEndangeredVesselInMap()
{
    setEmergencyVesselsLocation(lat, lng, vname);
    $("#template").load("./src/html/emergencyMap.html");
}

function loadMap()
{
    setActive("#navMap");
    $("#template").load("./src/html/map.html");
}
function Start()
{
    setActive("#navDB");
    $("#template").load("./src/html/dashboard.html");

}

function setActive(id) {

    //-------Set all nav link as inactive----------------
    $("#navDB").removeClass("active");
    $("#navMap").removeClass("active");
    $("#navVessel").removeClass("active");
    $("#navOwner").removeClass("active");
    $("#navDriver").removeClass("active");

    //----------Set desired nav link as active ----------
    $(id).addClass("active");


}