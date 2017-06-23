CREATE DATABASE lianxi;
CREATE TABLE kaos(
  xuehao  INT(4),
  namee  CHAR(4),
  xinbie  CHAR(1),
  cji  INT(4)
);

ALTER TABLE `kaos`ADD CONSTRAINT `pk_kaos` PRIMARY KEY `kaos`(`xuehao`);

INSERT INTO `kaos`(`namee`,`xinbie`,`cji`)
VALUE('小明','男',14);

SELECT `subjectNo`,`subjectName`,`classHour` FROM `subject`,`student`(
 WHERE  `subject`=`gradeID`,`subjectName`=`studentName`
);

#上机1
BEGIN;
INSERT INTO `result`(`studentNo`,`subjectNo`,`exameDate`,`studentResult`) VALUES(1000,1,NOW(),77);
COMMIT; 

BEGIN;
INSERT INTO `result`(`studentNo`,`subjectNo`,`exameDate`,`studentResult`) VALUES(1000,1,NOW(),120);
ROLLBACK;

#上机2
#提交事务
BEGIN;
CREATE TABLE historyresult(
SELECT `subjectNo`,`studentResult`FROM `result` WHERE `subjectNo`=2);

COMMIT; 

BEGIN
CREATE TABLE historystudent(
SELECT * FROM `student` WHERE `gradeID`=2);
COMMIT; 

#回滚事务
BEGIN;
DROP TABLE `result` WHERE `subjectNo`=2;
ROLLBACK;

BEGIN;
DROP TABLE `student` WHERE `gradeID`=2;
ROLLBACK;


#上机3
DROP VIEW IF EXISTS view_tabl;
CREATE VIEW view_tabl
AS
SELECT `studentName`,`student`.`gradeID`,`subjectName`,`classHour` FROM `student`,`subject`
 WHERE `subject`.`subjectNo`= `student`.`gradeID`;

SELECT * FROM view_tabl;
SELECT AVG(`studentResult`) FROM `result`
WHERE `result`.`studentNo`=1
;
SELECT `studentName`,`address` FROM view_tabl;

#上机4   没做完

CREATE UNIQUE INDEX index_aas
ON `student`(`identityCard`)

CREATE  INDEX index_name_gradeID
ON `student`(`studentName`,`gradeID`)


#上机5  做完了

#上机6
SELECT * FROM `subject` INTO OUTFILE 'd:/ex/yyu.txt';



