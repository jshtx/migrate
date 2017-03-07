window.onload = function(){ 



$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});


var lock = new Auth0Lock('q1fsov60Bn2PtGahSM5BDyNPxDkkshv0', 'shuajo.auth0.com');


var btn_login = document.getElementById('btn-login');

btn_login.addEventListener('click', function() {
  lock.show();
});

lock.on("authenticated", function(authResult) {
  lock.getProfile(authResult.idToken, function(error, profile) {
    if (error) {
      // Handle error
      return;
    }
    localStorage.setItem('id_token', authResult.idToken);
    // Display user information
    show_profile_info(profile);
  });
});


// INDEED API AJAX CALL
var userIp = [];

  $.getJSON("http://jsonip.com/?callback=?", function (data) {
    userIp.push(data.ip);
  });

  $("#submit").on("click", function(event) {

      var jobTitle = $("#jobTitle").val().trim();
      var jobTitle2 = $("#jobTitle2").val().trim();
      var jobCity = $("#jobCity").val().trim();
      var jobCity2 = $("#jobCity2").val().trim();
      var jobState = $("#jobState").val().trim();
      var jobState2 = $("#jobState2").val().trim();
      var jobType = $("#jobType").val().trim();
      var jobType2 = $("#jobType2").val().trim();
      var jobSite = $("#jobSite").val().trim();
      var jobSite2 = $("#jobSite2").val().trim();
      var jobSalary = $("#jobSalary").val().trim();
      var jobSalary2 = $("#jobSalary2").val().trim();
      var jobDistance = $("#jobDistance").val().trim();
      var jobDistance2 = $("#jobDistance2").val().trim();

      event.preventDefault();

      var queryURL = "http://api.indeed.com/ads/apisearch?publisher=6697079064168197&q="+jobTitle+"&l="+jobCity+"%2C+"+jobState+"&sort=&radius="+jobDistance+"&st="+jobSite+"&jt="+jobType+"&salary="+jobSalary+"&start=&limit=&fromage=20&filter=&latlong=1&co=us&chnl=&userip="+ userIp[0] +"&useragent=MMozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36&v=2&format=json";
      var queryURL2 = "http://api.indeed.com/ads/apisearch?publisher=6697079064168197&q="+jobTitle2+"&l="+jobCity2+"%2C+"+jobState2+"&sort=&radius="+jobDistance2+"&st="+jobSite2+"&jt="+jobType2+"&salary="+jobSalary2+"&start=&limit=&fromage=20&filter=&latlong=1&co=us&chnl=&userip="+ userIp[0] +"&useragent=MMozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36&v=2&format=json";
  
      $.ajax({
              url: queryURL,
              method: "GET"
          })
       
          .done(function(response) {
              
              var res = JSON.stringify(response, null, 2);
              console.log("FIRST AJAX CALL RESULTS - BEGINNING");
              for (var i = 0; i < res.length; i++) {
                console.log(response.results[i].jobtitle);
                console.log(response.results[i].company);
                console.log(response.results[i].formattedLocation);
                console.log(response.results[i].snippet);
                console.log(response.results[i].url);
              };
              console.log("FIRST AJAX CALL RESULTS - END");
              
          });

      $.ajax({
              url: queryURL2,
              method: "GET"
          })
       
          .done(function(response) {
              
              var res = JSON.stringify(response, null, 2);
              console.log("SECOND AJAX CALL RESULTS - BEGINNING");
              for (var i = 0; i < res.length; i++) {
                console.log(response.results[i].jobtitle);
                console.log(response.results[i].company);
                console.log(response.results[i].formattedLocation);
                console.log(response.results[i].snippet);
                console.log(response.results[i].url);
              };
              console.log("SECOND AJAX CALL RESULTS - END");
                      
          });
  });
// END OF INDEED API AJAX CALL

}