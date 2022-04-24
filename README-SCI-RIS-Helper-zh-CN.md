# SCI RIS Helper - EndNote+Sci-hub强强联合一键下载导入论文
[![](https://img.shields.io/badge/dynamic/json?color=green&label=version&query=version&url=https%3A%2F%2Fgreasyfork.org%2Fscripts%2F434310.json&logo=tampermonkey)](https://greasyfork.org/en/scripts/434310)
[![](https://img.shields.io/badge/dynamic/json?color=red&label=total%20installs&query=total_installs&url=https%3A%2F%2Fgreasyfork.org%2Fscripts%2F434310.json&style=flat&logo=tampermonkey)](https://greasyfork.org/en/scripts/434310)
[![](https://img.shields.io/badge/dynamic/json?color=green&label=daily%20installs&query=daily_installs&url=https%3A%2F%2Fgreasyfork.org%2Fscripts%2F434310.json&logo=tampermonkey)](https://greasyfork.org/en/scripts/434310)
[![](https://img.shields.io/badge/blog-%40Dorad-blue)](https://blog.cuger.cn)

[Introduction - English](./README-SCI-RIS-Helper.md)

一键下载带论文PDF链接的Refman(*.ris)文件，快速导入EndNote并自动下载关联PDF文件，已适配WOS、Researchgate、Springer、ScienceDirect和MDPI等80+种网站。

# 特色
- 一键下载最全面的Refman(*.ris)文件
- 一键导入EndNote, 并自动下载关联pdf
- 论文信息全面：URL、论文作者、DOI、期卷号、论文摘要。
- 优先使用官方通道：优先使用出版商的接口获取Refman(*.ris)数据和官方PDF链接，若未找到才会调用crosscite和sci-hub数据。
- 目前已适配80+个网站，理论上只要出现DOI的网站都可进行适配

# 一、介绍
本插件支持在下载**\*.ris**文件时自动关联sci-hub中的**pdf**链接，双击**\*.ris**文件将**自动下载pdf并进行关联**！

**再也不用手动将PDF拖进EndNote了！**

安装插件后，网页右下角将显示**圆角矩形图标**，三种颜色和文字代表三种不同状态，状态分别为：

- **RIS+**: 正常找到**Refman**和**PDF**信息，点击**RIS+**将下载RIS文件，双击即可导入EndNote并**自动关联PDF**。（最理想的工作状态）
- **RIS**: 找到了**Refman**，但未找到**PDF**，点击**RIS**将下载RIS文件，双击即可导入EndNote，但是不会关联PDF。
- **NONE**: 啥也没找到，不支持该页面，按钮禁用。

![三种不同状态](https://i.cuger.cn/b/ad744dc87acf8eb2568166dcf1279e62.png)

如果在期刊页面未显示图标，则表明暂未适配该期刊。可将网址提交在**评论区**，博主空闲时随缘更新。

# 二、安装方法

## 1. 前提

本脚本基于Chrome油猴插件开发，所以需要使用Chrome内核浏览器，并提前安装油猴插件（[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)），[油猴插件安装教程](https://zhuanlan.zhihu.com/p/34967781)。

> 温馨提示：
>
> 1. Chrome最好更新最新版，旧版本可能无法使用该脚本!（博主使用92.0.4515.159，亲测Chrome 79.0翻车）
> 2. EndNote X9.2、EndNote X9及汉化版无法成功导入PDF，只会存在一个PDF链接！（博主使用的EndNote X9.3.3, 亲测EndNote 20也可正常使用）

## 2. 插件安装

插件安装完成后，打开下方链接，即可安装【SCI RIS Helper】

【SCI RIS Helper 安装链接】：

- [SCI RIS Helper - from Greasy Fork](https://greasyfork.org/zh-CN/scripts/434310-sci-ris-helper)
- [SCI RIS Helper - from Github](https://github.com/Doradx/CNKI-PDF-RIS-Helper/raw/master/SCI%20RIS%20Helper.user.js)

## 3. 插件使用

打开[期刊页面](https://nhess.copernicus.org/articles/13/299/2013/)，查看是否存在图标，下载RIS文件，测试是否能正常导入EndNote并自动关联PDF。

# 三、兼容性
## 1. EndNote

EndNote博主使用的X9.3.3版本，完美使用！

目前已知支持版本：EndNote 9.3.3、EndNote 20.2.1

目前已知不兼容版本：EndNote X9.2、EndNote X9汉化版

## 2. Citavi 6

将RIS文件默认打开方式改为Citavi 6后，双击RIS文件即可导入Citavi 6。

Citavi 6 测试结果表明，在导入过程中，其不会自动下载，但是会保存论文PDF链接。

预览窗口"Always preview this location immediately"将会自动下载预览，点击"Save a copy in this project"将在本地存储备份。
![Citavi 6 导入结果](https://i.cuger.cn/img/57d8f18e8511429ed9c663a96cec5114.png?imageMogr2/thumbnail/800x)

## 3. NoteExpress

经测（NoteExpress），可以成功导入，并导入PDF链接，但是不会自动下载PDF, 需要点击链接自行下载。

![NoteExpress导入情况](https://i.cuger.cn/b/14e14eb07e338279837380d4f444e32f.png)

# 四、其它

油猴脚本开发过程中，参考了[Publication Auto PDF](https://greasyfork.org/zh-CN/scripts/38628-publication-auto-pdf)相关逻辑，在此感谢[sincostandx](https://greasyfork.org/zh-CN/users/171198-sincostandx)！

## 1. 视频介绍&教程
<iframe src="//player.bilibili.com/player.html?aid=251340943&bvid=BV1Sv411u7fv&cid=430378655&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="720"> </iframe>

## 2. 参考代码及网址

- [Publication Auto PDF](https://greasyfork.org/zh-CN/scripts/38628-publication-auto-pdf)
- https://nhess.copernicus.org/articles/15/853/2015/
- https://citation.crosscite.org/docs.html
- http://sci-hub.se/

## 3. 源码及英文版介绍

- [Source Code](https://github.com/Doradx/CNKI-PDF-RIS-Helper/blob/master/SCI%20RIS%20Helper.user.js)
- [Introduction](https://github.com/Doradx/CNKI-PDF-RIS-Helper/blob/master/README-SCI-RIS-Helper.md)

## 4. 注意！！！

本插件使用过程中会将以下信息发送到博主服务器：

- 论文RIS信息，积累可构成数据库。包括：doi， title， year， ris, pdfUrl
- 使用日志,  方便分析受众面。包括：action, userAgent, ip

使用本插件默认你已知晓并同意以上事项。

本插件完全免费开源，如不想上传信息，可**自行删除**相关API，不影响正常使用。

本插件纯属摸鱼产物，使用过程出现的任何情况，作者不承担任何责任。


## 5. 捐赠

如果你觉得本插件有幸帮助了你，可以扫描下方二维码捐赠，请作者喝一杯咖啡~

## 捐赠记录
| ID   | AMOUNT |
| ---- | ------ |
| *达  | ￥10   |
| Z*l | ￥ 5   |
| a*s | ￥ 10   |

![](https://blog.cuger.cn/images/pay.jpg)

# 作者
[Dorad](https://blog.cuger.cn), cug.xia@gmail.com
