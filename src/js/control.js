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

function loadVesselList()
{
    setActive("#navVessel");
    $("#template").load("./src/html/vesselList.html");
}

function loadOwnerList() {
    setActive("#navOwner");
    $("#template").load("./src/html/ownerList.html");
}

function loadDriverList() {
    setActive("#navDriver");
    $("#template").load("./src/html/driverList.html");
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


function showRegisteredVessel(data) {
    for (var i = 1; i <= data.length; i++) {

        $("#vessel_list_tbody").append("<tr><td>" + data[i - 1].id + "</td><td>" + data[i - 1].name + "</td><td>" + data[i - 1].lisenceNo + "</td><td>" + data[i - 1].category + "</td><td>" + data[i - 1].maxCapacity + " tons</td><td>" + data[i - 1].dimension + "</td><td>" + data[i - 1].ownerID + "</td><td>" + data[i - 1].driverID + "</td></tr>");
    }
    var table = document.getElementById("vessel_info_table");
    if (table != null)
    {
        for (var i = 0; i < table.rows.length; i++)
        {
           
            table.rows[i].onclick = function () {
                var info=[];
                info[0] = $(this).find(':nth-child(1)').text();
                info[1] = $(this).find(':nth-child(2)').text();
                info[2] = $(this).find(':nth-child(3)').text();
                info[3] = $(this).find(':nth-child(4)').text();
                info[4] = $(this).find(':nth-child(5)').text();
                info[5] = $(this).find(':nth-child(6)').text();
                info[6] = $(this).find(':nth-child(7)').text();
                info[7] = $(this).find(':nth-child(8)').text();
                 showSingleVesselInfo(info);
            }
        }    
    }    
}

function showSingleVesselInfo(info) {
    $("#template").load("./src/html/singleVesselInfo.html");
    setTimeout(function () {
        $("#svi-id").text(info[0]);
        $("#svi-name").text(info[1]);
        $("#svi-lisence").text(info[2]);
        $("#svi-category").text(info[3]);
        $("#svi-capacity").text(info[4]);
        $("#svi-dimension").text(info[5]);
    },100);
}

function showOwnerList(data) {
    for (var i = 1; i <= data.length; i++) {

        $("#owner_list_tbody").append("<tr><td>" + data[i - 1].id + "</td><td>" + data[i - 1].firstName + " " + data[i - 1].lastName + "</td><td>" + data[i - 1].address + "</td><td>" + data[i - 1].phoneNo + "</td></tr>");
    }
}
function showDriverList(data) {
    for (var i = 1; i <= data.length; i++) {

        $("#driver_list_tbody").append("<tr><td>" + data[i - 1].id + "</td><td>" + data[i - 1].firstName + " " + data[i - 1].lastName + "</td><td>"+data[i-1].drivingLisenceNo+"</td><td>"+data[i-1].experience+"</td><td>" + data[i - 1].phoneNo + "</td></tr>");
    }
}