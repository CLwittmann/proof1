// Custom JS on seperate sheet. Go me

   //document.ready(function(){ 
     //    'use strict';
 

               
        function initMap() {
   
  var uluru = {lat: 41.410001, lng: -122.195010};
  
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 9, center: uluru});
   
  var marker = new google.maps.Marker({position: uluru, title: 'Mt Shasta', icon: 'img/contact/alienIcon.png', map: map});

}       
 



//  });