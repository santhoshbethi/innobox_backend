-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 26, 2021 at 06:25 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api`
--

-- --------------------------------------------------------

--
-- Table structure for table `inb_rctwrks`
--

CREATE TABLE `inb_rctwrks` (
  `ID` int(11) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `homename` varchar(255) DEFAULT NULL COMMENT ' Name for homepage',
  `title` varchar(255) DEFAULT NULL COMMENT ' Name',
  `qtxt` varchar(255) DEFAULT NULL COMMENT 'Quick text',
  `shdcr` varchar(500) DEFAULT NULL COMMENT 'Short description',
  `fdcr` text DEFAULT NULL COMMENT 'Full description',
  `image1` varchar(255) DEFAULT NULL,
  `whatwegot1` varchar(255) DEFAULT NULL,
  `whatwegot2` varchar(255) DEFAULT NULL,
  `whatwegot3` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `inb_rctwrks`
--

INSERT INTO `inb_rctwrks` (`ID`, `cat_id`, `homename`, `title`, `qtxt`, `shdcr`, `fdcr`, `image1`, `whatwegot1`, `whatwegot2`, `whatwegot3`) VALUES
(1, 1, 'Mobile Apps', 'Mobile Apps', 'Innobox Inc. has developed a Medical/Healthcare Mobile application that is further connected with the individual doctors and patients applications.', 'The app also enables doctors to provide remote consultations to patients through seamless report sharing and individual communication features.', 'Innobox Inc. has developed a Medical/Healthcare Mobile application that is further connected with the individual doctors and patients applications. The QuiqRx platform enables quick and easy access to, and maintenance of, patient’s electronic health records.\r\n\r\nThe app also enables doctors to provide remote consultations to patients through seamless report sharing and individual communication features. The platform also enables the clinic staff to create and manage appointments; as well as send appointment reminders to respective patients, thus contributing to the overall efficiency of the clinic operations.', 'recentworks/1100-1-mobile.jpg', NULL, NULL, NULL),
(2, 1, '5G Home Gateway', '5G home routers\r\n', 'Corona is one of the world\'s first commercially available 5G home broadband service.', 'The innovative Inseego R1000 Router with 4×4 MIMO empowers next generation wireless broadband inside the home.', '5G is a revolutionary technology that is set to transform industries and create exciting use cases—making what was technologically impossible in the past, possible. Corona is one of the world\'s first commercially available 5G home broadband service. The innovative Inseego R1000 Router with 4×4 MIMO empowers next generation wireless broadband inside the home.', 'recentworks/5g3.jpg', 'Built-in high-performance Wi-Fi features 4×4 MIMO technology for greater throughput and supports mesh nodes to expand coverage.', 'Built-in high-performance Wi-Fi features 4×4 MIMO technology for greater throughput and supports mesh nodes to expand coverage.', 'Built-in high-performance Wi-Fi features 4×4 MIMO technology for greater throughput and supports mesh nodes to expand coverage.'),
(3, 1, 'Robotic Process Automation\r\n                                    ', 'LabView to Python Conversion', 'Migration of legacy Labview dependent validation process to python based automation process.', 'Objective mainly covers validating Intel PSM4 modules where its communication was handled using Aardvard I2C for recording values from its memory addresses.', 'Migration of legacy Labview dependent validation process to python based automation process. Objective mainly covers validating Intel PSM4 modules where its communication was handled using Aardvard I2C for recording values from its memory addresses.\r\n\r\nCommunication with National instruments such as Agilent Thermostream, Agilent N6701A Power Supply, Santec TSL, Keysight oscilloscope, Anritsu, JDSU MAP, Signal Generator and RF/Optical Switches Control for setting different configurations based on the DUT(Device under test).', 'recentworks/lab3.jpg', NULL, NULL, NULL),
(4, 1, 'Video Traffic Analytics with Computer Vision', 'Greyn Traffic Analytics Software', 'As global leaders in Intelligent Traffic Analytics, we’ve always believed that evolutionary and promising technology delivers productivity above human level.', 'Greyn offers Intelligent Traffic Analytics using AI-powered Video Processing Models that surpass human intelligence and pave way to next-generation Traffic Surveys!', 'As global leaders in Intelligent Traffic Analytics, we’ve always believed that evolutionary and promising technology delivers productivity above human level. Greyn offers Intelligent Traffic Analytics using AI-powered Video Processing Models that surpass human intelligence and pave way to next-generation Traffic Surveys!', 'recentworks/greyn4.jpg', 'Developed a deep neural network-based platform that’s built on adaptive algorithms and has the ability to self-learn from a set of inputs, adapt and display context-based recollection.', 'Developed a deep neural network-based platform that’s built on adaptive algorithms and has the ability to self-learn from a set of inputs, adapt and display context-based recollection.', 'Developed a deep neural network-based platform that’s built on adaptive algorithms and has the ability to self-learn from a set of inputs, adapt and display context-based recollection.'),
(5, 1, 'Secure and Intelligent Home Router                            ', 'GRYPHON™ WiFi Router', 'All security is built into the router so there is nothing to install on each device.', 'GRYPHON™ is a secure WiFi router using AI based learning to make the Internet a safer place for our kids and all our connected devices.', 'GRYPHON™ is a secure WiFi router using AI based learning to make the Internet a safer place for our kids and all our connected devices. All security is built into the router so there is nothing to install on each device. GRYPHON™ comes with an app for real time management of all your connected devices and allows you to collaborate with other parents on website approval ratings.', 'recentworks/gryphon3.jpg', 'GRYPHON™ is the most powerful, all-in-one Hi-Speed Wi-Fi system developed to protect the connected home.', 'GRYPHON™ enables Parental Control and Safe URL Listing with real-time request and approval from anywhere features.', 'GRYPHON™ comes with Active Malware Filtering functionality along with MESH networking and Intrusion Detection features.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `inb_rctwrks`
--
ALTER TABLE `inb_rctwrks`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `inb_rctwrks`
--
ALTER TABLE `inb_rctwrks`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
