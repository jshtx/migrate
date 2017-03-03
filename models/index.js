$(document).ready(function () {

  // 'use strict';

  // var fs        = require('fs');
  // var path      = require('path');
  // var Sequelize = require('sequelize');
  // var basename  = path.basename(module.filename);
  // var env       = process.env.NODE_ENV || 'development';
  // var config    = require(__dirname + '/../config/config.json')[env];
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

  $("#search-button").on("click", function(event) {

          console.log("hey there friend");
          event.preventDefault();
          // var job = $("#search-box").val().trim();
          // var queryURL = "http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p= 129023&t.k=dKJQQeFT3Gm&action=employers&q=pharmaceuticals&userip=192.168.43.42&useragent=Mozilla/%2F4.0"
          var queryURL = "http://api.indeed.com/ads/apisearch?publisher=6697079064168197&q=java&l=austin%2C+tx&sort=&radius=&st=&jt=fulltime&start=&limit=&fromage=300&filter=&latlong=1&co=us&userip=72.182.102.124&useragent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36&v=2";
      
          $.ajax({
                  url: queryURL,
                  method: "GET"
              })
           
              .done(function(response) {
                  
                  var results = JSON.stringify(response);
                  console.log(results);
                  // $('#city-div').append(results);
              });
  });

});
