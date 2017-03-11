CREATE DATABASE city_db;

USE city_db;

CREATE TABLE city_rank(
  id INT NOT NULL AUTO_INCREMENT,
  City_Name VARCHAR(60) NOT NULL,
  State_Name VARCHAR(2) NOT NULL,
  Public_Transportation integer NOT NULL,
  Weather integer NOT NULL,
  Sports integer NOT NULL,
  Live_Music integer NOT NULL,
  Outdoor_Parks integer NOT NULL,
  Schools_Education integer NOT NULL,
  Fitness_Health integer NOT NULL,
  Safety integer NOT NULL,
  Nightlife_Bars integer NOT NULL,
  Population_Density integer NOT NULL,
  PRIMARY KEY (id)
);

