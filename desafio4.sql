CREATE VIEW top_3_artistas AS 
SELECT 
a.artista AS artista, COUNT(s.usuario_id) AS seguidores
FROM SpotifyClone.artistas AS a
INNER JOIN SpotifyClone.seguidores AS s ON s.artista_id = a.artista_id
GROUP BY 1
ORDER BY 2 DESC, 1
LIMIT 3;
