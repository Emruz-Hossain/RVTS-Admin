var lat = 22.43323;
var lng = 91.234324;
var vesselName = "MV test";


function setEmergencyVesselsLocation(latt, long,name)
{
    lat = latt;
    lng = long;
    vesselName = name;
}
function initEmergencyMap() {
    //make sure that your API is enabled at https://console.developers.google.com/apis/api/geolocation/overview?project=rvts-desktop-app-1493546896586&duration=PT1H
     var windowHeight = $(window).height();
    $("#map").css("height", windowHeight - 50);
    $("#template").css("padding-left", "0%");
    $("#template").css("padding-right", "0%");
    map = new google.maps.Map(document.getElementById('map2'), {
        center: new google.maps.LatLng(lat,lng),
        zoom: 12
    });
    var vesselInfo = "<div><p class=\"text-center\">" + vesselName + "<br>Lat: " + lat + "<br>Long: " + lng + "</div>";
    var infowindow = new google.maps.InfoWindow({
        content: vesselInfo
    });
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        map: map,

        title: vesselName
    });
    infowindow.open(map, marker);
}

function showAllInMap(allVesselInfo)
{
    console.log(allVesselInfo);
    var windowHeight = $(window).height();
    $("#map").css("height", windowHeight - 50);
    $("#template").css("padding-left", "0%");
    $("#template").css("padding-right", "0%");
    map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(allVesselInfo[0].lat, allVesselInfo[0].lng),
        zoom: 9
    });
    for (var i = 0; i < allVesselInfo.length; i++)
    {
        var vesselInfo = "<div><p class=\"text-center\">"+allVesselInfo[i].name+"<br>Dest: "+allVesselInfo[i].destination+"<br>Lat: "+allVesselInfo[i].lat+"<br>Long: "+allVesselInfo[i].lng+"<br>Speed:"+allVesselInfo[i].speed+"kmph</div>";
        var infowindow = new google.maps.InfoWindow({
            content: vesselInfo
        });

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(allVesselInfo[i].lat, allVesselInfo[i].lng),
            map: map,
            
            title: allVesselInfo[i].name
        });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });
        infowindow.open(map, marker);
    }    
}

function showMap() {
    getInfoForMap();
}