-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 12 nov. 2021 à 00:30
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 7.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `symbnb`
--

-- --------------------------------------------------------

--
-- Structure de la table `ad`
--

CREATE TABLE `ad` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double NOT NULL,
  `introduction` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `rooms` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `create_at` datetime NOT NULL,
  `update_at` datetime DEFAULT NULL,
  `author_id` int(11) NOT NULL,
  `avg_rate` double DEFAULT NULL,
  `gov` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parking` tinyint(1) DEFAULT NULL,
  `pool` tinyint(1) DEFAULT NULL,
  `central_heating` tinyint(1) DEFAULT NULL,
  `central_cooling` tinyint(1) DEFAULT NULL,
  `elevator` tinyint(1) DEFAULT NULL,
  `spa` tinyint(1) DEFAULT NULL,
  `stunning_vieaw` tinyint(1) DEFAULT NULL,
  `dish_washer` tinyint(1) DEFAULT NULL,
  `surveillance_camera` tinyint(1) DEFAULT NULL,
  `pet_frindly` tinyint(1) DEFAULT NULL,
  `sweet_room` tinyint(1) DEFAULT NULL,
  `full_adress` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `ad`
--

INSERT INTO `ad` (`id`, `title`, `slug`, `price`, `introduction`, `description`, `rooms`, `create_at`, `update_at`, `author_id`, `avg_rate`, `gov`, `type`, `parking`, `pool`, `central_heating`, `central_cooling`, `elevator`, `spa`, `stunning_vieaw`, `dish_washer`, `surveillance_camera`, `pet_frindly`, `sweet_room`, `full_adress`) VALUES
(323, 'Perferendis sint libero laudantium', 'Perferendis-sint-libero-laudantium', 2058, 'Repellendus iste ea sit inventore. Nihil voluptatem voluptates rerum repudiandae. Omnis dolorem velit dolore quam et modi.', 'mpedit modi sit non rerum nostrum eum vitae. Quia minima ut optio qui molestiae ipsa voluptate. Velit et accusantium dolor iure aut sed vero. Voluptatem quaerat rem suscipit iusto quibusdam rerum dolore.</p><p>Delectus quo voluptatibus impedit qui reprehenderit', 'S+3', '2021-02-18 17:58:56', NULL, 6, 3, 'Tunis', 'Villa', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(324, 'Ducimus ea iusto aut veniam', 'Ducimus-ea-iusto-aut-veniam', 551, 'Eum aspernatur quis quaerat ab. Qui quam est unde. Molestiae voluptas harum assumenda quibusdam.', 'perferendis.. Consequuntur eligendi voluptates beatae id voluptatibus voluptatum et. Facilis quaerat sit in nam sapiente non quo. Quidem consectetur ipsa voluptatem est ipsum perferendis et', 'S+3', '2021-02-18 17:58:56', NULL, 6, 5, 'Sousse', 'Villa_Floor', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(325, 'Asperiores repudiandae veritatis quo', 'Asperiores-repudiandae-veritatis-quo', 388, 'Quam natus unde rerum aut facere. Voluptas ut earum similique assumenda itaque. Provident aliquam ex quidem ex sint sunt molestiae.', 'poribus in qui quaerat corrupti sint mollitia magnam. Quae vero iste ipsa aut mollitia sunt impedit facilis. Ipsam quia aut est nostrum et quisquam. Eveniet numquam unde consequuntur iste eaque est molestiae.', 'S+3', '2021-02-18 17:58:56', NULL, 6, 4, 'Gabes', 'Apartment', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(326, 'Ea esse repellendus aut doloremque', 'Ea-esse-repellendus-aut-doloremque', 1496, 'Sed quam voluptatem enim illo atque sit iste. Labore quia enim eveniet quo omnis harum ipsam. Quae voluptatibus aliquid ea libero dignissimos atque est.', 'Molestias et sint sint. Reprehenderit fuga recusandae impedit sit nesciunt. Assumenda eaque odit aperiam numquam qui fuga nulla Nostrum quod voluptate maxime odit aspernatur voluptatibus.', 'S+3', '2021-02-18 17:58:56', NULL, 6, NULL, 'Sousse', 'Apartment', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(327, 'Cupiditate aperiam impedit rerum cum', 'Cupiditate-aperiam-impedit-rerum-cum', 1121, 'Nostrum ea sint non laboriosam omnis. Quasi autem ut quia sunt rem eum. Velit deleniti eaque et exercitationem eveniet sint autem provident.', '<p>Enim nihil modi aut tempora harum a. Aut est eveniet alias impedit. Reprehenderit laudantium ipsam deserunt sunt velit ducimus. Aut quos qui dolorem sed odio laudantium eum.</p><p>Aut molestiae temporibus facere sit.', 'S+3', '2021-02-18 17:58:56', NULL, 6, NULL, 'Bizerte', 'Villa', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(328, 'Consequatur quidem cupiditate sed aspernatur', 'Consequatur-quidem-cupiditate-sed-aspernatur', 2090, 'Aut et est in. Quod nesciunt occaecati perspiciatis pariatur nisi totam.', 'Repellendus commodi officia tempore earum aut cupiditate sed. Nostrum aliquid amet perferendis facilis ducimus. Ut illum enim voluptatem voluptate iste voluptas sint.</p>', 'S+3', '2021-02-18 17:58:56', NULL, 7, NULL, 'Nabeul', 'Guest_house', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(329, 'Magnam earum est maxime quo', 'Magnam-earum-est-maxime-quo', 2400, 'Quidem sint molestiae beatae eveniet. Ut dicta a consectetur commodi.', 'Excepturi accusantium eos magni. Voluptas soluta modi harum placeat eius architecto. Quia ducimus voluptatibus molestiae aut.</p><p>Rerum asperiores voluptatem ducimus corrupti omnis occaecati consequatur.', 'S+3', '2021-02-18 17:58:56', NULL, 7, NULL, 'Bizerte', 'Motel', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(330, 'Debitis dolorem et ad vel ullam', 'Debitis-dolorem-et-ad-vel-ullam', 1696, 'Voluptates qui harum voluptates molestiae repellat velit nihil. Rerum quia excepturi nostrum quod qui. Omnis voluptate assumenda distinctio accusantium impedit vel aut temporibus.', 'Soluta amet aspernatur doloribus. Omnis non dicta sed omnis soluta. Harum sed voluptate reiciendis. Soluta amet aspernatur doloribus. Omnis non dicta sed omnis soluta. Harum sed voluptate reiciendis.Soluta', 'S+3', '2021-02-18 17:58:56', NULL, 7, NULL, 'Nabeul', 'Guest_house', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(331, 'Nobis recusandae voluptas', 'Nobis-recusandae-voluptas', 1835, 'Suscipit vero natus velit amet saepe. Vel molestiae ad et et consequatur.', '<p>Consectetur earum similique maiores tempore id. Qui velit et eos sint corporis. Distinctio aut ipsum non magnam et.hhdsg etndjt', 'S+3', '2021-02-18 17:58:56', NULL, 7, NULL, 'Gafsa', 'Guest_house', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(332, 'Est ad eum sint eaque', 'Est-ad-eum-sint-eaque', 1003, 'Nihil mollitia amet qui perferendis aut. Aspernatur doloremque cupiditate voluptate saepe. Omnis provident magnam et.', 'Recusandae reiciendis ea quia facere voluptatum possimus ab. Voluptatem ut qui sed tempore in omnis ea temporibus. Facilis adipisci odio nobis eius.</p><p>Perferendis', 'S+3', '2021-02-18 17:58:56', NULL, 7, NULL, 'Gafsa', 'Villa_Floor', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(333, 'Numquam sit vero', 'Numquam-sit-vero', 855, 'Consequatur ex saepe inventore aperiam aut dolores. Quisquam qui et voluptas illo dolores. Maxime nulla quam cupiditate porro.', 'Eos doloribus qui est adipisci consectetur. Tempore est et non repellendus eius mollitia sequi. Reiciendis quo laborum Ipsa non voluptatem rerum dolore eius animi. Voluptates vero aperiam dolor quasi debitis. Sit minus fuga voluptatum autem', 'S+3', '2021-02-18 17:58:56', NULL, 8, NULL, 'Nabeul', 'Apartment', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(334, 'Veniam aut sint omnis', 'Veniam-aut-sint-omnis', 92, 'Sint quibusdam non voluptatem optio eos consequatur ullam alias. Non sint recusandae quo quibusdam vel deserunt. Dolores porro odio qui et consequatur.', 'Ducimus a non aut aut hic nulla eos. Unde rerum ipsum culpa. Soluta omnis corrupti et animi ea atque harum qui.</p><p>Ut necessitatibus delectus laboriosam ut cupiditate sit voluptatibus. Perferendis eveniet possimus aut quaerat. Eum earum id et aut', 'S+3', '2021-02-18 17:58:56', NULL, 8, NULL, 'Gafsa', 'Guest_house', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(335, 'Deleniti voluptas pariatur rem ab', 'Deleniti-voluptas-pariatur-rem-ab', 1681, 'Incidunt totam doloremque maiores est praesentium. Et qui alias cum earum laudantium.', '<p>Ipsa harum ducimus aliquam aut et. Molestiae amet possimus ex natus sint in ut. Voluptates at totam dolorem et nesciunt et quo. Hic veniam voluptas atque voluptas. sit non cupiditate aut non. Hic dolores omnis dolorem nam quodEt aperiam et excepturi sit necessitatibus. Sequi molestiae quas corporis voluptatem eos. Ut non sed est cumque. Quibusdam sunt animi dolores voluptatem velit et consequatur', 'S+3', '2021-02-18 17:58:56', NULL, 8, NULL, 'Tozeur', 'Guest_house', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(336, 'Enim error aliquid', 'Enim-error-aliquid', 2262, 'Et non laboriosam eos illum aut quos. Consequatur sit quasi consequatur fugit architecto repellendus aut. Sapiente rerum laborum fugiat inventore.', 'Recusandae rerum est ut inventore quis eveniet inventore. Et ut dignissimos voluptatem at amet consequatur expedita. Et vitae cupiditate vitae perspiciatis asperiores quasi maxime. Cum est sit neque rerum fuga qui dolorem.Quod qui cum incidunt accusantium voluptatum. Qui quod eos error rem est incidunt corporis. Voluptatibus et et animi qui porro.Sequi velit minima ex aut provident. Veniam blanditiis exercitationem atque dolore quidem sunt omnis non.', 'S+3', '2021-02-18 17:58:56', NULL, 8, NULL, 'Tozeur', 'Villa', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(337, 'Tempora omnis officia est', 'Tempora-omnis-officia-est', 2230, 'Consectetur aperiam architecto dolorem. Quae et et ea omnis aut. Nulla commodi sit omnis animi.', 'Cum nihil eveniet porro voluptatum perferendis. Vero aut facere qui neque neque. Sunt quisquam ullam quasi veritatis suscipit maxime dolor estOdit voluptate laborum laboriosam nisi minima. Corrupti voluptas quibusdam et dolorum expedita. Et non sunt sapiente deleniti quam aliquam. Est dolores voluptas rem omnis. Sint praesentium id consequatur sequi. Mollitia ipsam doloribus temporibus explicabo qui', 'S+3', '2021-02-18 17:58:56', NULL, 8, NULL, 'Bizerte', 'Apartment', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(338, 'Harum saepe animi', 'Harum-saepe-animi', 554, 'Voluptatem nam modi perspiciatis. Vero ut excepturi alias.', 'Ullam consequatur et laboriosam et. Ut possimus ad magnam modi incidunt dolores. Veritatis et molestiae omnis. Nemo perferendis optio minus quaerat.Hic fugit labore iure deserunt molestiae voluptatum reprehenderit. Modi deserunt sit et culpa ut. Aut possimus optio odio sedCorrupti amet quasi quia consequuntur. Saepe architecto maxime excepturi facilis dolorem est expedita.', 'S+3', '2021-02-18 17:58:56', NULL, 9, NULL, 'Nabeul', 'Guest_house', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(339, 'Sit commodi velit omnis', 'Sit-commodi-velit-omnis', 250, 'Consequatur aut natus aut dicta porro optio sequi. Iste deserunt modi nisi maiores eligendi dolore ex.', 'Dolores beatae architecto aut est hic voluptatibus. Possimus sint quos at omnis. Eum delectus aut vero et aut. In sit amet saepe aliquid. Assumenda fuga qui voluptas ut.officia voluptates. Dignissimos et reprehenderit animi aliquam eos. fuga qui voluptas ut.officia voluptates. Dignissimos et reprehenderit animi aliquam eos.', 'S+3', '2021-02-18 17:58:56', NULL, 9, NULL, 'Nabeul', 'Guest_house', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(340, 'Culpa quae qui', 'Culpa-quae-qui', 890, 'Hic eum dignissimos iusto pariatur. Sit est aliquam corporis et modi placeat. Dolorum est consequatur veritatis eos adipisci nam id quae.', 'Quod ut nesciunt quisquam. Assumenda et soluta veritatis laborum quas repudiandae earum doloremque. Laboriosam et atque exercitationem. Dolorum dicta dolore libero non illo culpa magniCum corporis maxime odit facilis earum. Est accusamus ut ea atque. Veritatis vel perspiciatis ab sint \r\no non illo culpa magniCum corporis maxime odit facilis earum. Est accusamus', 'S+3', '2021-02-18 17:58:56', NULL, 9, NULL, 'Mahdia', 'Villa_Floor', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(341, 'Maxime nam est cupiditate', 'Maxime-nam-est-cupiditate', 929, 'Quos deserunt quidem repudiandae saepe delectus et odio. Ab non at exercitationem.', 'Rerum dolorem autem omnis quibusdam consequatur. Exercitationem non aut iure amet sunt esse. Voluptate quasi voluptas asperiores Sed atque illum culpa debitis repellendus blanditiis fugiat. Qui inventore rerum sequi quos doloremque sapiente. Vel libero velit architecto. Ipsa qui facere recusandae impedit aIllum hic doloremque atque et. Omnis facilis quo voluptas ut qui repellendus. Vero consequatur molestias nihil et. Quos eaque cum nihil placeat voluptas.', 'S+3', '2021-02-18 17:58:56', NULL, 9, NULL, 'El Kef', 'Apartment', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(343, 'Aut et ipsum odit qui minima', 'Aut-et-ipsum-odit-qui-minima', 295, 'Consectetur impedit qui et hic quis sit. Asperiores pariatur in et molestiae. Quasi id quo recusandae quos omnis neque.', '<p>Velit temporibus dolore ab repudiandae similique. Optio sint esse ea quibusdam enim quisquam.</p><p>Libero cum dolor praesentium qui. Dolores blanditiis soluta laborum ad. Dolore nulla quisquam sequi nemo culpa ea at. Sint eum officiis culpa repellat quas.</p><p>Voluptates quam incidunt quis vitae consequatur libero. Voluptatem nemo doloribus qui odit tempore sed eos. Molestiae libero error quidem iusto.</p><p>Voluptas praesentium sunt veritatis. Dolores asperiores in sed et rerum. Qui dolorum et nobis ut.</p><p>Hic odio dolore consectetur. Quia omnis vel ducimus est unde. Et magni porro esse amet aliquam. Ut aut saepe distinctio sed soluta ut.</p>', 'S+3', '2021-02-18 17:58:56', NULL, 10, NULL, 'Sousse', 'Apartment', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(344, 'Ullam quos itaque vero', 'Ullam-quos-itaque-vero', 105, 'Veniam velit aperiam eum. Cum facere quia porro omnis quo aut qui voluptas. Veniam repellendus temporibus doloremque cumque architecto veritatis eum.', '<p>Minima veniam nesciunt voluptatem eos dolor aut. Sunt ea dolore quis rerum. Deleniti voluptas quae sequi voluptatem.</p><p>Facilis non et perferendis molestias assumenda necessitatibus ullam. Itaque dolor officia ut voluptatem eius dolore. Nulla praesentium cumque delectus consequuntur officia enim odit. Accusamus sed ut quae ducimus sint ducimus.</p><p>Necessitatibus aut qui incidunt ea. Quia id et voluptatem nulla neque. Voluptas possimus quia molestiae illo impedit sit consequatur.</p><p>Iste sint quibusdam quasi sint aut qui. Quibusdam reiciendis assumenda quo quia numquam impedit. Quisquam quasi fuga reprehenderit eos ut.</p><p>Qui odio aut quia porro vel. Ex quidem eveniet alias ratione earum sed ea. Excepturi aliquid ducimus nihil et incidunt. Natus odio repellat temporibus voluptates. Quae delectus tempora et rerum iusto.</p>', 'S+3', '2021-02-18 17:58:56', NULL, 10, NULL, 'El Kef', 'Villa_Floor', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(345, 'Autem amet modi sint fuga non', 'Autem-amet-modi-sint-fuga-non', 84, 'Sequi amet nulla optio a tempore. Incidunt molestiae iusto quis in.', '<p>Nihil quo aut et. Sed id et cumque est laudantium ullam aliquid. Ab ad dolorem perferendis dolores ea voluptatem quo.</p><p>Quidem est consectetur ipsam perferendis. Et iure quibusdam assumenda sint voluptatem quis porro. Optio distinctio excepturi optio saepe. Iure voluptate nobis ut ut eum vitae velit.</p><p>Et recusandae iste aut in nihil voluptatem error omnis. Sit reiciendis a aliquid architecto harum reprehenderit. Culpa nam nisi officiis nulla.</p><p>Itaque asperiores soluta vitae error. Illo consectetur est nemo iste debitis. Magni placeat est expedita id amet quam.</p><p>Sit eius voluptatibus magnam est. Beatae officiis fugiat quis officiis.</p>', 'S+3', '2021-02-18 17:58:56', NULL, 10, NULL, 'Bizerte', 'Villa', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(346, 'Odit sequi illum enim blanditiis', 'Odit-sequi-illum-enim-blanditiis', 2594, 'Aut et fugiat nostrum. Exercitationem incidunt architecto laudantium voluptatum qui voluptatem. Delectus delectus reprehenderit aut dolores soluta alias quia repellendus.', '<p>Ut qui fugiat voluptatibus quas mollitia culpa sunt odit. Fuga ut est eveniet eligendi nam est. Quam deserunt asperiores libero corrupti quos.</p><p>Vel autem ea dolorum voluptas ad sed et. Et rem dolor voluptatem quam. Ut architecto quisquam nihil.</p><p>Dignissimos occaecati minus tempore molestiae quia aspernatur corrupti. Vitae est voluptatem nemo nostrum. Qui consequatur accusantium et est similique.</p><p>Aut eos perspiciatis explicabo voluptates repudiandae eos nemo. Numquam quam ut non esse voluptates ut odio numquam. Dolor dolorem dolorem est. Modi ipsa voluptates voluptatum ea. Rem dolorum non eligendi explicabo maiores quia.</p><p>Quia aut voluptas saepe. Animi laboriosam pariatur consequuntur natus aliquid perferendis dolorem. Maxime minus est voluptas illum mollitia ut ut. Necessitatibus iusto non cum non.</p>', 'S+3', '2021-02-18 17:58:56', NULL, 10, NULL, 'El Kef', 'Villa', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(347, 'Tempora quas sit vero harum', 'Tempora-quas-sit-vero-harum', 1156, 'Debitis quia est ut ut. Ipsa excepturi est repellendus aut maiores.', '<p>Quia dolores voluptas animi similique et. Facere deserunt consequuntur necessitatibus labore consectetur. Omnis reiciendis dolores aut vel doloremque doloribus.</p><p>Sit quia est et est id. Fuga aperiam quis ad qui. Laudantium asperiores et nihil ullam unde.</p><p>Sed sunt quia praesentium. Nulla dolores laboriosam cum sed impedit. Deleniti quia voluptatem nihil quas. Quae quaerat fugit velit enim illo explicabo corporis.</p><p>Facilis et voluptatem quia hic vero assumenda ut. Optio earum vel quis maxime quia. Autem commodi eos est quia. Voluptas excepturi dignissimos aut rerum facere.</p><p>Dolorem minima eligendi et in. Quo quos repellendus ut vel ipsa ipsum. Est sit eaque velit dolore expedita voluptatem est. Aliquam cum ducimus aliquid omnis aut ullam itaque aut.</p>', 'S+3', '2021-02-18 17:58:56', NULL, 10, NULL, 'Nabeul', 'Villa_Floor', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(348, 'test de la adtionst', 'test-de-la-adtionst', 22, 'Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.', 'Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies .Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.', 'S+3', '2021-03-01 00:00:24', NULL, 8, NULL, 'Sousse', 'Villa', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(374, 'Incidunt assumenda et sunt quas numquam', 'Incidunt-assumenda-et-sunt-quas-numquam', 63, 'Sapiente qui rerum.', 'Consequatur cumque mollitia harum.', 'S+3', '2021-03-03 15:27:50', NULL, 69, NULL, 'Tunis', 'Guest_house', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(375, 'Non vel consectetur consequatur', 'Non-vel-consectetur-consequatur', 560, 'Quae architecto.', 'Alias maxime nemo eum labore.', 'S+3', '2021-03-03 15:27:50', NULL, 69, NULL, 'Siliana', 'Apartment', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(376, 'Numquam cupiditate sit assumenda', 'Numquam-cupiditate-sit-assumenda', 244, 'Deleniti ducimus.', 'Eum eaque officiis molestiae et fugiat.', 'S+3', '2021-03-03 15:27:50', NULL, 69, NULL, 'Kebili', 'Apartment', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(377, 'Ut numquam sed blanditiis', 'Ut-numquam-sed-blanditiis', 396, 'Dolor aut aliquid.', 'Voluptatum labore dolor.', 'S+3', '2021-03-03 15:27:50', NULL, 69, NULL, 'Kebili', 'Motel', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(378, 'Est rerum est', 'Est-rerum-est', 307, 'Aut pariatur.', 'Qui dolorem facere accusantium voluptas.', 'S+3', '2021-03-03 15:27:50', NULL, 69, NULL, 'Zaghouan', 'Apartment', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(379, 'Cupiditate eligendi et placeat voluptatem qui', 'Cupiditate-eligendi-et-placeat-voluptatem-qui', 1397, 'At soluta voluptatem.', 'Quod rem non omnis laboriosam et.', 'S+3', '2021-03-03 15:27:51', NULL, 70, NULL, 'Manouba', 'Guest_house', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(380, 'Quasi et tenetur', 'Quasi-et-tenetur', 2834, 'At eligendi nemo.', 'Quia est ut voluptate id.', 'S+3', '2021-03-03 15:27:51', NULL, 70, NULL, 'Bizerte', 'Motel', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(381, 'Hic aut facere aut cum', 'Hic-aut-facere-aut-cum', 935, 'Numquam ad.', 'Consequuntur ipsam aut recusandae.', 'S+3', '2021-03-03 15:27:51', NULL, 70, NULL, 'Manouba', 'Motel', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(382, 'Laboriosam nostrum dolorem voluptatem eaque rerum', 'Laboriosam-nostrum-dolorem-voluptatem-eaque-rerum', 342, 'Velit explicabo impedit.', 'Id nulla eos.', 'S+3', '2021-03-03 15:27:51', NULL, 70, NULL, 'Tunis', 'Guest_house', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(383, 'Est quibusdam corporis eum', 'Est-quibusdam-corporis-eum', 2500, 'Ut eos eum.', 'Itaque ut rem distinctio molestiae.', 'S+3', '2021-03-03 15:27:51', NULL, 70, NULL, 'Jendouba', 'Guest_house', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(384, 'Et eveniet dolor ut', 'Et-eveniet-dolor-ut', 2836, 'Sit laborum.', 'Quia voluptatem voluptas sit.', 'S+3', '2021-03-03 15:27:52', NULL, 71, NULL, 'Siliana', 'Villa_Floor', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(385, 'Illo et et adipisci sint animi', 'Illo-et-et-adipisci-sint-animi', 884, 'Maiores similique qui.', 'Neque eos nobis suscipit fugit.', 'S+3', '2021-03-03 15:27:52', NULL, 71, NULL, 'Medenine', 'Motel', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(386, 'Quidem eligendi sunt aperiam nam', 'Quidem-eligendi-sunt-aperiam-nam', 2003, 'Eum assumenda.', 'Totam aut dolore.', 'S+3', '2021-03-03 15:27:52', NULL, 71, NULL, 'Zaghouan', 'Villa_Floor', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(387, 'Occaecati ex explicabo velit voluptatibus', 'Occaecati-ex-explicabo-velit-voluptatibus', 2848, 'Autem optio ut.', 'Magni ducimus quod dolor.', 'S+3', '2021-03-03 15:27:52', NULL, 71, NULL, 'Kebili', 'Villa', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(388, 'Non magnam molestias rerum aut quisquam', 'Non-magnam-molestias-rerum-aut-quisquam', 404, 'Laborum eum doloremque.', 'Ipsum tempora qui.', 'S+3', '2021-03-03 15:27:52', NULL, 71, NULL, 'Siliana', 'Villa_Floor', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(389, 'Vero est velit ex veritatis ipsa', 'Vero-est-velit-ex-veritatis-ipsa', 1786, 'Rem consequuntur.', 'Excepturi est rem.', 'S+3', '2021-03-03 15:27:53', NULL, 72, NULL, 'Tunis', 'Motel', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(390, 'Natus ipsa nostrum aut mollitia distinctio', 'Natus-ipsa-nostrum-aut-mollitia-distinctio', 1923, 'Et corporis autem.', 'Porro velit quam ullam autem esse.', 'S+3', '2021-03-03 15:27:53', NULL, 72, NULL, 'Sfax', 'Villa_Floor', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(391, 'Molestiae totam dignissimos rerum', 'Molestiae-totam-dignissimos-rerum', 1069, 'Atque nam cum.', 'Dolore ipsa maxime cumque id soluta.', 'S+3', '2021-03-03 15:27:53', NULL, 72, NULL, 'Medenine', 'Motel', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(392, 'Animi ut ut fugit quas dolor', 'Animi-ut-ut-fugit-quas-dolor', 233, 'Sint voluptas inventore.', 'Recusandae consequuntur cupiditate dignissimos.', 'S+3', '2021-03-03 15:27:53', NULL, 72, NULL, 'Jendouba', 'Motel', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(393, 'Placeat ducimus accusamus', 'Placeat-ducimus-accusamus', 833, 'Corporis minus reprehenderit.', 'Non doloremque et sit.', 'S+3', '2021-03-03 15:27:53', NULL, 72, NULL, 'Medenine', 'Villa', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(394, 'Et atque ut sint ut', 'Et-atque-ut-sint-ut', 158, 'Hic necessitatibus rerum.', 'Repellendus magnam autem rerum.', 'S+3', '2021-03-03 15:27:54', NULL, 73, NULL, 'Siliana', 'Villa_Floor', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(395, 'Officiis non autem voluptatem soluta eveniet', 'Officiis-non-autem-voluptatem-soluta-eveniet', 471, 'Culpa non.', 'Est hic occaecati blanditiis aspernatur.', 'S+3', '2021-03-03 15:27:54', NULL, 73, NULL, 'Jendouba', 'Villa', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(396, 'Provident maiores adipisci ea', 'Provident-maiores-adipisci-ea', 183, 'Nobis officiis.', 'Accusamus sequi occaecati voluptates et voluptas.', 'S+3', '2021-03-03 15:27:54', NULL, 73, NULL, 'Sfax', 'Villa_Floor', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(397, 'Quos atque voluptate ut', 'Quos-atque-voluptate-ut', 2755, 'Aperiam molestiae nisi.', 'Mollitia ab placeat maiores consectetur.', 'S+3', '2021-03-03 15:27:54', NULL, 73, NULL, 'Medenine', 'Motel', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(398, 'Reprehenderit sapiente repellendus aut rerum corporis', 'Reprehenderit-sapiente-repellendus-aut-rerum-corporis', 1692, 'Similique unde odio.', 'Ut voluptas sunt impedit.', 'S+3', '2021-03-03 15:27:54', NULL, 73, NULL, 'Sfax', 'Motel', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(399, 'Est earum nobis tenetur quidem', 'Est-earum-nobis-tenetur-quidem', 2482, 'Ab sit expedita.', 'Rem qui facere harum autem rerum.', 'S+3', '2021-03-11 22:37:25', NULL, 74, NULL, 'Bizerte', 'Villa', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(400, 'Enim consequuntur qui architecto', 'Enim-consequuntur-qui-architecto', 438, 'Recusandae suscipit.', 'Dicta et nam ut officiis.', 'S+3', '2021-03-11 22:37:25', NULL, 74, NULL, 'Sousse', 'Guest_house', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(401, 'Et voluptate aliquam', 'Et-voluptate-aliquam', 1027, 'Libero sapiente sapiente.', 'Quia ut dolorem fugit.', 'S+3', '2021-03-11 22:37:25', NULL, 74, NULL, 'Tataouine', 'Guest_house', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(402, 'Voluptas ad est expedita nisi dignissimos', 'Voluptas-ad-est-expedita-nisi-dignissimos', 2391, 'Minima velit cupiditate.', 'Libero dolorem reiciendis occaecati.', 'S+3', '2021-03-11 22:37:25', NULL, 74, NULL, 'Tataouine', 'Guest_house', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(403, 'Aut exercitationem aut aperiam est', 'Aut-exercitationem-aut-aperiam-est', 2802, 'Rem deserunt ad.', 'Cupiditate est autem ut deleniti.', 'S+3', '2021-03-11 22:37:25', NULL, 74, NULL, 'Kairouan', 'Guest_house', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(404, 'Sunt et et porro distinctio commodi', 'Sunt-et-et-porro-distinctio-commodi', 2056, 'Voluptatem ut iusto.', 'Repellendus aut tempore dolor.', 'S+3', '2021-03-11 22:37:26', NULL, 75, NULL, 'Sousse', 'Villa_Floor', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(405, 'Saepe ipsa quidem exercitationem', 'Saepe-ipsa-quidem-exercitationem', 72, 'Molestias a magni.', 'Dolorem nobis odio aut voluptatem porro.', 'S+3', '2021-03-11 22:37:26', NULL, 75, NULL, 'Monastir', 'Motel', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(406, 'Iure est esse minima est', 'Iure-est-esse-minima-est', 2183, 'Eius corrupti ullam.', 'Non in qui quia recusandae.', 'S+3', '2021-03-11 22:37:26', NULL, 75, NULL, 'Bizerte', 'Guest_house', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(407, 'Est excepturi nesciunt autem temporibus', 'Est-excepturi-nesciunt-autem-temporibus', 1682, 'Rerum hic ipsam.', 'Vero ad excepturi.', 'S+3', '2021-03-11 22:37:26', NULL, 75, NULL, 'Nabeul', 'Guest_house', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(408, 'Doloribus rerum ipsa quia', 'Doloribus-rerum-ipsa-quia', 199, 'Et aut consectetur.', 'Voluptatem error repellendus unde.', 'S+3', '2021-03-11 22:37:26', NULL, 75, NULL, 'Gabes', 'Villa', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(409, 'Quis et commodi quod qui quis', 'Quis-et-commodi-quod-qui-quis', 373, 'Odit temporibus quo.', 'Consequuntur atque rerum ullam reiciendis adipisci.', 'S+3', '2021-03-11 22:37:27', NULL, 76, NULL, 'Nabeul', 'Villa', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(410, 'Labore id eius', 'Labore-id-eius', 1264, 'Architecto ea.', 'Omnis ea et quia explicabo qui.', 'S+3', '2021-03-11 22:37:27', NULL, 76, NULL, 'El Kef', 'Villa', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(411, 'Nostrum sed in nisi', 'Nostrum-sed-in-nisi', 2326, 'Sunt et.', 'Ut soluta praesentium est nemo.', 'S+3', '2021-03-11 22:37:27', NULL, 76, NULL, 'Kairouan', 'Villa_Floor', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(412, 'Est ut rerum vero modi', 'Est-ut-rerum-vero-modi', 2530, 'Molestiae perferendis quae.', 'Iste culpa quia.', 'S+3', '2021-03-11 22:37:27', NULL, 76, NULL, 'Sidi Bouzid', 'Guest_house', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(413, 'Voluptatibus vel molestiae rem enim', 'Voluptatibus-vel-molestiae-rem-enim', 2897, 'Error quibusdam.', 'Dignissimos at doloribus ad eum.', 'S+3', '2021-03-11 22:37:27', NULL, 76, NULL, 'Gabes', 'Villa', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(414, 'Maiores eos quibusdam consequuntur quas', 'Maiores-eos-quibusdam-consequuntur-quas', 663, 'Sequi voluptatem cum.', 'Ex expedita qui.', 'S+3', '2021-03-11 22:37:28', NULL, 77, NULL, 'Sousse', 'Guest_house', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(415, 'Atque rerum tenetur', 'Atque-rerum-tenetur', 982, 'Quia eos.', 'Officiis sit quam velit.', 'S+3', '2021-03-11 22:37:28', NULL, 77, 4, 'Nabeul', 'Motel', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(416, 'Ipsa totam nesciunt ipsam', 'Ipsa-totam-nesciunt-ipsam', 1057, 'Sint corporis.', 'Alias a architecto nemo.', 'S+3', '2021-03-11 22:37:28', NULL, 77, 4, 'Gabes', 'Motel', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(417, 'Maiores tempore voluptatem et', 'Maiores-tempore-voluptatem-et', 1098, 'Dolores occaecati.', 'At veritatis modi nulla eligendi qui.', 'S+3', '2021-03-11 22:37:28', NULL, 77, 4, 'Nabeul', 'Motel', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(418, 'Velit et reprehenderit', 'Velit-et-reprehenderit', 2569, 'Nesciunt ut doloribus.', 'Optio aut sint.', 'S+3', '2021-03-11 22:37:28', NULL, 77, 3, 'Sidi Bouzid', 'Villa_Floor', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(419, 'Et cum necessitatibus rerum ut', 'Et-cum-necessitatibus-rerum-ut', 1748, 'Sit tenetur.', 'Inventore enim fuga non.', 'S+3', '2021-03-11 22:37:29', NULL, 78, 2, 'Monastir', 'Villa', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(420, 'Sed voluptatem numquam quis', 'Sed-voluptatem-numquam-quis', 1930, 'Minus natus consectetur.', 'Recusandae porro est amet asperiores.', 'S+3', '2021-03-11 22:37:29', NULL, 78, 5, 'Sidi Bouzid', 'Guest_house', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(421, 'Alias provident ut consequuntur et qui', 'Alias-provident-ut-consequuntur-et-qui', 1795, 'Consequatur nam.', 'Asperiores voluptates sunt fuga.', 'S+3', '2021-03-11 22:37:29', NULL, 78, 5, 'Monastir', 'Villa', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(422, 'Sed nobis mollitia', 'Sed-nobis-mollitia', 1528, 'Omnis excepturi in.', 'Sequi illo assumenda aut nam consequatur.', 'S+3', '2021-03-11 22:37:29', NULL, 78, 2, 'Kairouan', 'Villa', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(423, 'Autem eum in qui', 'Autem-eum-in-qui', 2274, 'Facere voluptatum nostrum.', 'Odio qui consequatur.', 'S+3', '2021-03-11 22:37:29', NULL, 78, 3, 'Gabes', 'Villa', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(424, 'dfffdf', 'dfffdf', 33, 'dfdf', 'dfdfdfdf', 'S+4', '2021-10-15 17:52:41', NULL, 112, NULL, 'Bizert', 'motel', 1, 1, 0, 0, 0, 0, 0, 0, NULL, 0, 0, 'sdsdsdssd'),
(425, 'sdsd', 'sdsd', 4545, 'ssdsd', 'sdsd', 'S+1', '2021-10-15 18:57:22', NULL, 112, NULL, 'Kairouan', 'Villa Floor', NULL, 0, 0, NULL, 0, 0, NULL, 0, NULL, 1, 0, 'ghgh'),
(426, 'fgfgf', 'fgfgf', 4545, 'fgfgfg', 'fgfgfg', 'S+5', '2021-10-15 19:00:54', NULL, 112, NULL, 'Kairouan', 'Guest Hous', 0, 0, 0, NULL, 0, 0, NULL, 1, 1, 0, 1, 'ghghgh'),
(427, 'xcxc', 'xcxc', 545, 'xcxcx', 'xcxcxcx', 'S+5', '2021-10-16 00:32:07', NULL, 112, NULL, 'Gabes', 'Apartement', 0, 0, 0, NULL, 1, 0, NULL, 0, 0, 0, 0, 'xcxc'),
(428, 'qsqs', 'qsqs', 4545, 'qsqs', 'qsqsqs', 'S+4', '2021-10-16 00:42:34', NULL, 112, NULL, 'Gabes', 'Guest Hous', 0, 0, 0, NULL, 1, 1, NULL, 0, 0, 0, 0, 'qsqsq'),
(429, 'xxxcx', 'xxxcx', 454, 'xcxcx', 'xcxcx', 'S+4', '2021-10-16 00:43:18', NULL, 112, NULL, 'Kairouan', 'Villa Floor', 0, 0, 0, NULL, 0, 0, NULL, 0, 0, 0, 0, '45454'),
(430, 'zeze', 'zeze', 44, 'zeze', 'zezeze', 'S+5', '2021-10-16 00:47:59', NULL, 112, NULL, 'Gabes', 'Guest Hous', 1, 1, 1, NULL, 1, 1, NULL, 1, 1, 1, 1, 'ghghg'),
(431, 'Dar Zarga', 'Dar-Zarga', 500, ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book', ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'S+5', '2021-10-16 00:53:22', NULL, 112, NULL, 'Sousse', 'Villa', 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 'City of Heaven'),
(433, 'Dar Erouj', 'Dar-Erouj', 55, 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum', 'is simply dummy text of the printing and typesetting industry. Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum.', 'S+3', '2021-10-17 01:45:05', NULL, 112, NULL, 'Gafsa', 'Guest Hous', 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 'full city of man'),
(434, 'Dar saied', 'Dar-saied', 102, 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. ', 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.', 'S+4', '2021-10-17 03:31:24', NULL, 112, NULL, 'Gabes', 'Apartement', 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 'text of adress city 458'),
(435, 'Home Saied', 'Home-Saied', 100, 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.', 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. ', 'S+4', '2021-10-17 03:36:52', NULL, 112, NULL, 'Nabeul', 'Villa Floor', 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 'full adress of saied Home 212 streat'),
(436, 'home yz', 'home-yz', 47, 'with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like.', 'S+5', '2021-10-17 03:42:46', NULL, 112, NULL, 'Nabeul', 'Motel', 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, '12 home streat city life'),
(437, 'zzh', 'zzh', 55, 'scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ', 'scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,', 'S+7', '2021-10-17 03:56:43', NULL, 112, NULL, 'Nabeul', 'Apartement', 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 'Full of full man'),
(438, 'sssss', 'sssss16', 457, 'The new User resource the symple man in Ny', 'The new User resource The new User resource The new User resourceThe new User resource', 'S+6', '2021-11-01 23:45:47', NULL, 112, NULL, 'Gabes', 'Motel', 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 'ggh 548 hg'),
(439, 'sdsdttee', 'sdsdttee5', 4545, 'ddddttt', 'ddd', 'S+3', '2021-11-07 19:39:34', NULL, 112, NULL, 'Sousse', 'Guest Hous', 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, '4545');

-- --------------------------------------------------------

--
-- Structure de la table `bouking`
--

CREATE TABLE `bouking` (
  `id` int(11) NOT NULL,
  `bouker_id` int(11) NOT NULL,
  `ad_id` int(11) NOT NULL,
  `creat_at` datetime NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `amount` double NOT NULL,
  `comment` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `bouking`
--

INSERT INTO `bouking` (`id`, `bouker_id`, `ad_id`, `creat_at`, `start_date`, `end_date`, `amount`, `comment`) VALUES
(2, 69, 374, '2021-02-26 07:23:01', '2021-09-16 03:24:48', '2021-09-20 03:24:48', 252, NULL),
(3, 69, 375, '2021-01-08 07:26:49', '2021-08-25 01:33:16', '2021-08-30 08:01:01', 1120, NULL),
(4, 69, 375, '2020-09-19 11:45:26', '2021-08-14 10:36:43', '2021-08-21 10:36:43', 1120, NULL),
(5, 69, 376, '2020-11-20 23:36:41', '2021-08-05 01:25:21', '2021-08-07 18:04:30', 976, NULL),
(6, 69, 376, '2020-12-25 11:54:22', '2022-08-24 11:10:00', '2021-08-28 11:10:00', 976, NULL),
(7, 69, 376, '2021-01-28 00:55:16', '2021-09-15 00:23:02', '2021-09-18 00:23:02', 732, NULL),
(34, 71, 386, '2020-10-07 08:22:25', '2021-08-30 12:49:01', '2021-08-31 12:49:01', 8012, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20210210154638', '2021-02-10 16:53:26', 606),
('DoctrineMigrations\\Version20210210210734', '2021-02-10 22:08:11', 1924),
('DoctrineMigrations\\Version20210210214850', '2021-02-10 22:49:26', 187),
('DoctrineMigrations\\Version20210210230219', '2021-02-11 00:02:58', 791),
('DoctrineMigrations\\Version20210216125331', '2021-02-16 13:53:54', 1229),
('DoctrineMigrations\\Version20210218161115', '2021-02-18 17:12:03', 919),
('DoctrineMigrations\\Version20210218161912', '2021-02-18 17:19:25', 1023),
('DoctrineMigrations\\Version20210220225406', '2021-02-20 23:54:52', 789),
('DoctrineMigrations\\Version20210226211727', '2021-02-26 22:19:12', 3823),
('DoctrineMigrations\\Version20210301210531', '2021-03-01 22:09:19', 2440),
('DoctrineMigrations\\Version20210303133721', '2021-03-03 14:37:59', 2578),
('DoctrineMigrations\\Version20210303142727', '2021-03-03 15:27:41', 744),
('DoctrineMigrations\\Version20210305134201', '2021-03-05 14:42:16', 1242),
('DoctrineMigrations\\Version20210309210019', '2021-03-09 22:01:02', 2539),
('DoctrineMigrations\\Version20210311211826', '2021-03-11 22:20:54', 1958),
('DoctrineMigrations\\Version20210311213446', '2021-03-11 22:34:56', 203),
('DoctrineMigrations\\Version20210316133354', '2021-03-16 14:34:19', 2295),
('DoctrineMigrations\\Version20210316140006', '2021-03-16 15:00:19', 1166),
('DoctrineMigrations\\Version20210705165700', '2021-07-05 18:58:42', 1150),
('DoctrineMigrations\\Version20210705172031', '2021-07-05 19:21:35', 212),
('DoctrineMigrations\\Version20211011224700', '2021-10-12 00:47:18', 159),
('DoctrineMigrations\\Version20211011225639', '2021-10-12 00:56:49', 25),
('DoctrineMigrations\\Version20211011230329', '2021-10-12 01:03:36', 80),
('DoctrineMigrations\\Version20211015165654', '2021-10-15 18:57:10', 196);

-- --------------------------------------------------------

--
-- Structure de la table `image`
--

CREATE TABLE `image` (
  `id` int(11) NOT NULL,
  `ad_id` int(11) NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `image`
--

INSERT INTO `image` (`id`, `ad_id`, `url`, `title_image`) VALUES
(188, 343, 'adimagefixture.jpeg', 'ad_image'),
(189, 343, 'adimagefixture.jpeg', 'ad_image'),
(190, 343, 'adimagefixture.jpeg', 'ad_image'),
(191, 344, 'adimagefixture.jpeg', 'ad_image'),
(192, 344, 'adimagefixture.jpeg', 'ad_image'),
(193, 344, 'adimagefixture.jpeg', 'ad_image'),
(194, 345, 'adimagefixture.jpeg', 'ad_image'),
(195, 345, 'adimagefixture.jpeg', 'ad_image'),
(196, 345, 'adimagefixture.jpeg', 'ad_image'),
(197, 346, 'adimagefixture.jpeg', 'ad_image'),
(198, 346, 'adimagefixture.jpeg', 'ad_image'),
(199, 347, 'adimagefixture.jpeg', 'ad_image'),
(200, 347, 'adimagefixture.jpeg', 'ad_image'),
(201, 347, 'adimagefixture.jpeg', 'ad_image'),
(202, 347, 'adimagefixture.jpeg', 'ad_image'),
(204, 326, 'adimagefixture.jpeg', 'ad_image'),
(205, 326, 'adimagefixture.jpeg', 'ad_image'),
(206, 327, 'adimagefixture.jpeg', 'ad_image'),
(207, 327, 'adimagefixture.jpeg', 'ad_image'),
(208, 328, 'adimagefixture.jpeg', 'ad_image'),
(209, 328, 'adimagefixture.jpeg', 'ad_image'),
(210, 329, 'adimagefixture.jpeg', 'ad_image'),
(211, 329, 'adimagefixture.jpeg', 'ad_image'),
(212, 330, 'adimagefixture.jpeg', 'ad_image'),
(213, 330, 'adimagefixture.jpeg', 'ad_image'),
(214, 331, 'adimagefixture.jpeg', 'ad_image'),
(215, 331, 'adimagefixture.jpeg', 'ad_image'),
(218, 333, 'adimagefixture.jpeg', 'ad_image'),
(219, 333, 'adimagefixture.jpeg', 'ad_image'),
(220, 333, 'adimagefixture.jpeg', 'ad_image'),
(221, 332, 'adimagefixture.jpeg', 'ad_image'),
(222, 332, 'adimagefixture.jpeg', 'ad_image'),
(223, 332, 'adimagefixture.jpeg', 'ad_image'),
(224, 323, 'adimagefixture.jpeg', 'ad_image'),
(225, 323, 'adimagefixture.jpeg', 'ad_image'),
(226, 324, 'adimagefixture.jpeg', 'ad_image'),
(227, 324, 'adimagefixture.jpeg', 'ad_image'),
(228, 325, 'adimagefixture.jpeg', 'ad_image'),
(229, 325, 'adimagefixture.jpeg', 'ad_image'),
(230, 348, 'adimagefixture.jpeg', 'ad_image'),
(231, 348, 'adimagefixture.jpeg', 'ad_image'),
(232, 336, 'adimagefixture.jpeg', 'ad_image'),
(233, 336, 'adimagefixture.jpeg', 'ad_image'),
(234, 336, 'adimagefixture.jpeg', 'ad_image'),
(235, 335, 'adimagefixture.jpeg', 'ad_image'),
(236, 335, 'adimagefixture.jpeg', 'ad_image'),
(237, 337, 'adimagefixture.jpeg', 'ad_image'),
(238, 337, 'adimagefixture.jpeg', 'ad_image'),
(239, 337, 'adimagefixture.jpeg', 'ad_image'),
(240, 340, 'adimagefixture.jpeg', 'ad_image'),
(241, 340, 'adimagefixture.jpeg', 'ad_image'),
(242, 339, 'adimagefixture.jpeg', 'ad_image'),
(243, 339, 'adimagefixture.jpeg', 'ad_image'),
(244, 338, 'adimagefixture.jpeg', 'ad_image'),
(245, 338, 'adimagefixture.jpeg', 'ad_image'),
(246, 341, 'adimagefixture.jpeg', 'ad_image'),
(247, 341, 'adimagefixture.jpeg', 'ad_image'),
(255, 374, 'adimagefixture.jpeg', 'ad_image'),
(256, 374, 'adimagefixture.jpeg', 'ad_image'),
(257, 374, 'adimagefixture.jpeg', 'ad_image'),
(258, 375, 'adimagefixture.jpeg', 'ad_image'),
(259, 375, 'adimagefixture.jpeg', 'ad_image'),
(260, 375, 'adimagefixture.jpeg', 'ad_image'),
(261, 376, 'adimagefixture.jpeg', 'ad_image'),
(262, 376, 'adimagefixture.jpeg', 'ad_image'),
(263, 376, 'adimagefixture.jpeg', 'ad_image'),
(264, 377, 'adimagefixture.jpeg', 'ad_image'),
(265, 377, 'adimagefixture.jpeg', 'ad_image'),
(266, 377, 'adimagefixture.jpeg', 'ad_image'),
(267, 378, 'adimagefixture.jpeg', 'ad_image'),
(268, 378, 'adimagefixture.jpeg', 'ad_image'),
(269, 379, 'adimagefixture.jpeg', 'ad_image'),
(270, 379, 'adimagefixture.jpeg', 'ad_image'),
(271, 379, 'adimagefixture.jpeg', 'ad_image'),
(272, 379, 'adimagefixture.jpeg', 'ad_image'),
(273, 380, 'adimagefixture.jpeg', 'ad_image'),
(274, 380, 'adimagefixture.jpeg', 'ad_image'),
(275, 380, 'adimagefixture.jpeg', 'ad_image'),
(276, 380, 'adimagefixture.jpeg', 'ad_image'),
(277, 381, 'adimagefixture.jpeg', 'ad_image'),
(278, 381, 'adimagefixture.jpeg', 'ad_image'),
(279, 381, 'adimagefixture.jpeg', 'ad_image'),
(280, 381, 'adimagefixture.jpeg', 'ad_image'),
(281, 382, 'adimagefixture.jpeg', 'ad_image'),
(282, 382, 'adimagefixture.jpeg', 'ad_image'),
(283, 382, 'adimagefixture.jpeg', 'ad_image'),
(284, 383, 'adimagefixture.jpeg', 'ad_image'),
(285, 383, 'adimagefixture.jpeg', 'ad_image'),
(286, 383, 'adimagefixture.jpeg', 'ad_image'),
(287, 384, 'adimagefixture.jpeg', 'ad_image'),
(288, 384, 'adimagefixture.jpeg', 'ad_image'),
(289, 384, 'adimagefixture.jpeg', 'ad_image'),
(290, 384, 'adimagefixture.jpeg', 'ad_image'),
(291, 385, 'adimagefixture.jpeg', 'ad_image'),
(292, 385, 'adimagefixture.jpeg', 'ad_image'),
(293, 385, 'adimagefixture.jpeg', 'ad_image'),
(294, 385, 'adimagefixture.jpeg', 'ad_image'),
(295, 386, 'adimagefixture.jpeg', 'ad_image'),
(296, 386, 'adimagefixture.jpeg', 'ad_image'),
(297, 386, 'adimagefixture.jpeg', 'ad_image'),
(298, 387, 'adimagefixture.jpeg', 'ad_image'),
(299, 387, 'adimagefixture.jpeg', 'ad_image'),
(300, 387, 'adimagefixture.jpeg', 'ad_image'),
(301, 387, 'adimagefixture.jpeg', 'ad_image'),
(302, 388, 'adimagefixture.jpeg', 'ad_image'),
(303, 388, 'adimagefixture.jpeg', 'ad_image'),
(304, 388, 'adimagefixture.jpeg', 'ad_image'),
(305, 389, 'adimagefixture.jpeg', 'ad_image'),
(306, 389, 'adimagefixture.jpeg', 'ad_image'),
(307, 390, 'adimagefixture.jpeg', 'ad_image'),
(308, 390, 'adimagefixture.jpeg', 'ad_image'),
(309, 391, 'adimagefixture.jpeg', 'ad_image'),
(310, 391, 'adimagefixture.jpeg', 'ad_image'),
(311, 391, 'adimagefixture.jpeg', 'ad_image'),
(312, 392, 'adimagefixture.jpeg', 'ad_image'),
(313, 392, 'adimagefixture.jpeg', 'ad_image'),
(314, 393, 'adimagefixture.jpeg', 'ad_image'),
(315, 393, 'adimagefixture.jpeg', 'ad_image'),
(316, 393, 'adimagefixture.jpeg', 'ad_image'),
(317, 394, 'adimagefixture.jpeg', 'ad_image'),
(318, 394, 'adimagefixture.jpeg', 'ad_image'),
(319, 394, 'adimagefixture.jpeg', 'ad_image'),
(320, 394, 'adimagefixture.jpeg', 'ad_image'),
(321, 395, 'adimagefixture.jpeg', 'ad_image'),
(322, 395, 'adimagefixture.jpeg', 'ad_image'),
(323, 395, 'adimagefixture.jpeg', 'ad_image'),
(324, 396, 'adimagefixture.jpeg', 'ad_image'),
(325, 396, 'adimagefixture.jpeg', 'ad_image'),
(326, 396, 'adimagefixture.jpeg', 'ad_image'),
(327, 396, 'adimagefixture.jpeg', 'ad_image'),
(328, 397, 'adimagefixture.jpeg', 'ad_image'),
(329, 397, 'adimagefixture.jpeg', 'ad_image'),
(330, 398, 'adimagefixture.jpeg', 'ad_image'),
(331, 398, 'adimagefixture.jpeg', 'ad_image'),
(332, 398, 'adimagefixture.jpeg', 'ad_image'),
(333, 399, 'adimagefixture.jpeg', 'ad_image'),
(334, 399, 'adimagefixture.jpeg', 'ad_image'),
(335, 400, 'adimagefixture.jpeg', 'ad_image'),
(336, 400, 'adimagefixture.jpeg', 'ad_image'),
(337, 400, 'adimagefixture.jpeg', 'ad_image'),
(338, 400, 'adimagefixture.jpeg', 'ad_image'),
(339, 401, 'adimagefixture.jpeg', 'ad_image'),
(340, 401, 'adimagefixture.jpeg', 'ad_image'),
(341, 401, 'adimagefixture.jpeg', 'ad_image'),
(342, 401, 'adimagefixture.jpeg', 'ad_image'),
(343, 402, 'adimagefixture.jpeg', 'ad_image'),
(344, 402, 'adimagefixture.jpeg', 'ad_image'),
(345, 402, 'adimagefixture.jpeg', 'ad_image'),
(346, 403, 'adimagefixture.jpeg', 'ad_image'),
(347, 403, 'adimagefixture.jpeg', 'ad_image'),
(348, 403, 'adimagefixture.jpeg', 'ad_image'),
(349, 404, 'adimagefixture.jpeg', 'ad_image'),
(350, 404, 'adimagefixture.jpeg', 'ad_image'),
(351, 405, 'adimagefixture.jpeg', 'ad_image'),
(352, 405, 'adimagefixture.jpeg', 'ad_image'),
(353, 405, 'adimagefixture.jpeg', 'ad_image'),
(354, 405, 'adimagefixture.jpeg', 'ad_image'),
(355, 406, 'adimagefixture.jpeg', 'ad_image'),
(356, 406, 'adimagefixture.jpeg', 'ad_image'),
(357, 406, 'adimagefixture.jpeg', 'ad_image'),
(358, 407, 'adimagefixture.jpeg', 'ad_image'),
(359, 407, 'adimagefixture.jpeg', 'ad_image'),
(360, 408, 'adimagefixture.jpeg', 'ad_image'),
(361, 408, 'adimagefixture.jpeg', 'ad_image'),
(362, 408, 'adimagefixture.jpeg', 'ad_image'),
(363, 408, 'adimagefixture.jpeg', 'ad_image'),
(364, 409, 'adimagefixture.jpeg', 'ad_image'),
(365, 409, 'adimagefixture.jpeg', 'ad_image'),
(366, 409, 'adimagefixture.jpeg', 'ad_image'),
(367, 410, 'adimagefixture.jpeg', 'ad_image'),
(368, 410, 'adimagefixture.jpeg', 'ad_image'),
(369, 411, 'adimagefixture.jpeg', 'ad_image'),
(370, 411, 'adimagefixture.jpeg', 'ad_image'),
(371, 412, 'adimagefixture.jpeg', 'ad_image'),
(372, 412, 'adimagefixture.jpeg', 'ad_image'),
(373, 412, 'adimagefixture.jpeg', 'ad_image'),
(374, 413, 'adimagefixture.jpeg', 'ad_image'),
(375, 413, 'adimagefixture.jpeg', 'ad_image'),
(376, 413, 'adimagefixture.jpeg', 'ad_image'),
(377, 414, 'adimagefixture.jpeg', 'ad_image'),
(378, 414, 'adimagefixture.jpeg', 'ad_image'),
(379, 414, 'adimagefixture.jpeg', 'ad_image'),
(380, 415, 'adimagefixture.jpeg', 'ad_image'),
(381, 415, 'adimagefixture.jpeg', 'ad_image'),
(382, 415, 'adimagefixture.jpeg', 'ad_image'),
(383, 416, 'adimagefixture.jpeg', 'ad_image'),
(384, 416, 'adimagefixture.jpeg', 'ad_image'),
(385, 416, 'adimagefixture.jpeg', 'ad_image'),
(386, 417, 'adimagefixture.jpeg', 'ad_image'),
(387, 417, 'adimagefixture.jpeg', 'ad_image'),
(388, 417, 'adimagefixture.jpeg', 'ad_image'),
(389, 418, 'adimagefixture.jpeg', 'ad_image'),
(390, 418, 'adimagefixture.jpeg', 'ad_image'),
(391, 419, 'adimagefixture.jpeg', 'ad_image'),
(392, 419, 'adimagefixture.jpeg', 'ad_image'),
(393, 419, 'adimagefixture.jpeg', 'ad_image'),
(394, 419, 'adimagefixture.jpeg', 'ad_image'),
(395, 420, 'adimagefixture.jpeg', 'ad_image'),
(396, 420, 'adimagefixture.jpeg', 'ad_image'),
(397, 420, 'adimagefixture.jpeg', 'ad_image'),
(398, 420, 'adimagefixture.jpeg', 'ad_image'),
(399, 421, 'adimagefixture.jpeg', 'ad_image'),
(400, 421, 'adimagefixture.jpeg', 'ad_image'),
(401, 422, 'adimagefixture.jpeg', 'ad_image'),
(402, 422, 'adimagefixture.jpeg', 'ad_image'),
(403, 422, 'adimagefixture.jpeg', 'ad_image'),
(404, 422, 'adimagefixture.jpeg', 'ad_image'),
(405, 423, 'adimagefixture.jpeg', 'ad_image'),
(406, 423, 'adimagefixture.jpeg', 'ad_image'),
(407, 334, 'adimagefixture.jpeg', 'ad_image'),
(408, 334, 'adimagefixture.jpeg', 'ad_image'),
(409, 424, 'string.png', 'ad for symbnb'),
(410, 424, 'sdsdsd.png', 'ad for symbnb'),
(411, 425, '1fvjxl0k1l.png', 'ad for symbnb'),
(412, 425, 'uk0jjwi48.jpeg', 'ad for symbnb'),
(413, 426, 'znkylxczoh.png', 'ad for symbnb'),
(414, 426, 'fulq3r2yk.jpeg', 'ad for symbnb'),
(415, 427, 'rg2gwrc71.jpeg', 'ad for symbnb'),
(416, 427, 'wfn5r16zqg.jpeg', 'ad for symbnb'),
(417, 428, '44goehvit.jpeg', 'ad for symbnb'),
(418, 428, '7zq8uqc4f.jpeg', 'ad for symbnb'),
(419, 429, 'tg2dlh8ty.jpeg', 'ad for symbnb'),
(420, 429, 'u06mcweoi.jpeg', 'ad for symbnb'),
(421, 431, 'a0c7ohacx.jpeg', 'ad for symbnb'),
(422, 431, 'w32yctgq1.jpeg', 'ad for symbnb'),
(423, 431, 'iptyc53ur.jpeg', 'ad for symbnb'),
(424, 431, 'fcrtd3bqh.jpeg', 'ad for symbnb'),
(426, 433, 'lg13io9tch.jpeg', 'ad for symbnb'),
(427, 433, 'ft1wubj1ck.jpeg', 'ad for symbnb'),
(428, 433, 'mvk1v1lh1k.jpeg', 'ad for symbnb'),
(429, 433, 'vryrt8bqw.jpeg', 'ad for symbnb'),
(430, 434, 'aoj8l842y.jpeg', 'ad for symbnb'),
(431, 434, 'acclzcs71l.jpeg', 'ad for symbnb'),
(432, 434, '08jld443t.jpeg', 'ad for symbnb'),
(433, 435, 'zh1izpcec.jpeg', 'ad for symbnb'),
(434, 435, '5btzftzi8.jpeg', 'ad for symbnb'),
(435, 435, 'yzkwi5j7t.jpeg', 'ad for symbnb'),
(436, 436, 'k9xxj1jyt.jpeg', 'ad for symbnb'),
(437, 437, 'pcos2nbaj.jpeg', 'ad for symbnb'),
(438, 437, 'eoad9lrqp.jpeg', 'ad for symbnb'),
(439, 438, 'xkd4u443h.jpeg', 'ad for symbnb'),
(440, 438, 'wpl45phxu.jpeg', 'ad for symbnb'),
(441, 439, 'q55nrwu23.jpeg', 'ad for symbnb');

-- --------------------------------------------------------

--
-- Structure de la table `rating`
--

CREATE TABLE `rating` (
  `id` int(11) NOT NULL,
  `ad_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `creat_at` datetime NOT NULL,
  `note` int(11) NOT NULL,
  `comment` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `rating`
