-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-02-2022 a las 00:20:28
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `twochefs`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admins`
--

CREATE TABLE `admins` (
  `usuario` text NOT NULL,
  `password` text NOT NULL,
  `nombre` text NOT NULL,
  `email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `admins`
--

INSERT INTO `admins` (`usuario`, `password`, `nombre`, `email`) VALUES
('admin', '1234', 'Juan Guzman', 'guzmanjuan3011@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nombre` text DEFAULT NULL,
  `correo` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturas`
--

CREATE TABLE `facturas` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `apellido` text NOT NULL,
  `telefono` text NOT NULL,
  `direccion` text NOT NULL,
  `metodo` text NOT NULL,
  `carrito` text NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `facturas`
--

INSERT INTO `facturas` (`id`, `nombre`, `apellido`, `telefono`, `direccion`, `metodo`, `carrito`, `total`) VALUES
(1, 'Juan', 'Guzmán', '04126945077', 'Calle Transversal', 'efectivo', '[{\"nombre\":\"Coca-Cola (350ml)\",\"precio\":\"2\",\"categoria\":\"bebidas\"}]', 2),
(2, 'Juan', 'Guzmán', '04126945077', 'Calle Transversal', 'debito', '[{\"nombre\":\"Coca-Cola (350ml)\",\"precio\":\"2\",\"categoria\":\"bebidas\"},{\"nombre\":\"Papas Fritas\",\"precio\":\"2\",\"categoria\":\"comidas\"}]', 4),
(3, 'Juan', 'Guzmán', '04126945077', 'Calle Transversal', 'efectivo', '[{\"nombre\":\"Coca-Cola (350ml)\",\"precio\":\"2\",\"categoria\":\"bebidas\"}]', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `nombre` text DEFAULT NULL,
  `apellido` text NOT NULL,
  `telefono` text DEFAULT NULL,
  `correo` text NOT NULL,
  `direccion` text NOT NULL,
  `captura` text NOT NULL,
  `referencia` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `pedido` text DEFAULT NULL,
  `total` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`nombre`, `apellido`, `telefono`, `correo`, `direccion`, `captura`, `referencia`, `fecha`, `pedido`, `total`) VALUES
('Juan', 'Guzmán', '04126945077', '', 'Calle Transversal', './captures/csgo.png', 0, '2022-01-26 22:13:50', '[{\"nombre\":\"Coca-Cola (350ml)\",\"precio\":\"2\",\"categoria\":\"bebidas\"}]', '2'),
('Juan', 'Guzmán', '04126945077', '', 'Calle Transversal', './captures/csgo.png', 0, '2022-01-26 22:31:24', '[{\"nombre\":\"Coca-Cola (350ml)\",\"precio\":\"2\",\"categoria\":\"bebidas\"},{\"nombre\":\"Arepa de carne mechada\",\"precio\":\"2\",\"categoria\":\"comidas\"}]', '4'),
('Juan', 'Guzmán', '04126945077', '', 'Calle Transversal', './captures/csgo.png', 0, '2022-01-27 05:34:42', '[{\"nombre\":\"Coca-Cola (350ml)\",\"precio\":\"2\",\"categoria\":\"bebidas\"}]', '2'),
('Juan', 'Guzmán', '04126945077', '', 'Calle Transversal', './captures/csgo.png', 0, '2022-01-27 05:53:15', '[{\"nombre\":\"Coctel Semaforo\",\"precio\":\"3\",\"categoria\":\"bebidas\"},{\"nombre\":\"Coca-Cola (350ml)\",\"precio\":\"2\",\"categoria\":\"bebidas\"}]', '5'),
('Juan', 'Guzmán', '04126945077', '', 'Calle Transversal', './captures/captures.png', 0, '2022-01-27 06:02:12', '[{\"nombre\":\"Papas Fritas\",\"precio\":\"2\",\"categoria\":\"comidas\"},{\"nombre\":\"Coca-Cola (350ml)\",\"precio\":\"2\",\"categoria\":\"bebidas\"},{\"nombre\":\"Pizza Margarita\",\"precio\":\"2\",\"categoria\":\"comidas\"}]', '6'),
('Juan', 'Guzmán', '04126945077', '', 'Calle Transversal', './captures/win 11.png', 0, '2022-01-27 06:03:02', '[{\"nombre\":\"Papas Fritas\",\"precio\":\"2\",\"categoria\":\"comidas\"},{\"nombre\":\"Coca-Cola (350ml)\",\"precio\":\"2\",\"categoria\":\"bebidas\"},{\"nombre\":\"Pizza Margarita\",\"precio\":\"2\",\"categoria\":\"comidas\"}]', '6'),
('Juan', 'Guzmán', '04126945077', '', 'Calle Transversal', '-', 0, '2022-01-27 06:18:50', '[{\"nombre\":\"Papas Fritas\",\"precio\":\"2\",\"categoria\":\"comidas\"},{\"nombre\":\"Coca-Cola (350ml)\",\"precio\":\"2\",\"categoria\":\"bebidas\"},{\"nombre\":\"Pizza Margarita\",\"precio\":\"2\",\"categoria\":\"comidas\"}]', '6'),
('Juan', 'Guzmán', '04126945077', '', 'Calle Transversal', '-', 0, '2022-01-27 17:34:06', '[{\"nombre\":\"Coca-Cola (350ml)\",\"precio\":\"2\",\"categoria\":\"bebidas\"}]', '2'),
('Juan', 'Guzmán', '04126945077', '', 'Calle Transversal', '-', 0, '2022-01-27 17:48:46', '[{\"nombre\":\"Coca-Cola (350ml)\",\"precio\":\"2\",\"categoria\":\"bebidas\"},{\"nombre\":\"Papas Fritas\",\"precio\":\"2\",\"categoria\":\"comidas\"},{\"nombre\":\"Hamburguesa \",\"precio\":\"2\",\"categoria\":\"comidas\"}]', '6'),
('Juan', 'Guzmán', '04126945077', '', 'Calle Transversal', '-', 0, '2022-01-30 00:31:21', '[{\"nombre\":\"Coca-Cola (350ml)\",\"precio\":\"2\",\"categoria\":\"bebidas\"}]', '2'),
('Juan', 'Guzmán', '04126945077', '', 'Calle Transversal', '-', 0, '2022-01-30 19:09:28', '[{\"nombre\":\"Coctel Semaforo\",\"precio\":\"3\",\"categoria\":\"bebidas\"},{\"nombre\":\"Papas Fritas\",\"precio\":\"2\",\"categoria\":\"comidas\"}]', '5'),
('Juan', 'Guzmán', '04126945077', '', 'Calle Transversal', '-', 0, '2022-01-30 19:55:26', '[{\"nombre\":\"Coca-Cola (350ml)\",\"precio\":\"2\",\"categoria\":\"bebidas\"},{\"nombre\":\"Papas Fritas\",\"precio\":\"2\",\"categoria\":\"comidas\"}]', '4'),
('Juan', 'Guzmán', '04126945077', '', 'Calle Transversal', './captures/Cotton Candy.jpg', 0, '2022-01-30 19:59:53', '[{\"nombre\":\"Coca-Cola (350ml)\",\"precio\":\"2\",\"categoria\":\"bebidas\"},{\"nombre\":\"Papas Fritas\",\"precio\":\"2\",\"categoria\":\"comidas\"}]', '4'),
('Juan', 'Guzmán', '04126945077', '', 'Calle Transversal', '-', 0, '2022-01-31 21:05:57', '[{\"nombre\":\"Coca-Cola (350ml)\",\"precio\":\"2\",\"categoria\":\"bebidas\"}]', '2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `nombre` text DEFAULT NULL,
  `link` text DEFAULT NULL,
  `precio` text DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `categoria` text DEFAULT NULL,
  `disponible` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`nombre`, `link`, `precio`, `descripcion`, `categoria`, `disponible`) VALUES
('Papas Fritas', 'comida12.jpg', '2', 'Papas fritas', 'comidas', 1),
('Arepa de carne mechada', 'comida10.jpg', '2', 'Queso, aguacate, carne mechada', 'comidas', 1),
('Pizza Margarita', 'comida4.jpg', '2', 'Queso, Champinones, Jamon', 'comidas', 1),
('Pizza Doble Queso', 'comida4.jpg', '5', 'Queso extra, Jamon, Tocineta, Maiz', 'comidas', 1),
('Pastel de Chocolate (Racion)', 'postre1.jpg', '2', 'Racion de pastel de chocolate batido con chispas', 'postres', 1),
('Pastel de Chocolate con Galletas (Racion)', 'postre2.jpg', '3', 'Racion de pastel de chocolate con galletas', 'postres', 1),
('Pastel de Chocolate Marmoleado (Racion)', 'postre3.jpg', '2', 'Racion de pastel de chocolate marmoleado con vainilla', 'postres', 1),
('Coctel Semaforo', 'bebida1.jpg', '3', 'Bebida alcoholica de tres matices diferentes', 'bebidas', 1),
('Coca-Cola (350ml)', 'bebida2.jpg', '2', 'Bebida carbonatada gaseosa a base de cola negra', 'bebidas', 1),
('Carne asada', 'comida16.jpg', '5', 'Carne asada condimentada', 'comidas', 1),
('Algodón de Azúcar', 'Cotton Candy.jpg', '1', 'Una unidad', 'postres', 1),
('Hamburguesa ', 'Hamburguesa.jpg', '2', 'Carne, lechuga, tomates', 'comidas', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `facturas`
--
ALTER TABLE `facturas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
