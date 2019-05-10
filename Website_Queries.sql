-- -----------------------------------------------------
-- Add queries below for the website. 
-- Please comment above every query so we can tell what they do.
-- When done with a query check it off on Github issues so everyone knows that it is finished.
-- MAKE SURE THE PUSH YOUR CHANGES
-- -----------------------------------------------------
use abc;

#returns every country name in the database
Select cn.country_name
from country cn;

#Insert a state name and returns every city in that state
select c.city_name, c.state
from city c
where c.state = "New Jersey";

#Insert a city name and returns every address (address 1, postal, address2)
select c.city_name, c.city_id, a.address1, a.postal_code, a.address2
from city c
join address a
on c.city_id = a.city_id
where c.city_name = "South Orange"; 


-- -----------------------------------------------------
-- Return employee name and info
-- -----------------------------------------------------
SELECT e.employee_id, e.first_name, e.last_name, e.email, a.address_id, a.address1, a.address2, a.county, a.postal_code, c.city_id, c.city_name, c.state, co.country_name, e.cell_number
FROM employee e
JOIN address a
	ON e.address_id = a.address_id
JOIN city c
	ON c.city_id = a.city_id
JOIN country co
	ON c.country_id = co.country_id;


#returns every vendor name and address
select v.company_name, v.address_id
from vendor v;

#insert vendor name and returns every transaction
select v.company_name, v.vendor_id, t.cost, t.purchase_date, t.end_date, t.end_date
from vendor v, transaction t
where v.company_name = "Vender 1";


#For all equipment, return the item name, serial number, location(if applies) ,
# employee name(if applies),and lease end date. If there is a location, return the address and room number.

select et.model_name, et.model_number, e.location_id, emp.first_name, emp.last_name, lo.address_id, r.room_number
from equipment e
join equipment_type et
	on e.type_id = et.type_id
join employee emp
	on e.employee_id = emp.employee_id
join location lo
	on lo.location_id = e.location_id
join room r
	on r.location_id = r.location_id;

##just need to add lease end date

#when given employee id return first and last name
select e.employee_id, e.first_name, e.last_name
from employee e
where e.employee_id = 1;

#When given an employee_id return the first name, last name, address, and email of the employee.
select e.first_name, e.last_name, e.email, a.address1
from employee e
join location lo
on lo.location_id = e.location_id
join address a
on lo.address_id = a.address_id;

#Given a employee_id, return the name, serial number, location (if applies) for each item they own
select e.first_name, e.last_name, eq.serial_number, eq.location_id, et.model_name
from employee e
join equipment eq
	on eq.employee_id = e.employee_id
join equipment_type et
	on et.type_id = eq.type_id
where e.employee_id = "";
    
#Given a employee_id, return the item name, reservation start time,
#end time, and day for each item they have reserved for the upcoming
#week (week starts at current day).
select e.employee_id, r.start_time, r.end_time, et.model_name
from employee e, equipment eq, equipment_type et, reservations r
where et.type_id = eq.type_id
	and r.employee_id = e.employee_id
    and e.employee_id = 1
limit 7;
#not perfect but returns next 7 instances thats sort of a week

#



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
-- For all addresses, selects 
-- -----------------------------------------------------
SELECT a.address1,
	c.city_name,
    c.state,
    a.postal_code,
    a.address_id
FROM address a
JOIN city c
	ON a.city_id = c.city_id;
    
SELECT c.city_name,  c.state
FROM city c; 
-- -----------------------------------------------------
-- Selects an employees first and last name when given an employee_id
-- -----------------------------------------------------
SELECT first_name, last_name FROM employee WHERE employee_id = 1;