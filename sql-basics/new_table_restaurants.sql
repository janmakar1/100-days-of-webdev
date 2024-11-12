DROP TABLE `restaurant_finder`.`restaurants`;

CREATE TABLE `restaurant_finder`.`restaurants` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `address_id` INT NOT NULL,
  `type_id` INT NOT NULL,
  PRIMARY KEY (`id`));