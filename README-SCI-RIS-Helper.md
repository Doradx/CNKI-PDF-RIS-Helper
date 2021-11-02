# SCI RIS Helper v0.9.2
This script is written to find the pdf link to the article when the Refman file is downloaded. The pdf file will then be automatically downloaded and associated with the reference when being imported into EndNote.

# Ability
- Auto search DOI and PDF;
- Associate the url of PDF to Risman file and then export.

This script will generate a floating button in the button right corner of the page, which has three status: **NONE**, **RIS** and **RIS+**.

- **RIS+ and RIS**: both **RIS** and **PDF** are available. click **RIS+** to download the **RIS** with **PDF URL** attached, and **RIS** button offers the RIS file with no pdf link attached.
- **Only RIS**: **RIS** is available, **PDF** is unavailable, click the button to download the **RIS** file, but **PDF URL** can't be attached automatically. 
- **NONE**: both **RIS** and **PDF** are unavailable, the button is disabled. 

![Button Status](https://user-images.githubusercontent.com/23170065/139387996-7860ce79-5768-4193-9237-5829d09cb757.png)

# Runtime

This script has been tested on **EndNote X9.3.3** on Windows 10 20H2.

**EndNote X9.2 and older version** were not supported to import pdf automatically, and only a pdf link will be attacted to the reference.

**Civati 6** was test that the ris can be imported into it but will not download automatically, you should click download in Civati 6 manually.

# Issues & questions
If you have any issues or questions on this script, please visit [Github Issues](https://github.com/Doradx/CNKI-PDF-RIS-Helper/issues) or [Greasy Fork Feedback](https://greasyfork.org/zh-CN/scripts/434310-sci-ris-helper/feedback).

# Notice
When you use this script, we will collect the DOI, RIS and PDF URL of articles anonymously, which should be known before using it. 
There is no way to turn this off for now, so if you mind, please do not use it.

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
| ID   | AMOUNT |
| ---- | ------ |
| *达  | ￥10   |


# Author
[Dorad](https://blog.cuger.cn), cug.xia@gmail.com
