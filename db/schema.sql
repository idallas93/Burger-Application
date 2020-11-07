### Schema

CREATE DATABASE burger_db;
USE buger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	veggie BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
