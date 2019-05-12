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
    
INSERT INTO city (city_name, state, country_id) VALUES ("Phoenix", "Arizona",
	(SELECT country_id FROM country WHERE country_name = "America"));

INSERT INTO city (city_name, state, country_id) VALUES ("Westfield", "Illinois",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Montgomery", "Alabama",
	(SELECT country_id FROM country WHERE country_name = "America"));

INSERT INTO city (city_name, state, country_id) VALUES ("Juneau", "Alaska",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Little Rock", "Arkansas",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Denver", "Colorado",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Hartford", "Connecticut",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Dover", "Delaware",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Tallahassee", "Florida",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Atlanta", "Georgia",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Honolulu", "Hawaii",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Boise", "Idaho",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Indianapolis", "Indiana",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Des Moines", "Iowa",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Topeka", "Kansas",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Frankfort", "Kentucky",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Baton Rouge", "Louisiana",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Augusta", "Maine",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Annapolis", "Maryland",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Boston", "Massachusetts",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Lansing", "Michigan",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("St. Paul", "Minnesota",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Jackson", "Mississippi",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Jefferson City", "Missouri",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Helena", "Montana",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Lincoln", "Nebraska",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Carson City", "Nevada",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Concord", "New Hampshire",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Santa Fe", "New Mexico",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Raleigh", "North Carolina",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Bismarck", "North Dakota",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Columbus", "Ohio",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Oklahoma City", "Oklahoma",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Salem", "Oregon",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Providence", "Rhode Island",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Columbia", "South Carolina",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Pierre", "South Dakota",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Nashville", "Tennessee",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Austin", "Texas",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Salt Lake City", "Utah",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Montpelier", "Vermont",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Richmond", "Virgina",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Olympia", "Washington",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Charleston", "West Virginia",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Madison", "Wisconsin",
	(SELECT country_id FROM country WHERE country_name = "America"));
    
