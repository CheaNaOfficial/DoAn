-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3308
-- Generation Time: Jun 29, 2024 at 06:41 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `my_do_an`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `Id` int(11) NOT NULL,
  `RoleId` int(11) DEFAULT NULL,
  `Firstname` varchar(120) NOT NULL,
  `Lastname` varchar(120) NOT NULL,
  `Gender` tinyint(1) DEFAULT 1,
  `Dob` datetime DEFAULT NULL,
  `Tel` varchar(120) NOT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `Email` varchar(120) DEFAULT NULL,
  `Address` text DEFAULT NULL,
  `Status` tinyint(1) DEFAULT 1,
  `Image` varchar(255) DEFAULT NULL,
  `Salary` decimal(6,2) DEFAULT 0.00,
  `CreateAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`Id`, `RoleId`, `Firstname`, `Lastname`, `Gender`, `Dob`, `Tel`, `Password`, `Email`, `Address`, `Status`, `Image`, `Salary`, `CreateAt`) VALUES
(0, 23, 'Marya', 'Phorn', 0, '2015-05-15 00:00:00', '0123456789', '$2b$10$hRAkwjSaj7VaziSEEHUgLu2GL5ROVpltOJLD5zMpOAuJ7c/E9.yVG', 'phornmarya@gmail.com', 'phnom penh', NULL, NULL, NULL, '2024-06-09 04:48:29'),
(9, 3, 'khmer', 'kon', 1, '2015-05-15 00:00:00', '0976979210', '$2b$10$zowk81p8NdJ4W7MhOUbI1eSD0XfuyXhkNsD.MLsf8P.WQCZUBn2iS', 'khmer.p2015@gmail.com', 'Svay Rieng', 1, NULL, 1000.00, '2024-03-28 16:33:40'),
(12, 23, 'Na', 'Chea', 1, '1998-01-07 00:00:00', '0347089842', '$2b$10$UhpFg6PKOaiJ1SdLZ1VpF.omSS3s0SbUcB3YQ7aaqLhE7k1SpTDG.', 'na.c2024@gmail.com', NULL, 1, NULL, 1000.00, '2024-05-02 19:13:25'),
(13, 20, 'Than', 'Ponleu', 1, '1999-05-10 00:00:00', '0978288730', NULL, 'nanckh885@gmail.com', NULL, 1, NULL, 333.00, '2024-05-03 01:17:23'),
(14, 22, 'Mike', 'Horn', 1, '1998-05-14 00:00:00', '0978288730', NULL, 'hornmike@gmail.com', NULL, 1, NULL, 55.00, '2024-05-03 01:35:23'),
(15, 21, 'Pann ', 'Chheavvey', 1, '1997-05-15 00:00:00', '0978288730', NULL, 'phanchheavvey@gmail.com', NULL, 1, NULL, 44.00, '2024-05-03 01:53:57'),
(17, 23, 'Chheavvey', 'Pann', 1, '1997-05-23 00:00:00', '0977089842', NULL, 'pannchheavvey@gmail.com', NULL, 1, NULL, 600.00, '2024-05-29 00:40:17'),
(18, 19, 'Ponleu', 'Than', 1, '1999-05-12 00:00:00', '0978288730', NULL, 'tanponleu@gmail.com', NULL, 1, NULL, 550.00, '2024-05-29 00:42:20'),
(20, 3, 'khmer', 'kon', 1, '2015-05-15 00:00:00', '0976979210', NULL, 'khmer.p2015@gmail.com', 'Svay Rieng', 1, NULL, 1000.00, '2024-05-31 23:08:42'),
(21, 23, 'Marya', 'Phorn', 0, '2015-05-09 00:00:00', '0979797925', NULL, 'phornmarya@gmail.com', 'Mream | Rmeas Heak | Svay Rieng', NULL, NULL, NULL, '2024-05-31 23:17:05'),
(23, 5, 'Ponleu', 'Than', 1, '1999-01-01 00:00:00', '0842832827', '$2b$10$DoAsph.M.wRtSfr2YAUSpeN7VZae9BOR60slDzlZ4oDzdgZJlvwRC', 'na.c2024@gmail.com', 'Svay Rieng', 1, NULL, 1000.00, '2024-05-31 23:43:14'),
(24, 5, 'Ponleu', 'Than', 1, '1999-01-01 00:00:00', '0842832827', '$2b$10$DoAsph.M.wRtSfr2YAUSpeN7VZae9BOR60slDzlZ4oDzdgZJlvwRC', 'na.c2024@gmail.com', 'Svay Rieng', 1, NULL, 1000.00, '2024-06-01 00:02:05'),
(25, NULL, 'aaaa', 'aaaa', 0, '2024-06-13 00:00:00', '0979797777', NULL, 'test2@gmail.com', '23 ta quang buu', NULL, NULL, NULL, '2024-06-02 17:14:12'),
(26, NULL, 'ttt', 'ttt', 1, '2024-06-19 00:00:00', '0988898988', '123456', 'test2@gmail.com', '23 ta quang buu', NULL, NULL, NULL, '2024-06-02 17:22:32'),
(28, 23, 'lihou', 'dsfd', 1, '2024-06-04 00:00:00', '12345', '$2b$10$AbHsca3dMT45/xoLPCzyy.myD65DvMjanM1aMA6Vf64CEdtBHu6hW', 'math7659@gmail.com', '23 ta quang buu', NULL, NULL, NULL, '2024-06-04 08:44:52'),
(29, NULL, 'Chea', 'Na', 1, '2024-05-29 00:00:00', 'Na12345', '$2b$10$EKMHrXfkW1nWViCKezbaQONrw6mGKmGqgzu.FpSyKucLUCUfJv2KG', 'test2@gmail.com', '23 ta quang buu', NULL, NULL, NULL, '2024-06-04 09:08:37'),
(30, NULL, 'Na', 'Chea', 1, '1998-01-07 00:00:00', '0127089895', '$2b$10$wgTL911eI6IuGS56BmGL3OI4TUzJgCyky0kWOzW0xgRywYvcVq39G', 'na012@gmail.com', '23 ta quang buu', NULL, NULL, NULL, '2024-06-05 18:00:07');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cart_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `discountprice` decimal(7,2) DEFAULT NULL,
  `total` decimal(7,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `Id` int(11) NOT NULL,
  `Name` varchar(120) NOT NULL,
  `Description` text DEFAULT NULL,
  `Status` tinyint(1) NOT NULL,
  `CreateAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`Id`, `Name`, `Description`, `Status`, `CreateAt`) VALUES
