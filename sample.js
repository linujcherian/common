//Created by Linu Cherian - Sample using Adobe Target at.js
<style>
/* add css */
</style>

<script src="common_atjs.js" type="text/javascript" defer></script>

<script defer>
var mboxname = 'ab_mboxName';
var ttName = 'ab_testName';

if (window.adobe.target && window.atGetOffer) {
    window.atGetOffer(mboxname, ttName);
}

var insMbox = insMbox || {  
  //add code
},
init: function(){ 
  if(!window.ttOffer){
    insMbox.updateDOM();
    insMbox.addClickTracking();
  }
  else { 
    insMbox.tryAgain(arguments); 
  }
},
updateDOM : function(){
  //add code
},
addClickTracking : function(){
  $("main").on("click", element, function(){    
    if (window.adobe.target) {
         window.atTrackEvent(mboxname, ttName, "clicked", "ctaName");
    }
  });
}
if (typeof(window.ttOffer) =="undefined"){
    insMbox.init();        
}                
</script>