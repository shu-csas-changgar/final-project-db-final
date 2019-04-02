-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`country`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`country` (
  `country_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `country_name` VARCHAR(50) NOT NULL,
  `last_update` DATETIME NOT NULL,
  PRIMARY KEY (`country_id`),
  UNIQUE INDEX `country_id_UNIQUE` (`country_id` ASC) VISIBLE,
  UNIQUE INDEX `country_name_UNIQUE` (`country_name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`city`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`city` (
  `city_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `city_name` VARCHAR(50) NOT NULL,
  `last_update` DATETIME NOT NULL,
  `country_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`city_id`),
  INDEX `fk_city_country1_idx` (`country_id` ASC) VISIBLE,
  CONSTRAINT `fk_city_country1`
    FOREIGN KEY (`country_id`)
    REFERENCES `mydb`.`country` (`country_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`address` (
  `address_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `address1` VARCHAR(45) NOT NULL,
  `address2` VARCHAR(50) NULL,
  `city` VARCHAR(50) NOT NULL,
  `district` VARCHAR(20) NOT NULL,
  `postal_code` VARCHAR(20) NOT NULL,
  `city_id` INT UNSIGNED NOT NULL,
  `last_update` DATETIME NOT NULL,
  PRIMARY KEY (`address_id`),
  UNIQUE INDEX `address_id_UNIQUE` (`address_id` ASC) VISIBLE,
  INDEX `fk_city_id_idx` (`city_id` ASC) VISIBLE,
  CONSTRAINT `fk_city_id`
    FOREIGN KEY (`city_id`)
    REFERENCES `mydb`.`city` (`city_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`building`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`building` (
  `building_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `address_id` INT UNSIGNED NOT NULL,
  `building_name` VARCHAR(45) NOT NULL,
  `phone_number` INT NOT NULL,
  PRIMARY KEY (`building_id`),
  UNIQUE INDEX `phone_number_UNIQUE` (`phone_number` ASC) VISIBLE,
  UNIQUE INDEX `building_id_UNIQUE` (`building_id` ASC) VISIBLE,
  CONSTRAINT `fk_building_address_id`
    FOREIGN KEY (`address_id`)
    REFERENCES `mydb`.`address` (`address_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`room`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`room` (
  `room_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `room_number` INT NOT NULL,
  `floor` INT NOT NULL,
  `extension` SMALLINT(5) NULL,
  PRIMARY KEY (`room_id`),
  UNIQUE INDEX `room_number_UNIQUE` (`room_number` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`location`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`location` (
  `location_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `building_id` INT UNSIGNED NOT NULL,
  `room_id` INT UNSIGNED NOT NULL,
  `last_updated` DATETIME NOT NULL,
  INDEX `office_id_idx` (`building_id` ASC) VISIBLE,
  INDEX `room_id_idx` (`room_id` ASC) VISIBLE,
  PRIMARY KEY (`location_id`),
  UNIQUE INDEX `location_id_UNIQUE` (`location_id` ASC) VISIBLE,
  CONSTRAINT `office_id`
    FOREIGN KEY (`building_id`)
    REFERENCES `mydb`.`building` (`building_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `room_id`
    FOREIGN KEY (`room_id`)
    REFERENCES `mydb`.`room` (`room_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`account` (
  `account_id` INT NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` BINARY(16) NOT NULL,
  `last_updated` DATETIME NOT NULL,
  PRIMARY KEY (`account_id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `account_id_UNIQUE` (`account_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`employee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`employee` (
  `employee_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `location_id` INT NOT NULL,
  `account_id` INT NULL,
  `cell_number` INT NULL,
  `last_updated` DATETIME NOT NULL,
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
    REFERENCES `mydb`.`location` (`location_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `account_id`
    FOREIGN KEY (`account_id`)
    REFERENCES `mydb`.`account` (`account_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`owner`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`owner` (
  `owner_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `employee_id` INT UNSIGNED NULL,
  `location_id` INT UNSIGNED NULL,
  `last_updated` DATETIME NOT NULL,
  PRIMARY KEY (`owner_id`),
  UNIQUE INDEX `location_id_UNIQUE` (`location_id` ASC) VISIBLE,
  UNIQUE INDEX `owner_id_UNIQUE` (`owner_id` ASC) VISIBLE,
  INDEX `employee_idx` (`employee_id` ASC) VISIBLE,
  UNIQUE INDEX `employee_id_UNIQUE` (`employee_id` ASC) VISIBLE,
  CONSTRAINT `fk_owner_id`
    FOREIGN KEY (`location_id`)
    REFERENCES `mydb`.`location` (`location_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `employee`
    FOREIGN KEY (`employee_id`)
    REFERENCES `mydb`.`employee` (`employee_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`vendor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`vendor` (
  `vendor_id` INT NOT NULL AUTO_INCREMENT,
  `company_name` VARCHAR(45) NOT NULL,
  `address_id` INT UNSIGNED NOT NULL,
  `last_updated` DATETIME NOT NULL,
  PRIMARY KEY (`vendor_id`),
  UNIQUE INDEX `vender_id_UNIQUE` (`vendor_id` ASC) VISIBLE,
  INDEX `fk_vender_address_id_idx` (`address_id` ASC) VISIBLE,
  CONSTRAINT `fk_vender_address_id`
    FOREIGN KEY (`address_id`)
    REFERENCES `mydb`.`address` (`address_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`transaction`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`transaction` (
  `transaction_id` INT NOT NULL AUTO_INCREMENT,
  `vendor_id` INT NOT NULL,
  `Cost` DOUBLE NOT NULL,
  `purchase_date` DATETIME NULL,
  `last_updated` DATETIME NOT NULL,
  `begin_date` DATETIME NULL,
  `end_date` DATETIME NULL,
  PRIMARY KEY (`transaction_id`),
  UNIQUE INDEX `transaction_id_UNIQUE` (`transaction_id` ASC) VISIBLE,
  UNIQUE INDEX `vender_id_UNIQUE` (`vendor_id` ASC) VISIBLE,
  CONSTRAINT `vender_id`
    FOREIGN KEY (`vendor_id`)
    REFERENCES `mydb`.`vendor` (`vendor_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`equipment_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`equipment_type` (
  `type_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `model_name` VARCHAR(45) NOT NULL COMMENT 'Product Type = IPhone, Android, Laptop....\n',
  `model_number` INT NOT NULL,
  PRIMARY KEY (`type_id`),
  UNIQUE INDEX `product_name_UNIQUE` (`model_name` ASC) VISIBLE,
  UNIQUE INDEX `modle_number_UNIQUE` (`model_number` ASC) VISIBLE,
  UNIQUE INDEX `type_id_UNIQUE` (`type_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`equipment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`equipment` (
  `equiptment_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `serial_number` VARCHAR(20) NOT NULL,
  `transaction_id` INT NOT NULL,
  `type_id` INT UNSIGNED NOT NULL,
  `last_updated` DATETIME NOT NULL,
  PRIMARY KEY (`equiptment_id`),
  UNIQUE INDEX `equiptment_id_UNIQUE` (`equiptment_id` ASC) VISIBLE,
  UNIQUE INDEX `transaction_id_UNIQUE` (`transaction_id` ASC) VISIBLE,
  INDEX `fk_type_id_idx` (`type_id` ASC) VISIBLE,
  CONSTRAINT `fk_trans_id`
    FOREIGN KEY (`transaction_id`)
    REFERENCES `mydb`.`transaction` (`transaction_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_type_id`
    FOREIGN KEY (`type_id`)
    REFERENCES `mydb`.`equipment_type` (`type_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Inventory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Inventory` (
  `inventory_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `location_id` INT UNSIGNED NULL,
  `owner_id` INT UNSIGNED NOT NULL,
  `equpiment_id` INT UNSIGNED NOT NULL,
  `last_update` DATETIME NOT NULL,
  `employee_id` INT UNSIGNED NULL,
  PRIMARY KEY (`inventory_id`),
  UNIQUE INDEX `inventory_id_UNIQUE` (`inventory_id` ASC) VISIBLE,
  UNIQUE INDEX `equpiment_id_UNIQUE` (`equpiment_id` ASC) VISIBLE,
  INDEX `fk_inv_owner_id_idx` (`owner_id` ASC) VISIBLE,
  INDEX `fk_location_id_idx` (`location_id` ASC) VISIBLE,
  INDEX `fk_employee_id_idx` (`employee_id` ASC) VISIBLE,
  CONSTRAINT `fk_inv_owner_id`
    FOREIGN KEY (`owner_id`)
    REFERENCES `mydb`.`owner` (`owner_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_inv_equ_id`
    FOREIGN KEY (`equpiment_id`)
    REFERENCES `mydb`.`equipment` (`equiptment_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_location_id`
    FOREIGN KEY (`location_id`)
    REFERENCES `mydb`.`location` (`location_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_employee_id`
    FOREIGN KEY (`employee_id`)
    REFERENCES `mydb`.`employee` (`employee_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`reservations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`reservations` (
  `reservation_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `location_id` INT NOT NULL,
  `start_time` DATETIME NOT NULL,
  `end_time` DATETIME NOT NULL,
  `employee_id` INT NOT NULL,
  `last_updated` DATETIME NOT NULL,
  PRIMARY KEY (`reservation_id`),
  INDEX `location_id_idx` (`location_id` ASC) VISIBLE,
  INDEX `employee_id_idx` (`employee_id` ASC) VISIBLE,
  UNIQUE INDEX `reservation_id_UNIQUE` (`reservation_id` ASC) VISIBLE,
  CONSTRAINT `location_id`
    FOREIGN KEY (`location_id`)
    REFERENCES `mydb`.`location` (`location_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `employee_id`
    FOREIGN KEY (`employee_id`)
    REFERENCES `mydb`.`employee` (`employee_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`equipment_has_reservations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`equipment_has_reservations` (
  `equipment_equiptment_id` INT UNSIGNED NOT NULL,
  `reservations_reservation_id` INT UNSIGNED NOT NULL,
  `last_updated` DATETIME NOT NULL,
  PRIMARY KEY (`equipment_equiptment_id`, `reservations_reservation_id`),
  INDEX `fk_equipment_has_reservations_reservations1_idx` (`reservations_reservation_id` ASC) VISIBLE,
  INDEX `fk_equipment_has_reservations_equipment1_idx` (`equipment_equiptment_id` ASC) VISIBLE,
  CONSTRAINT `fk_equipment_has_reservations_equipment1`
    FOREIGN KEY (`equipment_equiptment_id`)
    REFERENCES `mydb`.`equipment` (`equiptment_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_equipment_has_reservations_reservations1`
    FOREIGN KEY (`reservations_reservation_id`)
    REFERENCES `mydb`.`reservations` (`reservation_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`lease`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`lease` (
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
    REFERENCES `mydb`.`transaction` (`transaction_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`lease_copy1`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`lease_copy1` (
  `lease_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `begin_date` DATETIME NOT NULL,
  `end_date` DATETIME NOT NULL,
  `ref_number` VARCHAR(20) NOT NULL,
  `transaction_transaction_id` INT NOT NULL,
  `last_updated` DATETIME NOT NULL,
  PRIMARY KEY (`lease_id`),
  INDEX `fk_lease_transaction1_idx` (`transaction_transaction_id` ASC) VISIBLE,
  CONSTRAINT `fk_lease_transaction10`
    FOREIGN KEY (`transaction_transaction_id`)
    REFERENCES `mydb`.`transaction` (`transaction_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