(1, 'MacBook', 'Description MacBook', 1, '2024-03-11 11:33:02'),
(8, 'Asus Rog Strix', 'Asus Rog Strix', 0, '2024-03-18 17:55:44'),
(10, 'Dell', 'Dell', 0, '2024-03-18 17:56:16'),
(31, 'acer', 'acer', 1, '2024-03-22 16:39:08'),
(36, 'HP', 'HP', 1, '2024-03-22 16:54:07'),
(38, 'Mouse', 'Mouse', 1, '2024-05-12 15:58:53'),
(39, 'Monitors', 'Monitors', 1, '2024-05-12 16:00:00'),
(40, 'Laptop MSI', 'Laptop MSI', 1, '2024-05-12 16:00:49');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `Id` int(11) NOT NULL,
  `Firstname` varchar(120) NOT NULL,
  `Lastname` varchar(120) NOT NULL,
  `Gender` tinyint(1) DEFAULT 1,
  `Dob` datetime DEFAULT NULL,
  `Tel` varchar(120) NOT NULL,
  `Email` varchar(120) DEFAULT NULL,
  `Address` text DEFAULT NULL,
  `Status` tinyint(1) DEFAULT 1,
  `CreateAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`Id`, `Firstname`, `Lastname`, `Gender`, `Dob`, `Tel`, `Email`, `Address`, `Status`, `CreateAt`) VALUES
(2, 'Na', 'Chea', 0, '1998-01-07 00:00:00', '0347089842', 'cheana@gmail.com', 'Svay Rieng', 1, '2024-03-11 16:43:07'),
(3, 'piseth', 'touch', 1, '2012-03-20 00:00:00', '0978288730', 'math7659@gmail.com', 'Svay Rieng', 1, '2024-03-23 17:27:05');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `Id` int(11) NOT NULL,
  `RoleId` int(11) DEFAULT NULL,
  `Firstname` varchar(120) NOT NULL,
  `Lastname` varchar(120) NOT NULL,
  `Gender` tinyint(1) DEFAULT 1,
  `Dob` datetime DEFAULT NULL,
  `Tel` varchar(120) NOT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `Email` varchar(120) DEFAULT NULL,
  `Address` text DEFAULT NULL,
  `Status` tinyint(1) DEFAULT 1,
  `Image` varchar(255) DEFAULT NULL,
  `Salary` decimal(6,2) DEFAULT 0.00,
  `CreateAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`Id`, `RoleId`, `Firstname`, `Lastname`, `Gender`, `Dob`, `Tel`, `Password`, `Email`, `Address`, `Status`, `Image`, `Salary`, `CreateAt`) VALUES
