DROP DATABASE checkout;
CREATE DATABASE checkout;

USE checkout;

-- CREATE TABLE address (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
-- );

-- CREATE TABLE card (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
-- );

CREATE TABLE information (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(25),
  email VARCHAR(50),
  password VARCHAR(50),
  -- address_id INT,
  -- card_id INT,
  address VARCHAR(50),
  city VARCHAR(25),
  state VARCHAR(20),
  zip INT(3),
  -- FOREIGN KEY (address_id) REFERENCES address(id),
  -- FOREIGN KEY (card_id) REFERENCES card(id)
  number INT(3),
  expiration VARCHAR(20),
  cvv INT(3),
  billing INT(3)
);

insert into information (name, email, password) values ("Jason", "myemail", "mypassword");
update information set number = 123456789, expiration = 1234 where name = information.name;

insert into information (name, email, password) values ("You", "youremail", "rouypassword");
update information set number = 0987654321, expiration = 4321 where name = information.name;