--

INSERT INTO `rating` (`id`, `ad_id`, `user_id`, `creat_at`, `note`, `comment`) VALUES
(1, 399, 74, '2021-01-18 08:44:39', 1, 'Officia ut nulla.'),
(3, 400, 74, '2021-01-09 12:48:40', 5, 'Animi vitae eos illum voluptas.'),
(4, 401, 74, '2020-12-17 04:27:00', 3, 'Ducimus incidunt aut vel.'),
(5, 402, 74, '2021-01-05 22:24:35', 2, 'Maxime molestiae nobis odio.'),
(8, 405, 75, '2021-01-11 02:16:54', 3, 'Aut ea at dignissimos quae.'),
(10, 406, 75, '2021-01-04 06:59:40', 3, 'Quia est tenetur occaecati.'),
(11, 407, 75, '2021-01-03 20:02:36', 2, 'Qui ut quaerat dolore et.'),
(15, 409, 76, '2021-02-06 00:04:44', 2, 'Et qui quisquam repudiandae molestiae quis.'),
(17, 410, 76, '2020-12-24 02:38:34', 4, 'Exercitationem facilis quasi non.'),
(19, 413, 76, '2021-03-04 20:05:22', 3, 'Corporis et maxime.'),
(22, 414, 77, '2021-01-18 01:21:43', 3, 'Esse sed ad similique consequuntur commodi.'),
(25, 414, 77, '2021-01-26 01:21:43', 4, 'Sit possimus eos recusandae.'),
(26, 416, 77, '2021-03-01 08:55:41', 3, 'Corrupti quas est.'),
(27, 416, 77, '2021-03-04 08:55:41', 5, 'Sit vel quod fugiat quas.'),
(28, 418, 77, '2021-02-09 12:06:29', 1, 'Neque architecto incidunt minus.'),
(29, 418, 77, '2021-02-10 12:06:29', 3, 'Mollitia sapiente deleniti est.'),
(30, 419, 78, '2021-02-23 01:09:37', 1, 'Dolor est repudiandae.'),
(31, 420, 78, '2021-03-02 15:59:28', 5, 'Et officia et dicta.'),
(32, 422, 78, '2021-03-04 04:44:25', 1, 'Quis exercitationem at.'),
(33, 422, 78, '2021-03-06 04:44:25', 1, 'Voluptatem et nisi voluptatem.'),
(34, 423, 78, '2021-02-14 14:20:41', 1, 'Tempora quo eaque.'),
(35, 423, 8, '2021-03-16 15:25:27', 5, 'ssssdxxxxsssss'),
(36, 324, 9, '2021-05-13 20:09:14', 5, 'excellent'),
(37, 323, 9, '2021-05-13 20:13:52', 3, 'test'),
(38, 325, 9, '2021-05-13 20:14:40', 4, 'test'),
(39, 323, 13, '2021-05-13 20:16:09', 4, 'ssc'),
(40, 324, 13, '2021-05-13 20:17:22', 5, 'ddd'),
(41, 325, 13, '2021-05-13 20:18:12', 5, 'ddd');

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`id`, `title`) VALUES
(2, 'ROLE_ADMIN'),
(3, 'ROLE_USER');

