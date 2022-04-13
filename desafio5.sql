CREATE VIEW top_2_hits_do_momento AS
SELECT 
m.musica AS cancao, COUNT(m.musica) AS reproducoes
FROM
SpotifyClone.musicas AS m
INNER JOIN
SpotifyClone.historico_reproducoes AS h ON h.musica_id = m.musica_id
GROUP BY 1
ORDER BY  2 DESC, 1
LIMIT 2;
