SELECT * FROM MVC.hr;

CREATE DATABASE pokemon;
USE pokemon;

CREATE TABLE `pokemon` (
	`pokemon_idx` int NOT NULL AUTO_INCREMENT primary key,
    `pokemon_name` varchar(16) NOT NULL,
    `pokemon_type` int NOT NULL,
    `pokemon_location` int NOT NULL,
    `pokemon_class` int NOT NULL,
    `pokemon_memo` text NOT NULL,
    `createdAt` timestamp DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` timestamp DEFAULT CURRENT_TIMESTAMP
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

DROP TABLE `pokemon`;
DROP TABLE `pokemon_class`;

CREATE TABLE `pokemon_type` (
	`type_idx` int NOT NULL AUTO_INCREMENT primary key,
    `type_name` varchar(16) NOT NULL,
    `createdAt` timestamp DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` timestamp DEFAULT CURRENT_TIMESTAMP
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE `pokemon_class` (
	`class_idx` int NOT NULL AUTO_INCREMENT primary key,
    `class_name` varchar(16) NOT NULL,
    `createdAt` timestamp DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` timestamp DEFAULT CURRENT_TIMESTAMP
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE `pokemon_location` (
	`location_idx` int NOT NULL AUTO_INCREMENT primary key,
    `location_name` varchar(16) NOT NULL,
    `createdAt` timestamp DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` timestamp DEFAULT CURRENT_TIMESTAMP
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO `pokemon_type` 
(`type_name`, `createdAt`, `updatedAt`)
VALUES
('노말', now(), now()),
('불꽃', now(), now()),
('물', now(), now()),
('풀', now(), now()),
('전기', now(), now()),
('얼음', now(), now()),
('격투', now(), now()),
('독', now(), now()),
('땅', now(), now()),
('비행', now(), now()),
('에스퍼', now(), now()),
('벌레', now(), now()),
('바위', now(), now()),
('고스트', now(), now()),
('드래곤', now(), now());

INSERT INTO `pokemon_location` 
(`location_name`, `createdAt`, `updatedAt`)
VALUES
('태초마을', now(), now()),
('상록시티', now(), now()),
('회색시티', now(), now()),
('블루시티', now(), now()),
('갈색시티', now(), now()),
('보라타운', now(), now()),
('무지개시티', now(), now()),
('연분홍시티', now(), now()),
('노랑시티', now(), now()),
('홍련마을', now(), now()),
('석영고원', now(), now());



