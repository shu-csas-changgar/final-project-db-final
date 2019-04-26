-- -----------------------------------------------------
-- Insert Scripts for abc
-- -----------------------------------------------------

use abc;

-- -----------------------------------------------------
-- Countries
-- -----------------------------------------------------
INSERT INTO country (country_name) VALUES ("Canada");
INSERT INTO country (country_name) VALUES ("America");

-- -----------------------------------------------------
-- City
-- -----------------------------------------------------
INSERT INTO city (city_name, state, country_id) VALUES ("South Orange", "New Jersey",
	(SELECT country_id FROM country WHERE country_name = "America"));

INSERT INTO city (city_name, state, country_id) VALUES ("Westfield", "New Jersey",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Westfield", "California",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("New York", "New York",
	(SELECT country_id FROM country WHERE country_name = "America"));
INSERT INTO city (city_name, state, country_id) VALUES ("Pittsburgh", "Pennsylvania",
	(SELECT country_id FROM country WHERE country_name = "America"));

INSERT INTO city (city_name, state, country_id) VALUES ("Westfield", "Illinois",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
-- -----------------------------------------------------
-- Address
-- -----------------------------------------------------
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("702 Shadowlawn Drive", "Union", "07090",
	(SELECT city_id FROM city WHERE city_name = "Westfield" AND state = "New Jersey"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("702 Shadowlawn Drive", "Union", "07090",
	(SELECT city_id FROM city WHERE city_name = "Westfield" AND state = "Illinois"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("400 S Orange Ave", "Essex", "1154876",
	(SELECT city_id FROM city WHERE city_name = "South Orange" AND state = "New Jersey"));

-- -----------------------------------------------------
-- Location
-- -----------------------------------------------------
INSERT INTO location(address_id, name, phone_number) VALUES(
	(SELECT address_id FROM address WHERE address1 = "702 Shadowlawn Drive" AND city_id = (SELECT city_id FROM city WHERE city_name = "Westfield" AND state = "New Jersey")),
    "Building 1",
    "9082345677");
INSERT INTO location(address_id, name, phone_number) VALUES(
	(SELECT address_id FROM address WHERE address1 = "400 S Orange Ave" AND city_id = (SELECT city_id FROM city WHERE city_name = "South Orange" AND state = "New Jersey")),
    "Science Building",
    "8887776655");
INSERT INTO location(address_id, name, phone_number) VALUES(
	(SELECT address_id FROM address WHERE address1 = "702 Shadowlawn Drive" AND city_id = (SELECT city_id FROM city WHERE city_name = "Westfield" AND state = "Illinois")),
    "A Cool Building",
    "8887776655");

-- -----------------------------------------------------
-- Room
-- -----------------------------------------------------
INSERT INTO room(room_number, floor, extension, location_id) VALUES ("1A", 3, "345",
	(SELECT location_id FROM location WHERE address_id = 
		(SELECT address_id FROM address WHERE address1 = "400 S Orange Ave" AND city_id = (SELECT city_id FROM city WHERE city_name = "South Orange" AND state = "New Jersey"))));
INSERT INTO room(room_number, floor, extension, location_id) VALUES ("2A", 2, "237",
	(SELECT location_id FROM location WHERE address_id = 
		(SELECT address_id FROM address WHERE address1 = "400 S Orange Ave" AND city_id = (SELECT city_id FROM city WHERE city_name = "South Orange" AND state = "New Jersey"))));
INSERT INTO room(room_number, floor, extension, location_id) VALUES ("20A", 20, "125",
	(SELECT location_id FROM location WHERE address_id = 
		(SELECT address_id FROM address WHERE address1 = "400 S Orange Ave" AND city_id = (SELECT city_id FROM city WHERE city_name = "South Orange" AND state = "New Jersey"))));
INSERT INTO room(room_number, floor, extension, location_id) VALUES ("13ZZ", 13, "898",
	(SELECT location_id FROM location WHERE address_id = 
		(SELECT address_id FROM address WHERE address1 = "400 S Orange Ave" AND city_id = (SELECT city_id FROM city WHERE city_name = "South Orange" AND state = "New Jersey"))));

-- -----------------------------------------------------
-- Account
-- -----------------------------------------------------
INSERT INTO account(username, password) VALUES("j@abc.com", "password");
INSERT INTO account(username, password) VALUES("s@abc.com", "password");
INSERT INTO account(username, password) VALUES("n@abc.com", "password");
INSERT INTO account(username, password) VALUES("r@abc.com", "password");

-- -----------------------------------------------------
-- Employee
-- -----------------------------------------------------
INSERT INTO employee(first_name, last_name, email, location_id, cell_number, account_id) VALUES ("Joshua", "Schappel", "j@abc.com", 2, "9083708410",
	(SELECT account_id FROM account WHERE username = "j@abc.com"));
INSERT INTO employee(first_name, last_name, email, location_id, cell_number) VALUES ("Fred", "Joe", "fred@abc.com", 2, "9084567485");
INSERT INTO employee(first_name, last_name, email, location_id, cell_number) VALUES ("Ron", "johnson", "rj@abc.com", 2, "586432432132");
INSERT INTO employee(first_name, last_name, email, location_id, cell_number) VALUES ("Sam", "Joe", "s@abc.com", 2, "9083708410");


-- -----------------------------------------------------
-- Vendor
-- -----------------------------------------------------
INSERT INTO vendor(company_name, address_id) VALUES("Vender 1", 1);
INSERT INTO vendor(company_name, address_id) VALUES("Vender 2", 3);

-- -----------------------------------------------------
-- Transaction
-- -----------------------------------------------------
INSERT INTO transaction(vendor_id, Cost, purchase_date, begin_date, end_date) VALUES (1, 1200, '2019-12-22', '2019-12-22', '2023-12-22');
INSERT INTO transaction(vendor_id, Cost, purchase_date, begin_date, end_date) VALUES (2, 25400, '2015-2-3', '2015-2-3', '2045-3-17');

-- -----------------------------------------------------
-- Equiptment Category
-- -----------------------------------------------------
INSERT INTO category(category) VALUES ("Phone");
INSERT INTO category(category) VALUES ("Laptop");
INSERT INTO category(category) VALUES ("Desktop");
INSERT INTO category(category) VALUES ("Projector");
INSERT INTO category(category) VALUES ("Meeting Room");
INSERT INTO category(category) VALUES ("Printer");

-- -----------------------------------------------------
-- Equiptment Type
-- -----------------------------------------------------
INSERT INTO equipment_type(model_name, model_number, category_id) VALUES("IPhone 6", "xzjyst543jts", 1);
INSERT INTO equipment_type(model_name, model_number, category_id) VALUES("Surface Pro 3", "f7tydt543jts", 2);
INSERT INTO equipment_type(model_name, model_number, category_id) VALUES("MacBook Pro", "xzjysd3h8cts", 2);
INSERT INTO equipment_type(model_name, model_number, category_id) VALUES("Lenovo Think Pad", "q6lk8t543jts", 2);
INSERT INTO equipment_type(model_name, model_number, category_id) VALUES("HP Latop 2017", "xzjysvp8k45s", 2);
INSERT INTO equipment_type(model_name, model_number, category_id) VALUES("Smart Room", "kjfhgkdfjhtjkh", 5);
INSERT INTO equipment_type(model_name, model_number, category_id) VALUES("Projector", "k34kdfjhtjkh", 4);
INSERT INTO equipment_type(model_name, model_number, category_id) VALUES("IPhone 6s", "asdfsda456", 1);
INSERT INTO equipment_type(model_name, model_number, category_id) VALUES("IPhone 7s", "sdljkfhasdjkhr", 1);
INSERT INTO equipment_type(model_name, model_number, category_id) VALUES("HP Desktop", "laksdjthuie45", 3);

-- -----------------------------------------------------
-- Equiptment No owner or location 
-- -----------------------------------------------------
INSERT INTO equipment(serial_number, transaction_id, type_id) VALUES ("7536472", 1, 3);
INSERT INTO equipment(serial_number, transaction_id, type_id) VALUES ("65385734", 1, 1);
INSERT INTO equipment(serial_number, transaction_id, type_id) VALUES ("69797868", 1, 7);

-- -----------------------------------------------------
-- Equiptment with location
-- -----------------------------------------------------
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id) VALUES ("122wer6546", 2, 7,2);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id) VALUES ("1234wer6546", 2, 7,2);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id) VALUES ("1546wer6546", 2, 7,2);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id) VALUES ("122we23df46", 2, 6,2);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id) VALUES ("122wer346", 2, 6,2);

-- -----------------------------------------------------
-- Equiptment with owner and location  
-- -----------------------------------------------------
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id, employee_id) VALUES ("12234123546", 2, 3, 2, 1);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id, employee_id) VALUES ("1223423425546", 2, 8, 2, 1);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id, employee_id) VALUES ("122345345456", 2, 10, 2, 1);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id, employee_id) VALUES ("122345345234", 2, 4, 2, 1);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id, employee_id) VALUES ("1223345233", 2, 9, 2, 1);