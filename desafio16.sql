DELIMITER $$
CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(email VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
DECLARE QUANTIDADE INT;
SELECT COUNT(*)
    FROM
hr.job_history AS jh
        INNER JOIN
        hr.employees AS e ON jh.EMPLOYEE_ID = e.EMPLOYEE_ID
        WHERE email = e.EMAIL INTO QUANTIDADE;
        RETURN QUANTIDADE;
DELIMITER ;
