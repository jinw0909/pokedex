테이블생성

CREATE TABLE `pokemon` (
	`pokemon_idx` int NOT NULL AUTO_INCREMENT primary key,
    `pokemon_name` varchar(16) NOT NULL,
    `pokemon_type` int NOT NULL,
    `pokemon_location` int NOT NULL,
    `pokemon_image` varchar(128),
    `pokemon_memo` text,
    `createdAt` timestamp DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` timestamp DEFAULT CURRENT_TIMESTAMP
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;


CREATE TABLE `pokemon_type` (
	`type_idx` int NOT NULL AUTO_INCREMENT primary key,
    `type_name` varchar(16) NOT NULL,
    `type_color` varchar(16) NOT NULL,
    `createdAt` timestamp DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` timestamp DEFAULT CURRENT_TIMESTAMP
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;


CREATE TABLE `pokemon_location` (
	`location_idx` int NOT NULL AUTO_INCREMENT primary key,
    `location_name` varchar(16) NOT NULL,
    `createdAt` timestamp DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` timestamp DEFAULT CURRENT_TIMESTAMP
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;


테이블 내용 삽입

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

INSERT INTO `pokemon_type`
(`type_name`, `type_color`, `createdAt`, `updatedAt`)
VALUES
('노말', '#ADA494', now(), now()),
('불꽃', '#C72001', now(), now()),
('물', '#0166C2', now(), now()),
('풀', '#389A00', now(), now()),
('전기', '#FBB917', now(), now()),
('얼음', '#3AA0C1', now(), now()),
('격투', '#5F2310', now(), now()),
('독', '#6B246E', now(), now()),
('땅', '#AD8C33', now(), now()),
('비행', '#5C72D3', now(), now()),
('에스퍼', '#DB3065', now(), now()),
('벌레', '#88960F', now(), now()),
('바위', '#9E863C', now(), now()),
('고스트', '#454593', now(), now());

