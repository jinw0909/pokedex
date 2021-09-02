SELECT * FROM pokemon.pokemon_type;
ALTER TABLE `pokemon_type` ADD `type_color` varchar(16) NOT NULL;

TRUNCATE TALBE `pokemon_type`;

INSERT INTO `pokemon_type` 
(`type_name`, `createdAt`, `updatedAt`)
VALUES
('노말', '#ADA494', now(), now()),
('불꽃', '#C72001', now(), now()),
('물', '#0166C2', now(), now()),
('풀', '#389A00', now(), now()),
('전기', '#FBB917', now(), now()),
('얼음', '#3AA0C1',  now(), now()),
('격투', '#5F2310', now(), now()),
('독', '#6B246E', now(), now()),
('땅', '#AD8C33', now(), now()),
('비행', '#5C72D3', now(), now()),
('에스퍼', '#DB3065', now(), now()),
('벌레', '#88960F', now(), now()),
('바위', '#9E863C', now(), now()),
('고스트', '#454593', now(), now()),
('드래곤', '#4E3BA4', now(), now());

INSERT INTO `pokemon_type` (`type_color`)
VALUES

(),
(''),
(),
(),
(),
(),
(),
(),
(),
(),
(),
(),
(),
(),
('#3C2D22'),
('#8E8E9F'),
('#DF8EDF'),
('#008080')