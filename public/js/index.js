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
              
              var results = JSON.stringify(response, null, 2);
              console.log("FIRST AJAX CALL RESULTS - BEGINNING");
              console.log(results);
              console.log("FIRST AJAX CALL RESULTS - END");
              
          });

      $.ajax({
              url: queryURL2,
              method: "GET"
          })
       
          .done(function(response) {
              
              var results = JSON.stringify(response, null, 2);
              console.log("SECOND AJAX CALL RESULTS - BEGINNING");
              console.log(results);
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


}