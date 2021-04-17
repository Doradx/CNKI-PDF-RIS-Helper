// ==UserScript==
// @name         CNKI PDF RIS Helper
// @namespace    https://blog.cuger.cn
// @version      0.3.1
// @description  1.支持学位论文PDF导出; 2.支持在论文详情页直接导出RIS, 一键导入Endnote!
// @author       Dorad
// @include      https://kns.cnki.net/kns8/defaultresult/index
// @include      https://kns.cnki.net/kcms/detail/detail.aspx*
// @run-at       document-idle
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_downlaod
// @grant        GM_xmlhttpRequest
// ==/UserScript==
(function () {
    var site = window.location.href.toString();
    if (site.indexOf('kcms/detail/detail.aspx') != -1) {
        // 详情页
        var operateBtns = document.getElementById('DownLoadParts').getElementsByClassName('operate-btn')[0];
        /*
         * RIS Export
         */
        // get fileId
        var fileId = document.getElementById('paramfilename').value;
        var dbName = document.getElementById('paramdbname').value;
        var title = document.getElementsByClassName('wx-tit')[0].children[0].text;
        var risExportBtn = document.createElement('li');
        risExportBtn.setAttribute("class", "btn-dlpdf");
        risExportBtn.innerHTML = '<a><i></i>导出RIS</a>';
        risExportBtn.firstElementChild.style.backgroundColor = "#2f022e";
        risExportBtn.onclick = function () {
            console.log('RIS Export: ' + title + ', ' + fileId + ', ' + dbName);
            downloadByFilename(fileId, dbName, title);
        }
        operateBtns.append(risExportBtn);
        pdfDownload();
    } else {
        // 搜索页
        var wrapper = document.getElementsByClassName('wrapper')[0];
        var observer = new MutationObserver(function (changeList) {
            updateRowItems();
            // console.log(changeList);
        });
        observer.observe(wrapper, {
            attributes: true,
            subtree: true,
            characterData: true,
        });
    }
})();

function updateRowItems() {
    if (document.getElementsByClassName('result-table-list').length == 0) {
        return;
    }
    var table = document.getElementsByClassName('result-table-list')[0];
    var rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        if (row.getAttribute('ris')) {
            continue;
        } else {
            var fileName = row.getElementsByClassName('seq')[0].firstElementChild.value;
            var dbName = fileName.split('!')[0];
            var fileId = fileName.split('!')[1];
            var title = row.getElementsByClassName('name')[0].firstElementChild.innerHTML.replace(/<[^>]*>|/g, "").replace(/(^\s+)|(\s+$)/g, "");
            // console.log(title);
            var operats = row.getElementsByClassName('operat')[0];
            // replace the download with pdf
            if (operats.getElementsByClassName('downloadlink').length) {
                var downloadPdf = operats.getElementsByClassName('icon-download')[0];
                downloadPdf.href = downloadPdf.href + '&dflag=pdfdown';
                downloadPdf.title = '导出PDF';
                // console.log(downloadPdf);
            }
            // replace the html read with ris export
            if (operats.getElementsByClassName('icon-read').length || operats.getElementsByClassName('icon-html').length) {
                var exportBtnClassName = 'icon-read'
                if (operats.getElementsByClassName('icon-html').length) {
                    exportBtnClassName = 'icon-html'
                }
                var exportRis = operats.getElementsByClassName(exportBtnClassName)[0];
                exportRis.title = '导出RIS';
                exportRis.removeAttribute('target');
                exportRis.removeAttribute('href');
                exportRis.onclick = function () {
                    console.log('RIS Export: ' + title + ', ' + fileId + ', ' + dbName);
                    downloadByFilename(fileId, dbName, title);
                }
            }
            // console.log(fileId);
            row.setAttribute('ris', true);
        }
    }
}

