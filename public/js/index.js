window.onload = function() { 


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


// NUMBEO API AJAX CALL
var userIp = [];

  $.getJSON("http://jsonip.com/?callback=?", function (data) {
    userIp.push(data.ip);
  });

$("#firstbutton").on("click", function(event) {
   event.preventDefault();
     $('#city-div').html('');
            //$('#city-div').append("Use the buttons above");
            $('#city-div').append(function(event){

                    var city = $("#city-input").val().trim().toLowerCase();



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

        var city2 = $("#city-input2").val().trim().toLowerCase();



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
       var rpps = [{cityName: "Abilene, TX", indexScore: 91.7},
                  {cityName: "Akron, OH", indexScore: 88.8},
                  {cityName: "Albany, GA", indexScore: 84},
                  {cityName: "Albany, OR", indexScore: 94},
                  {cityName: "Albany, NY", indexScore: 99.2},
                  {cityName: "Schenectady, NY", indexScore: 99.2},
                  {cityName: "Troy, NY", indexScore: 99.2},
                  {cityName: "Albuquerque, NM", indexScore: 97.2},
                  {cityName: "Alexandria, LA", indexScore: 89},
                  {cityName: "Allentown, PA", indexScore: 100.3},
                  {cityName: "Bethlehem, PA", indexScore: 100.3},
                  {cityName: "Easton, PA", indexScore: 100.3},
                  {cityName: "Altoona, PA", indexScore: 90},
                  {cityName: "Amarillo, TX", indexScore: 93.1},
                  {cityName: "Ames, IA", indexScore: 90.2},
                  {cityName: "Anchorage, AK", indexScore: 109.6},
                  {cityName: "Ann Arbor, MI", indexScore: 102},
                  {cityName: "Anniston, AL", indexScore: 84.6},
                  {cityName: "Oxford, AL", indexScore: 84.6},
                  {cityName: "Jacksonville, AL", indexScore: 84.6},
                  {cityName: "Appleton, WI", indexScore: 92.7},
                  {cityName: "Asheville, NC", indexScore: 93.2},
                  {cityName: "Athens, GA", indexScore: 92},
                  {cityName: "Atlanta, GA", indexScore: 95.6},
                  {cityName: "Sandy Springs, GA", indexScore: 95.6},
                  {cityName: "Roswell, GA", indexScore: 95.6},
                  {cityName: "Atlantic City, NJ", indexScore: 107},
                  {cityName: "Hammonton, NJ", indexScore: 107},
                  {cityName: "Auburn, AL", indexScore: 85.8},
                  {cityName: "Opelika, AL", indexScore: 85.8},
                  {cityName: "Augusta, GA", indexScore: 89.3},
                  {cityName: "Augusta, SC", indexScore: 89.3},
                  {cityName: "Austin, TX", indexScore: 99},
                  {cityName: "Round Rock, TX", indexScore: 99},
                  {cityName: "Bakersfield, CA", indexScore: 97.8},
                  {cityName: "Baltimore, MD", indexScore: 108},
                  {cityName: "Columbia, MD", indexScore: 108},
                  {cityName: "Towson, MD", indexScore: 108},
                  {cityName: "Bangor, ME", indexScore: 95.9},
                  {cityName: "Barnstable Town, MA", indexScore: 101.9},
                  {cityName: "Baton Rouge, LA", indexScore: 93.3},
                  {cityName: "Battle Creek, MI", indexScore: 91.6},
                  {cityName: "Bay City, MI", indexScore: 90.2},
                  {cityName: "Beaumont, TX", indexScore: 90.3},
                  {cityName: "Port Arthur, TX", indexScore: 90.3},
                  {cityName: "Beckley, WV", indexScore: 79.7},
                  {cityName: "Bellingham, WA", indexScore: 100.1},
                  {cityName: "Bend, OR", indexScore: 95.8},
                  {cityName: "Redmond, OR", indexScore: 95.8},
                  {cityName: "Billings, MT", indexScore: 97.7},
                  {cityName: "Binghamton, NY", indexScore: 95},
                  {cityName: "Birmingham, AL", indexScore: 89.9},
                  {cityName: "Hoover, AL", indexScore: 89.9},
                  {cityName: "Bismarck, ND", indexScore: 94},
                  {cityName: "Blacksburg, VA", indexScore: 88.2},
                  {cityName: "Christiansburg, VA", indexScore: 88.2},
                  {cityName: "Radford, VA", indexScore: 88.2},
                  {cityName: "Bloomington, IL", indexScore: 94.1},
                  {cityName: "Bloomington, IN", indexScore: 94.9},
                  {cityName: "Bloomsburg, PA", indexScore: 93},
                  {cityName: "Berwick, PA", indexScore: 93},
                  {cityName: "Boise City, ID", indexScore: 95.1},
                  {cityName: "Boston, MA", indexScore: 110.3},
                  {cityName: "Cambridge, MA", indexScore: 110.3},
                  {cityName: "Newton, MA", indexScore: 110.3},
                  {cityName: "Newton, NH", indexScore: 110.3},
                  {cityName: "Boulder, CO", indexScore: 109.1},
                  {cityName: "Bowling Green, KY", indexScore: 85.8},
                  {cityName: "Bremerton, WA", indexScore: 105},
                  {cityName: "Silverdale, WA", indexScore: 105},
                  {cityName: "Bridgeport, CT", indexScore: 120.4},
                  {cityName: "Stamford, CT", indexScore: 120.4},
                  {cityName: "Norwalk, CT", indexScore: 120.4},
                  {cityName: "Brownsville, TX", indexScore: 85},
                  {cityName: "Harlingen, TX", indexScore: 85},
                  {cityName: "Brunswick, GA", indexScore: 86},
                  {cityName: "Buffalo, NY", indexScore: 93.8},
                  {cityName: "Cheektowaga, NY", indexScore: 93.8},
                  {cityName: "Niagara Falls, NY", indexScore: 93.8},
                  {cityName: "Burlington, NC", indexScore: 90.5},
                  {cityName: "Burlington, VT", indexScore: 102.7},
                  {cityName: "South Burlington, VT", indexScore: 102.7},
                  {cityName: "California, MD", indexScore: 98.2},
                  {cityName: "Lexington Park, MD", indexScore: 98.2},
                  {cityName: "Canton, OH", indexScore: 89.3},
                  {cityName: "Massillon, OH", indexScore: 89.3},
                  {cityName: "Cape Coral, FL", indexScore: 95.1},
                  {cityName: "Fort Myers, FL", indexScore: 95.1},
                  {cityName: "Cape Girardeau, MO", indexScore: 83.5},
                  {cityName: "Cape Girardeau, IL", indexScore: 83.5},
                  {cityName: "Carbondale, IL", indexScore: 84},
                  {cityName: "Marion, IL", indexScore: 84},
                  {cityName: "Carson City, NV", indexScore: 95.9},
                  {cityName: "Casper, WY", indexScore: 97.9},
                  {cityName: "Cedar Rapids, IA", indexScore: 90.6},
                  {cityName: "Chambersburg, PA", indexScore: 94.1},
                  {cityName: "Waynesboro, PA", indexScore: 94.1},
                  {cityName: "Champaign, IL", indexScore: 93.4},
                  {cityName: "Urbana, IL", indexScore: 93.4},
                  {cityName: "Charleston, WV", indexScore: 89},
                  {cityName: "Charleston, SC", indexScore: 96.3},
                  {cityName: "North Charleston, SC", indexScore: 96.3},
                  {cityName: "Charlotte, NC", indexScore: 93.6},
                  {cityName: "Concord, NC", indexScore: 93.6},
                  {cityName: "Gastonia, NC", indexScore: 93.6},
                  {cityName: "Gastonia, SC", indexScore: 93.6},
                  {cityName: "Charlottesville, VA", indexScore: 97.8},
                  {cityName: "Chattanooga, TN", indexScore: 90.6},
                  {cityName: "Chattanooga, GA", indexScore: 90.6},
                  {cityName: "Cheyenne, WY", indexScore: 97.6},
                  {cityName: "Chicago, IL", indexScore: 106},
                  {cityName: "Naperville, IL", indexScore: 106},
                  {cityName: "Elgin, IL", indexScore: 106},
                  {cityName: "Chico, CA", indexScore: 100},
                  {cityName: "Cincinnati, OH", indexScore: 89.8},
                  {cityName: "Cincinnati, KY", indexScore: 89.8},
                  {cityName: "Cincinnati, IN", indexScore: 89.8},
                  {cityName: "Clarksville, TN", indexScore:91.3},
                  {cityName: "Clarksville, KY", indexScore: 91.3},
                  {cityName: "Cleveland, TN", indexScore: 84.1},
                  {cityName: "Cleveland, OH", indexScore: 89.1},
                  {cityName: "Elyria, OH", indexScore: 89.1},
                  {cityName: "Coeur d'Alene, ID", indexScore: 92.9},
                  {cityName: "College Station, TX", indexScore: 93.9},
                  {cityName: "Bryan, TX", indexScore: 93.9},
                  {cityName: "Colorado Springs, CO", indexScore: 99.7},
                  {cityName: "Columbia, MO", indexScore: 93},
                  {cityName: "Columbia, SC", indexScore: 91.9},
                  {cityName: "Columbus, GA", indexScore: 89.5},
                  {cityName: "Columbus, AL", indexScore: 89.5},
                  {cityName: "Columbus, IN", indexScore: 87.7},
                  {cityName: "Columbus, OH", indexScore: 93.4},
                  {cityName: "Corpus Christi, TX", indexScore: 93.5},
                  {cityName: "Corvallis, OR", indexScore: 98.6},
                  {cityName: "Crestview, FL", indexScore: 95.3},
                  {cityName: "Fort Walton Beach, FL", indexScore: 95.3},
                  {cityName: "Destin, FL", indexScore: 95.3},
                  {cityName: "Cumberland, MD", indexScore: 88.4},
                  {cityName: "Cumberland, WV", indexScore: 88.4},
                  {cityName: "Dallas, TX", indexScore: 100.4},
                  {cityName: "Fort Worth, TX", indexScore: 100.4},
                  {cityName: "Arlington, TX", indexScore: 100.4},
                  {cityName: "Dalton, GA", indexScore: 83.9},
                  {cityName: "Danville, IL", indexScore: 81.1},
                  {cityName: "Daphne, AL", indexScore: 92.3},
                  {cityName: "Fairhope, AL", indexScore: 92.3},
                  {cityName: "Foley, AL", indexScore: 92.3},
                  {cityName: "Davenport, IA", indexScore: 91.4},
                  {cityName: "Moline, IL", indexScore: 91.4},
                  {cityName: "Rock Island, IL", indexScore: 91.4},
                  {cityName: "Dayton, OH", indexScore: 90.9},
                  {cityName: "Decatur, AL", indexScore: 87.1},
                  {cityName: "Decatur, IL", indexScore: 89},
                  {cityName: "Deltona, FL", indexScore: 95.7},
                  {cityName: "Daytona Beach, FL", indexScore: 95.7},
                  {cityName: "Ormond Beach, FL", indexScore: 95.7},
                  {cityName: "Denver, CO", indexScore: 104.7},
                  {cityName: "Aurora, CO", indexScore: 104.7},
                  {cityName: "Lakewood, CO", indexScore: 104.7},
                  {cityName: "Des Moines, IA", indexScore: 94.9},
                  {cityName: "West Des Moines, IA", indexScore: 94.9},
                  {cityName: "Detroit, MI", indexScore: 97.3},
                  {cityName: "Warren, MI", indexScore: 97.3},
                  {cityName: "Dearborn, MI", indexScore: 97.3},
                  {cityName: "Dothan, AL", indexScore: 85.4},
                  {cityName: "Dover, DE", indexScore: 94.2},
                  {cityName: "Dubuque, IA", indexScore: 92.9},
                  {cityName: "Duluth, MN", indexScore: 91.7},
                  {cityName: "Durham, NC", indexScore: 95.4},
                  {cityName: "Chapel Hill, NC", indexScore: 95.4},
                  {cityName: "East Stroudsburg, PA", indexScore: 98.8},
                  {cityName: "Eau Claire, WI", indexScore: 92.1},
                  {cityName: "El Centro, CA", indexScore: 90.4},
                  {cityName: "Elizabethtown, KY", indexScore: 86},
                  {cityName: "Fort Knox, KY", indexScore: 86},
                  {cityName: "Elkhart, IN", indexScore: 91},
                  {cityName: "Goshen, IN", indexScore: 91},
                  {cityName: "Elmira, NY", indexScore: 94.5},
                  {cityName: "El Paso, TX", indexScore: 90.2},
                  {cityName: "Erie, PA", indexScore: 92.5},
                  {cityName: "Eugene, OR", indexScore: 98.2},
                  {cityName: "Evansville, IN", indexScore: 90.8},
                  {cityName: "Evansville, KY", indexScore: 90.8},
                  {cityName: "Fairbanks, AK", indexScore: 105.8},
                  {cityName: "Fargo, ND", indexScore: 93.5},
                  {cityName: "Moorhead, MN", indexScore: 93.5},
                  {cityName: "Farmington, NM", indexScore: 91.1},
                  {cityName: "Fayetteville, NC", indexScore: 91.5},
                  {cityName: "Fayetteville, AR", indexScore: 90.1},
                  {cityName: "Springdale, MO", indexScore: 90.1},
                  {cityName: "Rogers, AR", indexScore: 90.1},
                  {cityName: "Flagstaff, AZ", indexScore: 97.9},
                  {cityName: "Flint, MI", indexScore: 92.8},
                  {cityName: "Florence, SC", indexScore: 86},
                  {cityName: "Florence, AL", indexScore: 84.4},
                  {cityName: "Muscle Shoals, AL", indexScore: 84.4},
                  {cityName: "Fond du Lac, WI", indexScore: 87.3},
                  {cityName: "Fort Collins, CO", indexScore: 101.4},
                  {cityName: "Fort Smith, AR", indexScore: 86.2},
                  {cityName: "Fort Smith, OK", indexScore: 86.2},
                  {cityName: "Fort Wayne, IN", indexScore: 90.7},
                  {cityName: "Fresno, CA", indexScore: 97.3},
                  {cityName: "Gadsden, AL", indexScore: 84.9},
                  {cityName: "Gainesville, FL", indexScore: 95.2},
                  {cityName: "Gainesville, GA", indexScore: 89},
                  {cityName: "Gettysburg, PA", indexScore: 95.6},
                  {cityName: "Glens Falls, NY", indexScore: 96.8},
                  {cityName: "Goldsboro, NC", indexScore: 88.1},
                  {cityName: "Grand Forks, ND", indexScore: 93.8},
                  {cityName: "Grand Forks, MN", indexScore: 93.8},
                  {cityName: "Grand Island, NE", indexScore: 85.3},
                  {cityName: "Grand Junction, CO", indexScore: 94.4},
                  {cityName: "Grand Rapids, MI", indexScore: 93.7},
                  {cityName: "Wyoming, MI", indexScore: 93.7},
                  {cityName: "Grants Pass, OR", indexScore: 93.7},
                  {cityName: "Great Falls, MT", indexScore: 93.8},
                  {cityName: "Greeley, CO", indexScore: 98.9},
                  {cityName: "Green Bay, WI", indexScore: 92},
                  {cityName: "Greensboro, NC", indexScore: 90.3},
                  {cityName: "High Point, NC", indexScore: 90.3},
                  {cityName: "Greenville, NC", indexScore: 88.9},
                  {cityName: "Greenville, SC", indexScore: 90.2},
                  {cityName: "Anderson, SC", indexScore: 90.2},
                  {cityName: "Mauldin, SC", indexScore: 90.2},
                  {cityName: "Gulfport, MS", indexScore: 90.2},
                  {cityName: "Biloxi, MS", indexScore: 90.2},
                  {cityName: "Pascagoula, MS", indexScore: 90.2},
                  {cityName: "Hagerstown, MD", indexScore: 101.9},
                  {cityName: "Martinsburg, WV", indexScore: 101.9},
                  {cityName: "Hammond, LA", indexScore: 85.3},
                  {cityName: "Hanford, CA", indexScore: 92.8},
                  {cityName: "Corcoran, CA", indexScore: 92.8},
                  {cityName: "Harrisburg, PA", indexScore: 96},
                  {cityName: "Carlisle, PA", indexScore: 96},
                  {cityName: "Harrisonburg, VA", indexScore: 91.4},
                  {cityName: "Hartford, CT", indexScore: 100.7},
                  {cityName: "West Hartford, CT", indexScore: 100.7},
                  {cityName: "East Hartford, CT", indexScore: 100.7},
                  {cityName: "Hattiesburg, MS", indexScore: 84.2},
                  {cityName: "Hickory, NC", indexScore: 88.5},
                  {cityName: "Lenoir, NC", indexScore: 88.5},
                  {cityName: "Morganton, NC", indexScore: 88.5},
                  {cityName: "Hilton Head Island, SC", indexScore: 93.9},
                  {cityName: "Bluffton, SC", indexScore: 93.9},
                  {cityName: "Beaufort, SC", indexScore: 93.9},
                  {cityName: "Hinesville, GA", indexScore: 91.5},
                  {cityName: "Homosassa Springs, FL", indexScore: 88.5},
                  {cityName: "Hot Springs, AR", indexScore: 85.2},
                  {cityName: "Houma, LA", indexScore: 93},
                  {cityName: "Thibodaux, LA", indexScore: 93},
                  {cityName: "Houston, TX", indexScore: 100.3},
                  {cityName: "The Woodlands, TX", indexScore: 100.3},
                  {cityName: "Sugar Land, TX", indexScore: 100.3},
                  {cityName: "Huntington, WV", indexScore: 86.8},
                  {cityName: "Ashland, KY", indexScore: 86.8},
                  {cityName: "Ironton, OH", indexScore: 86.8},
                  {cityName: "Huntsville, AL", indexScore: 90.7},
                  {cityName: "Idaho Falls, ID", indexScore: 88.8},
                  {cityName: "Indianapolis, IN", indexScore: 93.4},
                  {cityName: "Carmel, IN", indexScore: 93.4},
                  {cityName: "Anderson, IN", indexScore: 93.4},
                  {cityName: "Iowa City, IA", indexScore: 96.3},
                  {cityName: "Ithaca, NY", indexScore: 104.6},
                  {cityName: "Jackson, MI", indexScore: 90.6},
                  {cityName: "Jackson, MS", indexScore: 90.6},
                  {cityName: "Jackson, TN", indexScore: 83.1},
                  {cityName: "Jacksonville, FL", indexScore: 96},
                  {cityName: "Jacksonville, NC", indexScore: 94.2},
                  {cityName: "Janesville, WI", indexScore: 92.5},
                  {cityName: "Beloit, WI", indexScore: 92.5},
                  {cityName: "Jefferson City, MO", indexScore: 82.2},
                  {cityName: "Johnson City, TN", indexScore: 88.6},
                  {cityName: "Johnstown, PA", indexScore: 85.5},
                  {cityName: "Jonesboro, AR", indexScore: 82},
                  {cityName: "Joplin, MO", indexScore: 88.1},
                  {cityName: "Kahului, HI", indexScore: 106.2},
                  {cityName: "Wailuku, HI", indexScore: 106.2},
                  {cityName: "Lahaina, HI", indexScore: 106.2},
                  {cityName: "Kalamazoo, MI", indexScore: 92.5},
                  {cityName: "Portage, MI", indexScore: 92.5},
                  {cityName: "Kankakee, IL", indexScore: 99},
                  {cityName: "Kansas City, MO", indexScore: 93.4},
                  {cityName: "Kansas City, KS", indexScore: 93.4},
                  {cityName: "Kennewick, WA", indexScore: 98.1},
                  {cityName: "Richland, WA", indexScore: 98.1},
                  {cityName: "Killeen, TX", indexScore: 92.6},
                  {cityName: "Temple, TX", indexScore: 92.6},
                  {cityName: "Kingsport-Bristol, TN", indexScore: 86.5},
                  {cityName: "Bristol, VA", indexScore: 86.5},
                  {cityName: "Kingston, NY", indexScore: 103.1},
                  {cityName: "Knoxville, TN", indexScore: 90.5},
                  {cityName: "Kokomo, IN", indexScore: 87.2},
                  {cityName: "La Crosse, WI", indexScore: 93.3},
                  {cityName: "Onalaska, WI", indexScore: 93.3},
                  {cityName: "Lafayette, LA", indexScore: 89.1},
                  {cityName: "Lafayette, IN", indexScore: 93.9},
                  {cityName: "West Lafayette, IN", indexScore: 93.9},
                  {cityName: "Lake Charles, LA", indexScore: 89.3},
                  {cityName: "Lake Havasu City, AZ", indexScore: 93.6},
                  {cityName: "Kingman, AZ", indexScore: 93.6},
                  {cityName: "Lakeland, FL", indexScore: 93.3},
                  {cityName: "Winter Haven, FL", indexScore: 93.3},
                  {cityName: "Lancaster, PA", indexScore: 98.4},
                  {cityName: "Lansing, MI", indexScore: 93.9},
                  {cityName: "East Lansing, MI", indexScore: 93.9},
                  {cityName: "Laredo, TX", indexScore: 88.7},
                  {cityName: "Las Cruces, NM", indexScore: 92.9},
                  {cityName: "Las Vegas, NV", indexScore: 98.7},
                  {cityName: "Henderson, NV", indexScore: 98.7},
                  {cityName: "Paradise, NV", indexScore: 98.7},
                  {cityName: "Lawrence, KS", indexScore: 94.3},
                  {cityName: "Lawton, OK", indexScore: 91.1},
                  {cityName: "Lebanon, PA", indexScore: 94.9},
                  {cityName: "Lewiston, ID", indexScore: 89.9},
                  {cityName: "Lewiston, ME", indexScore: 94.7},
                  {cityName: "Auburn, ME", indexScore: 94.7},
                  {cityName: "Lexington, KY", indexScore: 92.4},
                  {cityName: "Fayette, KY", indexScore: 92.4},
                  {cityName: "Lima, OH", indexScore: 89.6},
                  {cityName: "Lincoln, NE", indexScore: 92.9},
                  {cityName: "Little Rock, AR", indexScore: 90.7},
                  {cityName: "North Little Rock, AR", indexScore: 90.7},
                  {cityName: "Conway, AR", indexScore: 90.7},
                  {cityName: "Logan, UT", indexScore: 90},
                  {cityName: "Longview, TX", indexScore: 91.8},
                  {cityName: "Longview, WA", indexScore: 93.5},
                  {cityName: "Los Angeles, CA", indexScore: 117},
                  {cityName: "Long Beach, CA", indexScore: 117},
                  {cityName: "Anaheim, CA", indexScore: 117},
                  {cityName: "Louisville, KY", indexScore: 91.4},
                  {cityName: "Lubbock, TX", indexScore: 93.5},
                  {cityName: "Lynchburg, VA", indexScore: 90.7},
                  {cityName: "Macon, GA", indexScore: 87.5},
                  {cityName: "Madera, CA", indexScore: 96.8},
                  {cityName: "Madison, WI", indexScore: 97.8},
                  {cityName: "Manchester, NH", indexScore: 108.2},
                  {cityName: "Nashua, NH", indexScore: 108.2},
                  {cityName: "Manhattan, KS", indexScore: 92.9},
                  {cityName: "Mankato, MN", indexScore: 89.3},
                  {cityName: "North Mankato, MN", indexScore: 89.3},
                  {cityName: "Mansfield, OH", indexScore: 87.1},
                  {cityName: "McAllen, TX", indexScore: 85.7},
                  {cityName: "Edinburg, TX", indexScore: 85.7},
                  {cityName: "Mission, TX", indexScore: 85.7},
                  {cityName: "Medford, OR", indexScore: 98.2},
                  {cityName: "Memphis, TN", indexScore: 91.9},
                  {cityName: "Merced, CA", indexScore: 95.5},
                  {cityName: "Miami, FL", indexScore: 105.9},
                  {cityName: "Fort Lauderdale, FL", indexScore: 105.9},
                  {cityName: "West Palm Beach, FL", indexScore: 105.9},
                  {cityName: "Michigan City, IN", indexScore: 85.9},
                  {cityName: "La Porte, IN", indexScore: 85.9},
                  {cityName: "Midland, MI", indexScore: 92.4},
                  {cityName: "Midland, TX", indexScore: 99.3},
                  {cityName: "Milwaukee, WI", indexScore: 95.9},
                  {cityName: "Waukesha, WI", indexScore: 95.9},
                  {cityName: "West Allis, WI", indexScore: 95.9},
                  {cityName: "Minneapolis, MN", indexScore: 102.6},
                  {cityName: "St. Paul, MN", indexScore: 102.6},
                  {cityName: "Bloomington, MN", indexScore: 102.6},
                  {cityName: "Missoula, MT", indexScore: 95.8},
                  {cityName: "Mobile, AL", indexScore: 88.6},
                  {cityName: "Modesto, CA", indexScore: 98.7},
                  {cityName: "Monroe, LA", indexScore: 86.3},
                  {cityName: "Monroe, MI", indexScore: 95.4},
                  {cityName: "Montgomery, AL", indexScore: 89.7},
                  {cityName: "Morgantown, WV", indexScore: 88.5},
                  {cityName: "Morristown, TN", indexScore: 81.9},
                  {cityName: "Mount Vernon, WA", indexScore: 97.3},
                  {cityName: "Anacortes, WA", indexScore: 97.3},
                  {cityName: "Muncie, IN", indexScore: 89.6},
                  {cityName: "Muskegon, MI", indexScore: 88.7},
                  {cityName: "Myrtle Beach, SC", indexScore: 91.1},
                  {cityName: "Conway, SC", indexScore: 91.1},
                  {cityName: "North Myrtle Beach, SC", indexScore: 91.1},
                  {cityName: "Napa, CA", indexScore: 118.9},
                  {cityName: "Naples, FL", indexScore: 99.6},
                  {cityName: "Immokalee, FL", indexScore: 99.6},
                  {cityName: "Marco Island, FL", indexScore: 99.6},
                  {cityName: "Nashville, TN", indexScore: 93.9},
                  {cityName: "Davidson, TN", indexScore: 93.9},
                  {cityName: "Murfreesboro, TN", indexScore: 93.9},
                  {cityName: "Franklin, TN", indexScore: 93.9},
                  {cityName: "New Bern, NC", indexScore: 87.1},
                  {cityName: "New Haven, CT", indexScore: 112.9},
                  {cityName: "Milford, CT", indexScore: 112.9},
                  {cityName: "New Orleans, LA", indexScore: 96},
                  {cityName: "Metairie, LA", indexScore: 96},
                  {cityName: "New York, NY", indexScore: 122.3},
                  {cityName: "Newark, NJ", indexScore: 122.3},
                  {cityName: "Jersey City, NJ", indexScore: 122.3},
                  {cityName: "Niles, MI", indexScore: 89.2},
                  {cityName: "Benton Harbor, MI", indexScore: 89.2},
                  {cityName: "North Port, FL", indexScore: 98.7},
                  {cityName: "Sarasota, FL", indexScore: 98.7},
                  {cityName: "Bradenton, FL", indexScore: 98.7},
                  {cityName: "Norwich, CT", indexScore: 100.5},
                  {cityName: "New London, CT", indexScore: 100.5},
                  {cityName: "Ocala, FL", indexScore: 90.8},
                  {cityName: "Ocean City, NJ", indexScore: 107.2},
                  {cityName: "Odessa, TX", indexScore: 96.6},
                  {cityName: "Ogden, UT", indexScore: 95.9},
                  {cityName: "Clearfield, UT", indexScore: 95.9},
                  {cityName: "Oklahoma City, OK", indexScore: 92.4},
                  {cityName: "Olympia, WA", indexScore: 105.4},
                  {cityName: "Tumwater, WA", indexScore: 105.4},
                  {cityName: "Omaha, NE", indexScore: 94.1},
                  {cityName: "Council Bluffs, IA", indexScore: 94.1},
                  {cityName: "Orlando, FL", indexScore: 97.8},
                  {cityName: "Kissimmee, FL", indexScore: 97.8},
                  {cityName: "Sanford, FL", indexScore: 97.8},
                  {cityName: "Oshkosh, WI", indexScore: 91.8},
                  {cityName: "Neenah, WI", indexScore: 91.8},
                  {cityName: "Owensboro, KY", indexScore: 87.6},
                  {cityName: "Oxnard, CA", indexScore: 114.7},
                  {cityName: "Thousand Oaks, CA", indexScore: 114.7},
                  {cityName: "Ventura, CA", indexScore: 114.7},
                  {cityName: "Palm Bay, FL", indexScore: 95.2},
                  {cityName: "Melbourne, FL", indexScore: 95.2},
                  {cityName: "Titusville, FL", indexScore: 95.2},
                  {cityName: "Panama City, FL", indexScore: 94.9},
                  {cityName: "Parkersburg, WV", indexScore: 85.5},
                  {cityName: "Vienna, WV", indexScore: 85.5},
                  {cityName: "Pensacola, FL", indexScore: 93.5},
                  {cityName: "Ferry Pass, FL", indexScore: 93.5},
                  {cityName: "Brent, FL", indexScore: 93.5},
                  {cityName: "Peoria, IL", indexScore: 91.8},
                  {cityName: "Philadelphia, PA", indexScore: 107.2},
                  {cityName: "Camden, NJ", indexScore: 107.2},
                  {cityName: "Wilmington, DE", indexScore: 107.2},
                  {cityName: "Phoenix, AZ", indexScore: 97.7},
                  {cityName: "Mesa, AZ", indexScore: 97.7},
                  {cityName: "Scottsdale, AZ", indexScore: 97.7},
                  {cityName: "Pine Bluff, AR", indexScore: 84.6},
                  {cityName: "Pittsburgh, PA", indexScore: 94.8},
                  {cityName: "Pittsfield, MA", indexScore: 95.4},
                  {cityName: "Pocatello, ID", indexScore: 89.7},
                  {cityName: "Portland, ME", indexScore: 100.7},
                  {cityName: "South Portland, ME", indexScore: 100.7},
                  {cityName: "Portland, OR", indexScore: 101.3},
                  {cityName: "Vancouver, WA", indexScore: 101.3},
                  {cityName: "Hillsboro, OR", indexScore: 101.3},
                  {cityName: "Port St. Lucie, FL", indexScore: 95.8},
                  {cityName: "Prescott, AZ", indexScore: 95.4},
                  {cityName: "Providence, RI", indexScore: 99},
                  {cityName: "Warwick, MA", indexScore: 99},
                  {cityName: "Provo, UT", indexScore: 97.3},
                  {cityName: "Orem, UT", indexScore: 97.3},
                  {cityName: "Pueblo, CO", indexScore: 92.3},
                  {cityName: "Punta Gorda, FL", indexScore: 94.8},
                  {cityName: "Racine, WI", indexScore: 94},
                  {cityName: "Raleigh, NC", indexScore: 95.9},
                  {cityName: "Rapid City, SD", indexScore: 92.3},
                  {cityName: "Reading, PA", indexScore: 96},
                  {cityName: "Redding, CA", indexScore: 98.2},
                  {cityName: "Reno, NV", indexScore: 99.1},
                  {cityName: "Richmond, VA", indexScore: 96.2},
                  {cityName: "Riverside, CA", indexScore: 105.9},
                  {cityName: "San Bernardino, CA", indexScore: 105.9},
                  {cityName: "Ontario, CA", indexScore: 105.9},
                  {cityName: "Roanoke, VA", indexScore: 91.4},
                  {cityName: "Rochester, MN", indexScore: 93.7},
                  {cityName: "Rochester, NY", indexScore: 97.4},
                  {cityName: "Rockford, IL", indexScore: 91.3},
                  {cityName: "Rocky Mount, NC", indexScore: 86.3},
                  {cityName: "Rome, GA", indexScore: 80.7},
                  {cityName: "Sacramento, CA", indexScore: 102.5},
                  {cityName: "Roseville, CA", indexScore: 102.5},
                  {cityName: "Arden, CA", indexScore: 102.5},
                  {cityName: "Arcade, CA", indexScore: 102.5},
                  {cityName: "Saginaw, MI", indexScore: 89.6},
                  {cityName: "St. Cloud, MN", indexScore: 93.5},
                  {cityName: "St. George, UT", indexScore: 93.8},
                  {cityName: "St. Joseph, MO", indexScore: 88.9},
                  {cityName: "St. Louis, MO", indexScore: 90.5},
                  {cityName: "Salem, OR", indexScore: 95.4},
                  {cityName: "Salinas, CA", indexScore: 107.9},
                  {cityName: "Salisbury, MD", indexScore: 89.7},
                  {cityName: "Salt Lake City, UT", indexScore: 99.7},
                  {cityName: "San Angelo, TX", indexScore: 93.5},
                  {cityName: "San Antonio, TX", indexScore: 94.4},
                  {cityName: "New Braunfels, TX", indexScore: 94.4},
                  {cityName: "San Diego, CA", indexScore: 115.9},
                  {cityName: "Carlsbad, CA", indexScore: 115.9},
                  {cityName: "San Francisco, CA", indexScore: 121.3},
                  {cityName: "Oakland, CA", indexScore: 121.3},
                  {cityName: "Hayward, CA", indexScore: 121.3},
                  {cityName: "San Jose, CA", indexScore: 122.9},
                  {cityName: "Sunnyvale, CA", indexScore: 122.9},
                  {cityName: "Santa Clara, CA", indexScore: 122.9},
                  {cityName: "San Luis Obispo, CA", indexScore: 107},
                  {cityName: "Paso Robles, CA", indexScore: 107},
                  {cityName: "Arroyo Grande, CA", indexScore: 107},
                  {cityName: "Santa Cruz, CA", indexScore: 121.8},
                  {cityName: "Watsonville, CA", indexScore: 121.8},
                  {cityName: "Santa Fe, NM", indexScore: 99.7},
                  {cityName: "Santa Maria, CA", indexScore: 108.8},
                  {cityName: "Santa Barbara, CA", indexScore: 108.8},
                  {cityName: "Santa Rosa, CA", indexScore: 118.3},
                  {cityName: "Savannah, GA", indexScore: 94.3},
                  {cityName: "Scranton, PA", indexScore: 91.8},
                  {cityName: "Wilkes-Barre, PA", indexScore: 91.8},
                  {cityName: "Hazleton, PA", indexScore: 91.8},
                  {cityName: "Seattle, WA", indexScore: 107.8},
                  {cityName: "Tacoma, WA", indexScore: 107.8},
                  {cityName: "Bellevue, WA", indexScore: 107.8},
                  {cityName: "Sebastian, FL", indexScore: 90.9},
                  {cityName: "Vero Beach, FL", indexScore: 90.9},
                  {cityName: "Sebring, FL", indexScore: 84.9},
                  {cityName: "Sheboygan, WI", indexScore: 91.7},
                  {cityName: "Sherman, TX", indexScore: 91.3},
                  {cityName: "Denison, TX", indexScore: 91.3},
                  {cityName: "Shreveport, LA", indexScore: 90.9},
                  {cityName: "Bossier City, LA", indexScore: 90.9},
                  {cityName: "Sierra Vista, AZ", indexScore: 90.7},
                  {cityName: "Douglas, AZ", indexScore: 90.7},
                  {cityName: "Sioux City, IA", indexScore: 89},
                  {cityName: "Sioux Falls, SD", indexScore: 92.8},
                  {cityName: "South Bend, IN", indexScore: 90.2},
                  {cityName: "Mishawaka, IN", indexScore: 90.2},
                  {cityName: "Spartanburg, SC", indexScore: 87.8},
                  {cityName: "Spokane, WA", indexScore: 95.6},
                  {cityName: "Spokane Valley, WA", indexScore: 95.6},
                  {cityName: "Springfield, IL", indexScore: 92.3},
                  {cityName: "Springfield, MA", indexScore: 96.8},
                  {cityName: "Springfield, MO", indexScore: 88.5},
                  {cityName: "Springfield, OH", indexScore: 88.5},
                  {cityName: "State College, PA", indexScore: 102.4},
                  {cityName: "Staunton, VA", indexScore: 88.8},
                  {cityName: "Waynesboro, VA", indexScore: 88.8},
                  {cityName: "Stockton, CA", indexScore: 100.4},
                  {cityName: "Lodi, CA", indexScore: 100.4},
                  {cityName: "Sumter, SC", indexScore: 87.6},
                  {cityName: "Syracuse, NY", indexScore: 95.5},
                  {cityName: "Tallahassee, FL", indexScore: 94.3},
                  {cityName: "Tampa, FL", indexScore: 100.1},
                  {cityName: "St. Petersburg, FL", indexScore: 100.1},
                  {cityName: "Clearwater, FL", indexScore: 100.1},
                  {cityName: "Terre Haute, IN", indexScore: 87.9},
                  {cityName: "Texarkana, TX", indexScore: 87.6},
                  {cityName: "Texarkana, AR", indexScore: 87.6},
                  {cityName: "The Villages, FL", indexScore: 90.2},
                  {cityName: "Toledo, OH", indexScore: 89.6},
                  {cityName: "Topeka, KS", indexScore: 89.8},
                  {cityName: "Trenton, NJ", indexScore: 112.5},
                  {cityName: "Tucson, AZ", indexScore: 97.1},
                  {cityName: "Tulsa, OK", indexScore: 91.3},
                  {cityName: "Tuscaloosa, AL", indexScore: 88.3},
                  {cityName: "Tyler, TX", indexScore: 94},
                  {cityName: "Honolulu, HI", indexScore: 123.5},
                  {cityName: "Utica, NY", indexScore: 93},
                  {cityName: "Rome, NY", indexScore: 93},
                  {cityName: "Valdosta, GA", indexScore: 82.2},
                  {cityName: "Vallejo, CA", indexScore: 115.4},
                  {cityName: "Fairfield, CA", indexScore: 115.4},
                  {cityName: "Victoria, TX", indexScore: 93.7},
                  {cityName: "Vineland, NJ", indexScore: 102.2},
                  {cityName: "Bridgeton, NJ", indexScore: 102.2},
                  {cityName: "Virginia Beach, VA", indexScore: 98.4},
                  {cityName: "Norfolk, VA", indexScore: 98.4},
                  {cityName: "Newport News, VA", indexScore: 98.4},
                  {cityName: "Visalia CA", indexScore: 95.4},
                  {cityName: "Porterville, CA", indexScore: 95.4},
                  {cityName: "Waco, TX", indexScore: 91.5},
                  {cityName: "Walla Walla, WA", indexScore: 92.6},
                  {cityName: "Warner Robins, GA", indexScore: 89.9},
                  {cityName: "Washington, DC", indexScore: 119.4},
                  {cityName: "Arlington, VA", indexScore: 119.4},
                  {cityName: "Alexandria, VA", indexScore: 119.4},
                  {cityName: "Waterloo, IA", indexScore: 91.2},
                  {cityName: "Cedar Falls, IA", indexScore: 91.2},
                  {cityName: "Watertown, NY", indexScore: 98.1},
                  {cityName: "Fort Drum, NY", indexScore: 98.1},
                  {cityName: "Wausau, WI", indexScore: 91.8},
                  {cityName: "Weirton, WV", indexScore: 87.1},
                  {cityName: "Steubenville, OH", indexScore: 87.1},
                  {cityName: "Wenatchee, WA", indexScore: 95},
                  {cityName: "Wheeling, WV", indexScore: 86.7},
                  {cityName: "Wichita, KS", indexScore: 91},
                  {cityName: "Wichita Falls, TX", indexScore: 90.9},
                  {cityName: "Williamsport, PA", indexScore: 93.6},
                  {cityName: "Wilmington, NC", indexScore: 94.9},
                  {cityName: "Winchester, VA", indexScore: 91.3},
                  {cityName: "Winston-Salem, NC", indexScore: 90},
                  {cityName: "Worcester, MA", indexScore: 103.9},
                  {cityName: "Yakima, WA", indexScore: 95},
                  {cityName: "York, PA", indexScore: 96.1},
                  {cityName: "Hanover, PA", indexScore: 96.1},
                  {cityName: "Youngstown, OH", indexScore: 88.8},
                  {cityName: "Warren, OH", indexScore: 88.8},
                  {cityName: "Boardman, OH", indexScore: 88.8},
                  {cityName: "Yuba City, CA", indexScore: 98.5},
                  {cityName: "Yuma, AZ", indexScore: 93.3}];





  });

// BEGINNING OF INDEED API AJAX CALL
  $("#submit").on("click", function(event) {

      var jobTitle = $("#jobTitle").val().trim();
      var jobTitle2 = $("#jobTitle2").val().trim();
      var jobCity = $("#city-input").val().trim();
      var jobCity2 = $("#city-input2").val().trim();
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
      console.log(jobCity);
      console.log(jobCity2);
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


};


$('#clearbutton').click(function() {
  window.location.reload();
});

