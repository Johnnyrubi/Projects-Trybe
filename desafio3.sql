CREATE VIEW historico_reproducao_usuarios AS
SELECT 
u.usuario AS usuario, n.musica AS nome
FROM
SpotifyClone.usuarios AS u
            INNER JOIN
        SpotifyClone.historico_reproducoes AS h ON u.usuario_id = h.usuario_id
            INNER JOIN
        SpotifyClone.musicas AS n ON n.musica_id = h.musica_id
ORDER BY 1 , 2;
