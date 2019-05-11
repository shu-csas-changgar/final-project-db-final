-- -----------------------------------------------------
-- Countries
-- -----------------------------------------------------
INSERT INTO country (country_name) VALUES ("Canada");

-- -----------------------------------------------------
-- City
-- -----------------------------------------------------
INSERT INTO city (city_name, state, country_id) VALUES ("South Orange", "New Jersey",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
-- -----------------------------------------------------
-- Address
-- -----------------------------------------------------
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("702 Shadowlawn Drive", "Union", "07090",
	(SELECT city_id FROM city WHERE city_name = "Westfield" AND state = "New Jersey"));
    
-- -----------------------------------------------------
-- Location
-- -----------------------------------------------------
INSERT INTO location(address_id, name, phone_number) VALUES(
	(SELECT address_id FROM address WHERE address1 = "702 Shadowlawn Drive" AND city_id = (SELECT city_id FROM city WHERE city_name = "Westfield" AND state = "New Jersey")),
    "Building 1",
    "9082345677");
    
-- -----------------------------------------------------
-- Room
-- -----------------------------------------------------
INSERT INTO room(room_number, floor, extension, location_id) VALUES ("1A", 3, "345",
	(SELECT location_id FROM location WHERE address_id = 
		(SELECT address_id FROM address WHERE address1 = "400 S Orange Ave" AND city_id = (SELECT city_id FROM city WHERE city_name = "South Orange" AND state = "New Jersey"))));

-- -----------------------------------------------------
-- Account
-- -----------------------------------------------------
INSERT INTO account(username, password) VALUES("j@abc.com", "password");


-- -----------------------------------------------------
-- Employee
-- -----------------------------------------------------
INSERT INTO employee(first_name, last_name, email, location_id, cell_number, account_id) VALUES ("Joshua", "Schappel", "j@abc.com", 2, "9083708410",
	(SELECT account_id FROM account WHERE username = "j@abc.com"));

-- -----------------------------------------------------
-- Vendor
-- -----------------------------------------------------
INSERT INTO vendor(company_name, address_id) VALUES("Vender 1", 1);

-- -----------------------------------------------------
-- Transaction
-- -----------------------------------------------------
INSERT INTO transaction(vendor_id, Cost, purchase_date, begin_date, end_date) VALUES (1, 1200, '2019-12-22', '2019-12-22', '2023-12-22');

-- -----------------------------------------------------
-- Equiptment Category
-- -----------------------------------------------------
INSERT INTO category(category) VALUES ("Phone");


-- -----------------------------------------------------
-- Equiptment Type
-- -----------------------------------------------------
INSERT INTO equipment_type(model_name, model_number, category_id) VALUES("IPhone 6", "xzjyst543jts", 1);

-- -----------------------------------------------------
-- Equiptment No owner or location 
-- -----------------------------------------------------
INSERT INTO equipment(serial_number, transaction_id, type_id) VALUES ("7536472", 1, 3);


-- -----------------------------------------------------
-- Equiptment with location
-- -----------------------------------------------------
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id) VALUES ("122wer6546", 2, 7,2);

-- -----------------------------------------------------
-- Equiptment with owner and location  
-- -----------------------------------------------------
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id, employee_id) VALUES ("12234123546", 2, 3, 2, 1);

-- -----------------------------------------------------
-- Events
-- -----------------------------------------------------
INSERT INTO events(host_id, event_title, description, start_time, end_time, location_id) VALUES (1, 'This is a birthday party', 'This is a description for the birthday party', '2019-09-06 16-30-00', '2019-09-06 19-30-00', 1);

-- -----------------------------------------------------
-- Reservations
-- -----------------------------------------------------
insert into reservations(reservation_id, location_id, start_time, end_time, employee_id) values (1, 1, '2019-09-06 16-30-00', '2019-09-06 17-30-00', 1);


-- -----------------------------
-- create employee

INSERT INTO employee(first_name, last_name, email, location_id, cell_number, account_id) VALUES ("Joshua", "Schappel", "j@abc.com", 2, "9083708410",
	(SELECT account_id FROM account WHERE username = "j@abc.com"));
    
delete e.*
from employee e;

update employee
set employee_id = "", first_name = "", last_name = "", email = "", location_id = "", cell_number = "", account_id = ""
where employee_id = "";