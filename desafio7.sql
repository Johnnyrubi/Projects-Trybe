CREATE VIEW perfil_artistas AS 
SELECT a.artista AS artista, al.album AS album, (SELECT COUNT(*) FROM SpotifyClone.seguidores AS s WHERE s.artista_id = a.artista_id) AS seguidores
FROM SpotifyClone.artistas AS a
INNER JOIN SpotifyClone.albuns AS al ON al.artista_id = a.artista_id
ORDER BY 3 DESC, 1, 2;