function downloadByFilename(fileId, dbName, name) {
    GM_xmlhttpRequest({
        method: "POST",
        url: "https://kns.cnki.net/KNS8/manage/ShowExport",
        data: "filename=" + fileId + "&displaymode=EndNote&orderparam=0&ordertype=desc&selectfield=&dbname=" + dbName + "&random=" + Math.random(),
        headers: {
            'Connection': 'keep-alive',
            'Accept': 'text/plain, */*; q=0.01',
            'X-Requested-With': 'XMLHttpRequest',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Origin': 'https://kns.cnki.net',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-Mode': 'cors'
        },
        onload: function (res) {
            if (res.status == 200) {
                var text = res.responseText;
                // console.log(text);
                var a = document.createElement('a');
                text = text.replaceAll('<br>', '\r\n');
                text = text.replace(/<[^>]*>|/g, "");
                a.href = 'data:application/x-EndNote-tagged; charset=utf-8,' + encodeURIComponent(text);
                //supported by chrome 14+ and firefox 20+
                a.download = name + '.ris';
                //needed for firefox
                document.getElementsByTagName('body')[0].appendChild(a);
                //supported by chrome 20+ and firefox 5+
                a.click();
            }
        }
    });
}

function pdfDownload() {
    var allLis, thisLi, newLi, aPDF, bPDF, allLinks, thisLink, pageType, pfType, myurl, i;
    pageType = true;
    pfType = true;
    myurl = window.location.href;

    allLinks = document.evaluate('//a[@href]', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

    allLis = document.evaluate("//li[@class]", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

    if (myurl.indexOf("detail.aspx") != -1) {
        pageType = false;
    } //false 为详情页面
    if (document.title.indexOf(" - 中国知网") != -1) {
        pfType = false;
    } //false 为新平台
    if ((pfType === true) & (pageType === false)) {
        for (i = 0; i < allLis.snapshotLength; i++) {
            thisLi = allLis.snapshotItem(i);
            if (thisLi.getAttribute("class").indexOf("readol") != -1) {
                newLi = document.createElement('li');
                newLi.setAttribute("class", "pdf");
                aPDF = '<a target="_blank" href="' + thisLi.firstChild.href.replace("&dflag=readonline", "&dflag=pdfdown") + '">PDF下载</a>';
                newLi.innerHTML = aPDF;
                thisLi.parentNode.insertBefore(newLi, thisLi.nextSibling);
            }
        }
    }

    if ((pfType === false) & (pageType === false)) {
        for (i = 0; i < allLinks.snapshotLength; i++) {
            thisLink = allLinks.snapshotItem(i);
            if (thisLink.href && thisLink.href.indexOf("download.aspx?filename=") != -1 && thisLink.innerHTML.indexOf("整本") != -1) {
                thisLink.innerHTML = thisLink.innerHTML.replace("整本", "CAJ");
                bPDF = thisLink.href;
            }
            if (thisLink.href && thisLink.href.indexOf("download.aspx?filename=") != -1 && thisLink.innerHTML.indexOf("分页") != -1) {
                thisLink.innerHTML = thisLink.innerHTML.replace("分页", "PDF");
                thisLink.href = bPDF.replace("nhdown", "pdfdown");
            }
        }
    }

    if (pageType === true) {
        for (i = 0; i < allLinks.snapshotLength; i++) {
            thisLink = allLinks.snapshotItem(i);
            if (thisLink.href && thisLink.href.indexOf("download.aspx?filename=") != -1 && thisLink.href.indexOf("&dflag") == -1) {
                thisLink.href = thisLink.href + "&dflag=pdfdown";
            }
            if (thisLink.href && thisLink.href.indexOf("download.aspx?filename=") != -1 && thisLink.href.indexOf("&dflag=nhdown") != -1) {
                thisLink.href = thisLink.href.replace("nhdown", "pdfdown");
            }
            if (thisLink.href && thisLink.href.indexOf("download.aspx?filename=") != -1 && thisLink.href.indexOf("&dflag=pdfdown") != -1 && (thisLink.href.indexOf("=CMFD") != -1 || thisLink.href.indexOf("=CDFD") != -1)) {
                thisLink.href = thisLink.href.replace("pdfdown", "nhdown");
            }
        }
    }
}