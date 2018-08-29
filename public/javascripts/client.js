
var anchorTags = document.getElementsByClassName("anchor")

for (var i = anchorTags.length - 1; i >= 0; i--) {
  anchorTags[i].addEventListener("click",function(event){
    console.log(event.target.outerText)
    var sectionName = event.target.outerText
    _hsq.push(['setPath',sectionName])
    _hsq.push(['trackPageView'])
  })
}


var form = document.getElementById("login")

function login(){
  var username = form.children[1].value
  // Send to HubSpot via AJAX Method
});
  console.log('login ran')
}

if(form){
  form.addEventListener("submit",function(e){
    e.preventDefault()
    login()
  })
}

/* Start websocket client */

var reloadSocket = new WebSocket("ws://localhost:3001");

reloadSocket.onerror = function(error) {
  console.log(error)
}

reloadSocket.onmessage = function (event){
  console.log('recieved a message')
  var messageFromServer = JSON.parse(event.data)
  if (messageFromServer.eventType == 'change'){
    console.log(messageFromServer.message)
    location.reload()
  }
}

/* End websocket client */