DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burger
(
  burger_id INTEGER(2) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  burger_desc VARCHAR(255),
  eaten BOOLEAN DEFAULT false
);
