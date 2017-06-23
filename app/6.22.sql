SELECT `gradeName` FROM `grade` (
  WHERE 

);

CREATE TABLE student2(
 id  INT(4),
 namea CHAR(5),
 age INT(3),
 Home VARCHAR(50)
 
);

ALTER TABLE `student2` ADD CONSTRAINT `pk_atudent2` PRIMARY KEY `student2`(`id`);

INSERT INTO `student2`(`namea`,`age`,`Home`) VALUES 
  ('小四',16,'佛山'),
  ('小五',12,'广州'),
  ('小刘',13,'珠海'),
  ('小七',17,'岛民'),
  ('小八',18,'白云'),
  ('小没',15,'佛山'),
  ('小六',13,'禅城');

SELECT * FROM `student2` WHERE  `Home`='佛山' ;


  