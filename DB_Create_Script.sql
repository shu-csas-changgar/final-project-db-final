-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema abc
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema abc
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `abc` DEFAULT CHARACTER SET utf8 ;
USE `abc` ;

-- -----------------------------------------------------
-- Table `abc`.`country`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `abc`.`country` (
  `country_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `country_name` VARCHAR(50) NOT NULL,
  `last_update` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`country_id`),
  UNIQUE INDEX `country_id_UNIQUE` (`country_id` ASC) VISIBLE,
  UNIQUE INDEX `country_name_UNIQUE` (`country_name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `abc`.`city`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `abc`.`city` (
  `city_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `city_name` VARCHAR(50) NOT NULL,
  `country_id` INT UNSIGNED NOT NULL,
  `state` VARCHAR(45) NULL,
  `last_update` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`city_id`),
  INDEX `fk_city_country1_idx` (`country_id` ASC) VISIBLE,
  CONSTRAINT `fk_city_country1`
    FOREIGN KEY (`country_id`)
    REFERENCES `abc`.`country` (`country_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `abc`.`address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `abc`.`address` (
  `address_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `address1` VARCHAR(45) NOT NULL,
  `address2` VARCHAR(50) NULL,
  `city` VARCHAR(50) NOT NULL,
  `district` VARCHAR(20) NOT NULL,
  `postal_code` VARCHAR(20) NOT NULL,
  `city_id` INT UNSIGNED NOT NULL,
  `last_update` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`address_id`),
  UNIQUE INDEX `address_id_UNIQUE` (`address_id` ASC) VISIBLE,
  INDEX `fk_city_id_idx` (`city_id` ASC) VISIBLE,
  CONSTRAINT `fk_city_id`
    FOREIGN KEY (`city_id`)
    REFERENCES `abc`.`city` (`city_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `abc`.`vendor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `abc`.`vendor` (
  `vendor_id` INT NOT NULL AUTO_INCREMENT,
  `company_name` VARCHAR(45) NOT NULL,
  `address_id` INT UNSIGNED NOT NULL,
  `last_updated` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`vendor_id`),
  UNIQUE INDEX `vender_id_UNIQUE` (`vendor_id` ASC) VISIBLE,
  INDEX `fk_vender_address_id_idx` (`address_id` ASC) VISIBLE,
  CONSTRAINT `fk_vender_address_id`
    FOREIGN KEY (`address_id`)
    REFERENCES `abc`.`address` (`address_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `abc`.`transaction`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `abc`.`transaction` (
  `transaction_id` INT NOT NULL AUTO_INCREMENT,
  `vendor_id` INT NOT NULL,
  `Cost` DOUBLE NOT NULL,
  `purchase_date` DATETIME NULL,
  `begin_date` DATETIME NULL,
  `end_date` DATETIME NULL,
  `last_updated` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`transaction_id`),
  UNIQUE INDEX `transaction_id_UNIQUE` (`transaction_id` ASC) VISIBLE,
  UNIQUE INDEX `vender_id_UNIQUE` (`vendor_id` ASC) VISIBLE,
  CONSTRAINT `vender_id`
    FOREIGN KEY (`vendor_id`)
    REFERENCES `abc`.`vendor` (`vendor_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `abc`.`equipment_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `abc`.`equipment_type` (
  `type_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `model_name` VARCHAR(45) NOT NULL COMMENT 'Product Type = IPhone, Android, Laptop....\n',
  `model_number` INT NOT NULL,
  PRIMARY KEY (`type_id`),
  UNIQUE INDEX `product_name_UNIQUE` (`model_name` ASC) VISIBLE,
  UNIQUE INDEX `modle_number_UNIQUE` (`model_number` ASC) VISIBLE,
  UNIQUE INDEX `type_id_UNIQUE` (`type_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `abc`.`equipment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `abc`.`equipment` (
  `equiptment_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `serial_number` VARCHAR(20) NOT NULL,
  `transaction_id` INT NOT NULL,
  `type_id` INT UNSIGNED NOT NULL,
  `last_updated` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`equiptment_id`),
  UNIQUE INDEX `equiptment_id_UNIQUE` (`equiptment_id` ASC) VISIBLE,
  UNIQUE INDEX `transaction_id_UNIQUE` (`transaction_id` ASC) VISIBLE,
  INDEX `fk_type_id_idx` (`type_id` ASC) VISIBLE,
  CONSTRAINT `fk_trans_id`
    FOREIGN KEY (`transaction_id`)
    REFERENCES `abc`.`transaction` (`transaction_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_type_id`
    FOREIGN KEY (`type_id`)
    REFERENCES `abc`.`equipment_type` (`type_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `abc`.`building`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `abc`.`building` (
  `building_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `address_id` INT UNSIGNED NOT NULL,
  `building_name` VARCHAR(45) NOT NULL,
  `phone_number` INT NULL,
  PRIMARY KEY (`building_id`),
  UNIQUE INDEX `phone_number_UNIQUE` (`phone_number` ASC) VISIBLE,
  UNIQUE INDEX `building_id_UNIQUE` (`building_id` ASC) VISIBLE,
  CONSTRAINT `fk_building_address_id`
    FOREIGN KEY (`address_id`)
    REFERENCES `abc`.`address` (`address_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `abc`.`room`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `abc`.`room` (
  `room_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `room_number` INT NOT NULL,
  `floor` INT NOT NULL,
  `extension` SMALLINT(5) NULL,
  PRIMARY KEY (`room_id`),
  UNIQUE INDEX `room_number_UNIQUE` (`room_number` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `abc`.`location`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `abc`.`location` (
  `location_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `building_id` INT UNSIGNED NOT NULL,
  `room_id` INT UNSIGNED NULL,
  `last_updated` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `office_id_idx` (`building_id` ASC) VISIBLE,
  INDEX `room_id_idx` (`room_id` ASC) VISIBLE,
  PRIMARY KEY (`location_id`),
  UNIQUE INDEX `location_id_UNIQUE` (`location_id` ASC) VISIBLE,
  CONSTRAINT `office_id`
    FOREIGN KEY (`building_id`)
    REFERENCES `abc`.`building` (`building_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `room_id`
    FOREIGN KEY (`room_id`)
    REFERENCES `abc`.`room` (`room_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `abc`.`account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `abc`.`account` (
  `account_id` INT NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` BINARY(16) NOT NULL,
  `last_updated` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`account_id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `account_id_UNIQUE` (`account_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `abc`.`employee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `abc`.`employee` (
  `employee_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `location_id` INT UNSIGNED NOT NULL,
  `account_id` INT NULL,
  `cell_number` INT NULL,
  `last_updated` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`employee_id`),
  INDEX `location_id_idx` (`location_id` ASC) VISIBLE,
  INDEX `account_id_idx` (`account_id` ASC) VISIBLE,
  UNIQUE INDEX `cell_number_UNIQUE` (`cell_number` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `account_id_UNIQUE` (`account_id` ASC) VISIBLE,
  UNIQUE INDEX `last_updated_UNIQUE` (`last_updated` ASC) VISIBLE,
  UNIQUE INDEX `employee_id_UNIQUE` (`employee_id` ASC) VISIBLE,
  CONSTRAINT `location_id`
    FOREIGN KEY (`location_id`)
    REFERENCES `abc`.`location` (`location_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `account_id`
    FOREIGN KEY (`account_id`)
    REFERENCES `abc`.`account` (`account_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `abc`.`Inventory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `abc`.`Inventory` (
  `inventory_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `location_id` INT UNSIGNED NULL,
  `owner_id` INT UNSIGNED NOT NULL,
  `equpiment_id` INT UNSIGNED NOT NULL,
  `employee_id` INT UNSIGNED NULL,
  `last_update` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`inventory_id`),
  UNIQUE INDEX `inventory_id_UNIQUE` (`inventory_id` ASC) VISIBLE,
  UNIQUE INDEX `equpiment_id_UNIQUE` (`equpiment_id` ASC) VISIBLE,
  INDEX `fk_location_id_idx` (`location_id` ASC) VISIBLE,
  INDEX `fk_employee_id_idx` (`employee_id` ASC) VISIBLE,
  CONSTRAINT `fk_inv_equ_id`
    FOREIGN KEY (`equpiment_id`)
    REFERENCES `abc`.`equipment` (`equiptment_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_location_id`
    FOREIGN KEY (`location_id`)
    REFERENCES `abc`.`location` (`location_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_employee_id`
    FOREIGN KEY (`employee_id`)
    REFERENCES `abc`.`employee` (`employee_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `abc`.`reservations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `abc`.`reservations` (
  `reservation_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `location_id` INT UNSIGNED NOT NULL,
  `start_time` DATETIME NOT NULL,
  `end_time` DATETIME NOT NULL,
  `employee_id` INT UNSIGNED NOT NULL,
  `last_updated` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`reservation_id`),
  INDEX `employee_id_idx` (`employee_id` ASC) VISIBLE,
  UNIQUE INDEX `reservation_id_UNIQUE` (`reservation_id` ASC) VISIBLE,
  INDEX `fk_location_id_idx` (`location_id` ASC) VISIBLE,
  CONSTRAINT `employee_id`
    FOREIGN KEY (`employee_id`)
    REFERENCES `abc`.`employee` (`employee_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_res_location_id`
    FOREIGN KEY (`location_id`)
    REFERENCES `abc`.`location` (`location_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `abc`.`equipment_reservations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `abc`.`equipment_reservations` (
  `equipment_equiptment_id` INT UNSIGNED NOT NULL,
  `reservations_reservation_id` INT UNSIGNED NOT NULL,
  `last_updated` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`equipment_equiptment_id`, `reservations_reservation_id`),
  INDEX `fk_equipment_has_reservations_reservations1_idx` (`reservations_reservation_id` ASC) VISIBLE,
  INDEX `fk_equipment_has_reservations_equipment1_idx` (`equipment_equiptment_id` ASC) VISIBLE,
  CONSTRAINT `fk_equipment_has_reservations_equipment1`
    FOREIGN KEY (`equipment_equiptment_id`)
    REFERENCES `abc`.`equipment` (`equiptment_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_equipment_has_reservations_reservations1`
    FOREIGN KEY (`reservations_reservation_id`)
    REFERENCES `abc`.`reservations` (`reservation_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `abc`.`lease`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `abc`.`lease` (
  `lease_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `begin_date` DATETIME NOT NULL,
  `end_date` DATETIME NOT NULL,
  `ref_number` VARCHAR(20) NOT NULL,
  `transaction_transaction_id` INT NOT NULL,
  `last_updated` DATETIME NOT NULL,
  PRIMARY KEY (`lease_id`),
  INDEX `fk_lease_transaction1_idx` (`transaction_transaction_id` ASC) VISIBLE,
  CONSTRAINT `fk_lease_transaction1`
    FOREIGN KEY (`transaction_transaction_id`)
    REFERENCES `abc`.`transaction` (`transaction_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `abc`.`events`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `abc`.`events` (
  `event_id` INT NOT NULL AUTO_INCREMENT,
  `owner` VARCHAR(45) NOT NULL,
  `description` VARCHAR(300) NOT NULL,
  `start_time` DATETIME NOT NULL,
  `end_time` DATETIME NOT NULL,
  `location_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`event_id`),
  INDEX `location_id_idx` (`location_id` ASC) VISIBLE,
  CONSTRAINT `fk_event_location_id`
    FOREIGN KEY (`location_id`)
    REFERENCES `abc`.`location` (`location_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
