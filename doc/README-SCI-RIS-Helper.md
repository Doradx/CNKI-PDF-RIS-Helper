# SCI RIS Helper - EndNote+Scihub
[![](https://img.shields.io/badge/dynamic/json?color=green&label=version&query=version&url=https%3A%2F%2Fgreasyfork.org%2Fscripts%2F434310.json&logo=tampermonkey)](https://greasyfork.org/en/scripts/434310) [![](https://img.shields.io/badge/dynamic/json?color=red&label=total%20installs&query=total_installs&url=https%3A%2F%2Fgreasyfork.org%2Fscripts%2F434310.json&style=flat&logo=tampermonkey)](https://greasyfork.org/en/scripts/434310) [![](https://img.shields.io/badge/dynamic/json?color=green&label=daily%20installs&query=daily_installs&url=https%3A%2F%2Fgreasyfork.org%2Fscripts%2F434310.json&logo=tampermonkey)](https://greasyfork.org/en/scripts/434310) [![](https://img.shields.io/badge/blog-%40Dorad-blue)](https://blog.cuger.cn)

This script is written to find the pdf link to the article when the Refman file is downloaded. The pdf file will then be automatically downloaded and associated with the reference when being imported into EndNote. 

This script can download the Refman(*.ris) with pdf URL queried from Sci-hub. 

Supported 80+ sites include Web of science, Researchgate, Springer, ScienceDirect, IEEE, MDPI, ,Scopus etc. Just see: https://blog.cuger.cn/p/63499/

# Ability
- Auto search DOI and PDF;
- Associate the URL of the PDF to the Risman file and then export.

This script will generate a floating button in the button right corner of the page, which has three statuses: **NONE**, **RIS**, and **RIS+**.

- **RIS+ and RIS**: both **RIS** and **PDF** are available. Click **RIS+** to download the **RIS** with **PDF URL** attached, and the **RIS** button offers the RIS file with no pdf link attached.
- **Only RIS**: **RIS** is available, **PDF** is unavailable, click the button to download the **RIS** file, but **PDF URL** can't be attached automatically. 
- **NONE**: if both **RIS** and **PDF** are unavailable, the button is disabled. 

![Button Status](https://github.com/Doradx/CNKI-PDF-RIS-Helper/raw/master/images/Button%20in%203%20states.png)

# Runtime

This script has been tested on **EndNote X9.3.3** and **EndNote 20** on Windows 10 20H2.

**EndNote X9.2 and older version** were not supported to import pdf automatically, and only a pdf link will be attached to the reference.

**Citavi 6** was tested that the RIS can be imported into it, but PDF can't be downloaded automatically. And you should click download in Citavi 6 manually.

# Issues & questions
If you have any issues or questions on this script, please visit [Github Issues](https://github.com/Doradx/CNKI-PDF-RIS-Helper/issues) or [Greasy Fork Feedback](https://greasyfork.org/zh-CN/scripts/434310-sci-ris-helper/feedback).

# Notice
When you use this script, we will collect the DOI, RIS, and PDF URLs of articles anonymously, which should be known before using it. 
You can only turn it off by removing the relevant code.
If you mind, please do not use this script.

# Based on
- https://citation.crosscite.org/docs.html
- http://sci-hub.se/

# Inspired by
- NHESS - https://nhess.copernicus.org/articles/15/853/2015/
- Publication Auto PDF - https://greasyfork.org/zh-CN/scripts/38628-publication-auto-pdf

# Donate
If this script helps you, you can support me with a coffee.

![](https://blog.cuger.cn/images/pay.jpg)

## Donate records

| ID   | AMOUNT | DATE |
| ---- | ------ | ------ |
| *达  | ￥10   |    |
| Z*l | ￥ 5   |    |
| a*s | ￥ 10   |    |
| 西*D | ￥ 10   | 2022-05-25 |
| F*g | ￥ 10 | 2022-06-13 |
| J*y | ￥ 15 | 2022-09-30 |
| 1*4 | ￥ 5 | 2023-03-13 |
| P*a | ￥ 5 | 2023-03-16 |
| *. | ￥ 5 | 2023-03-17 |

# Author
[Dorad](https://blog.cuger.cn), ddxid@outlook.com