-- --------------------------------------------------------

--
-- Structure de la table `role_user`
--

CREATE TABLE `role_user` (
  `role_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `role_user`
--

INSERT INTO `role_user` (`role_id`, `user_id`) VALUES
(2, 63),
(3, 112);

-- --------------------------------------------------------

--
-- Structure de la table `search`
--

CREATE TABLE `search` (
  `id` int(11) NOT NULL,
  `q` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `min` double NOT NULL,
  `max` double NOT NULL,
  `check_in` datetime DEFAULT NULL,
  `check_out` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `search`
--

INSERT INTO `search` (`id`, `q`, `min`, `max`, `check_in`, `check_out`) VALUES
(25, NULL, 182, 992, '2021-05-18 05:20:22', '2021-05-28 05:20:22'),
(26, 'gh', 1122, 2302, NULL, NULL),
(27, 'gh', 22, 2897, NULL, NULL),
(28, NULL, 312, 1012, NULL, NULL),
(29, NULL, 22, 282, NULL, NULL),
(30, NULL, 22, 2897, '2021-06-05 01:50:37', '2021-06-18 01:50:37'),
(31, NULL, 22, 2897, '2021-06-03 01:53:13', '2021-06-18 01:53:13');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hash` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descreption` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `activation_token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `creat_at` datetime NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `hash`, `avatar`, `descreption`, `slug`, `activation_token`, `creat_at`, `address`, `phone`) VALUES
(6, 'Marc', 'Aubry', 'sgaillard@bouygtel.fr', '$2y$13$Itp2HJw36whIpWWJ0boDJ.krbjGFOIrk2tLuznx9Pvo2mSNUtYXfa', 'avatar_2x.png', 'Rerum quos similique repellatRerum quos similique repellat Rerum quos similique repellat.', 'Marc-Aubry', NULL, '0000-00-00 00:00:00', NULL, NULL),
(7, 'Rémyqqsssssqqssssswwwww', 'Alecssxxwwwsss', 'masrine80@wadoo.fr', '$2y$13$NEmlBN8rdoQOcK554ZpjpeyxwNzf0Vl9hgEOlRnodA/jMdqDvHt7O', '7cc60bc9f8eb46284955f00688533485.png', 'Repusdiasndswwwwwsssae velit sswwwwwwwwsducimus.', 'R-myqqsssssqqssssswwwww-Alecssxxwwwsss', NULL, '0000-00-00 00:00:00', NULL, NULL),
(8, 'Jérôme', 'Charrier', 'claude.rousseau@joseph.org', '$2y$13$KYwuYmccsybKUFchZXHaa.PSQVg1IG.vNW77rh9vsaXxmzWUxs5FK', '096bdbe7b41506a573203fa810402279.jpeg', 'Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.', 'J-r-me-Charrier', NULL, '0000-00-00 00:00:00', NULL, NULL),
(9, 'Édouard', 'Roger', 'henri13@voila.fr', '$2y$13$KYwuYmccsybKUFchZXHaa.PSQVg1IG.vNW77rh9vsaXxmzWUxs5FK', 'avatar_2x.png', 'Cum ut quibusdam omnis.', '-douard-Roger', NULL, '0000-00-00 00:00:00', NULL, NULL),
(10, 'Chantal', 'Marques', 'ldelmas@pruvost.org', '$2y$13$KYwuYmccsybKUFchZXHaa.PSQVg1IG.vNW77rh9vsaXxmzWUxs5FK', 'avatar_2x.png', 'Accusantium dolorem explicabo.', 'Chantal-Marques', NULL, '0000-00-00 00:00:00', NULL, NULL),
(11, 'Marine', 'Delahaye', 'david.marin@weber.net', '$2y$13$L3sPkuVVrFVWePbsncmOCe9oGmK5BA.jVDoebm5TUsk51Btui1Sci', 'avatar_2x.png', 'Et sed ratione culpa et.', 'Marine-Delahaye', NULL, '0000-00-00 00:00:00', NULL, NULL),
(12, 'Juliette', 'Deschamps', 'julie.deschamps@lebreton.com', '$2y$13$Zpsir/qt4afNSqnIEgEQ0unuUd/JBijplLhy4HF6RdJpKCBC1BcFu', 'avatar_2x.png', 'Labore hic officiis magnam.', 'Juliette-Deschamps', NULL, '0000-00-00 00:00:00', NULL, NULL),
(13, 'Michelle', 'Mercier', 'auger.roger@yahoo.fr', '$2y$13$aPmavbT6MLNLgZDChPexaewzGl9U8ub15LtzKA8eZods1yHgx.82q', 'avatar_2x.png', 'Sit sint eligendi provident at.', 'Michelle-Mercier', NULL, '0000-00-00 00:00:00', NULL, NULL),
(14, 'Joseph', 'Vasseur', 'suzanne63@lagarde.fr', '$2y$13$jJt9zVB5eMHTmesraJxwae6UQlu4VECi5XstzIv.9ZeGYLZ3Q1V2a', 'avatar_2x.png', 'Aut quia excepturi id amet.', 'Joseph-Vasseur', NULL, '0000-00-00 00:00:00', NULL, NULL),
(55, 'www', 'www', 'wxwbx@hqshsgd.tn', '$2y$13$07VC5qRMgj9DUZJ4HT/M7uQ5ajzgThE05ZRlIgSAmy4S2iaiLBT4e', 'avatar_2x.png', NULL, 'www-www', '983c14e854bee5af8f13d4fcfa3c5b68', '0000-00-00 00:00:00', NULL, NULL),
(58, 'www', 'www', 'xxxxed.yassin@gmail.com', '$2y$13$IplHgKPgtTsRYZJ6kiyUl.LtNeEgUwxvmJlqVgW0Ij48az70rA0Si', 'avatar_2x.png', NULL, 'www-www', NULL, '0000-00-00 00:00:00', NULL, NULL),
(59, 'www', 'www', 'siawwwwed.yassin@gmail.com', '$2y$13$IewoZZq90D4/MQgnFQymiuFct24TyFt8AMhJonGWKQuBKYT.P8St2', 'avatar_2x.png', NULL, 'www-www', '1093a842242fba8ca60243b118d26b17', '0000-00-00 00:00:00', NULL, NULL),
(60, 'www', 'www', 'sxxxiaed.yassin@gmail.com', '$2y$13$0T1q56gpbIC0DudzTZQLWeEcmqfyFufNw6PTehvOwpcqJHlf5asB6', 'avatar_2x.png', NULL, 'www-www', '907b4fd5b008696d4425c6f5fc6ae4e8', '0000-00-00 00:00:00', NULL, NULL),
(61, 'www', 'www', 'siasssed.yassin@gmail.com', '$2y$13$2UQyzHWdHaOuzvn3Lo5bQucLCyEqjMZyFwtpeCP5BJd9CN52iU3N6', 'avatar_2x.png', 'wx', 'www-www', NULL, '2021-02-26 22:52:18', NULL, NULL),
(63, 'yassin', 'zarga', 'saiiied.yassiiin@gmail.com', '$2y$13$tfNdiXnxXkx3kDQcH5UTruhzthd5WakhaS3XDVp/X7NsvqqvEFf8e', 'avatar_2x.png', 'Voluptate non quis cupiditate.', 'yassin-zarga', '', '2021-03-01 22:25:00', NULL, NULL),
(69, 'Paul', 'Dumont', 'albert.sabine@bouygtel.fr', '$2y$13$IZbaOmtOSg7eGh.Sz6qzg.huTfGOdnzX1J1BIqDRrOhginc9h96h.', 'User_2.png', 'Dolorum doloremque natus omnis ipsum.', 'Paul-Dumont', '0de0572858b112910b467e348ae7cebb', '2021-03-03 15:27:50', NULL, NULL),
(70, 'Timothée', 'Picard', 'laurence16@colas.fr', '$2y$13$wBcqFOulUzsR9ExPmTLUA.Y42VsUGMj2ktWxtOqOd0WvTFzg2mAcG', 'User_2.png', 'Ullam id sed qui.', 'Timoth-e-Picard', '15cd56fd7884a1de85491035df63a0cf', '2021-03-03 15:27:51', NULL, NULL),
(71, 'Eugène', 'Prevost', 'auguste.jacob@maillet.fr', '$2y$13$744Ts3ovdrjxEAYUAYZ7muY7cpTS5pKiimXY/XOMpV8NG0ujS6JNy', 'User_2.png', 'Alias sint quo quaerat possimus.', 'Eug-ne-Prevost', '593b4b1fa7fc85ed98653eabc922becf', '2021-03-03 15:27:52', NULL, NULL),
(72, 'Christiane', 'Gregoire', 'lacroix.gregoire@orange.fr', '$2y$13$Os6bO.G4GZN/xfHasgsJj.3M/kVIQjmWX1e/7sqe0YqeInwcso36y', 'User_2.png', 'Expedita iure accusantium voluptates.', 'Christiane-Gregoire', 'f56114adc70d2c26fe50f6c094d5342f', '2021-03-03 15:27:53', NULL, NULL),
(73, 'Marcel', 'Tessier', 'constance.boutin@paris.com', '$2y$13$DHTF44gfnQ533.qFNnkgl.QBsJuBxulgt/KFcN6iLTAp7y0vmsmHS', 'User_2.png', 'Velit illum voluptatem dolorem.', 'Marcel-Tessier', '33c898f9a9a7ab4232cb1837b77a5331', '2021-03-03 15:27:54', NULL, NULL),
(74, 'Luce', 'Mathieu', 'nicolas.alexandre@robert.net', '$2y$13$QAfKdsNXqaadPquCfWPqsOQLg.3pBLmd/agAaotUze8.Xd6BrxEs2', 'User_2.png', 'Accusantium sint quod iure quidem.', 'Luce-Mathieu', '03404ccc20d03e5c74b8949897d5bd21', '2021-03-11 22:37:25', NULL, NULL),
(75, 'Alexandria', 'Rodriguez', 'cmunoz@tiscali.fr', '$2y$13$gMGmP4mwUrsQX5ewKqMM3.lfwXbhwju.Y5I9uzVp0USavOtd.EAoW', 'User_2.png', 'Omnis cupiditate exercitationem tempore.', 'Alexandria-Rodriguez', 'ab7f71f2db6d32f641ffbb6b19cfb871', '2021-03-11 22:37:26', NULL, NULL),
(76, 'Monique', 'Pichon', 'lebon.suzanne@imbert.fr', '$2y$13$ISL7doCffokuUfG1Ulw5me/.UkaKENMvyQXXF3NTOCPN.WQbf5g/m', 'User_2.png', 'Itaque expedita aliquam nihil.', 'Monique-Pichon', 'cc9b7ed462b0b611c5753c740ea3b9c3', '2021-03-11 22:37:27', NULL, NULL),
(77, 'Célina', 'Lecoq', 'kbesnard@caron.fr', '$2y$13$WESQ47fFp/rPP09sSGjNgu5bbmFcNX8vHk8tv5dkFSi/fxavYGDDe', 'User_2.png', 'Hic hic accusamus doloremque ab quia.', 'C-lina-Lecoq', 'c96130701395108e219a882c10174021', '2021-03-11 22:37:28', NULL, NULL),
(78, 'Alexandrie', 'Rousseau', 'iribeiro@orange.fr', '$2y$13$a.iq07AoNUPOa4IRhYQbrelpEPLXv4KoP.s3ficjlzYQgFk0cKBX6', 'avatar_2x.png', 'A sit qui iure sunt quo.', 'Alexandrie-Rousseau', 'db79a3258be3f29a28c8ecbd9c3bb020', '2021-03-11 22:37:29', NULL, NULL),
(112, 'yassins', 'zarga', 'saied.yassin@gmail.com', '$2y$13$Or37At1rlngD3MGcW9W1vOFi5sW4ddqAeSY5xQnTgi8pNNqQf8wWK', 's6wv1i9qc.jpeg', 'is simply dummy text of the printing and tesetting industry. Lorem Ipsum yes man 12121,,,,', 'yassin-zargag59', '', '2021-10-14 23:55:35', 'El Omrane Superieur - Rue 6259.', 11873106),
(113, 'azerty', 'man', 'azerty@gamil.com', '$2y$13$Or37At1rlngD3MGcW9W1vOFi5sW4ddqAeSY5xQnTgi8pNNqQf8wWK', 'avatar_2x.png', NULL, 'azerty-man', '60c6df60f2bcda2044fe35bf7d913dac', '2021-10-17 01:16:05', NULL, 5),
(114, 'yassin', 'zarga', 'zz.yassin@gmail.com', '$2y$13$Q0inRq8mjKOVL2kuihIZWeIo13CjSvJErt6wV9bQbiNPlXEaHN2Q6', 'avatar_2x.png', NULL, 'yassin-zarga4', '0dcea64a5d11f5ddb51258f1a1a4d710', '2021-10-18 04:10:21', NULL, 21);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `ad`
--
ALTER TABLE `ad`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_77E0ED58F675F31B` (`author_id`);

--
-- Index pour la table `bouking`
--
ALTER TABLE `bouking`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_CA5C62FD48D08386` (`bouker_id`),
  ADD KEY `IDX_CA5C62FD4F34D596` (`ad_id`);