(9, 3, 'khmer', 'kon', 1, '2015-05-15 00:00:00', '0976979210', '$2b$10$zowk81p8NdJ4W7MhOUbI1eSD0XfuyXhkNsD.MLsf8P.WQCZUBn2iS', 'khmer.p2015@gmail.com', 'Svay Rieng', 1, NULL, 1000.00, '2024-03-29 06:33:40'),
(12, 23, 'Na', 'Chea', 1, '1998-01-07 00:00:00', '0347089842', '$2b$10$UhpFg6PKOaiJ1SdLZ1VpF.omSS3s0SbUcB3YQ7aaqLhE7k1SpTDG.', 'na.c2024@gmail.com', NULL, 1, NULL, 1000.00, '2024-05-03 09:13:25'),
(13, 20, 'Than', 'Ponleu', 1, '1999-05-10 00:00:00', '0978288730', NULL, 'nanckh885@gmail.com', NULL, 1, NULL, 333.00, '2024-05-03 15:17:23'),
(14, 22, 'Mike', 'Horn', 1, '1998-05-14 00:00:00', '0978288730', NULL, 'hornmike@gmail.com', NULL, 1, NULL, 55.00, '2024-05-03 15:35:23'),
(15, 21, 'Pann ', 'Chheavvey', 1, '1997-05-15 00:00:00', '0978288730', NULL, 'phanchheavvey@gmail.com', NULL, 1, NULL, 44.00, '2024-05-03 15:53:57'),
(17, 23, 'Chheavvey', 'Pann', 1, '1997-05-23 00:00:00', '0977089842', NULL, 'pannchheavvey@gmail.com', NULL, 1, NULL, 600.00, '2024-05-29 14:40:17'),
(18, 19, 'Ponleu', 'Than', 1, '1999-05-12 00:00:00', '0978288730', NULL, 'tanponleu@gmail.com', NULL, 1, NULL, 550.00, '2024-05-29 14:42:20'),
(20, 3, 'khmer', 'kon', 1, '2015-05-15 00:00:00', '0976979210', NULL, 'khmer.p2015@gmail.com', 'Svay Rieng', 1, NULL, 1000.00, '2024-06-01 13:08:42'),
(21, 23, 'Marya', 'Phorn', 0, '2015-05-09 00:00:00', '0979797925', NULL, 'phornmarya@gmail.com', 'Mream | Rmeas Heak | Svay Rieng', NULL, NULL, NULL, '2024-06-01 13:17:05'),
(23, 5, 'Ponleu', 'Than', 1, '1999-01-01 00:00:00', '0842832827', '$2b$10$DoAsph.M.wRtSfr2YAUSpeN7VZae9BOR60slDzlZ4oDzdgZJlvwRC', 'na.c2024@gmail.com', 'Svay Rieng', 1, NULL, 1000.00, '2024-06-01 13:43:14'),
(24, 5, 'Ponleu', 'Than', 1, '1999-01-01 00:00:00', '0842832827', '$2b$10$DoAsph.M.wRtSfr2YAUSpeN7VZae9BOR60slDzlZ4oDzdgZJlvwRC', 'na.c2024@gmail.com', 'Svay Rieng', 1, NULL, 1000.00, '2024-06-01 14:02:05'),
(25, NULL, 'aaaa', 'aaaa', 0, '2024-06-13 00:00:00', '0979797777', NULL, 'test2@gmail.com', '23 ta quang buu', NULL, NULL, NULL, '2024-06-03 07:14:12'),
(26, NULL, 'ttt', 'ttt', 1, '2024-06-19 00:00:00', '0988898988', '123456', 'test2@gmail.com', '23 ta quang buu', NULL, NULL, NULL, '2024-06-03 07:22:32');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `paymentype` varchar(120) NOT NULL,
  `total_amount` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`id`, `user_id`, `paymentype`, `total_amount`) VALUES
