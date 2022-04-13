DELIMITER $$

CREATE FUNCTION quantidade_musicas_no_historico(musicas INT)
RETURN DOUBLE READS SQL DATA
BEGIN
    SELECT COUNT(*)
    FROM SpotifyClone.UserSong
    WHERE user_id = id_user INTO songs_total;
    RETURN songs_total;
END $$ 
DELIMITER ;
