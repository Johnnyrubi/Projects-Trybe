CREATE SCHEMA IF NOT EXISTS `SpotifyClone` ;

CREATE TABLE IF NOT EXISTS `SpotifyClone`.`planos` (
  `plano_id` INT PRIMARY KEY AUTO_INCREMENT,
  `plano_nome` VARCHAR(45) NOT NULL,
  `plano_valor` DECIMAL(3,2) NOT NULL
);
CREATE TABLE IF NOT EXISTS `SpotifyClone`.`usuarios` (
  `usuario_id` INT NOT NULL AUTO_INCREMENT,
  `usuario` VARCHAR(45) NOT NULL,
  `usuario_idade` INT NOT NULL,
  `plano_id` INT NOT NULL,
  PRIMARY KEY (`usuario_id`),
  FOREIGN KEY (`plano_id`) REFERENCES SpotifyClone.planos(`plano_id`)
);
CREATE TABLE IF NOT EXISTS `SpotifyClone`.`artistas` (
  `artista_id` INT NOT NULL AUTO_INCREMENT,
  `artista` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`artista_id`)
);
CREATE TABLE IF NOT EXISTS `SpotifyClone`.`albuns` (
  `album_id` INT NOT NULL,
  `artista_id` INT NOT NULL,
  `album` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`album_id`),
  FOREIGN KEY (`artista_id`) REFERENCES `SpotifyClone`.`artistas` (`artista_id`)
);
CREATE TABLE IF NOT EXISTS `SpotifyClone`.`musicas` (
  `musica_id` INT NOT NULL AUTO_INCREMENT,
  `musica` VARCHAR(45) NOT NULL,
  `album_id` INT NOT NULL,
  PRIMARY KEY (`musica_id`),
  FOREIGN KEY (`album_id`) REFERENCES `SpotifyClone`.`albuns` (`album_id`)
);

CREATE TABLE IF NOT EXISTS `SpotifyClone`.`seguidores` (
  `usuario_id` INT NOT NULL,
  `artista_id` INT NOT NULL,
  CONSTRAINT PRIMARY KEY(usuario_id, artista_id),
  FOREIGN KEY (`usuario_id`) REFERENCES `SpotifyClone`.`usuarios` (`usuario_id`),
  FOREIGN KEY (`artista_id`) REFERENCES `SpotifyClone`.`artistas` (`artista_id`)
);
CREATE TABLE IF NOT EXISTS `SpotifyClone`.`historico_reproducoes` (
  `usuario_id` INT NOT NULL,
  `musica_id` INT NOT NULL,
  CONSTRAINT PRIMARY KEY(usuario_id, musica_id),
  FOREIGN KEY (`usuario_id`) REFERENCES `SpotifyClone`.`usuarios` (`usuario_id`),
  FOREIGN KEY (`musica_id`) REFERENCES `SpotifyClone`.`musicas` (`musica_id`)
);
INSERT INTO SpotifyClone.planos (plano_nome, plano_valor)
VALUES
('gatuito', 0),
('familiar', 7.99),
('universitário', 5.99);
INSERT INTO SpotifyClone.usuarios (usuario, usuario_idade, plano_id)
VALUES
('Thati', 23, 1),
('Cintia', 35, 2),
('Bill', 20, 3),
('Roger', 45, 1);
INSERT INTO SpotifyClone.artistas (artista)
VALUES
('Walter Phoenix'),
('Peter Strong'),
('Lance Day'),
('Freedie Shannon');
INSERT INTO SpotifyClone.albuns (album_id, artista_id, album)
VALUES
(1, 1, 'Envious'),
(2, 1, 'Exuberant'),
(3, 2, 'Hallowed Steam'),
(4, 3, 'Incandescent'),
(5, 4, 'Temporary Culture');
INSERT INTO SpotifyClone.musicas (musica, album_id)
VALUES
("Soul For Us", 1),
("Reflections Of Magic", 1),
("Dance With Her Own", 1),
("Troubles Of My Inner Fire", 2),
("Time Fireworks", 2),
("Magic Circus", 3),
("Honey, So Do I", 3),
("Sweetie, Let's Go Wild", 3),
("She Knows", 3),
("Fantasy For Me", 4),
("Celebration Of More", 4),
("Rock His Everything", 4),
("Home Forever", 4),
("Diamond Power", 4),
("Honey, Let's Be Silly", 4),
("Thang Of Thunder", 5),
("Words Of Her Life", 5),
("Without My Streets", 5);
INSERT INTO SpotifyClone.seguidores (usuario_id, artista_id)
VALUES
(1, 1),
(1, 4),
(1, 3),
(2, 1),
(2, 3),
(3, 2),
(3, 1),
(4, 4);
INSERT INTO SpotifyClone.historico_reproducoes (usuario_id, musica_id)
VALUES 
(1, 1),
(1, 6),
(1, 14),
(1, 16),
(2, 13),
(2, 17),
(2, 2),
(2, 15),
(3, 4),
(3, 16),
(3, 6),
(4, 3),
(4, 18),
(4, 11);