(21, 28, 'Online', 7221),
(22, 28, 'Online', 980),
(23, 28, 'Online', 6444),
(24, 28, 'Online', 2222),
(25, 28, 'Online', 2000),
(26, 28, 'Online', 2000),
(27, 28, 'Online', 2000),
(28, 28, 'Online', 20538),
(29, 28, 'Online', 804),
(30, 28, 'Online', 4410),
(31, 28, 'Online', 4410),
(32, 28, 'Online', 1257);

-- --------------------------------------------------------

--
-- Table structure for table `order_product`
--

CREATE TABLE `order_product` (
  `product_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `Id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `unit_amount` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `order_product`
--

INSERT INTO `order_product` (`product_id`, `order_id`, `Id`, `quantity`, `unit_amount`) VALUES
(23, 21, 2, 1, 555),
(24, 21, 3, 1, 4444),
(31, 21, 4, 1, 2222),
(29, 22, 5, 1, 980),
(31, 23, 6, 2, 2222),
(26, 23, 7, 1, 2000),
(31, 24, 8, 1, 2222),
(26, 25, 9, 1, 2000),
(26, 26, 10, 1, 2000),
(26, 27, 11, 1, 2000),
(31, 28, 12, 3, 2222),
(32, 28, 13, 6, 2312),
(49, 29, 14, 1, 14),
(33, 29, 15, 1, 790),
(34, 30, 16, 2, 1205),
(26, 30, 17, 1, 2000),
(34, 31, 18, 2, 1205),
(26, 31, 19, 1, 2000),
(34, 32, 20, 1, 1205),
(48, 32, 21, 2, 26);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `Id` int(11) NOT NULL,
  `CategoryId` int(11) DEFAULT NULL,
  `Name` varchar(255) NOT NULL,
  `Description` text DEFAULT NULL,
  `Qty` int(6) DEFAULT 0,
  `Price` decimal(7,2) DEFAULT 0.00,
  `Discount` decimal(7,2) DEFAULT 0.00,
  `Total` decimal(7,2) NOT NULL,
  `Image` varchar(255) DEFAULT NULL,
  `Status` tinyint(1) DEFAULT 1,
  `CreateAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`Id`, `CategoryId`, `Name`, `Description`, `Qty`, `Price`, `Discount`, `Total`, `Image`, `Status`, `CreateAt`) VALUES
(23, 36, 'a', 'a', 12, 555.00, 3.00, 0.00, 'Image-1716792965947-433004710', 0, '2024-05-07 15:41:00'),
(24, 8, 'aaaaaa', 'cambodia', 2, 4444.00, 4.00, 0.00, 'Image-1716793710460-964080082', 0, '2024-05-07 16:15:21'),
(25, 1, 'MackBook 11 pro', '13 inch |16GB|512GB |', 1, 1000.00, 10.00, 0.00, 'Image-1716793685370-276235438', 0, '2024-05-14 12:14:46'),
(26, 1, 'MackBook ', '13 inch |16GB|512GB |', 1, 2000.00, 1.00, 0.00, 'Image-1716793676697-329034037', 0, '2024-05-14 12:15:39'),
(27, 1, 'Laptop MacBook Air', '13 inch |16GB|512GB |', 1, 1980.00, 20.00, 0.00, 'Image-1716793655457-872325249', 0, '2024-05-14 12:16:16'),
(28, 1, 'Laptop MacBook Air', '13 inch |16GB|512GB |', 1, 980.00, 0.10, 0.00, 'Image-1716793625491-25403895', 0, '2024-05-14 12:18:00'),
(29, 1, 'Laptop MacBook Air', '13 inch |16GB|512GB |', 1, 980.00, 0.10, 0.00, 'Image-1716793603669-288138558', 0, '2024-05-23 17:18:28'),
(30, 1, 'MackBook', '13 inch |16GB|512GB |', 1, 2000.00, 10.00, 0.00, 'Image-1716793572250-121779252', 0, '2024-05-23 17:19:31'),
(31, 1, 'aaaaaa', 'cambodia', 2, 2222.00, 1.00, 0.00, 'Image-1716794660489-830708908', NULL, '2024-05-27 07:24:20'),
(32, 1, 'MackBook 11 pro', '21.5 inch | Full HD | VA | 60Hz ', 2, 2312.00, 30.00, 0.00, 'Image-1717619052999-539714413', NULL, '2024-06-05 20:24:13'),
(33, 40, 'Laptop MSI GF63', 'i7-1265OH | RTX 3050 | 8GB | 512GB', 1, 790.00, 4.00, 0.00, 'Image-1717743548642-144714554', 0, '2024-06-07 05:45:37'),
(34, 40, 'MSI Gaming GF63', 'i7-1265OH | RTX 3050 | 16GB | 512GB', 1, 1205.00, 10.00, 0.00, 'Image-1717741338225-688622310', 0, '2024-06-07 06:06:38'),
(35, 40, 'MSI Gaming 12VE', 'i5-1245OH | RTX 4050', 1, 110.00, 5.00, 0.00, 'Image-1717741322002-111693182', 0, '2024-06-07 06:09:10'),
(36, 39, 'Msi GF65 Thin 9SD', 'i5 9th | GTX 1660Ti | 15.6 inch', 5, 509.00, 0.23, 0.00, 'Image-1717741255585-196017535', 0, '2024-06-07 06:12:45'),
(37, 40, 'Msi GF63 Thin 11SC', 'i7 11th | GTX 1650  |15.6 inch', 6, 730.00, 12.00, 0.00, 'Image-1717740990349-499548004', NULL, '2024-06-07 06:16:30'),
(38, 40, 'Msi GF63 Thin 11SC', 'i9 11th | GTX 1650 |15.6 inch', 6, 750.00, 10.20, 0.00, 'Image-1717743653124-792303541', NULL, '2024-06-07 07:00:53'),
(39, 40, 'Msi GF63 Thin 11SC', 'i3 11th | GTX 1650 |15.6 inch', 7, 640.00, 0.00, 0.00, 'Image-1717743707816-428901018', NULL, '2024-06-07 07:01:47'),
(40, 40, 'Msi GF66 Thin 11SC', 'i7 11th | GTX 1750 |15.6 inch', 7, 760.00, 3.00, 0.00, 'Image-1717743771821-306554903', NULL, '2024-06-07 07:02:51'),
(41, 40, 'Msi Gamming GF63 ', 'i5 11th | GTX 1650 |15.6 inch', 4, 820.00, 5.00, 0.00, 'Image-1717743835099-98824052', NULL, '2024-06-07 07:03:55'),
(42, 38, 'Chuột Có Dây DAREU', 'PAW3512 | 800-1200-1600DPI ', 5, 50.00, 5.00, 0.00, 'Image-1717744944387-95308483', 0, '2024-06-07 07:13:51'),
(43, 38, 'Chuột gaming Rapoo', 'Chuột gaming có dây Rapoo V28S', 5, 24.50, 0.00, 0.00, 'Image-1717744915706-58807630', 0, '2024-06-07 07:16:34'),
(44, 38, 'Chuột Không Dây ', 'Wireless Fuhlen B07S Silent Mix |Black', 5, 12.30, 0.23, 0.00, 'Image-1717744899093-586556237', 0, '2024-06-07 07:17:55'),
(45, 38, 'Chuột  Bluetooth', 'Wireless Fuhlen B09S Silent White', 6, 27.80, 0.00, 0.00, 'Image-1717744871902-744865605', 0, '2024-06-07 07:18:54'),
(46, 38, 'Chuột Bluetooth	', 'Wireless Fuhlen B09S Silent White', 4, 40.00, 0.23, 0.00, 'Image-1717745284722-759341220', NULL, '2024-06-07 07:28:04'),
(47, 38, 'Chuột Không Dây', 'Wireless Fuhlen B07S Silent Mix |Black', 5, 40.00, 0.23, 0.00, 'Image-1717745340015-847509743', NULL, '2024-06-07 07:29:00'),
(48, 38, 'Chuột gaming Rapoo', 'Chuột gaming có dây Rapoo V28S', 6, 26.00, 0.00, 0.00, 'Image-1717745382269-421542697', NULL, '2024-06-07 07:29:42'),
(49, 38, 'Chuột Có Dây DAREU', 'PAW3512 | 800-1200-1600DPI', 5, 14.00, 0.23, 0.00, 'Image-1717745419035-185919238', NULL, '2024-06-07 07:30:19');

-- --------------------------------------------------------

--
-- Table structure for table `product_image`
--

CREATE TABLE `product_image` (
  `Id` int(11) NOT NULL,
  `ProductId` int(11) DEFAULT NULL,
  `Image` varchar(255) NOT NULL,
  `Status` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `Id` int(11) NOT NULL,
  `Name` varchar(120) NOT NULL,
  `Code` varchar(120) NOT NULL,
  `Status` tinyint(1) NOT NULL,
  `CreateAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`Id`, `Name`, `Code`, `Status`, `CreateAt`) VALUES
