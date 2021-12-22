-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 22-12-2021 a las 00:39:34
-- Versión del servidor: 10.5.12-MariaDB-cll-lve
-- Versión de PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `u448016988_pelvison`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contactogym`
--

CREATE TABLE `contactogym` (
  `id` int(11) NOT NULL,
  `nombre` varchar(155) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '*',
  `mensaje` varchar(5000) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `contactogym`
--

INSERT INTO `contactogym` (`id`, `nombre`, `email`, `telefono`, `mensaje`) VALUES
(1, 'Emiliano', 'juanlopez@gmail.com', '+543434606845', 'holaaaaaaaaaaaaa'),
(2, 'Emiliano', 'juanlopez@gmail.com', '+543434606845', 'holaaaaaaaaaaaaa'),
(3, 'Emiliano', 'juanlopez@gmail.com', '+543434606845', 'holaaa'),
(4, 'Gladys Nunez', 'lobocalderon@outlook.com', '', 'asadasdsa'),
(5, 'Gladys Nunez', 'emicalderon24@hotmail.com', '', 'Holaaaa'),
(6, 'Emiliano Oscar', 'calderongustavo@live.com', '', 'See'),
(7, 'Florencia Calderon', 'lobocalderon@outlook.e', '', 'HOla como estas\n');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `contactogym`
--
ALTER TABLE `contactogym`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `contactogym`
--
ALTER TABLE `contactogym`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
