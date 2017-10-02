var data;
function loginVerification()
{
    if (window.XMLHttpRequest) // for new browser
    {
        xhttp = new XMLHttpRequest();
    }
    else    // for old IE
    {
        xhttp = ActiveXObject(Microsoft.XMLHTTP); 
    }
    var parameters = "?username=Emruz_Hossain&password=12345";
    
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status==200)
        {
            var response = JSON.parse(this.responseText);
            console.log(response);
            if (response.valid === "true")
            {
                console.log("Valid User");
            }
            else
            {
                console.log("Invalid User");
            }    
        }    
    }
    xhttp.open("GET", "./src/php/RVTS-Admin_loginVerification.php" + parameters, true);
    xhttp.send();
    
}

function adminDashboard()
{
    if (window.XMLHttpRequest) // for new browser
    {
        xhttp = new XMLHttpRequest();
    }
    else    // for old IE
    {
        xhttp = ActiveXObject(Microsoft.XMLHTTP); 
    }
    
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status==200)
        {
            var response = JSON.parse(this.responseText);
             dashboardAddRow(response);
        }    
    }
    xhttp.open("GET", "./src/php/RVTS-Admin_dashboard.php", true);
    xhttp.send();
    
}
function getInfoForMap() {
    if (window.XMLHttpRequest) // for new browser
    {
        xhttp = new XMLHttpRequest();
    }
    else    // for old IE
    {
        xhttp = ActiveXObject(Microsoft.XMLHTTP);
    }

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
           showAllInMap(response);
        }
    }
    xhttp.open("GET", "./src/php/RVTS-Admin_dashboard.php", true);
    xhttp.send();

}
function vesselInfo()
{
    if (window.XMLHttpRequest) // for new browser
    {
        xhttp = new XMLHttpRequest();
    }
    else    // for old IE
    {
        xhttp = ActiveXObject(Microsoft.XMLHTTP); 
    }
    
     xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status==200)
        {
            var response = JSON.parse(this.responseText);
           
        }    
    }
    xhttp.open("GET", "./src/php/RVTS-Admin_vesselInfo.php", true);
    xhttp.send();
    
}

function addVessel(vesselName,lisenseNo,category,maxCapacity,dimension,ownerId,driverId)
{
    if (window.XMLHttpRequest) // for new browser
    {
        xhttp = new XMLHttpRequest();
    }
    else    // for old IE
    {
        xhttp = ActiveXObject(Microsoft.XMLHTTP); 
    }
    
    var parameters = "";
    parameters += "?vesselName=" + vesselName;
    parameters += "&lisenceNo=" + lisenseNo;
    parameters += "&category=" + category;
    parameters += "&maxCapacity=" + maxCapacity;
    parameters += "&dimension=" + dimension;
    parameters += "&ownerId=" + ownerId;
    parameters += "&dirverId=" + driverId;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status==200)
        {
            var response = JSON.parse(this.responseText);
            console.log(response);
        }    
    }
    xhttp.open("GET", "./src/php/RVTS-Admin_addVessel.php" + parameters, true);
    xhttp.send();
    
}

function ownerInfo()
{
    if (window.XMLHttpRequest) // for new browser
    {
        xhttp = new XMLHttpRequest();
    }
    else    // for old IE
    {
        xhttp = ActiveXObject(Microsoft.XMLHTTP); 
    }
    
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status==200)
        {
            var response = JSON.parse(this.responseText);
            console.log(response);
        }    
    }
    xhttp.open("GET", "./src/php/RVTS-Admin_ownerInfo.php", true);
    xhttp.send();
    
}

function addOwner(firstName,lastName,address,phoneNo)
{
    if (window.XMLHttpRequest) // for new browser
    {
        xhttp = new XMLHttpRequest();
    }
    else    // for old IE
    {
        xhttp = ActiveXObject(Microsoft.XMLHTTP); 
    }
    
    var parameters = "";
    parameters += "?firstName=" + firstName;
    parameters += "&lastName=" + lastName;
    parameters += "&address=" + address;
    parameters += "&phoneNo=" + phoneNo;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status==200)
        {
            var response = JSON.parse(this.responseText);
            console.log(response);
        }    
    }
    xhttp.open("GET", "./src/php/RVTS-Admin_addOwner.php" + parameters, true);
    xhttp.send();
    
}

function driverInfo()
{
    if (window.XMLHttpRequest) // for new browser
    {
        xhttp = new XMLHttpRequest();
    }
    else    // for old IE
    {
        xhttp = ActiveXObject(Microsoft.XMLHTTP); 
    }
    
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status==200)
        {
            var response = JSON.parse(this.responseText);
            console.log(response);
        }    
    }
    xhttp.open("GET", "./src/php/RVTS-Admin_driverInfo.php", true);
    xhttp.send();
    
}

function addDriver(firstName,lastName,lisenceNo,experience,phoneNo)
{
    if (window.XMLHttpRequest) // for new browser
    {
        xhttp = new XMLHttpRequest();
    }
    else    // for old IE
    {
        xhttp = ActiveXObject(Microsoft.XMLHTTP); 
    }
    
    var parameters = "";
    parameters += "?firstName=" + firstName;
    parameters += "&lastName=" + lastName;
    parameters += "&lisenceNo=" + lisenceNo;
    parameters += "&experience=" + experience;
    parameters += "&phoneNo=" + phoneNo;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status==200)
        {
            var response = JSON.parse(this.responseText);
            console.log(response);
        }    
    }
    xhttp.open("GET", "./src/php/RVTS-Admin_addDriver.php" + parameters, true);
    xhttp.send();
    
}
//------------------------------ For RVTS-Desktop ----------------------------
function updateVesselInfo(id, destination, loadStatus, loadPercentage, latitude, longitude, speed) {
    if (window.XMLHttpRequest) // for new browser
    {
        xhttp = new XMLHttpRequest();
    }
    else    // for old IE
    {
        xhttp = ActiveXObject(Microsoft.XMLHTTP);
    }
    
    var parameters = "";
    parameters += "?id=" + id;
    parameters += "&destination=" + destination;
    parameters += "&loadStatus=" + loadStatus;
    parameters += "&loadPercentage=" + loadPercentage;
    parameters += "&latitude=" + latitude;
    parameters += "&longitude=" + longitude;
    parameters += "&speed=" + speed;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var response = JSON.parse(this.responseText);
            console.log(response);
        }
    }
    xhttp.open("GET", "./src/php/RVTS-Desktop_updateInfo.php" + parameters, true);
    xhttp.send();
}

function getVesselInfo()
{
    if (window.XMLHttpRequest) // for new browser
    {
        xhttp = new XMLHttpRequest();
    }
    else    // for old IE
    {
        xhttp = ActiveXObject(Microsoft.XMLHTTP); 
    }
    
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status==200)
        {
            var response = JSON.parse(this.responseText);
            console.log(response);
        }    
    }
    xhttp.open("GET", "./src/php/RVTS-Desktop_vesselInfo.php", true);
    xhttp.send();
    
}

//----------------------- RVTS-mobile ----------------------------------
function getTargetVesselInfo(id)
{
    if (window.XMLHttpRequest) // for new browser
    {
        xhttp = new XMLHttpRequest();
    }
    else    // for old IE
    {
        xhttp = ActiveXObject(Microsoft.XMLHTTP); 
    }
    var parameters = "";
    parameters += "?id=" + id;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status==200)
        {
            var response = JSON.parse(this.responseText);
            console.log(response);
        }    
    }
    xhttp.open("GET", "./src/php/RVTS-Mobile_targetVesselInfo.php"+parameters, true);
    xhttp.send();
    
}