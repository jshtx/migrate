$( document ).ready(function() {
// 'use strict';

// var fs        = require('fs');
// var path      = require('path');
// var Sequelize = require('sequelize');
// var basename  = path.basename(module.filename);
// var env       = process.env.NODE_ENV || 'development';
// var config    = require(__dirname + '/..\config\config.json')[env];
// var db        = {};

// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable]);
// } else {
//   var sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(function(file) {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(function(file) {
//     var model = sequelize['import'](path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(function(modelName) {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;



	var userIp = [];

	$.getJSON("http://jsonip.com/?callback=?", function (data) {
		userIp.push(data.ip);
	});

// https://www.indeed.com/jobs?as_and=software+developer&as_phr=&as_any=&as_not=&as_ttl=&as_cmp=&jt=fulltime&st=&salary=50000&radius=25&l=Austin&fromage=any&limit=10&sort=&psf=advsrch

	$("#submit").on("click", function(event) {

			// var location =;
			// var radius =;
			// var siteType =;
			// var jobType =;
			// var limit =;
			// var country=;

	        event.preventDefault();

	        var queryURL = "http://api.indeed.com/ads/apisearch?publisher=6697079064168197&q=java&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=20&filter=&latlong=1&co=us&chnl=&userip="+ userIp[0] +"&useragent=MMozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36&v=2&format=json";
	    
	        $.ajax({
	                url: queryURL,
	                method: "GET"
	            })
	         
	            .done(function(response) {
	                
	                var results = JSON.stringify(response, null, 2);
	                console.log(results);
	                
	            });
	});

});