INSERT INTO city (city_name, state, country_id) VALUES ("Cheyenne", "Wyoming",
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
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("1000 Who Gives a Shit", "Cool", "12345",
	(SELECT city_id FROM city WHERE city_name = "Pittsburgh" AND state = "Pennsylvania"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("420 Weed Dr", "Stoner", "545682",
	(SELECT city_id FROM city WHERE city_name = "New York" AND state = "New York"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("32 Thanos is Bae", "Bradford", "384764",
	(SELECT city_id FROM city WHERE city_name = "Phoenix" AND state = "Arizona"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("32 Thanos is Dead", "County1", "382928",
	(SELECT city_id FROM city WHERE city_name = "Montgomery" AND state = "Alabama"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("10 High Street", "County2", "394875",
	(SELECT city_id FROM city WHERE city_name = "Juneau" AND state = "Alaska"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("15 This is Tedious", "County3", "93754",
	(SELECT city_id FROM city WHERE city_name = "Little Rock" AND state = "Arkansas"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("15 Green Street", "County4", "983246",
	(SELECT city_id FROM city WHERE city_name = "Phoenix" AND state = "Arizona"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("15 Los Angeles Drive", "County5", "195467",
	(SELECT city_id FROM city WHERE city_name = "Westfield" AND state = "California"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("67 Pizza Way", "County6", "574836",
	(SELECT city_id FROM city WHERE city_name = "Denver" AND state = "Colorado"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("34 Coca Cola Street", "County7", "11123",
	(SELECT city_id FROM city WHERE city_name = "Hartford" AND state = "Connecticut"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("1 No Idea Court", "County8", "333546",
	(SELECT city_id FROM city WHERE city_name = "Dover" AND state = "Delaware"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("123 First Street", "County9", "234323",
	(SELECT city_id FROM city WHERE city_name = "Tallahassee" AND state = "Florida"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("321 Second Street", "County10", "3321112",
	(SELECT city_id FROM city WHERE city_name = "Atlanta" AND state = "Georgia"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("2 Hawaii Way", "County11", "584343",
	(SELECT city_id FROM city WHERE city_name = "Honolulu" AND state = "Hawaii"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("1 Final Way", "County12", "5795743",
	(SELECT city_id FROM city WHERE city_name = "Boise" AND state = "Idaho"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("2 Phone Court", "County13", "28576940",
	(SELECT city_id FROM city WHERE city_name = "Indianapolis" AND state = "Indiana"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("3 Leave Street", "County14", "4739204",
	(SELECT city_id FROM city WHERE city_name = "Des Moines" AND state = "Iowa"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("4 Tree Way", "County15", "6749305",
	(SELECT city_id FROM city WHERE city_name = "Topeka" AND state = "Kansas"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("5 Dog Drive", "County16", "8594",
	(SELECT city_id FROM city WHERE city_name = "Frankfort" AND state = "Kentucky"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("6 Cat Court", "County17", "009483",
	(SELECT city_id FROM city WHERE city_name = "Baton Rouge" AND state = "Louisiana"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("7 Rat Street", "County18", "046932",
	(SELECT city_id FROM city WHERE city_name = "Augusta" AND state = "Maine"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("8 Dollar Street", "County19", "574658",
	(SELECT city_id FROM city WHERE city_name = "Annapolis" AND state = "Maryland"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("9 Cent Court", "County20", "111111",
	(SELECT city_id FROM city WHERE city_name = "Boston" AND state = "Massachusetts"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("10 Blind Street", "County21", "222222",
	(SELECT city_id FROM city WHERE city_name = "Lansing" AND state = "Michigan"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("11 Hard Street", "County22", "333333",
	(SELECT city_id FROM city WHERE city_name = "St. Paul" AND state = "Minnesota"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("12 Soft Court", "County23", "444444",
	(SELECT city_id FROM city WHERE city_name = "Jackson" AND state = "Mississippi"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("13 Black Way", "County24", "555555",
	(SELECT city_id FROM city WHERE city_name = "Jefferson City" AND state = "Missouri"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("14 Red Street", "County25", "666666",
	(SELECT city_id FROM city WHERE city_name = "Helena" AND state = "Montana"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("15 Blue Street", "County26", "777777",
	(SELECT city_id FROM city WHERE city_name = "Lincoln" AND state = "Nebraska"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("16 Purple Court", "County27", "888888",
	(SELECT city_id FROM city WHERE city_name = "Carson City" AND state = "Nevada"));
INSERT INTO address(address1, county, postal_code, city_id) VALUES ("17 Last One Street", "County28", "999999",
	(SELECT city_id FROM city WHERE city_name = "Concord" AND state = "New Hampshire"));
    




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
INSERT INTO location(address_id, name, phone_number) VALUES(4, "Umm hello there", "5465479632");
INSERT INTO location(address_id, name, phone_number) VALUES(6, "Weed Man", "8885420174");
INSERT INTO location(address_id, name, phone_number) VALUES(
	(SELECT address_id FROM address WHERE address1 = "4 Tree Way" AND city_id = (SELECT city_id FROM city WHERE city_name = "Topeka" AND state = "Kansas")),
    "Building 2",
    "2019284873");
INSERT INTO location(address_id, name, phone_number) VALUES(
	(SELECT address_id FROM address WHERE address1 = "10 High Street" AND city_id = (SELECT city_id FROM city WHERE city_name = "Juneau" AND state = "Alaska")),
    "Building 3",
    "6996669999");
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
INSERT INTO employee(first_name, last_name, email, address_id, cell_number, account_id) VALUES ("Joshua", "Schappel", "j@abc.com", 1, "9083708410",
	(SELECT account_id FROM account WHERE username = "j@abc.com"));
INSERT INTO employee(first_name, last_name, email, address_id, cell_number, account_id) VALUES ("Nick", "DeGirolamo", "n@abc.com", 4, "9084567485",
	(SELECT account_id FROM account WHERE username = "n@abc.com"));
INSERT INTO employee(first_name, last_name, email, address_id, cell_number, account_id) VALUES ("Ryan", "Salem ", "rj@abc.com", 6, "586432432132", 4);
INSERT INTO employee(first_name, last_name, email, address_id, cell_number, account_id) VALUES ("Sash", "Mahashabde", "s@abc.com", 5, "9083708410", 2);

INSERT INTO employee(first_name, last_name, email, address_id, cell_number, account_id) VALUES ("Gary", "Coleman", "gc@abc.com", 1,   "3102939012", 5);
INSERT INTO employee(first_name, last_name, email, address_id, cell_number, account_id) VALUES ("Tyrion", "Lannister", "TL1@abc.com", 2, "1239401923", 6);
INSERT INTO employee(first_name, last_name, email, address_id, cell_number, account_id) VALUES ("Ned", "Stark", "NS@abc.com", 3, "193029384", 7);
INSERT INTO employee(first_name, last_name, email, address_id, cell_number, account_id) VALUES ("Jon", "Snow", "JS@abc.com", 5, "1293940192", 8);
INSERT INTO employee(first_name, last_name, email, address_id, cell_number, account_id) VALUES ("Sansa", "Stark", "SS@abc.com", 4, "194029403", 9);
INSERT INTO employee(first_name, last_name, email, address_id, cell_number, account_id) VALUES ("Jaime", "Lannister", "JL@abc.com", 6, "09384758", 10);
INSERT INTO employee(first_name, last_name, email, address_id, cell_number, account_id) VALUES ("Rob", "Baratheon", "RB@abc.com", 7, "8491928384", 11);
INSERT INTO employee(first_name, last_name, email, address_id, cell_number, account_id) VALUES ("Greg", "Clegane", "GC2@abc.com", 5, "4912939402", 12);
INSERT INTO employee(first_name, last_name, email, address_id, cell_number, account_id) VALUES ("Joffrey", "Lannister", "jl@abc.com", 3, "510529053", 13);
INSERT INTO employee(first_name, last_name, email, address_id, cell_number, account_id) VALUES ("Robb", "Stark", "RS@abc.com", 5, "9401928492", 14);
INSERT INTO employee(first_name, last_name, email, address_id, cell_number, account_id) VALUES ("Arya", "Stark", "AS@abc.com", 5, "49129401294", 15);
INSERT INTO employee(first_name, last_name, email, address_id, cell_number, account_id) VALUES ("Aegon", "Targaryan", "AT@abc.com", 1, "129442014", 16);
INSERT INTO employee(first_name, last_name, email, address_id, cell_number, account_id) VALUES ("Bill", "Clinton", "bc@abc.com", 2, "412940129", 17);
INSERT INTO employee(first_name, last_name, email, address_id, cell_number, account_id) VALUES ("Michael", "Cera", "mc@abc.com", 5, "1824821924", 18);
INSERT INTO employee(first_name, last_name, email, address_id, cell_number, account_id) VALUES ("Theon", "Greyjoy", "tg@abc.com", 6, "4819284892", 19);

INSERT INTO employee(first_name, last_name, email, address_id, cell_number) VALUES ("TEST_FIRST", "TEST_LAST", "l@abc.com", 5, "9083708410");

-- -----------------------------------------------------
-- Vendor
-- -----------------------------------------------------
INSERT INTO vendor(company_name, address_id) VALUES("Vender 1", 1);
INSERT INTO vendor(company_name, address_id) VALUES("Vender 2", 3);
INSERT INTO vendor(company_name, address_id) VALUES("Marco's Star Trek Merch Store", 2);
INSERT INTO vendor(company_name, address_id) VALUES("Vendor 1", 3);
INSERT INTO vendor(company_name, address_id) VALUES("Vendor 2", 1);
INSERT INTO vendor(company_name, address_id) VALUES("Vendor 3", 2);
INSERT INTO vendor(company_name, address_id) VALUES("Vendor 4", 3);
INSERT INTO vendor(company_name, address_id) VALUES("Vendor 5", 3);
INSERT INTO vendor(company_name, address_id) VALUES("Vendor 6", 3);
INSERT INTO vendor(company_name, address_id) VALUES("Vendor 7", 2);
INSERT INTO vendor(company_name, address_id) VALUES("Vendor 8", 2);
INSERT INTO vendor(company_name, address_id) VALUES("Vendor 9", 1);


-- -----------------------------------------------------
-- Transaction
-- -----------------------------------------------------
INSERT INTO transaction(vendor_id, Cost, purchase_date, begin_date, end_date) VALUES (1, 1200, '2019-12-22', '2019-12-22', '2023-12-22');
INSERT INTO transaction(vendor_id, Cost, purchase_date, begin_date, end_date) VALUES (2, 25400, '2015-2-3', '2015-2-3', '2045-3-17');
INSERT INTO transaction(vendor_id, Cost, purchase_date, begin_date, end_date) VALUES (3, 300, '2016-2-3', '2016-2-3', '2045-3-17');
INSERT INTO transaction(vendor_id, Cost, purchase_date, begin_date, end_date) VALUES (4, 200, '2017-2-3', '2017-2-3', '2045-3-17');
INSERT INTO transaction(vendor_id, Cost, purchase_date, begin_date, end_date) VALUES (5, 5400, '2015-1-3', '2015-1-3', '2045-3-17');
INSERT INTO transaction(vendor_id, Cost, purchase_date, begin_date, end_date) VALUES (6, 2500, '2015-3-3', '2015-3-3', '2045-3-17');
INSERT INTO transaction(vendor_id, Cost, purchase_date, begin_date, end_date) VALUES (7, 2540, '2015-2-5', '2015-2-5', '2045-3-17');
INSERT INTO transaction(vendor_id, Cost, purchase_date, begin_date, end_date) VALUES (8, 250, '2015-2-8', '2015-2-8', '2045-3-17');
INSERT INTO transaction(vendor_id, Cost, purchase_date, begin_date, end_date) VALUES (9, 220, '2016-2-18', '2015-2-18', '2045-3-17');
INSERT INTO transaction(vendor_id, Cost, purchase_date, begin_date, end_date) VALUES (10, 90, '2015-6-3', '2015-6-3', '2045-3-17');
INSERT INTO transaction(vendor_id, Cost, purchase_date, begin_date, end_date) VALUES (11, 199, '2015-2-5', '2015-2-5', '2045-3-17');
INSERT INTO transaction(vendor_id, Cost, purchase_date, begin_date, end_date) VALUES (12, 14, '2016-1-17', '2015-1-17', '2045-3-17');

-- -----------------------------------------------------
-- Equiptment Category
-- -----------------------------------------------------
INSERT INTO category(category) VALUES ("Phone");
INSERT INTO category(category) VALUES ("Laptop");
INSERT INTO category(category) VALUES ("Desktop");
INSERT INTO category(category) VALUES ("Projector");
INSERT INTO category(category) VALUES ("Meeting Room");
INSERT INTO category(category) VALUES ("Printer");
INSERT INTO category(category) VALUES ("Speakers");
INSERT INTO category(category) VALUES ("Camera");
INSERT INTO category(category) VALUES ("Other");



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
INSERT INTO equipment_type(model_name, model_number, category_id) VALUES("Chromebook", "jr032jroi32mr", 2);
INSERT INTO equipment_type(model_name, model_number, category_id) VALUES("Roomba", "021j21oi4n1", 3);
INSERT INTO equipment_type(model_name, model_number, category_id) VALUES("Roomba2", "3onr3lnr39j", 1);
INSERT INTO equipment_type(model_name, model_number, category_id) VALUES("Smartboard", "o3k14po3k3", 2);
INSERT INTO equipment_type(model_name, model_number, category_id) VALUES("IphoneX", "4j120934j1on", 3);
INSERT INTO equipment_type(model_name, model_number, category_id) VALUES("Camera", "4o13in432m", 3);
INSERT INTO equipment_type(model_name, model_number, category_id) VALUES("Audio Equipment", "21o4ij132n", 2);
INSERT INTO equipment_type(model_name, model_number, category_id) VALUES("Webcams", "4031ioj432kn", 1);
INSERT INTO equipment_type(model_name, model_number, category_id) VALUES("More Webcams", "3012ij431l4poi31", 2);
INSERT INTO equipment_type(model_name, model_number, category_id) VALUES("Speakers", "ro3iu2n43232", 3);



-- -----------------------------------------------------
-- Equiptment No owner or location 
-- -----------------------------------------------------
INSERT INTO equipment(serial_number, transaction_id, type_id) VALUES ("7536472", 1, 3);
INSERT INTO equipment(serial_number, transaction_id, type_id) VALUES ("65385734", 1, 1);
INSERT INTO equipment(serial_number, transaction_id, type_id) VALUES ("69797868", 1, 7);
INSERT INTO equipment(serial_number, transaction_id, type_id) VALUES ("19797868", 2, 1);
INSERT INTO equipment(serial_number, transaction_id, type_id) VALUES ("29797868", 2, 2);
INSERT INTO equipment(serial_number, transaction_id, type_id) VALUES ("39797868", 2, 3);
INSERT INTO equipment(serial_number, transaction_id, type_id) VALUES ("49797868", 3, 4);
INSERT INTO equipment(serial_number, transaction_id, type_id) VALUES ("59797868", 4, 5);
INSERT INTO equipment(serial_number, transaction_id, type_id) VALUES ("69797868", 11, 4);
INSERT INTO equipment(serial_number, transaction_id, type_id) VALUES ("79797868", 1, 3);

-- -----------------------------------------------------
-- Equiptment with location
-- -----------------------------------------------------
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id) VALUES ("122wer6546", 2, 7,2);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id) VALUES ("1234wer6546", 2, 7,2);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id) VALUES ("1546wer6546", 2, 7,2);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id) VALUES ("122we23df46", 2, 6,2);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id) VALUES ("122wer346", 2, 6,2);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id) VALUES ("122wer3461", 2, 1,1);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id) VALUES ("122wer3462", 1, 3,3);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id) VALUES ("122wer3463", 2, 2,4);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id) VALUES ("122wer3464", 1, 2,2);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id) VALUES ("122wer3465", 1, 4,2);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id) VALUES ("122wer3466", 3, 5,1);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id) VALUES ("122wer3467", 2, 4,1);


-- -----------------------------------------------------
-- Equiptment with owner and location  
-- -----------------------------------------------------
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id, employee_id) VALUES ("12234123546", 2, 3, 2, 1);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id, employee_id) VALUES ("1223423425546", 2, 8, 2, 1);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id, employee_id) VALUES ("122345345456", 2, 10, 2, 1);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id, employee_id) VALUES ("122345345234", 2, 4, 2, 1);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id, employee_id) VALUES ("1223345233", 2, 9, 2, 1);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id, employee_id) VALUES ("122334523", 3, 1, 3, 1);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id, employee_id) VALUES ("1223345231", 4, 2, 1, 1);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id, employee_id) VALUES ("1223345232", 5, 3, 2, 1);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id, employee_id) VALUES ("1223345233", 6, 4, 4, 1);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id, employee_id) VALUES ("1223345234", 7, 5, 3, 1);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id, employee_id) VALUES ("1223345235", 8, 6, 1, 1);
INSERT INTO equipment(serial_number, transaction_id, type_id, location_id, employee_id) VALUES ("12233452336", 9, 7, 4, 1);
-- -----------------------------------------------------
-- Events
-- -----------------------------------------------------
INSERT INTO events(host_id, event_title, description, start_time, end_time, location_id) VALUES (1, 'This is a birthday party', 'This is a description for the birthday party', '2019-09-06 16-30-00', '2019-09-06 19-30-00', 1);
INSERT INTO events(host_id, event_title, description, start_time, end_time, location_id) VALUES (4, 'Annual Picnic', 'This is a description for the picnic', '2019-05-13 10-30-00', '2019-05-13 19-00-00', 2);
INSERT INTO events(host_id, event_title, description, start_time, end_time, location_id) VALUES (2, 'Staff Meeting', 'This is a description for the staff meeting', '2019-05-06 10-30-00', '2019-05-06 12-45-00', 1);
INSERT INTO events(host_id, event_title, description, start_time, end_time, location_id) VALUES (1, 'Staff Meeting', 'This is a description for the staff meeting', '2019-07-03 14-30-00', '2019-07-03 15-30-00', 2);
INSERT INTO events(host_id, event_title, description, start_time, end_time, location_id) VALUES (3, 'Investor Meeting', 'This is a description for the investor meeting', '2019-04-30 8-00-00', '2019-04-30 14-30-00', 1);
INSERT INTO events(host_id, event_title, description, start_time, end_time, location_id) VALUES (1, 'Pancake Breakfast', 'This is a description for the pancake breakfast', '2019-10-23 14-30-00', '2019-10-23 17-30-00', 1);
INSERT INTO events(host_id, event_title, description, start_time, end_time, location_id) VALUES (5, 'Waffle Brunch', 'This is a description for the Waffle Brunch', '2019-11-21 14-30-00', '2019-11-21 17-30-00', 3);
INSERT INTO events(host_id, event_title, description, start_time, end_time, location_id) VALUES (1, 'Investor Meeting', 'This is a description for the Investor Meeting', '2019-11-21 10-00-00', '2019-11-21 11-00-00', 2);
INSERT INTO events(host_id, event_title, description, start_time, end_time, location_id) VALUES (2, 'Shareholder Meeting', 'This is a description for the Shareholder Meeting', '2019-12-25 17-30-00', '2019-12-25 18-30-00', 1);
INSERT INTO events(host_id, event_title, description, start_time, end_time, location_id) VALUES (1, 'Elon Musk Visit', 'This is a description for the Elon Musk seminar', '2019-01-18 14-30-00', '2019-01-21 15-00-00', 2);
INSERT INTO events(host_id, event_title, description, start_time, end_time, location_id) VALUES (5, 'HR Seminar', 'This is a description for the HR seminar', '2019-02-15 10-30-00', '2019-02-15 11-00-00', 3);
INSERT INTO events(host_id, event_title, description, start_time, end_time, location_id) VALUES (4, 'CEO meeting', 'This is a description for the CEO meeting', '2019-11-21 14-30-00', '2019-11-21 17-30-00', 1);

-- -----------------------------------------------------
-- Reservations
-- -----------------------------------------------------
insert into reservations(reservation_id, location_id, start_time, end_time, employee_id) values (1, 1, '2019-09-06 16-30-00', '2019-09-06 17-30-00', 1);
insert into reservations(reservation_id, location_id, start_time, end_time, employee_id) values (2, 1, '2019-09-06 16-30-00', '2019-09-06 17-30-00', 1);
insert into reservations(reservation_id, location_id, start_time, end_time, employee_id) values (3, 2, '2019-09-06 16-30-00', '2019-09-06 17-30-00', 2);
insert into reservations(reservation_id, location_id, start_time, end_time, employee_id) values (4, 3, '2019-09-06 16-30-00', '2019-09-06 17-30-00', 3);
insert into reservations(reservation_id, location_id, start_time, end_time, employee_id) values (5, 4, '2019-05-12 16-30-00', '2019-05-12 17-30-00', 4);