(19, 'Account', 'ACCOUNT', 0, '2024-01-24 08:16:54'),
(22, 'Seller', 'SELLER', 1, '2024-01-24 08:26:16'),
(23, 'IT', 'IT', 0, '2024-01-24 08:26:50'),
(27, 'Electricity', '00012', 1, '2024-05-29 14:44:04');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `Id` int(11) NOT NULL,
  `RoleId` int(11) DEFAULT NULL,
  `Firstname` varchar(120) NOT NULL,
  `Lastname` varchar(120) NOT NULL,
  `Gender` tinyint(1) DEFAULT 1,
  `Dob` datetime DEFAULT NULL,
  `Tel` varchar(120) NOT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `Email` varchar(120) DEFAULT NULL,
  `Address` text DEFAULT NULL,
  `Status` tinyint(1) DEFAULT 1,
  `Image` varchar(255) DEFAULT NULL,
  `Salary` decimal(6,2) DEFAULT 0.00,
  `CreateAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`Id`, `RoleId`, `Firstname`, `Lastname`, `Gender`, `Dob`, `Tel`, `Password`, `Email`, `Address`, `Status`, `Image`, `Salary`, `CreateAt`) VALUES
(9, 3, 'khmer', 'kon', 1, '2015-05-15 00:00:00', '0976979210', '$2b$10$zowk81p8NdJ4W7MhOUbI1eSD0XfuyXhkNsD.MLsf8P.WQCZUBn2iS', 'khmer.p2015@gmail.com', 'Svay Rieng', 1, NULL, 1000.00, '2024-03-28 23:33:40'),
(12, 23, 'Na', 'Chea', 1, '1998-01-07 00:00:00', '0347089842', '$2b$10$UhpFg6PKOaiJ1SdLZ1VpF.omSS3s0SbUcB3YQ7aaqLhE7k1SpTDG.', 'na.c2024@gmail.com', NULL, 1, NULL, 1000.00, '2024-05-03 02:13:25'),
(13, 20, 'Than', 'Ponleu', 1, '1999-05-10 00:00:00', '0978288730', NULL, 'nanckh885@gmail.com', NULL, 1, NULL, 333.00, '2024-05-03 08:17:23'),
(14, 22, 'Mike', 'Horn', 1, '1998-05-14 00:00:00', '0978288730', NULL, 'hornmike@gmail.com', NULL, 1, NULL, 55.00, '2024-05-03 08:35:23'),
(15, 21, 'Pann ', 'Chheavvey', 1, '1997-05-15 00:00:00', '0978288730', NULL, 'phanchheavvey@gmail.com', NULL, 1, NULL, 44.00, '2024-05-03 08:53:57'),
(17, 23, 'Chheavvey', 'Pann', 1, '1997-05-23 00:00:00', '0977089842', NULL, 'pannchheavvey@gmail.com', NULL, 1, NULL, 600.00, '2024-05-29 07:40:17'),
(18, 19, 'Ponleu', 'Than', 1, '1999-05-12 00:00:00', '0978288730', NULL, 'tanponleu@gmail.com', NULL, 1, NULL, 550.00, '2024-05-29 07:42:20'),
(20, 3, 'khmer', 'kon', 1, '2015-05-15 00:00:00', '0976979210', NULL, 'khmer.p2015@gmail.com', 'Svay Rieng', 1, NULL, 1000.00, '2024-06-01 06:08:42'),
(21, 23, 'Marya', 'Phorn', 0, '2015-05-09 00:00:00', '0979797925', NULL, 'phornmarya@gmail.com', 'Mream | Rmeas Heak | Svay Rieng', NULL, NULL, NULL, '2024-06-01 06:17:05'),
(23, 5, 'Ponleu', 'Than', 1, '1999-01-01 00:00:00', '0842832827', '$2b$10$DoAsph.M.wRtSfr2YAUSpeN7VZae9BOR60slDzlZ4oDzdgZJlvwRC', 'na.c2024@gmail.com', 'Svay Rieng', 1, NULL, 1000.00, '2024-06-01 06:43:14'),
(24, 5, 'Ponleu', 'Than', 1, '1999-01-01 00:00:00', '0842832827', '$2b$10$DoAsph.M.wRtSfr2YAUSpeN7VZae9BOR60slDzlZ4oDzdgZJlvwRC', 'na.c2024@gmail.com', 'Svay Rieng', 1, NULL, 1000.00, '2024-06-01 07:02:05'),
(25, NULL, 'aaaa', 'aaaa', 0, '2024-06-13 00:00:00', '0979797777', NULL, 'test2@gmail.com', '23 ta quang buu', NULL, NULL, NULL, '2024-06-03 00:14:12'),
(26, NULL, 'ttt', 'ttt', 1, '2024-06-19 00:00:00', '0988898988', '123456', 'test2@gmail.com', '23 ta quang buu', NULL, NULL, NULL, '2024-06-03 00:22:32'),
(28, 23, 'lihou', 'dsfd', 1, '2024-06-04 00:00:00', '12345', '$2b$10$AbHsca3dMT45/xoLPCzyy.myD65DvMjanM1aMA6Vf64CEdtBHu6hW', 'math7659@gmail.com', '23 ta quang buu', NULL, NULL, NULL, '2024-06-04 15:44:52'),
(29, NULL, 'Chea', 'Na', 1, '2024-05-29 00:00:00', 'Na12345', '$2b$10$EKMHrXfkW1nWViCKezbaQONrw6mGKmGqgzu.FpSyKucLUCUfJv2KG', 'test2@gmail.com', '23 ta quang buu', NULL, NULL, NULL, '2024-06-04 16:08:37'),
(30, NULL, 'Na', 'Chea', 1, '1998-01-07 00:00:00', '0127089895', '$2b$10$wgTL911eI6IuGS56BmGL3OI4TUzJgCyky0kWOzW0xgRywYvcVq39G', 'na012@gmail.com', '23 ta quang buu', NULL, NULL, NULL, '2024-06-06 01:00:07'),
(31, 23, 'kkk', 'dhjlkjkf', 1, '2024-06-19 00:00:00', '123456789', '$2b$10$Nrkhq4SMc7Aq4m25lKzZPeTrWA6XWUSg4D6ZqQK/B26KXPQN8L7li', 'teact11@gmail.com', 'fkpopvpg ', NULL, NULL, NULL, '2024-06-07 13:43:17'),
(32, 23, 'fjljfl;k', 'koelr', 0, '2024-06-19 00:00:00', '123', '$2b$10$2rdgX.XjWUn2CukZycc3pur6sO.DSSxzOa9uE0YvcYSZaQEhlpdny', 'tjasj@gmail.com', '23 ta quang buu', NULL, NULL, NULL, '2024-06-07 13:47:23'),
(33, 23, 'Marya', 'Phorn', 0, '2015-05-15 00:00:00', '097123456', '$2b$10$dvDeZHjKYW9Dkh4nRH7j/eSyi07IUVRSwWZvzlqztpIYU8v.fEYI6', 'phornmarya@gmail.com', 'phnom penh', NULL, NULL, NULL, '2024-06-09 04:44:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_product`
--
ALTER TABLE `order_product`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `CategoryId` (`CategoryId`),
  ADD KEY `CategoryId_2` (`CategoryId`);

--
-- Indexes for table `product_image`
--
ALTER TABLE `product_image`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `ProductId` (`ProductId`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=303;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `order_product`
--
ALTER TABLE `order_product`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `product_image`
--
ALTER TABLE `product_image`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`Id`),
  ADD CONSTRAINT `cart_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `user` (`Id`);

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`Id`);

--
-- Constraints for table `order_product`
--
ALTER TABLE `order_product`
  ADD CONSTRAINT `order_product_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `order_product_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`CategoryId`) REFERENCES `category` (`Id`);

--
-- Constraints for table `product_image`
--
ALTER TABLE `product_image`
  ADD CONSTRAINT `product_image_ibfk_1` FOREIGN KEY (`ProductId`) REFERENCES `product` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
