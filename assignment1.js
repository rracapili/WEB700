/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Ronald Capili Student ID: radcapili Date: January 20, 2023
*
********************************************************************************/ 


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
httpRequest("GET","/")
