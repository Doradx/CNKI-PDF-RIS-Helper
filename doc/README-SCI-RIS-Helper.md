# SCI RIS Helper - EndNote + Sci-hub Powerful Integration for One-Click Paper Download and Import
[![](https://img.shields.io/badge/dynamic/json?color=green&label=version&query=version&url=https%3A%2F%2Fgreasyfork.org%2Fscripts%2F434310.json&logo=tampermonkey)](https://greasyfork.org/en/scripts/434310) [![](https://img.shields.io/badge/dynamic/json?color=red&label=total%20installs&query=total_installs&url=https%3A%2F%2Fgreasyfork.org%2Fscripts%2F434310.json&style=flat&logo=tampermonkey)](https://greasyfork.org/en/scripts/434310) [![](https://img.shields.io/badge/dynamic/json?color=green&label=daily%20installs&query=daily_installs&url=https%3A%2F%2Fgreasyfork.org%2Fscripts%2F434310.json&logo=tampermonkey)](https://greasyfork.org/en/scripts/434310) [![](https://img.shields.io/badge/blog-%40Dorad-blue)](https://blog.cuger.cn)

[Introduction - English](https://github.com/Doradx/CNKI-PDF-RIS-Helper/blob/master/doc/README-SCI-RIS-Helper.md)

One-click download of Refman (*.ris) files with paper PDF links, quickly import into EndNote and automatically download associated PDF files, adapted for WOS, Researchgate, Springer, ScienceDirect, Scopus, MDPI, and 80+ other websites.

# Features
- One-click download of the most comprehensive Refman (*.ris) files
- One-click import into EndNote, and automatically download associated PDFs
- Comprehensive paper information: URL, authors, DOI, volume and issue numbers, abstract.
- Priority use of official channels: Prefer to use the publisher's interface to obtain Refman (*.ris) data and official PDF links, and only call crosscite and sci-hub data if not found.
- Currently adapted for 80+ websites, theoretically adaptable for any website with a DOI.

# I. Introduction
This plugin supports automatically associating **pdf** links from sci-hub when downloading **\*.ris** files. Double-clicking the **\*.ris** file will **automatically download the pdf and associate it**!

**No more manually dragging PDFs into EndNote!**

After installing the plugin, a **rounded rectangle icon** will appear in the lower right corner of the webpage, with three colors and text representing three different states:

- **RIS+**: Normally found **Refman** and **PDF** information. Clicking **RIS+** will download the RIS file, which can be double-clicked to import into EndNote and **automatically associate the PDF**. (The ideal working state)
- **RIS**: Found **Refman**, but not **PDF**. Clicking **RIS** will download the RIS file, which can be double-clicked to import into EndNote but will not associate the PDF.
- **NONE**: Found nothing, the page is not supported, button disabled.

![Three different states](https://github.com/Doradx/CNKI-PDF-RIS-Helper/raw/master/images/Button%20in%203%20states.png)

If the icon does not appear on the journal page, it indicates that the journal is not yet adapted. You can submit the URL in the **comments section**, and the blogger will update it when available.

# II. Installation Method

## 1. Prerequisites

This script is developed based on the Chrome Tampermonkey plugin, so you need to use a Chrome-based browser and pre-install the Tampermonkey plugin ([Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)), [Tampermonkey installation tutorial](https://zhuanlan.zhihu.com/p/34967781).

> Friendly Reminder:
>
> 1. It is best to update Chrome to the latest version, as older versions may not support this script! (The blogger uses 92.0.4515.159, personally tested Chrome 79.0 failed)
> 2. EndNote X9.2, EndNote X9, and the Chinese version cannot successfully import PDFs, only a PDF link will exist! (The blogger uses EndNote X9.3.3, personally tested EndNote 20 also works fine)

## 2. Plugin Installation

After completing the plugin installation, open the link below to install [SCI RIS Helper]

[SCI RIS Helper Installation Links]:

- [SCI RIS Helper - from Greasy Fork](https://greasyfork.org/zh-CN/scripts/434310-sci-ris-helper)
- [SCI RIS Helper - from Github](https://github.com/Doradx/CNKI-PDF-RIS-Helper/raw/master/SCI%20RIS%20Helper.user.js)

## 3. Plugin Usage

Open a [journal page](https://nhess.copernicus.org/articles/13/299/2013/), check if the icon is present, download the RIS file, and test whether it can be imported into EndNote and automatically associate the PDF.
Note that using the Tampermonkey script currently requires opening the browser's **developer mode**, otherwise it cannot be used normally.

# III. Compatibility
## 1. EndNote

The blogger uses EndNote X9.3.3 version, works perfectly!

Currently known supported versions: EndNote 9.3.3, EndNote 20.2.1

Currently known incompatible versions: EndNote X9.2, EndNote X9 Chinese version

## 2. Citavi 6

After changing the default opening method for RIS files to Citavi 6, double-clicking the RIS file will import it into Citavi 6.

Citavi 6 test results show that during the import process, it will not automatically download but will save the paper PDF link.

The preview window "Always preview this location immediately" will automatically download the preview, clicking "Save a copy in this project" will store a backup locally.
![Citavi 6 Import Result](https://raw.githubusercontent.com/Doradx/CNKI-PDF-RIS-Helper/master/images/Citavi%206.png)

## 3. NoteExpress

Tested with (NoteExpress), it can successfully import and import the PDF link, but will not automatically download the PDF, you need to click the link to download it yourself.

![NoteExpress Import Situation](https://raw.githubusercontent.com/Doradx/CNKI-PDF-RIS-Helper/master/images/NoteExpress.png)

# IV. Other

During the development of the Tampermonkey script, the logic of [Publication Auto PDF](https://greasyfork.org/zh-CN/scripts/38628-publication-auto-pdf) was referenced, thanks to [sincostandx](https://greasyfork.org/zh-CN/users/171198-sincostandx)!

## 1. Video Introduction & Tutorial
<iframe src="//player.bilibili.com/player.html?aid=251340943&bvid=BV1Sv411u7fv&cid=430378655&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="720"> </iframe>

## 2. Reference Code and Websites

- [Publication Auto PDF](https://greasyfork.org/zh-CN/scripts/38628-publication-auto-pdf)
- https://nhess.copernicus.org/articles/15/853/2015/
- https://citation.crosscite.org/docs.html
- http://sci-hub.se/

## 3. Source Code and English Introduction

- [Source Code](https://github.com/Doradx/CNKI-PDF-RIS-Helper/blob/master/SCI%20RIS%20Helper.user.js)
- [Introduction](https://github.com/Doradx/CNKI-PDF-RIS-Helper/blob/master/README-SCI-RIS-Helper.md)

## 4. Attention!!!

During the use of this plugin, the following information will be sent to the blogger's server:

- Paper RIS information, which can accumulate to form a database. Including: doi, title, year, ris, pdfUrl
- Usage logs, for analyzing the audience. Including: action, userAgent, ip

By using this plugin, you are deemed to have known and agreed to the above matters.

This plugin is completely free and open source. If you do not want to upload information, you can **delete** the relevant API yourself, without affecting normal use.

This plugin is purely a byproduct of leisure, and the author assumes no responsibility for any situation that occurs during use.

## 5. Donation

If you feel that this plugin has fortunately helped you, you can scan the QR code below to donate and buy the author a cup of coffee~

## Donation Records

| ID   | AMOUNT | DATE |
| ---- | ------ | ------ |
| *Da  | ￥10   |    |
| Z*l | ￥ 5   |    |
| a*s | ￥ 10   |    |
| Xi*D | ￥ 10   | 2022-05-25 |
| F*g | ￥ 10 | 2022-06-13 |
| J*y | ￥ 15 | 2022-09-30 |
| 1*4 | ￥ 5 | 2023-03-13 |
| P*a | ￥ 5 | 2023-03-16 |
| *. | ￥ 5 | 2023-03-17 |
| R*d | ￥ 5 | 2024-07-04 |

![](https://blog.cuger.cn/images/pay.jpg)

# Author
[Dorad](https://blog.cuger.cn), ddxid@outlook.com