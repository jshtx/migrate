window.onload = function(){ 


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


// INDEED API AJAX CALL
var userIp = [];

  $.getJSON("http://jsonip.com/?callback=?", function (data) {
    userIp.push(data.ip);
  });

$("#firstbutton").on("click", function(event) {
   event.preventDefault();
     $('#city-div').html('');
            //$('#city-div').append("Use the buttons above");
            $('#city-div').append(function(event){

                    var city = $("#city-input").val().trim();



        var queryURL = "https://www.numbeo.com/api/indices?api_key=6b2rzozbl9v8lu&query=" + city;

        $.ajax({
            url: queryURL,
            method: "GET"
        })

        .done(function(response) {

            var results1 = response.health_care_index;
            var results1 = (results1).toFixed(0);

            var results2 = response.crime_index;
            var results2 = (results2).toFixed(0);

            var results3 = response.traffic_time_index;
            var results3 = (results3).toFixed(0);

            var results4 = response.quality_of_life_index;
            var results4 = (results4).toFixed(0);


            var results5 = response.safety_index;
            var results5 = (results5).toFixed(0);


            var results6 = response.rent_index;
            var results6 = (results6).toFixed(0);


            var results7 = response.pollution_index;
            var results7 = (results7).toFixed(0);

            var results8 = response.groceries_index;
            var results8 = (results8).toFixed(0);

            $('#city-div').html('');

            $('#city-div').prepend("Healthcare Index: " + results1);
            $('#city-div').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Health Care Index is an estimation of the overall quality of the health care system, health care professionals, equipment, staff, doctors, cost, etc.</div>");
            $('#city-div').prepend("<br>");
            $('#city-div').prepend("Crime Index: " + results2);
            $('#city-div').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Crime Index is an estimation of overall level of crime in a given city or a country. We consider crime levels lower than 20 as very low, crime levels between 20 and 40 as being low, crime levels between 40 and 60 as being moderate, crime levels between 60 and 80 as being high and finally crime levels higher than 80 as being very high.</div>");
            $('#city-div').prepend("<br>");
            $('#city-div').prepend("Traffic Index: " + results3);
            $('#city-div').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Traffic Index is a composite index of time consumed in traffic due to job commute, estimation of time consumption dissatisfaction, CO2 consumption estimation in traffic and overall inefficiencies in the traffic system.</div>");
            $('#city-div').prepend("<br>");
            $('#city-div').prepend("Quality of Life Index: " + results4);
            $('#city-div').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Quality of Life Index (higher is better) is an estimation of overall quality of life by using empirical formula which takes into account purchasing power index (higher is better), pollution index (lower is better), house price to income ratio (lower is better), cost of living index (lower is better), safety index (higher is better), health care index (higher is better), traffic commute time index (lower is better) and climate index (higher is better).</div>");
            $('#city-div').prepend("<br>");
            $('#city-div').prepend("Safety Index: " + results5);
            $('#city-div').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Safety index is, on the other way, quite opposite of crime index. If the city has a high safety index, it is considered very safe.</div>");
            $('#city-div').prepend("<br>");
            $('#city-div').prepend("Rent Index: " + results6);
            $('#city-div').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Rent Index is estimation of prices of renting apartments in the city compared to New York City. If Rent index is 80, Numbeo estimates that price for renting in that city is 80% of price in New York.</div>");
            $('#city-div').prepend("<br>");
            $('#city-div').prepend("Pollution Index: " + results7);
            $('#city-div').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Pollution Index is an estimation of the overall pollution in the city. The biggest weight is given to air pollution, than to water pollution/accessibility, two main pollution factors. Small weight is given to other pollution types.</div>");
            $('#city-div').prepend("<br>");
            $('#city-div').prepend("Groceries Index: " + results8);
            $('#city-div').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Groceries Index is an estimation of grocery prices in the city compared to New York City.</div>");
        });

        var city2 = $("#city-input2").val().trim();



        var queryURL2 = "https://www.numbeo.com/api/indices?api_key=6b2rzozbl9v8lu&query=" + city2;

        $.ajax({
            url: queryURL2,
            method: "GET"
        })

        .done(function(response) {

            var results1 = response.health_care_index;
            var results1 = (results1).toFixed(0);

            var results2 = response.crime_index;
            var results2 = (results2).toFixed(0);

            var results3 = response.traffic_time_index;
            var results3 = (results3).toFixed(0);

            var results4 = response.quality_of_life_index;
            var results4 = (results4).toFixed(0);


            var results5 = response.safety_index;
            var results5 = (results5).toFixed(0);


            var results6 = response.rent_index;
            var results6 = (results6).toFixed(0);


            var results7 = response.pollution_index;
            var results7 = (results7).toFixed(0);

            var results8 = response.groceries_index;
            var results8 = (results8).toFixed(0);

            $('#city-div2').html('');

            $('#city-div2').prepend("Healthcare Index: " + results1);
            $('#city-div2').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Health Care Index is an estimation of the overall quality of the health care system, health care professionals, equipment, staff, doctors, cost, etc.</div>");
            $('#city-div2').prepend("<br>");
            $('#city-div2').prepend("Crime Index: " + results2);
            $('#city-div2').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Crime Index is an estimation of overall level of crime in a given city or a country. We consider crime levels lower than 20 as very low, crime levels between 20 and 40 as being low, crime levels between 40 and 60 as being moderate, crime levels between 60 and 80 as being high and finally crime levels higher than 80 as being very high.</div>");
            $('#city-div2').prepend("<br>");
            $('#city-div2').prepend("Traffic Index: " + results3);
            $('#city-div2').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Traffic Index is a composite index of time consumed in traffic due to job commute, estimation of time consumption dissatisfaction, CO2 consumption estimation in traffic and overall inefficiencies in the traffic system.</div>");
            $('#city-div2').prepend("<br>");
            $('#city-div2').prepend("Quality of Life Index: " + results4);
                      $('#city-div2').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Quality of Life Index (higher is better) is an estimation of overall quality of life by using empirical formula which takes into account purchasing power index (higher is better), pollution index (lower is better), house price to income ratio (lower is better), cost of living index (lower is better), safety index (higher is better), health care index (higher is better), traffic commute time index (lower is better) and climate index (higher is better).</div>");
            $('#city-div2').prepend("<br>");
            $('#city-div2').prepend("Safety Index: " + results5);
            $('#city-div2').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Safety index is, on the other way, quite opposite of crime index. If the city has a high safety index, it is considered very safe.</div>");
            $('#city-div2').prepend("<br>");
            $('#city-div2').prepend("Rent Index: " + results6);
                       $('#city-div2').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Rent Index is estimation of prices of renting apartments in the city compared to New York City. If Rent index is 80, Numbeo estimates that price for renting in that city is 80% of price in New York.</div>");
            $('#city-div2').prepend("<br>");
            $('#city-div2').prepend("Pollution Index: " + results7);
                        $('#city-div2').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Pollution Index is an estimation of the overall pollution in the city. The biggest weight is given to air pollution, than to water pollution/accessibility, two main pollution factors. Small weight is given to other pollution types.</div>");
            $('#city-div2').prepend("<br>");
            $('#city-div2').prepend("Groceries Index: " + results8);
                        $('#city-div2').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Groceries Index is an estimation of grocery prices in the city compared to New York City.</div>");
        });




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
              $('#search-results').append("<ul id='searchResultsList'></ul>");
              console.log("FIRST AJAX CALL RESULTS - BEGINNING");
              for (var i = 0; i < res.length; i++) {
                $("#searchResultsList").append("<li>" + "<b><h4>" + response.results[i].jobtitle + "</h4></b>"
                 + "<h5>" + response.results[i].company + "</h5>" + 
                  "<h5>" + response.results[i].formattedLocation + "</h5>"
                 + "</li>" + "<br>");
                console.log(response.results[i].company)
                console.log(response.results[i].formattedLocation)
                console.log(response.results[i].snippet)
                console.log(response.results[i].url)
              };
              console.log("FIRST AJAX CALL RESULTS - END");
              
          });

      $.ajax({
              url: queryURL2,
              method: "GET"
          })
       
          .done(function(response) {
              
              var res = JSON.stringify(response, null, 2);
              $('#search-results2').append("<ul id='searchResultsList2'></ul>");
              console.log("SECOND AJAX CALL RESULTS - BEGINNING");
              for (var i = 0; i < res.length; i++) {
                $("#searchResultsList2").append("<li>" + "<b><h4>" + response.results[i].jobtitle + "</h4></b>"
                 + "<h5>" + response.results[i].company + "</h5>" + 
                  "<h5>" + response.results[i].formattedLocation + "</h5>" 
                 + "</li>" + "<br>");
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

    var city = $("#city-input").val().trim();


    $("#compareCities").on("click", function(event) {

        var city = $("#city-input").val().trim();
        console.log(city);




        var queryURL = "https://www.numbeo.com/api/city_prices?api_key=6b2rzozbl9v8lu&query=" + city;



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


        var city2 = $("#city-input2").val().trim();
        console.log(city2);

        var queryURL2 = "https://www.numbeo.com/api/city_prices?api_key=6b2rzozbl9v8lu&query=" + city2;


        $.ajax({
            url: queryURL2,
            method: "GET"
        })

        .done(function(response) {

            var results = response.prices[19].average_price;

            results = (3.78541 * results).toFixed(2)



            $('#city-div2').html('');
            $('.content').prepend("Average Gas Price per Gallon = $" + results);



        });

    });


    $("#rent").on("click", function(event) {

    	console.log('test');
        var city = $("#city-input").val().trim();



        var queryURL = "https://www.numbeo.com/api/city_prices?api_key=6b2rzozbl9v8lu&query=" + city;

        $.ajax({
            url: queryURL,
            method: "GET"
        })

        .done(function(response) {

            var results1 = JSON.stringify(response.prices[21].average_price);

            var results2 = response.prices[19].average_price;

            results2 = (3.78541 * results2).toFixed(2);

            var results3 = response.prices[22].average_price;

            results3 = (results3).toFixed(2);

            var results4 = response.prices[7].average_price;

            results4 = (3.78541 * results4).toFixed(2);



            $('#city-div').html('');

            $('#city-div').prepend("Average Rent 1 Bedroom (Downtown) = $" + results1);
            $('#city-div').prepend("<br>");
            $('#city-div').prepend("Average Rent 1 Bedroom (Outside of Downtown) = $" + results3);

            $('#city-div').prepend("<br>");
            $('#city-div').prepend("Average Gas Price per Gallon = $" + results2);

            $('#city-div').prepend("<br>");
            $('#city-div').prepend("Average Milk Price per Gallon = $" + results4);


        });

        var city2 = $("#city-input2").val().trim();



        var queryURL2 = "https://www.numbeo.com/api/city_prices?api_key=6b2rzozbl9v8lu&query=" + city2;

        $.ajax({
            url: queryURL2,
            method: "GET"
        })

        .done(function(response) {

            var results1 = response.prices[21].average_price;

            results1 = (results1).toFixed(2);

            var results2 = response.prices[19].average_price;

            results2 = (3.78541 * results2).toFixed(2);

            var results3 = response.prices[22].average_price;

            results3 = (results3).toFixed(2);

            var results4 = response.prices[7].average_price;

            results4 = (3.78541 * results4).toFixed(2);



            $('#city-div2').html('');

            $('#city-div2').prepend("Average Rent 1 Bedroom (Downtown) = $" + results1);
            $('#city-div2').prepend("<br>");
            $('#city-div2').prepend("Average Rent 1 Bedroom (Outside of Downtown) = $" + results3);

            $('#city-div2').prepend("<br>");
            $('#city-div2').prepend("Average Gas Price per Gallon = $" + results2);

            $('#city-div2').prepend("<br>");
            $('#city-div2').prepend("Average Milk Price per Gallon = $" + results4);


        });









    });

    $("#air").on("click", function(event) {


        var city = $("#city-input").val().trim();



        var queryURL = "https://www.numbeo.com/api/city_pollution?api_key=6b2rzozbl9v8lu&query=" + city;

        $.ajax({
            url: queryURL,
            method: "GET"
        })

        .done(function(response) {

            var results1 = response.air_quality;
            console.log(results1);
            var results1 = ((results1 + 2) * 20).toFixed(0);

            var results2 = response.green_and_parks_quality;

            var results2 = ((results2 + 2) * 20).toFixed(0);


            var results3 = response.index_pollution.toFixed(0);

            var results4 = response.noise_and_light_pollution;

            var results4 = ((results4 + 2) * 20).toFixed(0);


            $('#city-div').html('');

            $('#city-div').append("<table>");
            $('#city-div').append("<tr>");
            $('#city-div').append("<td> Air Quality: </td>");
            $('#city-div').append("<td><progress id='myProgress' value=" + results1 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");
            $('#city-div').append("<tr>");
            $('#city-div').append("<td>Green and Parks Quality: </td>");
            $('#city-div').append("<td><progress id='myProgress' value=" + results2 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");
            $('#city-div').append("<tr>");
            $('#city-div').append("<td>Pollution Index:</td>");
            $('#city-div').append("<td><progress id='myProgress' value=" + results3 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");
            $('#city-div').append("<tr>");
            $('#city-div').append("<td>Noise & Light Pollution: </td>");
            $('#city-div').append("<td><progress id='myProgress' value=" + results4 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");
            $('#city-div').append("</table>");
        });

        var city2 = $("#city-input2").val().trim();



        var queryURL2 = "https://www.numbeo.com/api/city_pollution?api_key=6b2rzozbl9v8lu&query=" + city2;

        $.ajax({
            url: queryURL2,
            method: "GET"
        })

        .done(function(response) {

            var results1 = response.air_quality;
            console.log(results1);
            var results1 = ((results1 + 2) * 20).toFixed(0);

            var results2 = response.green_and_parks_quality;

            var results2 = ((results2 + 2) * 20).toFixed(0);


            var results3 = response.index_pollution.toFixed(0);

            var results4 = response.noise_and_light_pollution;

            var results4 = ((results4 + 2) * 20).toFixed(0);


            $('#city-div2').html('');

            $('#city-div2').append("<table>");
            $('#city-div2').append("<tr>");
            $('#city-div2').append("<td> Air Quality: </td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results1 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");
            $('#city-div2').append("<tr>");
            $('#city-div2').append("<td>Green and Parks Quality: </td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results2 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");
            $('#city-div2').append("<tr>");
            $('#city-div2').append("<td>Pollution Index:</td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results3 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");
            $('#city-div2').append("<tr>");
            $('#city-div2').append("<td>Noise & Light Pollution: </td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results4 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");
            $('#city-div2').append("</table>");
        });



    });








    $("#crime").on("click", function(event) {


        var city = $("#city-input").val().trim();



        var queryURL = "https://www.numbeo.com/api/city_crime?api_key=6b2rzozbl9v8lu&query=" + city;

        $.ajax({
            url: queryURL,
            method: "GET"
        })

        .done(function(response) {

            var results1 = response.index_crime;

            var results1 = results1.toFixed(0);

            var results2 = response.problem_property_crimes;


            var results2 = ((results2 + 2) * 20).toFixed(0);

            var results3 = response.worried_car_stolen;

            var results3 = ((results3 + 2) * 20).toFixed(0);

            $('#city-div').html('');
            $('#city-div').append("<table>");
            $('#city-div').append("<tr>");
                        $('#city-div').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Crime Index is an estimation of overall level of crime in a given city or a country. We consider crime levels lower than 20 as very low, crime levels between 20 and 40 as being low, crime levels between 40 and 60 as being moderate, crime levels between 60 and 80 as being high and finally crime levels higher than 80 as being very high.</div></td>");

            $('#city-div').append("<td>Crime Index: </td>");

            $('#city-div').append("<td><progress id='myProgress' value=" + results1 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");
            $('#city-div').append("<tr>");
                        $('#city-div').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Problems with property crimes such as vandalism and theft</div></td>");
            $('#city-div').append("<td>Property Crime: </td>");

            $('#city-div').append("<td><progress id='myProgress' value=" + results2 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");
            $('#city-div').append("<tr>");
                                    $('#city-div').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Car stolen rate</div></td>");

            $('#city-div').append("<td>Car Stolen Index: </td>");
            $('#city-div').append("<td><progress id='myProgress' value=" + results3 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");
            $('#city-div').append("</table>");

        });

        var city2 = $("#city-input2").val().trim();



        var queryURL2 = "https://www.numbeo.com/api/city_crime?api_key=6b2rzozbl9v8lu&query=" + city2;

        $.ajax({
            url: queryURL2,
            method: "GET"
        })

        .done(function(response) {

            var results1 = response.index_crime;

            var results1 = results1.toFixed(0);

            var results2 = response.problem_property_crimes;


            var results2 = ((results2 + 2) * 20).toFixed(0);

            var results3 = response.worried_car_stolen;

            var results3 = ((results3 + 2) * 20).toFixed(0);

            $('#city-div2').html('');
            $('#city-div2').append("<table>");
            $('#city-div2').append("<tr>");

                        $('#city-div2').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Crime Index is an estimation of overall level of crime in a given city or a country. We consider crime levels lower than 20 as very low, crime levels between 20 and 40 as being low, crime levels between 40 and 60 as being moderate, crime levels between 60 and 80 as being high and finally crime levels higher than 80 as being very high.</div></td>");
            $('#city-div2').append("<td>Crime Index: </td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results1 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");
            $('#city-div2').append("<tr>");

                        $('#city-div2').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Problems with property crimes such as vandalism and theft</div></td>");
            $('#city-div2').append("<td>Property Crime: </td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results2 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");
            $('#city-div2').append("<tr>");

                                    $('#city-div2').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Car stolen rate</div></td>");

            $('#city-div2').append("<td>Car Stolen Index: </td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results3 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");
            $('#city-div2').append("</table>");

        });

    });




    $("#weather").on("click", function(event) {


        var city = $("#city-input").val().trim();



        var queryURL = "https://www.numbeo.com/api/city_climate?api_key=6b2rzozbl9v8lu&query=" + city;

        $.ajax({
            url: queryURL,
            method: "GET"
        })

        .done(function(response) {
            $('#city-div').html('');

            var results1 = response.climate_index.toFixed(0);

            var results2 = response.best_months_to_visit_text;
            $('#city-div').append(results2);
            $('#city-div').append("<table>");
            $('#city-div').append("<tr>");
            $('#city-div').append("<th>Month</th");
            $('#city-div').append("<th>Avg Low Temp <html>&#x2109 </html></th");
            $('#city-div').append("<th>Avg High Temp <html>&#x2109 </html></th");
            $('#city-div').append("</tr>");

            for (var i = 1; i < 12; i++) {

                var monthlow = response.months[i].temp_low_avg;
                monthlow = JSON.stringify(monthlow);
                monthlow = (monthlow * 9) / 5 + 32;

                var monthhigh = response.months[i].temp_high_avg;
                monthhigh = JSON.stringify(monthhigh);
                monthhigh = (monthhigh * 9) / 5 + 32;



                $('#city-div').append("<tr>");


                switch (i) {
                    case (1):
                        $('#city-div').append("<td>January</td>");
                        break;
                    case (2):
                        $('#city-div').append("<td>Febuary</td>");
                        break;
                    case (3):
                        $('#city-div').append("<td>March</td>");
                        break;
                    case (4):
                        $('#city-div').append("<td>April</td>");
                        break;
                    case (5):
                        $('#city-div').append("<td>May</td>");
                        break;
                    case (6):
                        $('#city-div').append("<td>June</td>");
                        break;
                    case (7):
                        $('#city-div').append("<td>July</td>");
                        break;
                    case (8):
                        $('#city-div').append("<td>August</td>");
                        break;
                    case (9):
                        $('#city-div').append("<td>September</td>");
                        break;
                    case (10):
                        $('#city-div').append("<td>October</td>");
                        break;
                    case (11):
                        $('#city-div').append("<td>November</td>");
                        break;
                    case (12):
                        $('#city-div').append("<td>December</td>");
                        break;
                }


                $('#city-div').append("<td>" + monthlow + "</td>");
                $('#city-div').append("<td>" + monthhigh + "</td>");
                $('#city-div').append("</tr>");

            };

            $('#city-div').append("<table>");




        });

        var city2 = $("#city-input2").val().trim();



        var queryURL2 = "https://www.numbeo.com/api/city_climate?api_key=6b2rzozbl9v8lu&query=" + city2;

        $.ajax({
            url: queryURL2,
            method: "GET"
        })

        .done(function(response) {
            $('#city-div2').html('');

            var results1 = response.climate_index.toFixed(0);

            var results2 = response.best_months_to_visit_text;
            $('#city-div2').append(results2);
            $('#city-div2').append("<table>");
            $('#city-div2').append("<tr>");
            $('#city-div2').append("<th>Month</th");
            $('#city-div2').append("<th>Avg Low Temp <html>&#x2109 </html></th");
            $('#city-div2').append("<th>Avg High Temp <html>&#x2109 </html></th");
            $('#city-div2').append("</tr>");

            for (var i = 1; i < 12; i++) {

                var monthlow = response.months[i].temp_low_avg;
                monthlow = JSON.stringify(monthlow);
                monthlow = (monthlow * 9) / 5 + 32;

                var monthhigh = response.months[i].temp_high_avg;
                monthhigh = JSON.stringify(monthhigh);
                monthhigh = (monthhigh * 9) / 5 + 32;



                $('#city-div2').append("<tr>");


                switch (i) {
                    case (1):
                        $('#city-div2').append("<td>January</td>");
                        break;
                    case (2):
                        $('#city-div2').append("<td>Febuary</td>");
                        break;
                    case (3):
                        $('#city-div2').append("<td>March</td>");
                        break;
                    case (4):
                        $('#city-div2').append("<td>April</td>");
                        break;
                    case (5):
                        $('#city-div2').append("<td>May</td>");
                        break;
                    case (6):
                        $('#city-div2').append("<td>June</td>");
                        break;
                    case (7):
                        $('#city-div2').append("<td>July</td>");
                        break;
                    case (8):
                        $('#city-div2').append("<td>August</td>");
                        break;
                    case (9):
                        $('#city-div2').append("<td>September</td>");
                        break;
                    case (10):
                        $('#city-div2').append("<td>October</td>");
                        break;
                    case (11):
                        $('#city-div2').append("<td>November</td>");
                        break;
                    case (12):
                        $('#city-div2').append("<td>December</td>");
                        break;
                }


                $('#city-div2').append("<td>" + monthlow + "</td>");
                $('#city-div2').append("<td>" + monthhigh + "</td>");
                $('#city-div2').append("</tr>");

            };

            $('#city-div2').append("<table>");




        });




    });







    $("#traffic").on("click", function(event) {


        var city = $("#city-input").val().trim();

        console.log(city);

        var queryURL = "https://www.numbeo.com/api/city_traffic?api_key=6b2rzozbl9v8lu&query=" + city;

        $.ajax({
            url: queryURL,
            method: "GET"
        })

        .done(function(response) {


            var results1 = response.primary_means_percentage_map.Car;
            results1 = results1;
            results1 = (results1).toFixed(0);

            var results2 = response.primary_means_percentage_map.Bike;
            results2 = results2;
            results2 = (results2).toFixed(0);

            var results3 = response.primary_means_percentage_map.Walking;
            results3 = results3;
            results3 = (results3).toFixed(0);

            var results4 = response.primary_means_percentage_map.Bus;
            results4 = results4;
            if (results4 == null) {
                results4 = "0";
            } else {
                results4 = (results4).toFixed(0);
            };


            var results5 = response.primary_means_percentage_map.Motorbike;
            results5 = results5;
            if (results5 == null) {
                results5 = "0";
            } else {
                results5 = (results5).toFixed(0);
            };


            var results6 = response.primary_means_percentage_map.Working_from_Home;
            results6 = results6;
            if (results6 == null) {
                results6 = "0";
            } else {
                results6 = (results6).toFixed(0);
            };

            var results7 = response.primary_means_percentage_map.Train;
            results7 = results7;
            if (results7 == null) {
                results7 = "0";
            } else {
                results7 = (results7).toFixed(0);
            };

            var results8 = parseInt(results1) + parseInt(results2) + parseInt(results3) + parseInt(results4) + parseInt(results5) + parseInt(results6);
            results8 = 100 - results8;
            results8 = results8.toFixed(0);


            $('#city-div').html('');
            $('#city-div').append("Main Means of Transportation");
            $('#city-div').append("<br>");
            $('#city-div').append("<br>");
            $('#city-div').append("<table>");

            $('#city-div').append("<tr>");
            $('#city-div').append("<td>Car</td>");
            $('#city-div').append("<td><progress id='myProgress' value=" + results1 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");

            $('#city-div').append("<tr>");
            $('#city-div').append("<td>Bike</td>");
            $('#city-div').append("<td><progress id='myProgress' value=" + results2 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");

            $('#city-div').append("<tr>");
            $('#city-div').append("<td>Walking</td>");
            $('#city-div').append("<td><progress id='myProgress' value=" + results3 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");

            $('#city-div').append("<tr>");
            $('#city-div').append("<td>Bus</td>");
            $('#city-div').append("<td><progress id='myProgress' value=" + results4 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");

            $('#city-div').append("<tr>");
            $('#city-div').append("<td>Motorbike</td>");
            $('#city-div').append("<td><progress id='myProgress' value=" + results5 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");

            $('#city-div').append("<tr>");
            $('#city-div').append("<td>Working from Home</td>");
            $('#city-div').append("<td><progress id='myProgress' value=" + results6 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");

            $('#city-div').append("<tr>");
            $('#city-div').append("<td>Train</td>");
            $('#city-div').append("<td><progress id='myProgress' value=" + results7 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");

            $('#city-div').append("<tr>");
            $('#city-div').append("<td>Other</td>");
            $('#city-div').append("<td><progress id='myProgress' value=" + results8 + " max='100'></progress></td>");

            $('#city-div').append("</tr>");

            $('#city-div').append("</table>");

        });

        var city2 = $("#city-input2").val().trim();

        console.log(city2);

        var queryURL2 = "https://www.numbeo.com/api/city_traffic?api_key=6b2rzozbl9v8lu&query=" + city2;

        $.ajax({
            url: queryURL2,
            method: "GET"
        })

        .done(function(response) {


            var results1 = response.primary_means_percentage_map.Car;
            results1 = results1;
            results1 = (results1).toFixed(0);

            var results2 = response.primary_means_percentage_map.Bike;
            results2 = results2;
            results2 = (results2).toFixed(0);

            var results3 = response.primary_means_percentage_map.Walking;
            results3 = results3;
            results3 = (results3).toFixed(0);

            var results4 = response.primary_means_percentage_map.Bus;
            results4 = results4;
            if (results4 == null) {
                results4 = "0";
            } else {
                results4 = (results4).toFixed(0);
            };


            var results5 = response.primary_means_percentage_map.Motorbike;
            results5 = results5;
            if (results5 == null) {
                results5 = "0";
            } else {
                results5 = (results5).toFixed(0);
            };


            var results6 = response.primary_means_percentage_map.Working_from_Home;
            results6 = results6;
            if (results6 == null) {
                results6 = "0";
            } else {
                results6 = (results6).toFixed(0);
            };

            var results7 = response.primary_means_percentage_map.Train;
            results7 = results7;
            if (results7 == null) {
                results7 = "0";
            } else {
                results7 = (results7).toFixed(0);
            };

            var results8 = parseInt(results1) + parseInt(results2) + parseInt(results3) + parseInt(results4) + parseInt(results5) + parseInt(results6);
            results8 = 100 - results8;
            results8 = results8.toFixed(0);


            $('#city-div2').html('');
            $('#city-div2').append("Main Means of Transportation");
            $('#city-div2').append("<br>");
            $('#city-div2').append("<br>");
            $('#city-div2').append("<table>");

            $('#city-div2').append("<tr>");
            $('#city-div2').append("<td>Car</td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results1 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");

            $('#city-div2').append("<tr>");
            $('#city-div2').append("<td>Bike</td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results2 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");

            $('#city-div2').append("<tr>");
            $('#city-div2').append("<td>Walking</td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results3 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");

            $('#city-div2').append("<tr>");
            $('#city-div2').append("<td>Bus</td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results4 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");

            $('#city-div2').append("<tr>");
            $('#city-div2').append("<td>Motorbike</td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results5 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");

            $('#city-div2').append("<tr>");
            $('#city-div2').append("<td>Working from Home</td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results6 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");

            $('#city-div2').append("<tr>");
            $('#city-div2').append("<td>Train</td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results7 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");

            $('#city-div2').append("<tr>");
            $('#city-div2').append("<td>Other</td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results8 + " max='100'></progress></td>");

            $('#city-div2').append("</tr>");

            $('#city-div2').append("</table>");

        });
    });





    $("#general").on("click", function(event) {


        var city = $("#city-input").val().trim();



        var queryURL = "https://www.numbeo.com/api/indices?api_key=6b2rzozbl9v8lu&query=" + city;

        $.ajax({
            url: queryURL,
            method: "GET"
        })

        .done(function(response) {

            var results1 = response.health_care_index;
            var results1 = (results1).toFixed(0);

            var results2 = response.crime_index;
            var results2 = (results2).toFixed(0);

            var results3 = response.traffic_time_index;
            var results3 = (results3).toFixed(0);

            var results4 = response.quality_of_life_index;
            var results4 = (results4).toFixed(0);


            var results5 = response.safety_index;
            var results5 = (results5).toFixed(0);


            var results6 = response.rent_index;
            var results6 = (results6).toFixed(0);


            var results7 = response.pollution_index;
            var results7 = (results7).toFixed(0);

            var results8 = response.groceries_index;
            var results8 = (results8).toFixed(0);

            $('#city-div').html('');

            $('#city-div').prepend("Healthcare Index: " + results1);
            $('#city-div').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Health Care Index is an estimation of the overall quality of the health care system, health care professionals, equipment, staff, doctors, cost, etc.</div>");
            $('#city-div').prepend("<br>");
            $('#city-div').prepend("Crime Index: " + results2);
            $('#city-div').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Crime Index is an estimation of overall level of crime in a given city or a country. We consider crime levels lower than 20 as very low, crime levels between 20 and 40 as being low, crime levels between 40 and 60 as being moderate, crime levels between 60 and 80 as being high and finally crime levels higher than 80 as being very high.</div>");
            $('#city-div').prepend("<br>");
            $('#city-div').prepend("Traffic Index: " + results3);
            $('#city-div').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Traffic Index is a composite index of time consumed in traffic due to job commute, estimation of time consumption dissatisfaction, CO2 consumption estimation in traffic and overall inefficiencies in the traffic system.</div>");
            $('#city-div').prepend("<br>");
            $('#city-div').prepend("Quality of Life Index: " + results4);
            $('#city-div').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Quality of Life Index (higher is better) is an estimation of overall quality of life by using empirical formula which takes into account purchasing power index (higher is better), pollution index (lower is better), house price to income ratio (lower is better), cost of living index (lower is better), safety index (higher is better), health care index (higher is better), traffic commute time index (lower is better) and climate index (higher is better).</div>");
            $('#city-div').prepend("<br>");
            $('#city-div').prepend("Safety Index: " + results5);
            $('#city-div').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Safety index is, on the other way, quite opposite of crime index. If the city has a high safety index, it is considered very safe.</div>");
            $('#city-div').prepend("<br>");
            $('#city-div').prepend("Rent Index: " + results6);
            $('#city-div').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Rent Index is estimation of prices of renting apartments in the city compared to New York City. If Rent index is 80, Numbeo estimates that price for renting in that city is 80% of price in New York.</div>");
            $('#city-div').prepend("<br>");
            $('#city-div').prepend("Pollution Index: " + results7);
            $('#city-div').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Pollution Index is an estimation of the overall pollution in the city. The biggest weight is given to air pollution, than to water pollution/accessibility, two main pollution factors. Small weight is given to other pollution types.</div>");
            $('#city-div').prepend("<br>");
            $('#city-div').prepend("Groceries Index: " + results8);
            $('#city-div').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Groceries Index is an estimation of grocery prices in the city compared to New York City.</div>");
        });

        var city2 = $("#city-input2").val().trim();



        var queryURL2 = "https://www.numbeo.com/api/indices?api_key=6b2rzozbl9v8lu&query=" + city2;

        $.ajax({
            url: queryURL2,
            method: "GET"
        })

        .done(function(response) {

            var results1 = response.health_care_index;
            var results1 = (results1).toFixed(0);

            var results2 = response.crime_index;
            var results2 = (results2).toFixed(0);

            var results3 = response.traffic_time_index;
            var results3 = (results3).toFixed(0);

            var results4 = response.quality_of_life_index;
            var results4 = (results4).toFixed(0);


            var results5 = response.safety_index;
            var results5 = (results5).toFixed(0);


            var results6 = response.rent_index;
            var results6 = (results6).toFixed(0);


            var results7 = response.pollution_index;
            var results7 = (results7).toFixed(0);

            var results8 = response.groceries_index;
            var results8 = (results8).toFixed(0);

            $('#city-div2').html('');

            $('#city-div2').prepend("Healthcare Index: " + results1);
            $('#city-div2').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Health Care Index is an estimation of the overall quality of the health care system, health care professionals, equipment, staff, doctors, cost, etc.</div>");
            $('#city-div2').prepend("<br>");
            $('#city-div2').prepend("Crime Index: " + results2);
            $('#city-div2').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Crime Index is an estimation of overall level of crime in a given city or a country. We consider crime levels lower than 20 as very low, crime levels between 20 and 40 as being low, crime levels between 40 and 60 as being moderate, crime levels between 60 and 80 as being high and finally crime levels higher than 80 as being very high.</div>");
            $('#city-div2').prepend("<br>");
            $('#city-div2').prepend("Traffic Index: " + results3);
            $('#city-div2').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Traffic Index is a composite index of time consumed in traffic due to job commute, estimation of time consumption dissatisfaction, CO2 consumption estimation in traffic and overall inefficiencies in the traffic system.</div>");
            $('#city-div2').prepend("<br>");
            $('#city-div2').prepend("Quality of Life Index: " + results4);
                      $('#city-div2').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Quality of Life Index (higher is better) is an estimation of overall quality of life by using empirical formula which takes into account purchasing power index (higher is better), pollution index (lower is better), house price to income ratio (lower is better), cost of living index (lower is better), safety index (higher is better), health care index (higher is better), traffic commute time index (lower is better) and climate index (higher is better).</div>");
            $('#city-div2').prepend("<br>");
            $('#city-div2').prepend("Safety Index: " + results5);
            $('#city-div2').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Safety index is, on the other way, quite opposite of crime index. If the city has a high safety index, it is considered very safe.</div>");
            $('#city-div2').prepend("<br>");
            $('#city-div2').prepend("Rent Index: " + results6);
                       $('#city-div2').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Rent Index is estimation of prices of renting apartments in the city compared to New York City. If Rent index is 80, Numbeo estimates that price for renting in that city is 80% of price in New York.</div>");
            $('#city-div2').prepend("<br>");
            $('#city-div2').prepend("Pollution Index: " + results7);
                        $('#city-div2').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Pollution Index is an estimation of the overall pollution in the city. The biggest weight is given to air pollution, than to water pollution/accessibility, two main pollution factors. Small weight is given to other pollution types.</div>");
            $('#city-div2').prepend("<br>");
            $('#city-div2').prepend("Groceries Index: " + results8);
                        $('#city-div2').prepend(" <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Groceries Index is an estimation of grocery prices in the city compared to New York City.</div>");
        });




    });



  
            // Salary Comparison info -- couldn't get Node.js and jQuery to cooperate so I put all the info in here
        var rpps = [
          {
            Index: "87.8",
            GeoFips: "999",
            GeoName: "United States"
          },
          {
            Index: "91.7",
            GeoFips: "10180",
            GeoName: "Abilene, TX "
          },
          {
            Index: "88.8",
            GeoFips: "10420",
            GeoName: "Akron, OH "
          },
          {
            Index: "84",
            GeoFips: "10500",
            GeoName: "Albany, GA "
          },
          {
            Index: "94",
            GeoFips: "10540",
            GeoName: "Albany, OR "
          },
          {
            Index: "99.2",
            GeoFips: "10580",
            GeoName: "Albany-Schenectady-Troy, NY "
          },
          {
            Index: "97.2",
            GeoFips: "10740",
            GeoName: "Albuquerque, NM "
          },
          {
            Index: "89",
            GeoFips: "10780",
            GeoName: "Alexandria, LA "
          },
          {
            Index: "100.3",
            GeoFips: "10900",
            GeoName: "Allentown-Bethlehem-Easton, PA-NJ "
          },
          {
            Index: "90",
            GeoFips: "11020",
            GeoName: "Altoona, PA "
          },
          {
            Index: "93.1",
            GeoFips: "11100",
            GeoName: "Amarillo, TX "
          },
          {
            Index: "90.2",
            GeoFips: "11180",
            GeoName: "Ames, IA "
          },
          {
            Index: "109.6",
            GeoFips: "11260",
            GeoName: "Anchorage, AK "
          },
          {
            Index: "102",
            GeoFips: "11460",
            GeoName: "Ann Arbor, MI "
          },
          {
            Index: "84.6",
            GeoFips: "11500",
            GeoName: "Anniston-Oxford-Jacksonville, AL "
          },
          {
            Index: "92.7",
            GeoFips: "11540",
            GeoName: "Appleton, WI "
          },
          {
            Index: "93.2",
            GeoFips: "11700",
            GeoName: "Asheville, NC "
          },
          {
            Index: "92",
            GeoFips: "12020",
            GeoName: "Athens-Clarke County, GA "
          },
          {
            Index: "95.6",
            GeoFips: "12060",
            GeoName: "Atlanta-Sandy Springs-Roswell, GA "
          },
          {
            Index: "107",
            GeoFips: "12100",
            GeoName: "Atlantic City-Hammonton, NJ "
          },
          {
            Index: "85.8",
            GeoFips: "12220",
            GeoName: "Auburn-Opelika, AL "
          },
          {
            Index: "89.3",
            GeoFips: "12260",
            GeoName: "Augusta-Richmond County, GA-SC "
          },
          {
            Index: "99",
            GeoFips: "12420",
            GeoName: "Austin-Round Rock, TX "
          },
          {
            Index: "97.8",
            GeoFips: "12540",
            GeoName: "Bakersfield, CA "
          },
          {
            Index: "108",
            GeoFips: "12580",
            GeoName: "Baltimore-Columbia-Towson, MD "
          },
          {
            Index: "95.9",
            GeoFips: "12620",
            GeoName: "Bangor, ME "
          },
          {
            Index: "101.9",
            GeoFips: "12700",
            GeoName: "Barnstable Town, MA "
          },
          {
            Index: "93.3",
            GeoFips: "12940",
            GeoName: "Baton Rouge, LA "
          },
          {
            Index: "91.6",
            GeoFips: "12980",
            GeoName: "Battle Creek, MI "
          },
          {
            Index: "90.2",
            GeoFips: "13020",
            GeoName: "Bay City, MI "
          },
          {
            Index: "90.3",
            GeoFips: "13140",
            GeoName: "Beaumont-Port Arthur, TX "
          },
          {
            Index: "79.7",
            GeoFips: "13220",
            GeoName: "Beckley, WV "
          },
          {
            Index: "100.1",
            GeoFips: "13380",
            GeoName: "Bellingham, WA "
          },
          {
            Index: "95.8",
            GeoFips: "13460",
            GeoName: "Bend-Redmond, OR "
          },
          {
            Index: "97.7",
            GeoFips: "13740",
            GeoName: "Billings, MT "
          },
          {
            Index: "95",
            GeoFips: "13780",
            GeoName: "Binghamton, NY "
          },
          {
            Index: "89.9",
            GeoFips: "13820",
            GeoName: "Birmingham-Hoover, AL "
          },
          {
            Index: "94",
            GeoFips: "13900",
            GeoName: "Bismarck, ND "
          },
          {
            Index: "88.2",
            GeoFips: "13980",
            GeoName: "Blacksburg-Christiansburg-Radford, VA "
          },
          {
            Index: "94.1",
            GeoFips: "14010",
            GeoName: "Bloomington, IL "
          },
          {
            Index: "94.9",
            GeoFips: "14020",
            GeoName: "Bloomington, IN "
          },
          {
            Index: "93",
            GeoFips: "14100",
            GeoName: "Bloomsburg-Berwick, PA "
          },
          {
            Index: "95.1",
            GeoFips: "14260",
            GeoName: "Boise City, ID "
          },
          {
            Index: "110.3",
            GeoFips: "14460",
            GeoName: "Boston-Cambridge-Newton, MA-NH "
          },
          {
            Index: "109.1",
            GeoFips: "14500",
            GeoName: "Boulder, CO "
          },
          {
            Index: "85.8",
            GeoFips: "14540",
            GeoName: "Bowling Green, KY "
          },
          {
            Index: "105",
            GeoFips: "14740",
            GeoName: "Bremerton-Silverdale, WA "
          },
          {
            Index: "120.4",
            GeoFips: "14860",
            GeoName: "Bridgeport-Stamford-Norwalk, CT "
          },
          {
            Index: "85",
            GeoFips: "15180",
            GeoName: "Brownsville-Harlingen, TX "
          },
          {
            Index: "86",
            GeoFips: "15260",
            GeoName: "Brunswick, GA "
          },
          {
            Index: "93.8",
            GeoFips: "15380",
            GeoName: "Buffalo-Cheektowaga-Niagara Falls, NY "
          },
          {
            Index: "90.5",
            GeoFips: "15500",
            GeoName: "Burlington, NC "
          },
          {
            Index: "102.7",
            GeoFips: "15540",
            GeoName: "Burlington-South Burlington, VT "
          },
          {
            Index: "98.2",
            GeoFips: "15680",
            GeoName: "California-Lexington Park, MD "
          },
          {
            Index: "89.3",
            GeoFips: "15940",
            GeoName: "Canton-Massillon, OH "
          },
          {
            Index: "95.1",
            GeoFips: "15980",
            GeoName: "Cape Coral-Fort Myers, FL "
          },
          {
            Index: "83.5",
            GeoFips: "16020",
            GeoName: "Cape Girardeau, MO-IL "
          },
          {
            Index: "84",
            GeoFips: "16060",
            GeoName: "Carbondale-Marion, IL "
          },
          {
            Index: "95.9",
            GeoFips: "16180",
            GeoName: "Carson City, NV "
          },
          {
            Index: "97.9",
            GeoFips: "16220",
            GeoName: "Casper, WY "
          },
          {
            Index: "90.6",
            GeoFips: "16300",
            GeoName: "Cedar Rapids, IA "
          },
          {
            Index: "94.1",
            GeoFips: "16540",
            GeoName: "Chambersburg-Waynesboro, PA "
          },
          {
            Index: "93.4",
            GeoFips: "16580",
            GeoName: "Champaign-Urbana, IL "
          },
          {
            Index: "89",
            GeoFips: "16620",
            GeoName: "Charleston, WV "
          },
          {
            Index: "96.3",
            GeoFips: "16700",
            GeoName: "Charleston-North Charleston, SC "
          },
          {
            Index: "93.6",
            GeoFips: "16740",
            GeoName: "Charlotte-Concord-Gastonia, NC-SC "
          },
          {
            Index: "97.8",
            GeoFips: "16820",
            GeoName: "Charlottesville, VA "
          },
          {
            Index: "90.6",
            GeoFips: "16860",
            GeoName: "Chattanooga, TN-GA "
          },
          {
            Index: "97.6",
            GeoFips: "16940",
            GeoName: "Cheyenne, WY "
          },
          {
            Index: "106",
            GeoFips: "16980",
            GeoName: "Chicago-Naperville-Elgin, IL-IN-WI "
          },
          {
            Index: "100",
            GeoFips: "17020",
            GeoName: "Chico, CA "
          },
          {
            Index: "89.8",
            GeoFips: "17140",
            GeoName: "Cincinnati, OH-KY-IN "
          },
          {
            Index: "91.3",
            GeoFips: "17300",
            GeoName: "Clarksville, TN-KY "
          },
          {
            Index: "84.1",
            GeoFips: "17420",
            GeoName: "Cleveland, TN "
          },
          {
            Index: "89.1",
            GeoFips: "17460",
            GeoName: "Cleveland-Elyria, OH "
          },
          {
            Index: "92.9",
            GeoFips: "17660",
            GeoName: "Coeur d'Alene, ID "
          },
          {
            Index: "93.9",
            GeoFips: "17780",
            GeoName: "College Station-Bryan, TX "
          },
          {
            Index: "99.7",
            GeoFips: "17820",
            GeoName: "Colorado Springs, CO "
          },
          {
            Index: "93",
            GeoFips: "17860",
            GeoName: "Columbia, MO "
          },
          {
            Index: "91.9",
            GeoFips: "17900",
            GeoName: "Columbia, SC "
          },
          {
            Index: "89.5",
            GeoFips: "17980",
            GeoName: "Columbus, GA-AL "
          },
          {
            Index: "87.7",
            GeoFips: "18020",
            GeoName: "Columbus, IN "
          },
          {
            Index: "93.4",
            GeoFips: "18140",
            GeoName: "Columbus, OH "
          },
          {
            Index: "93.5",
            GeoFips: "18580",
            GeoName: "Corpus Christi, TX "
          },
          {
            Index: "98.6",
            GeoFips: "18700",
            GeoName: "Corvallis, OR "
          },
          {
            Index: "95.3",
            GeoFips: "18880",
            GeoName: "Crestview-Fort Walton Beach-Destin, FL "
          },
          {
            Index: "88.4",
            GeoFips: "19060",
            GeoName: "Cumberland, MD-WV "
          },
          {
            Index: "100.4",
            GeoFips: "19100",
            GeoName: "Dallas-Fort Worth-Arlington, TX "
          },
          {
            Index: "83.9",
            GeoFips: "19140",
            GeoName: "Dalton, GA "
          },
          {
            Index: "81.1",
            GeoFips: "19180",
            GeoName: "Danville, IL "
          },
          {
            Index: "92.3",
            GeoFips: "19300",
            GeoName: "Daphne-Fairhope-Foley, AL "
          },
          {
            Index: "91.4",
            GeoFips: "19340",
            GeoName: "Davenport-Moline-Rock Island, IA-IL "
          },
          {
            Index: "90.9",
            GeoFips: "19380",
            GeoName: "Dayton, OH "
          },
          {
            Index: "87.1",
            GeoFips: "19460",
            GeoName: "Decatur, AL "
          },
          {
            Index: "89",
            GeoFips: "19500",
            GeoName: "Decatur, IL "
          },
          {
            Index: "95.7",
            GeoFips: "19660",
            GeoName: "Deltona-Daytona Beach-Ormond Beach, FL "
          },
          {
            Index: "104.7",
            GeoFips: "19740",
            GeoName: "Denver-Aurora-Lakewood, CO "
          },
          {
            Index: "94.9",
            GeoFips: "19780",
            GeoName: "Des Moines-West Des Moines, IA "
          },
          {
            Index: "97.3",
            GeoFips: "19820",
            GeoName: "Detroit-Warren-Dearborn, MI "
          },
          {
            Index: "85.4",
            GeoFips: "20020",
            GeoName: "Dothan, AL "
          },
          {
            Index: "94.2",
            GeoFips: "20100",
            GeoName: "Dover, DE "
          },
          {
            Index: "92.9",
            GeoFips: "20220",
            GeoName: "Dubuque, IA "
          },
          {
            Index: "91.7",
            GeoFips: "20260",
            GeoName: "Duluth, MN-WI "
          },
          {
            Index: "95.4",
            GeoFips: "20500",
            GeoName: "Durham-Chapel Hill, NC "
          },
          {
            Index: "98.8",
            GeoFips: "20700",
            GeoName: "East Stroudsburg, PA "
          },
          {
            Index: "92.1",
            GeoFips: "20740",
            GeoName: "Eau Claire, WI "
          },
          {
            Index: "90.4",
            GeoFips: "20940",
            GeoName: "El Centro, CA "
          },
          {
            Index: "86",
            GeoFips: "21060",
            GeoName: "Elizabethtown-Fort Knox, KY "
          },
          {
            Index: "91",
            GeoFips: "21140",
            GeoName: "Elkhart-Goshen, IN "
          },
          {
            Index: "94.5",
            GeoFips: "21300",
            GeoName: "Elmira, NY "
          },
          {
            Index: "90.2",
            GeoFips: "21340",
            GeoName: "El Paso, TX "
          },
          {
            Index: "(NA)",
            GeoFips: "21420",
            GeoName: "Enid, OK 1/"
          },
          {
            Index: "92.5",
            GeoFips: "21500",
            GeoName: "Erie, PA "
          },
          {
            Index: "98.2",
            GeoFips: "21660",
            GeoName: "Eugene, OR "
          },
          {
            Index: "90.8",
            GeoFips: "21780",
            GeoName: "Evansville, IN-KY "
          },
          {
            Index: "105.8",
            GeoFips: "21820",
            GeoName: "Fairbanks, AK "
          },
          {
            Index: "93.5",
            GeoFips: "22020",
            GeoName: "Fargo, ND-MN "
          },
          {
            Index: "91.1",
            GeoFips: "22140",
            GeoName: "Farmington, NM "
          },
          {
            Index: "91.5",
            GeoFips: "22180",
            GeoName: "Fayetteville, NC "
          },
          {
            Index: "90.1",
            GeoFips: "22220",
            GeoName: "Fayetteville-Springdale-Rogers, AR-MO "
          },
          {
            Index: "97.9",
            GeoFips: "22380",
            GeoName: "Flagstaff, AZ "
          },
          {
            Index: "92.8",
            GeoFips: "22420",
            GeoName: "Flint, MI "
          },
          {
            Index: "86",
            GeoFips: "22500",
            GeoName: "Florence, SC "
          },
          {
            Index: "84.4",
            GeoFips: "22520",
            GeoName: "Florence-Muscle Shoals, AL "
          },
          {
            Index: "87.3",
            GeoFips: "22540",
            GeoName: "Fond du Lac, WI "
          },
          {
            Index: "101.4",
            GeoFips: "22660",
            GeoName: "Fort Collins, CO "
          },
          {
            Index: "86.2",
            GeoFips: "22900",
            GeoName: "Fort Smith, AR-OK "
          },
          {
            Index: "90.7",
            GeoFips: "23060",
            GeoName: "Fort Wayne, IN "
          },
          {
            Index: "97.3",
            GeoFips: "23420",
            GeoName: "Fresno, CA "
          },
          {
            Index: "84.9",
            GeoFips: "23460",
            GeoName: "Gadsden, AL "
          },
          {
            Index: "95.2",
            GeoFips: "23540",
            GeoName: "Gainesville, FL "
          },
          {
            Index: "89",
            GeoFips: "23580",
            GeoName: "Gainesville, GA "
          },
          {
            Index: "95.6",
            GeoFips: "23900",
            GeoName: "Gettysburg, PA "
          },
          {
            Index: "96.8",
            GeoFips: "24020",
            GeoName: "Glens Falls, NY "
          },
          {
            Index: "88.1",
            GeoFips: "24140",
            GeoName: "Goldsboro, NC "
          },
          {
            Index: "93.8",
            GeoFips: "24220",
            GeoName: "Grand Forks, ND-MN "
          },
          {
            Index: "85.3",
            GeoFips: "24260",
            GeoName: "Grand Island, NE "
          },
          {
            Index: "94.4",
            GeoFips: "24300",
            GeoName: "Grand Junction, CO "
          },
          {
            Index: "93.7",
            GeoFips: "24340",
            GeoName: "Grand Rapids-Wyoming, MI "
          },
          {
            Index: "93.7",
            GeoFips: "24420",
            GeoName: "Grants Pass, OR "
          },
          {
            Index: "93.8",
            GeoFips: "24500",
            GeoName: "Great Falls, MT "
          },
          {
            Index: "98.9",
            GeoFips: "24540",
            GeoName: "Greeley, CO "
          },
          {
            Index: "92",
            GeoFips: "24580",
            GeoName: "Green Bay, WI "
          },
          {
            Index: "90.3",
            GeoFips: "24660",
            GeoName: "Greensboro-High Point, NC "
          },
          {
            Index: "88.9",
            GeoFips: "24780",
            GeoName: "Greenville, NC "
          },
          {
            Index: "90.2",
            GeoFips: "24860",
            GeoName: "Greenville-Anderson-Mauldin, SC "
          },
          {
            Index: "90.2",
            GeoFips: "25060",
            GeoName: "Gulfport-Biloxi-Pascagoula, MS "
          },
          {
            Index: "101.9",
            GeoFips: "25180",
            GeoName: "Hagerstown-Martinsburg, MD-WV "
          },
          {
            Index: "85.3",
            GeoFips: "25220",
            GeoName: "Hammond, LA "
          },
          {
            Index: "92.8",
            GeoFips: "25260",
            GeoName: "Hanford-Corcoran, CA "
          },
          {
            Index: "96",
            GeoFips: "25420",
            GeoName: "Harrisburg-Carlisle, PA "
          },
          {
            Index: "91.4",
            GeoFips: "25500",
            GeoName: "Harrisonburg, VA "
          },
          {
            Index: "100.7",
            GeoFips: "25540",
            GeoName: "Hartford-West Hartford-East Hartford, CT "
          },
          {
            Index: "84.2",
            GeoFips: "25620",
            GeoName: "Hattiesburg, MS "
          },
          {
            Index: "88.5",
            GeoFips: "25860",
            GeoName: "Hickory-Lenoir-Morganton, NC "
          },
          {
            Index: "93.9",
            GeoFips: "25940",
            GeoName: "Hilton Head Island-Bluffton-Beaufort, SC "
          },
          {
            Index: "91.5",
            GeoFips: "25980",
            GeoName: "Hinesville, GA "
          },
          {
            Index: "88.5",
            GeoFips: "26140",
            GeoName: "Homosassa Springs, FL "
          },
          {
            Index: "85.2",
            GeoFips: "26300",
            GeoName: "Hot Springs, AR "
          },
          {
            Index: "93",
            GeoFips: "26380",
            GeoName: "Houma-Thibodaux, LA "
          },
          {
            Index: "100.3",
            GeoFips: "26420",
            GeoName: "Houston-The Woodlands-Sugar Land, TX "
          },
          {
            Index: "86.8",
            GeoFips: "26580",
            GeoName: "Huntington-Ashland, WV-KY-OH "
          },
          {
            Index: "90.7",
            GeoFips: "26620",
            GeoName: "Huntsville, AL "
          },
          {
            Index: "88.8",
            GeoFips: "26820",
            GeoName: "Idaho Falls, ID "
          },
          {
            Index: "93.4",
            GeoFips: "26900",
            GeoName: "Indianapolis-Carmel-Anderson, IN "
          },
          {
            Index: "96.3",
            GeoFips: "26980",
            GeoName: "Iowa City, IA "
          },
          {
            Index: "104.6",
            GeoFips: "27060",
            GeoName: "Ithaca, NY "
          },
          {
            Index: "90.6",
            GeoFips: "27100",
            GeoName: "Jackson, MI "
          },
          {
            Index: "90.6",
            GeoFips: "27140",
            GeoName: "Jackson, MS "
          },
          {
            Index: "83.1",
            GeoFips: "27180",
            GeoName: "Jackson, TN "
          },
          {
            Index: "96",
            GeoFips: "27260",
            GeoName: "Jacksonville, FL "
          },
          {
            Index: "94.2",
            GeoFips: "27340",
            GeoName: "Jacksonville, NC "
          },
          {
            Index: "92.5",
            GeoFips: "27500",
            GeoName: "Janesville-Beloit, WI "
          },
          {
            Index: "82.2",
            GeoFips: "27620",
            GeoName: "Jefferson City, MO "
          },
          {
            Index: "88.6",
            GeoFips: "27740",
            GeoName: "Johnson City, TN "
          },
          {
            Index: "85.5",
            GeoFips: "27780",
            GeoName: "Johnstown, PA "
          },
          {
            Index: "82",
            GeoFips: "27860",
            GeoName: "Jonesboro, AR "
          },
          {
            Index: "88.1",
            GeoFips: "27900",
            GeoName: "Joplin, MO "
          },
          {
            Index: "106.2",
            GeoFips: "27980",
            GeoName: "Kahului-Wailuku-Lahaina, HI "
          },
          {
            Index: "92.5",
            GeoFips: "28020",
            GeoName: "Kalamazoo-Portage, MI "
          },
          {
            Index: "99",
            GeoFips: "28100",
            GeoName: "Kankakee, IL "
          },
          {
            Index: "93.4",
            GeoFips: "28140",
            GeoName: "Kansas City, MO-KS "
          },
          {
            Index: "98.1",
            GeoFips: "28420",
            GeoName: "Kennewick-Richland, WA "
          },
          {
            Index: "92.6",
            GeoFips: "28660",
            GeoName: "Killeen-Temple, TX "
          },
          {
            Index: "86.5",
            GeoFips: "28700",
            GeoName: "Kingsport-Bristol-Bristol, TN-VA "
          },
          {
            Index: "103.1",
            GeoFips: "28740",
            GeoName: "Kingston, NY "
          },
          {
            Index: "90.5",
            GeoFips: "28940",
            GeoName: "Knoxville, TN "
          },
          {
            Index: "87.2",
            GeoFips: "29020",
            GeoName: "Kokomo, IN "
          },
          {
            Index: "93.3",
            GeoFips: "29100",
            GeoName: "La Crosse-Onalaska, WI-MN "
          },
          {
            Index: "89.1",
            GeoFips: "29180",
            GeoName: "Lafayette, LA "
          },
          {
            Index: "93.9",
            GeoFips: "29200",
            GeoName: "Lafayette-West Lafayette, IN "
          },
          {
            Index: "89.3",
            GeoFips: "29340",
            GeoName: "Lake Charles, LA "
          },
          {
            Index: "93.6",
            GeoFips: "29420",
            GeoName: "Lake Havasu City-Kingman, AZ "
          },
          {
            Index: "93.3",
            GeoFips: "29460",
            GeoName: "Lakeland-Winter Haven, FL "
          },
          {
            Index: "98.4",
            GeoFips: "29540",
            GeoName: "Lancaster, PA "
          },
          {
            Index: "93.9",
            GeoFips: "29620",
            GeoName: "Lansing-East Lansing, MI "
          },
          {
            Index: "88.7",
            GeoFips: "29700",
            GeoName: "Laredo, TX "
          },
          {
            Index: "92.9",
            GeoFips: "29740",
            GeoName: "Las Cruces, NM "
          },
          {
            Index: "98.7",
            GeoFips: "29820",
            GeoName: "Las Vegas-Henderson-Paradise, NV "
          },
          {
            Index: "94.3",
            GeoFips: "29940",
            GeoName: "Lawrence, KS "
          },
          {
            Index: "91.1",
            GeoFips: "30020",
            GeoName: "Lawton, OK "
          },
          {
            Index: "94.9",
            GeoFips: "30140",
            GeoName: "Lebanon, PA "
          },
          {
            Index: "89.9",
            GeoFips: "30300",
            GeoName: "Lewiston, ID-WA "
          },
          {
            Index: "94.7",
            GeoFips: "30340",
            GeoName: "Lewiston-Auburn, ME "
          },
          {
            Index: "92.4",
            GeoFips: "30460",
            GeoName: "Lexington-Fayette, KY "
          },
          {
            Index: "89.6",
            GeoFips: "30620",
            GeoName: "Lima, OH "
          },
          {
            Index: "92.9",
            GeoFips: "30700",
            GeoName: "Lincoln, NE "
          },
          {
            Index: "90.7",
            GeoFips: "30780",
            GeoName: "Little Rock-North Little Rock-Conway, AR "
          },
          {
            Index: "90",
            GeoFips: "30860",
            GeoName: "Logan, UT-ID "
          },
          {
            Index: "91.8",
            GeoFips: "30980",
            GeoName: "Longview, TX "
          },
          {
            Index: "93.5",
            GeoFips: "31020",
            GeoName: "Longview, WA "
          },
          {
            Index: "117",
            GeoFips: "31080",
            GeoName: "Los Angeles-Long Beach-Anaheim, CA "
          },
          {
            Index: "91.4",
            GeoFips: "31140",
            GeoName: "Louisville/Jefferson County, KY-IN "
          },
          {
            Index: "93.5",
            GeoFips: "31180",
            GeoName: "Lubbock, TX "
          },
          {
            Index: "90.7",
            GeoFips: "31340",
            GeoName: "Lynchburg, VA "
          },
          {
            Index: "87.5",
            GeoFips: "31420",
            GeoName: "Macon-Bibb County, GA "
          },
          {
            Index: "96.8",
            GeoFips: "31460",
            GeoName: "Madera, CA "
          },
          {
            Index: "97.8",
            GeoFips: "31540",
            GeoName: "Madison, WI "
          },
          {
            Index: "108.2",
            GeoFips: "31700",
            GeoName: "Manchester-Nashua, NH "
          },
          {
            Index: "92.9",
            GeoFips: "31740",
            GeoName: "Manhattan, KS "
          },
          {
            Index: "89.3",
            GeoFips: "31860",
            GeoName: "Mankato-North Mankato, MN "
          },
          {
            Index: "87.1",
            GeoFips: "31900",
            GeoName: "Mansfield, OH "
          },
          {
            Index: "85.7",
            GeoFips: "32580",
            GeoName: "McAllen-Edinburg-Mission, TX "
          },
          {
            Index: "98.2",
            GeoFips: "32780",
            GeoName: "Medford, OR "
          },
          {
            Index: "91.9",
            GeoFips: "32820",
            GeoName: "Memphis, TN-MS-AR "
          },
          {
            Index: "95.5",
            GeoFips: "32900",
            GeoName: "Merced, CA "
          },
          {
            Index: "105.9",
            GeoFips: "33100",
            GeoName: "Miami-Fort Lauderdale-West Palm Beach, FL "
          },
          {
            Index: "85.9",
            GeoFips: "33140",
            GeoName: "Michigan City-La Porte, IN "
          },
          {
            Index: "92.4",
            GeoFips: "33220",
            GeoName: "Midland, MI "
          },
          {
            Index: "99.3",
            GeoFips: "33260",
            GeoName: "Midland, TX "
          },
          {
            Index: "95.9",
            GeoFips: "33340",
            GeoName: "Milwaukee-Waukesha-West Allis, WI "
          },
          {
            Index: "102.6",
            GeoFips: "33460",
            GeoName: "Minneapolis-St. Paul-Bloomington, MN-WI "
          },
          {
            Index: "95.8",
            GeoFips: "33540",
            GeoName: "Missoula, MT "
          },
          {
            Index: "88.6",
            GeoFips: "33660",
            GeoName: "Mobile, AL "
          },
          {
            Index: "98.7",
            GeoFips: "33700",
            GeoName: "Modesto, CA "
          },
          {
            Index: "86.3",
            GeoFips: "33740",
            GeoName: "Monroe, LA "
          },
          {
            Index: "95.4",
            GeoFips: "33780",
            GeoName: "Monroe, MI "
          },
          {
            Index: "89.7",
            GeoFips: "33860",
            GeoName: "Montgomery, AL "
          },
          {
            Index: "88.5",
            GeoFips: "34060",
            GeoName: "Morgantown, WV "
          },
          {
            Index: "81.9",
            GeoFips: "34100",
            GeoName: "Morristown, TN "
          },
          {
            Index: "97.3",
            GeoFips: "34580",
            GeoName: "Mount Vernon-Anacortes, WA "
          },
          {
            Index: "89.6",
            GeoFips: "34620",
            GeoName: "Muncie, IN "
          },
          {
            Index: "88.7",
            GeoFips: "34740",
            GeoName: "Muskegon, MI "
          },
          {
            Index: "91.1",
            GeoFips: "34820",
            GeoName: "Myrtle Beach-Conway-North Myrtle Beach, SC-NC "
          },
          {
            Index: "118.9",
            GeoFips: "34900",
            GeoName: "Napa, CA "
          },
          {
            Index: "99.6",
            GeoFips: "34940",
            GeoName: "Naples-Immokalee-Marco Island, FL "
          },
          {
            Index: "93.9",
            GeoFips: "34980",
            GeoName: "Nashville-Davidson--Murfreesboro--Franklin, TN "
          },
          {
            Index: "87.1",
            GeoFips: "35100",
            GeoName: "New Bern, NC "
          },
          {
            Index: "112.9",
            GeoFips: "35300",
            GeoName: "New Haven-Milford, CT "
          },
          {
            Index: "96",
            GeoFips: "35380",
            GeoName: "New Orleans-Metairie, LA "
          },
          {
            Index: "122.3",
            GeoFips: "35620",
            GeoName: "New York-Newark-Jersey City, NY-NJ-PA "
          },
          {
            Index: "89.2",
            GeoFips: "35660",
            GeoName: "Niles-Benton Harbor, MI "
          },
          {
            Index: "98.7",
            GeoFips: "35840",
            GeoName: "North Port-Sarasota-Bradenton, FL "
          },
          {
            Index: "100.5",
            GeoFips: "35980",
            GeoName: "Norwich-New London, CT "
          },
          {
            Index: "90.8",
            GeoFips: "36100",
            GeoName: "Ocala, FL "
          },
          {
            Index: "107.2",
            GeoFips: "36140",
            GeoName: "Ocean City, NJ "
          },
          {
            Index: "96.6",
            GeoFips: "36220",
            GeoName: "Odessa, TX "
          },
          {
            Index: "95.9",
            GeoFips: "36260",
            GeoName: "Ogden-Clearfield, UT "
          },
          {
            Index: "92.4",
            GeoFips: "36420",
            GeoName: "Oklahoma City, OK "
          },
          {
            Index: "105.4",
            GeoFips: "36500",
            GeoName: "Olympia-Tumwater, WA "
          },
          {
            Index: "94.1",
            GeoFips: "36540",
            GeoName: "Omaha-Council Bluffs, NE-IA "
          },
          {
            Index: "97.8",
            GeoFips: "36740",
            GeoName: "Orlando-Kissimmee-Sanford, FL "
          },
          {
            Index: "91.8",
            GeoFips: "36780",
            GeoName: "Oshkosh-Neenah, WI "
          },
          {
            Index: "87.6",
            GeoFips: "36980",
            GeoName: "Owensboro, KY "
          },
          {
            Index: "114.7",
            GeoFips: "37100",
            GeoName: "Oxnard-Thousand Oaks-Ventura, CA "
          },
          {
            Index: "95.2",
            GeoFips: "37340",
            GeoName: "Palm Bay-Melbourne-Titusville, FL "
          },
          {
            Index: "94.9",
            GeoFips: "37460",
            GeoName: "Panama City, FL "
          },
          {
            Index: "85.5",
            GeoFips: "37620",
            GeoName: "Parkersburg-Vienna, WV "
          },
          {
            Index: "93.5",
            GeoFips: "37860",
            GeoName: "Pensacola-Ferry Pass-Brent, FL "
          },
          {
            Index: "91.8",
            GeoFips: "37900",
            GeoName: "Peoria, IL "
          },
          {
            Index: "107.2",
            GeoFips: "37980",
            GeoName: "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD "
          },
          {
            Index: "97.7",
            GeoFips: "38060",
            GeoName: "Phoenix-Mesa-Scottsdale, AZ "
          },
          {
            Index: "84.6",
            GeoFips: "38220",
            GeoName: "Pine Bluff, AR "
          },
          {
            Index: "94.8",
            GeoFips: "38300",
            GeoName: "Pittsburgh, PA "
          },
          {
            Index: "95.4",
            GeoFips: "38340",
            GeoName: "Pittsfield, MA "
          },
          {
            Index: "89.7",
            GeoFips: "38540",
            GeoName: "Pocatello, ID "
          },
          {
            Index: "100.7",
            GeoFips: "38860",
            GeoName: "Portland-South Portland, ME "
          },
          {
            Index: "101.3",
            GeoFips: "38900",
            GeoName: "Portland-Vancouver-Hillsboro, OR-WA "
          },
          {
            Index: "95.8",
            GeoFips: "38940",
            GeoName: "Port St. Lucie, FL "
          },
          {
            Index: "95.4",
            GeoFips: "39140",
            GeoName: "Prescott, AZ "
          },
          {
            Index: "99",
            GeoFips: "39300",
            GeoName: "Providence-Warwick, RI-MA "
          },
          {
            Index: "97.3",
            GeoFips: "39340",
            GeoName: "Provo-Orem, UT "
          },
          {
            Index: "92.3",
            GeoFips: "39380",
            GeoName: "Pueblo, CO "
          },
          {
            Index: "94.8",
            GeoFips: "39460",
            GeoName: "Punta Gorda, FL "
          },
          {
            Index: "94",
            GeoFips: "39540",
            GeoName: "Racine, WI "
          },
          {
            Index: "95.9",
            GeoFips: "39580",
            GeoName: "Raleigh, NC "
          },
          {
            Index: "92.3",
            GeoFips: "39660",
            GeoName: "Rapid City, SD "
          },
          {
            Index: "96",
            GeoFips: "39740",
            GeoName: "Reading, PA "
          },
          {
            Index: "98.2",
            GeoFips: "39820",
            GeoName: "Redding, CA "
          },
          {
            Index: "99.1",
            GeoFips: "39900",
            GeoName: "Reno, NV "
          },
          {
            Index: "96.2",
            GeoFips: "40060",
            GeoName: "Richmond, VA "
          },
          {
            Index: "105.9",
            GeoFips: "40140",
            GeoName: "Riverside-San Bernardino-Ontario, CA "
          },
          {
            Index: "91.4",
            GeoFips: "40220",
            GeoName: "Roanoke, VA "
          },
          {
            Index: "93.7",
            GeoFips: "40340",
            GeoName: "Rochester, MN "
          },
          {
            Index: "97.4",
            GeoFips: "40380",
            GeoName: "Rochester, NY "
          },
          {
            Index: "91.3",
            GeoFips: "40420",
            GeoName: "Rockford, IL "
          },
          {
            Index: "86.3",
            GeoFips: "40580",
            GeoName: "Rocky Mount, NC "
          },
          {
            Index: "80.7",
            GeoFips: "40660",
            GeoName: "Rome, GA "
          },
          {
            Index: "102.5",
            GeoFips: "40900",
            GeoName: "Sacramento--Roseville--Arden-Arcade, CA "
          },
          {
            Index: "89.6",
            GeoFips: "40980",
            GeoName: "Saginaw, MI "
          },
          {
            Index: "93.5",
            GeoFips: "41060",
            GeoName: "St. Cloud, MN "
          },
          {
            Index: "93.8",
            GeoFips: "41100",
            GeoName: "St. George, UT "
          },
          {
            Index: "88.9",
            GeoFips: "41140",
            GeoName: "St. Joseph, MO-KS "
          },
          {
            Index: "90.5",
            GeoFips: "41180",
            GeoName: "St. Louis, MO-IL "
          },
          {
            Index: "95.4",
            GeoFips: "41420",
            GeoName: "Salem, OR "
          },
          {
            Index: "107.9",
            GeoFips: "41500",
            GeoName: "Salinas, CA "
          },
          {
            Index: "89.7",
            GeoFips: "41540",
            GeoName: "Salisbury, MD-DE "
          },
          {
            Index: "99.7",
            GeoFips: "41620",
            GeoName: "Salt Lake City, UT "
          },
          {
            Index: "93.5",
            GeoFips: "41660",
            GeoName: "San Angelo, TX "
          },
          {
            Index: "94.4",
            GeoFips: "41700",
            GeoName: "San Antonio-New Braunfels, TX "
          },
          {
            Index: "115.9",
            GeoFips: "41740",
            GeoName: "San Diego-Carlsbad, CA "
          },
          {
            Index: "121.3",
            GeoFips: "41860",
            GeoName: "San Francisco-Oakland-Hayward, CA "
          },
          {
            Index: "122.9",
            GeoFips: "41940",
            GeoName: "San Jose-Sunnyvale-Santa Clara, CA "
          },
          {
            Index: "107",
            GeoFips: "42020",
            GeoName: "San Luis Obispo-Paso Robles-Arroyo Grande, CA "
          },
          {
            Index: "121.8",
            GeoFips: "42100",
            GeoName: "Santa Cruz-Watsonville, CA "
          },
          {
            Index: "99.7",
            GeoFips: "42140",
            GeoName: "Santa Fe, NM "
          },
          {
            Index: "108.8",
            GeoFips: "42200",
            GeoName: "Santa Maria-Santa Barbara, CA "
          },
          {
            Index: "118.3",
            GeoFips: "42220",
            GeoName: "Santa Rosa, CA "
          },
          {
            Index: "94.3",
            GeoFips: "42340",
            GeoName: "Savannah, GA "
          },
          {
            Index: "91.8",
            GeoFips: "42540",
            GeoName: "Scranton--Wilkes-Barre--Hazleton, PA "
          },
          {
            Index: "107.8",
            GeoFips: "42660",
            GeoName: "Seattle-Tacoma-Bellevue, WA "
          },
          {
            Index: "90.9",
            GeoFips: "42680",
            GeoName: "Sebastian-Vero Beach, FL "
          },
          {
            Index: "84.9",
            GeoFips: "42700",
            GeoName: "Sebring, FL "
          },
          {
            Index: "91.7",
            GeoFips: "43100",
            GeoName: "Sheboygan, WI "
          },
          {
            Index: "91.3",
            GeoFips: "43300",
            GeoName: "Sherman-Denison, TX "
          },
          {
            Index: "90.9",
            GeoFips: "43340",
            GeoName: "Shreveport-Bossier City, LA "
          },
          {
            Index: "90.7",
            GeoFips: "43420",
            GeoName: "Sierra Vista-Douglas, AZ "
          },
          {
            Index: "89",
            GeoFips: "43580",
            GeoName: "Sioux City, IA-NE-SD "
          },
          {
            Index: "92.8",
            GeoFips: "43620",
            GeoName: "Sioux Falls, SD "
          },
          {
            Index: "90.2",
            GeoFips: "43780",
            GeoName: "South Bend-Mishawaka, IN-MI "
          },
          {
            Index: "87.8",
            GeoFips: "43900",
            GeoName: "Spartanburg, SC "
          },
          {
            Index: "95.6",
            GeoFips: "44060",
            GeoName: "Spokane-Spokane Valley, WA "
          },
          {
            Index: "92.3",
            GeoFips: "44100",
            GeoName: "Springfield, IL "
          },
          {
            Index: "96.8",
            GeoFips: "44140",
            GeoName: "Springfield, MA "
          },
          {
            Index: "88.5",
            GeoFips: "44180",
            GeoName: "Springfield, MO "
          },
          {
            Index: "88.5",
            GeoFips: "44220",
            GeoName: "Springfield, OH "
          },
          {
            Index: "102.4",
            GeoFips: "44300",
            GeoName: "State College, PA "
          },
          {
            Index: "88.8",
            GeoFips: "44420",
            GeoName: "Staunton-Waynesboro, VA "
          },
          {
            Index: "100.4",
            GeoFips: "44700",
            GeoName: "Stockton-Lodi, CA "
          },
          {
            Index: "87.6",
            GeoFips: "44940",
            GeoName: "Sumter, SC "
          },
          {
            Index: "95.5",
            GeoFips: "45060",
            GeoName: "Syracuse, NY "
          },
          {
            Index: "94.3",
            GeoFips: "45220",
            GeoName: "Tallahassee, FL "
          },
          {
            Index: "100.1",
            GeoFips: "45300",
            GeoName: "Tampa-St. Petersburg-Clearwater, FL "
          },
          {
            Index: "87.9",
            GeoFips: "45460",
            GeoName: "Terre Haute, IN "
          },
          {
            Index: "87.6",
            GeoFips: "45500",
            GeoName: "Texarkana, TX-AR "
          },
          {
            Index: "90.2",
            GeoFips: "45540",
            GeoName: "The Villages, FL "
          },
          {
            Index: "89.6",
            GeoFips: "45780",
            GeoName: "Toledo, OH "
          },
          {
            Index: "89.8",
            GeoFips: "45820",
            GeoName: "Topeka, KS "
          },
          {
            Index: "112.5",
            GeoFips: "45940",
            GeoName: "Trenton, NJ "
          },
          {
            Index: "97.1",
            GeoFips: "46060",
            GeoName: "Tucson, AZ "
          },
          {
            Index: "91.3",
            GeoFips: "46140",
            GeoName: "Tulsa, OK "
          },
          {
            Index: "88.3",
            GeoFips: "46220",
            GeoName: "Tuscaloosa, AL "
          },
          {
            Index: "94",
            GeoFips: "46340",
            GeoName: "Tyler, TX "
          },
          {
            Index: "123.5",
            GeoFips: "46520",
            GeoName: "Urban Honolulu, HI "
          },
          {
            Index: "93",
            GeoFips: "46540",
            GeoName: "Utica-Rome, NY "
          },
          {
            Index: "82.2",
            GeoFips: "46660",
            GeoName: "Valdosta, GA "
          },
          {
            Index: "115.4",
            GeoFips: "46700",
            GeoName: "Vallejo-Fairfield, CA "
          },
          {
            Index: "93.7",
            GeoFips: "47020",
            GeoName: "Victoria, TX "
          },
          {
            Index: "102.2",
            GeoFips: "47220",
            GeoName: "Vineland-Bridgeton, NJ "
          },
          {
            Index: "98.4",
            GeoFips: "47260",
            GeoName: "Virginia Beach-Norfolk-Newport News, VA-NC "
          },
          {
            Index: "95.4",
            GeoFips: "47300",
            GeoName: "Visalia-Porterville, CA "
          },
          {
            Index: "91.5",
            GeoFips: "47380",
            GeoName: "Waco, TX "
          },
          {
            Index: "92.6",
            GeoFips: "47460",
            GeoName: "Walla Walla, WA "
          },
          {
            Index: "89.9",
            GeoFips: "47580",
            GeoName: "Warner Robins, GA "
          },
          {
            Index: "119.4",
            GeoFips: "47900",
            GeoName: "Washington-Arlington-Alexandria, DC-VA-MD-WV "
          },
          {
            Index: "91.2",
            GeoFips: "47940",
            GeoName: "Waterloo-Cedar Falls, IA "
          },
          {
            Index: "98.1",
            GeoFips: "48060",
            GeoName: "Watertown-Fort Drum, NY "
          },
          {
            Index: "91.8",
            GeoFips: "48140",
            GeoName: "Wausau, WI "
          },
          {
            Index: "87.1",
            GeoFips: "48260",
            GeoName: "Weirton-Steubenville, WV-OH "
          },
          {
            Index: "95",
            GeoFips: "48300",
            GeoName: "Wenatchee, WA "
          },
          {
            Index: "86.7",
            GeoFips: "48540",
            GeoName: "Wheeling, WV-OH "
          },
          {
            Index: "91",
            GeoFips: "48620",
            GeoName: "Wichita, KS "
          },
          {
            Index: "90.9",
            GeoFips: "48660",
            GeoName: "Wichita Falls, TX "
          },
          {
            Index: "93.6",
            GeoFips: "48700",
            GeoName: "Williamsport, PA "
          },
          {
            Index: "94.9",
            GeoFips: "48900",
            GeoName: "Wilmington, NC "
          },
          {
            Index: "91.3",
            GeoFips: "49020",
            GeoName: "Winchester, VA-WV "
          },
          {
            Index: "90",
            GeoFips: "49180",
            GeoName: "Winston-Salem, NC "
          },
          {
            Index: "103.9",
            GeoFips: "49340",
            GeoName: "Worcester, MA-CT "
          },
          {
            Index: "95",
            GeoFips: "49420",
            GeoName: "Yakima, WA "
          },
          {
            Index: "96.1",
            GeoFips: "49620",
            GeoName: "York-Hanover, PA "
          },
          {
            Index: "88.8",
            GeoFips: "49660",
            GeoName: "Youngstown-Warren-Boardman, OH-PA "
          },
          {
            Index: "98.5",
            GeoFips: "49700",
            GeoName: "Yuba City, CA "
          },
          {
            Index: "93.3",
            GeoFips: "49740",
            GeoName: "Yuma, AZ "
          },
          {
            Index: "",
            GeoFips: "Legend / Footnotes:",
            GeoName: ""
          },
          {
            Index: "",
            GeoFips: "1/ Regional Price Parities are not available for the Enid, OK, Metropolitan Statistical Area. These will be published with the release of 2015 data on June 22, 2017.",
            GeoName: ""
          },
          {
            Index: "",
            GeoFips: "The 2008-14 Regional Price Parities were estimated using statistical area delineations published by the Office of Management and Budget in February 2013.",
            GeoName: ""
          },
          {
            Index: "",
            GeoFips: "(NA) Data not available for this year.",
            GeoName: ""
          },
          {
            Index: "",
            GeoFips: "Last updated: July 7, 2+016-- new estimates for 2014; revised estimates for 2012-2013.",
            GeoName: ""
          }
        ];


        // var salaryComp1 = [];
        // var salaryComp2 = [];

        salaryCity();
        salaryCity2();

        function salaryCity() {
          var i = rpps.length;

          while(i--) {
              if($("#city-div").val().trim() == rpps[i].GeoName) {
                  console.log("success!");
                  salaryComp2.push(rpps[i].Index);
                  break;
              }
          }
          console.log(salaryComp1[0]);
        };

        function salaryCity2() {
          var i = rpps.length;

          while(i--) {
              if($("#city-div2").val().trim() == rpps[i].GeoName) {
                  console.log("success!");
                  salaryComp2.push(rpps[i].Index);
                  break;
              }
          }
          console.log(salaryComp2[0]);
        };












  });


}