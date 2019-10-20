/*
SQLyog Ultimate v11.42 (64 bit)
MySQL - 5.0.87-community-nt : Database - dx_jd
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`dx_jd` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;

USE `dx_jd`;

/*Table structure for table `article` */

DROP TABLE IF EXISTS `article`;

CREATE TABLE `article` (
  `id` int(11) NOT NULL auto_increment,
  `title` char(99) collate utf8_bin default NULL COMMENT '文章标题',
  `text` longtext collate utf8_bin COMMENT '文章',
  `addtime` text collate utf8_bin COMMENT '添加时间',
  `fabiaoren` char(99) collate utf8_bin default NULL COMMENT '用户id',
  `liulan` int(11) default NULL COMMENT '浏览数量',
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `article` */

insert  into `article`(`id`,`title`,`text`,`addtime`,`fabiaoren`,`liulan`) values (10,'店铺发布商品后台类目所含的子类目','<p><span style=\"font-size: 14px;\">选错类目会影响：</span></p><p><span style=\"font-size: 14px;\">1：影响商品转化率&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></p><p><span style=\"font-size: 14px;\">2：影响店铺交易额&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></p><p><span style=\"font-size: 14px;\">3：影响分销商品市场搜索精准率&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></p><p><span style=\"font-size: 14px;\">4：影响分销商品市场商品曝光度&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></p><p><span style=\"font-size: 14px;\">为了避免大家发错或不确定所发布商品对应的后台大类目，下表列举当前后台类目所包含的明细子类目（举例说明：我要发布苹果这类商品，苹果属于水果，水果又被包含在食品这个大类目下，那么发布商品选择的对应后台类目就是食品），请参照发布。</span></p><p><br/></p><p style=\"text-align: center;\"><span style=\"font-size: 14px;\">另：如有新增或调整，我们会第一时间更新！</span></p><p style=\"text-align: center;\"><span style=\"font-size: 14px;\">点击图片可查看大图</span></p><p><span style=\"font-size: 14px;\"><br/></span></p><p style=\"text-align: center;\"><span style=\"font-size: 14px;\"><img src=\"https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/68add2de-03ed-48c7-ae1c-9cc925f23c9f.jpg\" title=\"\" alt=\"\"/></span></p><p><br/></p><p style=\"text-align: center;\"><span style=\"font-size: 14px;\">店铺主营类目及类目细项</span></p><p style=\"text-align: center;\"><span style=\"font-size: 14px;\">创建店铺时，请根据店铺主营方向选择一个主营类目，跨类目经营有赞暂无相关限制。</span></p><p style=\"text-align: center;\"><span style=\"font-size: 14px;\">点击图片可查看大图</span></p><p><span style=\"font-size: 14px;\"><br/></span></p><p style=\"text-align: center;\"><span style=\"font-size: 14px;\"><img src=\"https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/5b638a5a-9878-40f8-8cd4-355fd982ece6.jpg\" title=\"\" alt=\"\"/></span></p><p><br/></p>','1558109322654','o665p',0),(14,'我的微信','<p><br/></p><h1 style=\"text-align: center;\"><span style=\"color: rgb(255, 0, 0);\">我的微信</span></h1><p><br/></p><p><img src=\"https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/753f10d7-a143-4b6c-934b-12d059857dd8.jpg\" title=\"\" alt=\"\" width=\"787\" height=\"896\"/></p>','1558109329156','o665p',0),(15,'测试','<p><img src=\"https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/2d817f7b-e272-40c4-b0f2-f3fd0d077190.jpg\" title=\"\" alt=\"\"/><img src=\"https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/79f45cc1-c6be-4efc-9c58-b00e88fa0b78.jpg\" title=\"\" alt=\"\"/></p>','1558109335505','o665p',0);

/*Table structure for table `dpxx` */

DROP TABLE IF EXISTS `dpxx`;

CREATE TABLE `dpxx` (
  `id` int(11) NOT NULL auto_increment,
  `logo` text collate utf8_bin COMMENT '店铺logo',
  `name` char(99) collate utf8_bin default NULL COMMENT '店铺名称',
  `jydz` char(99) collate utf8_bin default NULL COMMENT '经营地址',
  `jydz_text` char(99) collate utf8_bin default NULL COMMENT '详细地址',
  `lxr_name` char(99) collate utf8_bin default NULL COMMENT '联系人',
  `lxr_phone` char(13) collate utf8_bin default NULL COMMENT '联系电话',
  `gywm` text collate utf8_bin COMMENT '关于我们',
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `dpxx` */

insert  into `dpxx`(`id`,`logo`,`name`,`jydz`,`jydz_text`,`lxr_name`,`lxr_phone`,`gywm`) values (1,'https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/587b2e19-2819-4769-906d-0b096538db60.jpg','独行工匠','广东省/黄埔区/长岭街道','萝岗敏捷广场','程国庆','13538190372','快速切图，为雇主打造兼容性完好的网页；nodejs后台交互！小程序开发！网页前端开发！网页切图！数据对接！混合开发/vue组件开发/uni-app混合开发/公众号开发');

/*Table structure for table `dxtupian` */

DROP TABLE IF EXISTS `dxtupian`;

CREATE TABLE `dxtupian` (
  `id` int(11) NOT NULL auto_increment,
  `name` char(99) collate utf8_bin default NULL,
  `path` text collate utf8_bin,
  `addTime` char(99) collate utf8_bin default NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `dxtupian` */

insert  into `dxtupian`(`id`,`name`,`path`,`addTime`) values (1,'QQ图片20181010165508.jpg','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/3db65175-af5e-4059-9e8a-817624d0da0b.jpg','1560491507945'),(2,'未标题-1.jpg','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/59073d4e-6cc0-4917-96e1-3e3836bb46a2.jpg','1560492022505'),(3,'banner.jpg','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/e30a22e7-a47f-44be-a317-72a5b2369b25.jpg','1560590307476');

/*Table structure for table `fenlei` */

DROP TABLE IF EXISTS `fenlei`;

CREATE TABLE `fenlei` (
  `id` int(11) NOT NULL auto_increment,
  `name` char(99) collate utf8_bin default NULL COMMENT '分类名称',
  `url` text collate utf8_bin,
  `addtime` char(99) collate utf8_bin default NULL COMMENT '添加时间',
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `fenlei` */

insert  into `fenlei`(`id`,`name`,`url`,`addtime`) values (1,'分类1','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/3db65175-af5e-4059-9e8a-817624d0da0b.jpg','1571583223884'),(2,'分类2','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/3db65175-af5e-4059-9e8a-817624d0da0b.jpg','1571584144048');

/*Table structure for table `fenleier` */

DROP TABLE IF EXISTS `fenleier`;

CREATE TABLE `fenleier` (
  `id` int(11) NOT NULL auto_increment,
  `name` char(99) collate utf8_bin default NULL,
  `url` text collate utf8_bin,
  `fj` int(11) default NULL,
  `addtime` char(99) collate utf8_bin default NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10007 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `fenleier` */

insert  into `fenleier`(`id`,`name`,`url`,`fj`,`addtime`) values (10001,'2-1','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/3db65175-af5e-4059-9e8a-817624d0da0b.jpg',2,'1571586120807'),(10002,'2-2','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/3db65175-af5e-4059-9e8a-817624d0da0b.jpg',2,'1571586123900'),(10003,'2-3','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/3db65175-af5e-4059-9e8a-817624d0da0b.jpg',2,'1571586126184'),(10004,'2-4','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/3db65175-af5e-4059-9e8a-817624d0da0b.jpg',2,'1571586129732'),(10005,'1-1','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/3db65175-af5e-4059-9e8a-817624d0da0b.jpg',1,'1571587498073'),(10006,'1-2','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/3db65175-af5e-4059-9e8a-817624d0da0b.jpg',1,'1571587501207');

/*Table structure for table `fenleisan` */

DROP TABLE IF EXISTS `fenleisan`;

CREATE TABLE `fenleisan` (
  `id` int(11) NOT NULL auto_increment,
  `name` char(99) collate utf8_bin default NULL,
  `url` text collate utf8_bin,
  `fj` int(11) default NULL,
  `fjs` int(11) default NULL,
  `addtime` char(99) collate utf8_bin default NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=100005 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `fenleisan` */

insert  into `fenleisan`(`id`,`name`,`url`,`fj`,`fjs`,`addtime`) values (100001,'2-4-1','',2,10004,'1571586876941'),(100002,'2-4-2','',2,10004,'1571586883064'),(100003,'2-1-1','',2,10001,'1571586902928'),(100004,'2-1-2','',2,10001,'1571586905869');

/*Table structure for table `imgku` */

DROP TABLE IF EXISTS `imgku`;

CREATE TABLE `imgku` (
  `id` int(11) NOT NULL auto_increment,
  `name` char(99) collate utf8_bin default NULL COMMENT '图片名称',
  `path` text collate utf8_bin COMMENT '图片地址',
  `addTime` char(99) collate utf8_bin default NULL COMMENT '添加时间',
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `imgku` */

insert  into `imgku`(`id`,`name`,`path`,`addTime`) values (1,'dsf_c.png','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/96a8150e-1b92-42e0-8bf4-cfedb1b8cfb8.png','1557586917959'),(2,'dsf_b.png','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/6738c464-01fc-409f-90c9-56fec3f42057.png','1557587013524'),(3,'erweima.jpg','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/e5238993-19d4-4811-9c69-f153e92db8f4.jpg','1557587016473'),(4,'banner.jpg','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/aee1b32c-39cd-4f69-926e-9c73f4c5a022.jpg','1557587340182'),(5,'dsf_d.png','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/063ee868-f646-4228-a95c-d628e2cc45d5.png','1557587405840'),(6,'add_erimg.png','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/1c38b8d5-c65d-4e01-b9a9-71e4e8b8a4d5.png','1557587441262'),(7,'dfdf_a.jpg','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/587b2e19-2819-4769-906d-0b096538db60.jpg','1557587445438'),(8,'yiguoqi.png','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/ff8c5695-0f48-4f94-b938-7920ea74c4aa.png','1557587449767'),(9,'qc_er.png','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/2e1ba0c2-4a5b-43b5-a451-16c74a13d229.png','1557587455491'),(10,'shop.png','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/aa9f4466-bad9-42bf-a945-5be61f3ec79e.png','1557587459666'),(11,'ddf_bb_c.png','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/83544ca9-d202-4b84-9296-6d349d003f0a.png','1557587462341'),(12,'banner.jpg','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/28fa5158-9f08-4e6b-be91-3c442c4a6d39.jpg','1557587498073'),(13,'fengmian.jpg','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/56d08b42-bcfa-4e0a-8f3f-a4846c3ee049.jpg','1557587500254'),(14,'success_icon.png','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/82e372d1-dfe7-4d39-9184-10ac4fdf785f.png','1557587502568'),(15,'fengmian.jpg','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/8848a5a1-5e2e-4168-b872-4f58f426727a.jpg','1557587539803'),(16,'success_icon.png','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/9e407554-53fa-44a1-8057-dbf9702c4e04.png','1557587542398'),(17,'fengmian.jpg','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/277b3917-9c14-4239-bc4c-c045f7d6d486.jpg','1557587544796'),(18,'zaixian.jpg','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/94e3d237-f3e1-4fe3-b7b9-6604981b1197.jpg','1557587604288'),(19,'xw_bg.jpg','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/27ff070c-7285-4635-bce8-99546a54ebc9.jpg','1557587616513'),(20,'fengmian.jpg','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/102147b6-4f1e-434b-97fd-df3a196af856.jpg','1557587653478'),(21,'gouxuan.png','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/672668eb-1a8d-4f9e-b46d-c2516a6db438.png','1557587681798'),(22,'dfs_sdf.jpg','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/815e189f-c455-4152-a819-7f3443126b2c.jpg','1557589361957'),(23,'bg_dert.jpg','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/c1fb48b2-7c34-4f23-affd-af645350e8ac.jpg','1557590955831'),(24,'Fq9ZZMrmZBfm-_NKC3ad3rugInOG.jpg','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/8cd9b4f7-70ba-437d-affb-be2a31f504ee.jpg','1557927803648'),(25,'FqjoQKQBMkrNBNbQVRri5BubVi-D.png','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/aa87a11e-c5c8-4eee-b9e0-fe861cbd502e.png','1557927806331'),(26,'FuD4MKnowdivk_1R9Cdnq9y9BKca.jpg','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/0412c5fc-85a9-402d-a587-ec5685411b01.jpg','1557927809017'),(27,'FmsJRfrSehLv7vErLY8XaYTmu7lA.jpg','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/a0d8fd55-cfa7-455e-9347-6b64fae70558.jpg','1557929249188'),(28,'Fl_UYhsA6imoF1iuszthqOPCnUsU.jpg','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/a0d8e88d-b666-409d-ba91-abc375dc56fa.jpg','1557929251547'),(29,'FiMlD6VGgjvAv4ckMwfnyTvnwyAU.jpg','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/61ea910c-8a68-4698-a0ef-cd3c0d501bd0.jpg','1557929254516'),(30,'FjtmclfgGegqPsrw1iU3SjPeinjT.jpg','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/132d64b1-d283-4969-9ecb-66f814c5995b.jpg','1557929257135'),(31,'FhW0wyHJ9eHwzOx42fUTYCBSV5vF.webp','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/e3e82e00-409e-4c32-9d4c-58df9e5fa471.webp','1557929259067'),(32,'FqjoQKQBMkrNBNbQVRri5BubVi-D.png','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/1bee5d63-c6fb-43ee-bd17-4862bccf30bf.png','1558107439485'),(33,'FuD4MKnowdivk_1R9Cdnq9y9BKca.jpg','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/d34bb443-098a-42ef-b6da-f4287f10dadf.jpg','1558437739404'),(34,'FjtmclfgGegqPsrw1iU3SjPeinjT.jpg','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/59d428b0-1940-4bcd-b59c-9251e1d403a9.jpg','1558439262621');

/*Table structure for table `spxq` */

DROP TABLE IF EXISTS `spxq`;

CREATE TABLE `spxq` (
  `id` int(11) NOT NULL auto_increment,
  `name` char(99) collate utf8_bin default NULL COMMENT '商品名称',
  `fxms` char(99) collate utf8_bin default NULL COMMENT '分享描述',
  `spt` text collate utf8_bin COMMENT '商品图片',
  `jiage` int(11) default NULL COMMENT '价格',
  `kucun` int(11) default NULL COMMENT '库存',
  `yunfei` float default NULL COMMENT '运费',
  `lemu` int(11) default NULL COMMENT '商品类目',
  `spmd` text collate utf8_bin COMMENT '商品卖点',
  `xiqngqing` longtext collate utf8_bin COMMENT '商品详情',
  `addtime` char(99) collate utf8_bin default NULL COMMENT '添加时间',
  `sku` text collate utf8_bin,
  `sd_drtyx` text collate utf8_bin,
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `spxq` */

insert  into `spxq`(`id`,`name`,`fxms`,`spt`,`jiage`,`kucun`,`yunfei`,`lemu`,`spmd`,`xiqngqing`,`addtime`,`sku`,`sd_drtyx`) values (1,'【夏季必备 驱蚊神器】日本叮叮环保驱蚊膏 天然安全宝宝孕妇皆可用','微信分享给好友时会显示，建议36个字以内','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/0412c5fc-85a9-402d-a587-ec5685411b01.jpg,https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/aa87a11e-c5c8-4eee-b9e0-fe861cbd502e.png,https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/8cd9b4f7-70ba-437d-affb-be2a31f504ee.jpg',200,100,20,44,'商品卖点商品卖点商品卖点23','<p style=\"margin-bottom: 1em; font-family: Helvetica, &quot;STHeiti STXihei&quot;, &quot;Microsoft JhengHei&quot;, &quot;Microsoft YaHei&quot;, Tohoma, Arial; white-space: normal;\"><span style=\"color: rgb(255, 0, 0);\"><strong>新旧包装随机发货</strong></span></p><p style=\"margin-bottom: 1em; font-family: Helvetica, &quot;STHeiti STXihei&quot;, &quot;Microsoft JhengHei&quot;, &quot;Microsoft YaHei&quot;, Tohoma, Arial; white-space: normal;\"><img src=\"https://img.yzcdn.cn/upload_files/2019/04/17/Fr700ODyylbZwL2j_F7rrxe-zi52.jpg!730x0.jpg\" alt=\"\"/><img src=\"https://img.yzcdn.cn/upload_files/2019/04/17/Ftv2XFqQStaTn8yT3BNTkw1LB02j.jpg!730x0.jpg\" alt=\"\"/><img src=\"https://img.yzcdn.cn/upload_files/2019/04/17/FgkQUzYL_QO4FRQPcjFxFPPfvhRq.jpg!730x0.jpg\" alt=\"\"/><img src=\"https://img.yzcdn.cn/upload_files/2019/04/17/FkKp0xaFgdB8EinwX-Cbuq_zp3WD.jpg!730x0.jpg\" alt=\"\"/><img src=\"https://img.yzcdn.cn/upload_files/2019/04/17/FrV1-HprU-wO0AsIUA2G4AexhQzg.jpg!730x0.jpg\" alt=\"\"/><img src=\"https://img.yzcdn.cn/upload_files/2019/04/17/FnJrZ_IX3DIq9RqADZ7fiG7WPPGK.jpg!730x0.jpg\" alt=\"\"/><img src=\"https://img.yzcdn.cn/upload_files/2019/04/17/FlLadPTCTzVmp4zdDoymJx14xqtA.jpg!730x0.jpg\" alt=\"\"/><img src=\"https://img.yzcdn.cn/upload_files/2019/04/23/FlMu3cPAhi-kWHYvI_eaSQegc6Xl.jpg!730x0.jpg\"/><img src=\"https://img.yzcdn.cn/upload_files/2019/04/17/Fi95CffGZuO1LlhZroZhbzn7GCCZ.jpg!730x0.jpg\" alt=\"\"/><img src=\"https://img.yzcdn.cn/upload_files/2019/04/17/FhkPnNJdoocsZ2tw2djdPyKVIvba.jpg!730x0.jpg\" alt=\"\"/></p><p><br/></p>','1558111209622',NULL,NULL),(2,'男士冰丝网眼内裤 中腰男士无痕平角裤 短裤 四角男内裤','分享描述23','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/132d64b1-d283-4969-9ecb-66f814c5995b.jpg,https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/61ea910c-8a68-4698-a0ef-cd3c0d501bd0.jpg,https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/a0d8e88d-b666-409d-ba91-abc375dc56fa.jpg,https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/a0d8fd55-cfa7-455e-9347-6b64fae70558.jpg,https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/0412c5fc-85a9-402d-a587-ec5685411b01.jpg,https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/61ea910c-8a68-4698-a0ef-cd3c0d501bd0.jpg,https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/0412c5fc-85a9-402d-a587-ec5685411b01.jpg,https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/aa87a11e-c5c8-4eee-b9e0-fe861cbd502e.png,https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/8cd9b4f7-70ba-437d-affb-be2a31f504ee.jpg,https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/672668eb-1a8d-4f9e-b46d-c2516a6db438.png,https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/102147b6-4f1e-434b-97fd-df3a196af856.jpg',50,200,0,47,'商品卖点商品卖点商品卖点商品卖点','<p style=\"margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; border: 0px; font-size: 12px; vertical-align: baseline; color: rgb(51, 51, 51); font-family: Helvetica, STHeiti, &quot;Microsoft YaHei&quot;, Verdana, Arial, Tahoma, sans-serif; background-color: rgb(255, 255, 255); text-align: center;\"><strong style=\"font-family: Helvetica, &quot;STHeiti STXihei&quot;, &quot;Microsoft JhengHei&quot;, &quot;Microsoft YaHei&quot;, Tohoma, Arial; font-size: 16px;\"><span style=\"color: rgb(255, 0, 0);\">&nbsp;</span></strong><br/></p><p style=\"margin-bottom: 1em; font-family: Helvetica, &quot;STHeiti STXihei&quot;, &quot;Microsoft JhengHei&quot;, &quot;Microsoft YaHei&quot;, Tohoma, Arial; white-space: normal;\"><img style=\"max-width:100%;height:auto;vertical-align: middle\"  src=\"https://img.yzcdn.cn/upload_files/2019/03/27/Fn1XZqNhjeG_02CEfVP9QQMda9d6.jpg!730x0.jpg\"/><img style=\"max-width:100%;height:auto;vertical-align: middle\"  src=\"https://img.yzcdn.cn/upload_files/2019/03/27/FiPZ_OMUDyYHRUJS4fBpL9Dr8q78.jpg!730x0.jpg\"/><img style=\"max-width:100%;height:auto;vertical-align: middle\"  src=\"https://img.yzcdn.cn/upload_files/2019/03/27/FqEScPJdjjAimVKgT4tUDdTE2caW.jpg!730x0.jpg\"/><img style=\"max-width:100%;height:auto;vertical-align: middle\"  src=\"https://img.yzcdn.cn/upload_files/2019/03/27/FnsAUjDpKmeML0Ct150Jx1RQW45l.jpg!730x0.jpg\"/><img style=\"max-width:100%;height:auto;vertical-align: middle\"  src=\"https://img.yzcdn.cn/upload_files/2019/03/27/Fle9X1jXIH_kVdFBAyVxTnbnwQTq.jpg!730x0.jpg\"/><img style=\"max-width:100%;height:auto;vertical-align: middle\"  src=\"https://img.yzcdn.cn/upload_files/2019/03/27/FjdRUwjMwwTy8YxAt8DI5eYKzF3d.jpg!730x0.jpg\"/><img style=\"max-width:100%;height:auto;vertical-align: middle\"  src=\"https://img.yzcdn.cn/upload_files/2019/03/27/FkvLDplqBJEMvh7JgMAMJMWyuXag.jpg!730x0.jpg\"/><img style=\"max-width:100%;height:auto;vertical-align: middle\"  src=\"https://img.yzcdn.cn/upload_files/2019/03/27/FrGlAkoT0woQFiz5LcqCfGuUscfK.jpg!730x0.jpg\"/></p><p style=\"margin-bottom: 1em; font-family: Helvetica, &quot;STHeiti STXihei&quot;, &quot;Microsoft JhengHei&quot;, &quot;Microsoft YaHei&quot;, Tohoma, Arial; white-space: normal;\"><img style=\"max-width:100%;height:auto;vertical-align: middle\"  src=\"https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/1cdd0667-83cc-46d0-b39b-31fb710daad7.jpg\" title=\"\" alt=\"\"/></p><p><br/></p>','1558362937864','[]','[]'),(3,'商品名','享描述享描述享描述','https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/1bee5d63-c6fb-43ee-bd17-4862bccf30bf.png,https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/e3e82e00-409e-4c32-9d4c-58df9e5fa471.webp',11,11,11,47,'各个地方','<p>打发第三方第三方第三方</p>','1558272370774','[{\"k\":\"颜色\",\"v\":[{\"name\":\"白色\",\"fmt\":\"https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/8cd9b4f7-70ba-437d-affb-be2a31f504ee.jpg\"},{\"name\":\"红色\",\"fmt\":\"https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/c1fb48b2-7c34-4f23-affd-af645350e8ac.jpg\"},{\"name\":\"黄色\",\"fmt\":\"https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/a0d8e88d-b666-409d-ba91-abc375dc56fa.jpg\"}]},{\"k\":\"尺码\",\"v\":[{\"name\":\"xl\"},{\"name\":\"xxl\"},{\"name\":\"xxxl\"},{\"name\":\"xxxxl\"}]}]','[{\"sku_name\":\"白色;xl\",\"xisnhi\":\"xl\",\"jiage\":\"1\",\"kucun\":\"10\",\"xiaoliang\":0,\"cbjia\":\"12\"},{\"sku_name\":\"白色;xxl\",\"xisnhi\":\"xxl\",\"jiage\":\"2\",\"kucun\":\"20\",\"xiaoliang\":0,\"cbjia\":\"11\"},{\"sku_name\":\"白色;xxxl\",\"xisnhi\":\"xxxl\",\"jiage\":\"3\",\"kucun\":\"30\",\"xiaoliang\":0,\"cbjia\":\"10\"},{\"sku_name\":\"白色;xxxxl\",\"xisnhi\":\"xxxxl\",\"jiage\":\"4\",\"kucun\":\"40\",\"xiaoliang\":0,\"cbjia\":\"9\"},{\"sku_name\":\"红色;xl\",\"xisnhi\":\"xl\",\"jiage\":\"5\",\"kucun\":\"50\",\"xiaoliang\":0,\"cbjia\":\"8\"},{\"sku_name\":\"红色;xxl\",\"xisnhi\":\"xxl\",\"jiage\":\"6\",\"kucun\":\"60\",\"xiaoliang\":0,\"cbjia\":\"7\"},{\"sku_name\":\"红色;xxxl\",\"xisnhi\":\"xxxl\",\"jiage\":\"7\",\"kucun\":\"70\",\"xiaoliang\":0,\"cbjia\":\"6\"},{\"sku_name\":\"红色;xxxxl\",\"xisnhi\":\"xxxxl\",\"jiage\":\"8\",\"kucun\":\"80\",\"xiaoliang\":0,\"cbjia\":\"5\"},{\"sku_name\":\"黄色;xl\",\"xisnhi\":\"xl\",\"jiage\":\"9\",\"kucun\":\"90\",\"xiaoliang\":0,\"cbjia\":\"4\"},{\"sku_name\":\"黄色;xxl\",\"xisnhi\":\"xxl\",\"jiage\":\"10\",\"kucun\":\"100\",\"xiaoliang\":0,\"cbjia\":\"3\"},{\"sku_name\":\"黄色;xxxl\",\"xisnhi\":\"xxxl\",\"jiage\":\"11\",\"kucun\":\"50\",\"xiaoliang\":0,\"cbjia\":\"2\"},{\"sku_name\":\"黄色;xxxxl\",\"xisnhi\":\"xxxxl\",\"jiage\":\"12\",\"kucun\":\"40\",\"xiaoliang\":0,\"cbjia\":\"1\"}]');

/*Table structure for table `user_info` */

DROP TABLE IF EXISTS `user_info`;

CREATE TABLE `user_info` (
  `id` int(11) NOT NULL auto_increment,
  `touxiang` text collate utf8_bin COMMENT '头像',
  `user_name` char(20) collate utf8_bin default NULL,
  `user_paw` char(20) collate utf8_bin default NULL,
  `dengji` int(6) default NULL COMMENT '等级',
  `addtime` char(20) collate utf8_bin default NULL COMMENT '添加时间',
  `token` text collate utf8_bin,
  `userId` char(99) collate utf8_bin default NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `user_info` */

insert  into `user_info`(`id`,`touxiang`,`user_name`,`user_paw`,`dengji`,`addtime`,`token`,`userId`) values (19,'https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/3db65175-af5e-4059-9e8a-817624d0da0b.jpg','admin','kiss1001',1,'1560491993939','i/UDpVbUii7H68UrDKSC34u2Ri7Rb6n5n7uDdYjsPMLa1gIAFyWMqY2Zpdu1dABOvfknNcF5mPRAqFML58DWLIQorZttt1ZxmnlI/2Cx/Lu/JTH+jlENZg==','Hhjp5EGa1560491964083'),(20,'https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/59073d4e-6cc0-4917-96e1-3e3836bb46a2.jpg','o665p','kiss1001',1,'1560492031615','C7f+Mab+H2oaCfSlIhrs18ctkK5+kIBWk+e1aIlS7RVDnCv70Gz30DHxckZz4sy1ZPEBatTnuC8Th29RMzHRgYoTqheE8hWOOFc8l4Ni67q1gL8tBwzZ5Q==','hp4a25Ze1560492031615');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
