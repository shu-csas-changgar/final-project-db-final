-- -----------------------------------------------------
-- Add queries below for the website. 
-- Please comment above every query so we can tell what they do.
-- When done with a query check it off on Github issues so everyone knows that it is finished.
-- MAKE SURE THE PUSH YOUR CHANGES
-- -----------------------------------------------------
use abc;

-- -----------------------------------------------------
-- Selects model_name, address, serial number, and cataegory for each of the an employees owned items
-- 		Orders them by category ASC and then model_name ASC.
-- -----------------------------------------------------
SELECT t.model_name,
		a.address1,
        e.serial_number,
		c.category
FROM equipment e
JOIN equipment_type t
	ON e.type_id = t.type_id
JOIN category c
	ON c.category_id = t.category_id
JOIN location l
	ON e.location_id = l.location_id
JOIN address a
	ON a.address_id = l.address_id
WHERE e.employee_id = 1
ORDER BY c.category ASC,
		 t.model_name ASC;

-- -----------------------------------------------------
-- Selects an employees firt and last name when given an employee_id
-- -----------------------------------------------------
SELECT first_name, last_name FROM employee WHERE employee_id = 1;