--
-- Index pour la table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_C53D045F4F34D596` (`ad_id`);

--
-- Index pour la table `rating`
--
ALTER TABLE `rating`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_D88926224F34D596` (`ad_id`),
  ADD KEY `IDX_D8892622A76ED395` (`user_id`);

--
-- Index pour la table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `role_user`
--
ALTER TABLE `role_user`
  ADD PRIMARY KEY (`role_id`,`user_id`),
  ADD KEY `IDX_332CA4DDD60322AC` (`role_id`),
  ADD KEY `IDX_332CA4DDA76ED395` (`user_id`);

--
-- Index pour la table `search`
--
ALTER TABLE `search`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `ad`
--
ALTER TABLE `ad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=440;

--
-- AUTO_INCREMENT pour la table `bouking`
--
ALTER TABLE `bouking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=180;

--
-- AUTO_INCREMENT pour la table `image`
--
ALTER TABLE `image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=442;

--
-- AUTO_INCREMENT pour la table `rating`
--
ALTER TABLE `rating`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT pour la table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `search`
--
ALTER TABLE `search`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `ad`
--
ALTER TABLE `ad`
  ADD CONSTRAINT `FK_77E0ED58F675F31B` FOREIGN KEY (`author_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `bouking`
--
ALTER TABLE `bouking`
  ADD CONSTRAINT `FK_CA5C62FD48D08386` FOREIGN KEY (`bouker_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FK_CA5C62FD4F34D596` FOREIGN KEY (`ad_id`) REFERENCES `ad` (`id`);

--
-- Contraintes pour la table `image`
--
ALTER TABLE `image`
  ADD CONSTRAINT `FK_C53D045F4F34D596` FOREIGN KEY (`ad_id`) REFERENCES `ad` (`id`);

--
-- Contraintes pour la table `rating`
--
ALTER TABLE `rating`
  ADD CONSTRAINT `FK_D88926224F34D596` FOREIGN KEY (`ad_id`) REFERENCES `ad` (`id`),
  ADD CONSTRAINT `FK_D8892622A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `role_user`
--
ALTER TABLE `role_user`
  ADD CONSTRAINT `FK_332CA4DDA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_332CA4DDD60322AC` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
