//Created by Linu Cherian
function atGetOffer(mboxname, ttName){
  window.adobe.target.getOffer({   
    "mbox": mboxname, 
    "params": { 
      "name": mboxname, 
      "locale": "en_US",
      "profile.ttName": ttName
  }, 
  "success": function(offer) { 
      var d = new Date;          
        window.adobe.target.applyOffer( {  
           "mbox": mboxname, 
           "profile.ttName": ttName,
           "mboxTime": d.getTime() - (d.getTimezoneOffset() * 60000)
        }); 
        console.log('success ', ttName);
  }, 
  "error": function(status, error) {           
      console.log('Error', status, error); 
  }
  });
}

function atTrackEvent(mboxname, ttName, event, eventName){
  window.adobe.target.trackEvent({
          "mbox": mboxname,
           "params": {
           event : eventName,
           "profile.ttName": ttName
          }
     }); 
}