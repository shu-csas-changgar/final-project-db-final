-- -----------------------------------------------------
-- Insert Scripts for abc
-- -----------------------------------------------------

use abc;

-- -----------------------------------------------------
-- Run these Constraints before inserts
-- -----------------------------------------------------
ALTER TABLE `city` ADD UNIQUE `unique_index`(`city_name`, `state`);
ALTER TABLE `address` ADD UNIQUE `unique_index`(`address1`, `county`, `postal_code`, `city_id`);

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
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("702 Shadowlawn Drive", "Union", 07090,
	(SELECT city_id FROM city WHERE city_name = "Westfield" AND state = "New Jersey"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("702 Shadowlawn Drive", "Union", 07090,
	(SELECT city_id FROM city WHERE city_name = "Westfield" AND state = "Illinois"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("400 S Orange Ave", "Essex", 07079,
	(SELECT city_id FROM city WHERE city_name = "South Orange" AND state = "New Jersey"));

