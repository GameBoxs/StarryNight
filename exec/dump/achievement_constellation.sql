-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.11.2-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- 테이블 starrynight-dev.achievement_constellation 구조 내보내기
DROP TABLE IF EXISTS `achievement_constellation`;
CREATE TABLE IF NOT EXISTS `achievement_constellation` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_date` datetime(6) DEFAULT NULL,
  `achievement_id` bigint(20) DEFAULT NULL,
  `constellation_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKiuqjdd2vptnv7u2onx7uujqnc` (`achievement_id`),
  KEY `FK9ab9yb77k9c3pmwxsfyt7wn4o` (`constellation_id`),
  CONSTRAINT `FK9ab9yb77k9c3pmwxsfyt7wn4o` FOREIGN KEY (`constellation_id`) REFERENCES `constellation` (`id`),
  CONSTRAINT `FKiuqjdd2vptnv7u2onx7uujqnc` FOREIGN KEY (`achievement_id`) REFERENCES `achievement` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 starrynight-dev.achievement_constellation:~66 rows (대략적) 내보내기
INSERT INTO `achievement_constellation` (`id`, `created_date`, `achievement_id`, `constellation_id`) VALUES
	(1, '2023-04-02 18:25:19.401454', 1, 6),
	(2, '2023-04-02 18:25:19.414592', 1, 12),
	(3, '2023-04-02 18:25:19.425855', 1, 13),
	(4, '2023-04-02 18:25:19.437593', 1, 14),
	(5, '2023-04-02 18:25:19.449428', 1, 16),
	(6, '2023-04-02 18:25:19.462736', 1, 23),
	(7, '2023-04-02 18:25:19.474194', 1, 24),
	(8, '2023-04-02 18:25:19.486624', 1, 25),
	(9, '2023-04-02 18:25:19.497595', 1, 35),
	(10, '2023-04-02 18:25:19.510562', 1, 38),
	(11, '2023-04-02 18:25:19.521531', 1, 42),
	(12, '2023-04-02 18:25:19.532505', 1, 43),
	(13, '2023-04-02 18:25:19.545467', 1, 44),
	(14, '2023-04-02 18:25:31.312776', 2, 1),
	(15, '2023-04-02 18:25:31.324783', 2, 5),
	(16, '2023-04-02 18:25:31.335770', 2, 9),
	(17, '2023-04-02 18:25:31.348810', 2, 10),
	(18, '2023-04-02 18:25:31.360076', 2, 18),
	(19, '2023-04-02 18:25:31.371676', 2, 19),
	(20, '2023-04-02 18:25:31.386675', 2, 20),
	(21, '2023-04-02 18:25:31.397748', 2, 21),
	(22, '2023-04-02 18:25:31.409267', 2, 22),
	(23, '2023-04-02 18:25:31.421042', 2, 39),
	(24, '2023-04-02 18:25:31.431673', 2, 40),
	(25, '2023-04-02 18:25:31.441923', 2, 51),
	(26, '2023-04-02 18:25:31.452929', 2, 52),
	(27, '2023-04-02 18:25:46.378559', 3, 3),
	(28, '2023-04-02 18:25:46.391657', 3, 7),
	(29, '2023-04-02 18:25:46.403868', 3, 8),
	(30, '2023-04-02 18:25:46.414927', 3, 15),
	(31, '2023-04-02 18:25:46.425929', 3, 17),
	(32, '2023-04-02 18:25:46.438862', 3, 26),
	(33, '2023-04-02 18:25:46.454770', 3, 29),
	(34, '2023-04-02 18:25:46.467025', 3, 30),
	(35, '2023-04-02 18:25:46.480189', 3, 41),
	(36, '2023-04-02 18:25:46.491158', 3, 49),
	(37, '2023-04-02 18:25:46.508306', 3, 50),
	(38, '2023-04-02 18:25:57.841445', 4, 2),
	(39, '2023-04-02 18:25:57.852752', 4, 11),
	(40, '2023-04-02 18:25:57.864761', 4, 28),
	(41, '2023-04-02 18:25:57.875928', 4, 31),
	(42, '2023-04-02 18:25:57.886817', 4, 32),
	(43, '2023-04-02 18:25:57.897786', 4, 33),
	(44, '2023-04-02 18:25:57.910751', 4, 36),
	(45, '2023-04-02 18:25:57.922721', 4, 46),
	(46, '2023-04-02 18:25:57.936070', 4, 48),
	(47, '2023-04-02 18:25:57.948655', 4, 53),
	(48, '2023-04-02 18:26:10.512834', 5, 4),
	(49, '2023-04-02 18:26:10.526233', 5, 27),
	(50, '2023-04-02 18:26:10.538251', 5, 34),
	(51, '2023-04-02 18:26:10.549228', 5, 37),
	(52, '2023-04-02 18:26:10.561217', 5, 45),
	(53, '2023-04-02 18:26:10.571616', 5, 46),
	(54, '2023-04-06 02:20:55.744387', 6, 2),
	(55, '2023-04-06 02:20:55.748612', 6, 5),
	(56, '2023-04-06 02:20:55.751926', 6, 14),
	(57, '2023-04-06 02:20:55.753068', 6, 15),
	(58, '2023-04-06 02:20:55.754162', 6, 17),
	(59, '2023-04-06 02:20:55.755282', 6, 21),
	(60, '2023-04-06 02:20:55.756857', 6, 24),
	(61, '2023-04-06 02:20:55.757989', 6, 28),
	(62, '2023-04-06 02:20:55.759090', 6, 30),
	(63, '2023-04-06 02:20:55.760185', 6, 40),
	(64, '2023-04-06 02:20:55.761282', 6, 42),
	(65, '2023-04-06 02:20:55.762373', 6, 43),
	(66, '2023-04-06 02:20:55.763460', 6, 53),
	(67, '2023-04-02 18:26:10.571616', 5, 47);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
