window.onload = function(){ 

var map;




//*****************
//login functionality
// var lock = new Auth0Lock('q1fsov60Bn2PtGahSM5BDyNPxDkkshv0', 'shuajo.auth0.com');


// var btn_login = document.getElementById('btn-login');

// btn_login.addEventListener('click', function() {
//   lock.show();
// });

// lock.on("authenticated", function(authResult) {
//   lock.getProfile(authResult.idToken, function(error, profile) {
//     if (error) {
//       // Handle error
//       return;
//     }
//     localStorage.setItem('id_token', authResult.idToken);
//     // Display user information
//     show_profile_info(profile);
//   });
// });
//login functionality
//******************

//funtionality to get user input
$("#submit").on("click", function(event) {


        var city = $("#city-input").val().trim();
        console.log(city);

        var queryURL = "https://www.numbeo.com/api/city_prices?api_key=6b2rzozbl9v8lu&query=" + city;

        var queryURLMap = "https://maps.googleapis.com/maps/api/geocode/json?address=" + city + "&key=AIzaSyAh-Wh3wjiHHjHMn7s7Z3uEbanawdTN7sU";

        $.ajax({
            	url: queryURLMap,
            	method: "GET"
            })

            .done(function(response){

            	var longLat = response.results[0].geometry.location;
            	console.log(longLat);
            	
            	addMarker(longLat);

            
 		});




    // // Testing the addMarker function
    // CentralPark = new google.maps.LatLng(37.7699298, -122.4469157);
    // addMarker(CentralPark);

        $.ajax({
            url: queryURL,
            method: "GET"
        })

        .done(function(response) {

            var results = response.prices[19].average_price;

            results = (3.78541 * results).toFixed(2)




            $('#city-div').html('');
            $('#city-div').prepend("<p>Average Gas Price per Gallon = $" + results + "</p>");




        });

    });

}


//*************************************
//map
function initMap() {
		        var usa = {lat: 37.0902, lng: -95.7129};
		        var map = new google.maps.Map(document.getElementById('map'), {
		          zoom: 4,
		          center: usa
		        });
		        var marker = new google.maps.Marker({
  					position: usa,
  					map: map,
  					title: "fuck"
				});
		      }



function addMarker(location) {
	console.log(location);
        marker = new google.maps.Marker({
            position: location,
           	setMap: map
        });
google.maps.event.addDomListener(window, 'load');



}
		   





//map
//*************************************


