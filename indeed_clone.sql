/*
 Navicat Premium Data Transfer

 Source Server         : demon
 Source Server Type    : MySQL
 Source Server Version : 80035 (8.0.35)
 Source Host           : localhost:3306
 Source Schema         : indeed_clone

 Target Server Type    : MySQL
 Target Server Version : 80035 (8.0.35)
 File Encoding         : 65001

 Date: 02/01/2024 22:23:37
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for all_jobs
-- ----------------------------
DROP TABLE IF EXISTS `all_jobs`;
CREATE TABLE `all_jobs`  (
  `id` int NOT NULL,
  `created_at` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `experience` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `profile` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `salary` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `technology` varbinary(255) NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of all_jobs
-- ----------------------------
INSERT INTO `all_jobs` VALUES (1, '2024-01-02', 'Good with java and spring boot', '0-2 Years', 'Java Developer', 'Rs 500000-800000', 0xACED0005757200135B4C6A6176612E6C616E672E537472696E673BADD256E7E91D7B470200007870000000047400044A61766174000448544D4C7400034353537400055265616374, 'Online');
INSERT INTO `all_jobs` VALUES (2, '2024-01-02', 'Good In Node JS', '3-5 Years', 'Node JS Developer', 'Rs 1000000-1500000', 0xACED0005757200135B4C6A6176612E6C616E672E537472696E673BADD256E7E91D7B4702000078700000000474000A4A6176615363726970747400074E6F64652E6A7374000343535374000448544D4C, 'Offline');
INSERT INTO `all_jobs` VALUES (52, '2024-01-02', 'Azure & AWS CI/CD', '5 Years or more', 'DevOPS Engineer', 'Rs 2000000 or more', 0xACED0005757200135B4C6A6176612E6C616E672E537472696E673BADD256E7E91D7B47020000787000000006740006446F636B65727400034157537400044A6176617400055265616374740007416E67756C61727400074E6F64652E6A73, 'Offline');

-- ----------------------------
-- Table structure for all_jobs_seq
-- ----------------------------
DROP TABLE IF EXISTS `all_jobs_seq`;
CREATE TABLE `all_jobs_seq`  (
  `next_val` bigint NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of all_jobs_seq
-- ----------------------------
INSERT INTO `all_jobs_seq` VALUES (151);

SET FOREIGN_KEY_CHECKS = 1;
