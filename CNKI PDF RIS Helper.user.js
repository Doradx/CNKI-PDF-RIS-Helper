// ==UserScript==
// @name         CNKI PDF RIS Helper
// @namespace    https://blog.cuger.cn
// @version      0.5.6
// @description  1.支持在论文详情页直接导出RIS, 一键导入Endnote! 参考:https://blog.cuger.cn/p/5187/
// @author       Dorad
// @license      MIT License
// @include      https://kns.cnki.net/kns8/defaultresult/index
// @include      https://*.cnki.net/kcms/detail*
// @include      https://chn.oversea.cnki.net/kns/defaultresult/index
// @include      https://chn.oversea.cnki.net/KCMS/detail/*
// @run-at       document-idle
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_downlaod
// @grant        GM_xmlhttpRequest
// ==/UserScript==
"use strict";
(function () {
    var site = window.location.href.toString();
    if (site.indexOf('kcms/detail') != -1 || site.indexOf('KCMS/detail') != -1 ) {
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

// 更新搜索页，每一行的【下载PDF】和【导出RIS】
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
            let fileName = row.getElementsByClassName('seq')[0].firstElementChild.value;
            let dbName = fileName.split('!')[0];
            let fileId = fileName.split('!')[1];
            let title = row.getElementsByClassName('name')[0].firstElementChild.innerHTML.replace(/<[^>]*>|/g, "").replace(/(^\s+)|(\s+$)/g, "");
            // console.log(title);
            var operats = row.getElementsByClassName('operat')[0];
            // replace the download with pdf
            if (operats.getElementsByClassName('downloadlink').length) {
                var downloadPdf = operats.getElementsByClassName('icon-download')[0];
                downloadPdf.title = '下载PDF'
                console.log(downloadPdf.getElementsByTagName('b')[0])
                downloadPdf.getElementsByTagName('b')[0].innerText = '下载PDF'
                downloadPdf.setAttribute("href", downloadPdf.getAttribute("href") + '&dflag=pdfdown');
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
                exportRis.onclick = function(){
                    console.log('RIS Export: ' + title + ', ' + fileId + ', ' + dbName);
                    downloadByFilename(fileId, dbName, title);
                }
            }
            row.setAttribute('ris', true);
        }
    }
}

// type can be EndnNote or Refworks
function downloadByFilename(fileId, dbName, name, type='EndnNote') {
    GM_xmlhttpRequest({
        method: "POST",
        url: "https://kns.cnki.net/KNS8/manage/ShowExport",
        data: "filename=" + fileId + "&displaymode="+type+"&orderparam=0&ordertype=desc&selectfield=&dbname=" + dbName + "&random=" + Math.random(),
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
