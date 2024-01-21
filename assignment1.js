/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Ronald Capili Student ID: radcapili Date: January 20, 2023
*
********************************************************************************/ 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var serverVerbs = ["GET","GET","GET","POST","GET","POST"]
var serverPaths = ["/","/about","/contact","/login","/panel","/logout"]
var serverResponses = ["Welcome to WEB700 Assignment 1","This assignment was prepared by Ronald Capili","Ronald Capili: radcapili@myseneca.ca","User Logged In","Main Panel","Logout Complete"]

// httpRequest function accepts two parameters, `httpVerb` and `path`.
function httpRequest(httpVerb, path) {
    var httpStatus = "404: "
    var httpResponse = httpStatus + "Unable to process " + httpVerb + " request for " + path
    for (var x = 0; x < serverPaths.length; x++) {
        if (httpVerb == "GET"){
            if (path == serverPaths[x] && (x==0 || x==1 || x==2 || x==4)){
                httpStatus = "200: "
                httpResponse=httpStatus+serverResponses[x]
                break
            }
        }
        else if (httpVerb == "POST"){
            if (path == serverPaths[x] && (x==3 || x==5)){
                httpStatus = "200: "
                httpResponse=httpStatus+serverResponses[x]
                break
            }
        }
      }
    console.log(httpResponse)
}


function automateTests(){
    var testVerbs = ["GET","POST"]
    var testPaths = ["/","/about","/contact","/login","/panel","/logout","/randomPath1","/randomPath2"]

    function randomRequest(){
        var randVerb = getRandomInt(2)
        var randPath = getRandomInt(8)
        console.log(randVerb + ", " + randPath)
        httpRequest(testVerbs[randVerb],testPaths[randPath])
    }
    setInterval(randomRequest,1000)

}

automateTests()
