// ==UserScript==
// @name         SCI RIS Helper
// @namespace    https://blog.cuger.cn
// @version      0.5.0
// @description  download ris and associeted pdf for SCI.
// @description:zh-CN  自动关联SCI下载中的RIS文件和PDF, 使得导入RIS时可以自动导入PDF。
// @author       Dorad
// @grant        GM.xmlHttpRequest
// @run-at       document-end
// @require      https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.slim.min.js
// @include https://www.mdpi.com/*
// @include http://en.cgsjournals.com/article/doi/*
// @include https://adgeo.copernicus.org/articles/*
// @include https://papers.ssrn.com/*
// @include https://www.sciencedirect.com/science/article/*
// @include https://onlinelibrary.wiley.com/doi/*
// @include https://*.onlinelibrary.wiley.com/doi/*
// @include https://pubs.acs.org/doi/*
// @include https://www.tandfonline.com/doi/abs/*
// @include https://www.beilstein-journals.org/*
// @include https://www.eurekaselect.com/*/article*
// @include https://pubs.rsc.org/en/Content/*
// @include https://link.springer.com/article*
// @include https://aip.scitation.org/doi/*
// @include https://www.nature.com/articles*
// @include https://*.sciencemag.org/content*
// @include https://journals.aps.org/*/abstract/10*
// @include https://www.nrcresearchpress.com/doi/10*
// @include https://iopscience.iop.org/article/10*
// @include https://www.cell.com/*/fulltext/*
// @include https://journals.lww.com/*
// @include https://*.biomedcentral.com/articles/*
// @include https://journals.sagepub.com/doi/*
// @include https://academic.oup.com/*/article/*
// @include https://www.karger.com/Article/*
// @include https://www.cambridge.org/core/journals/*/article/*
// @include https://www.annualreviews.org/doi/*
// @include https://www.jstage.jst.go.jp/article/*
// @include https://www.hindawi.com/journals/*
// @include https://www.cardiology.theclinics.com/article/*
// @include https://www.liebertpub.com/doi/*
// @include https://thorax.bmj.com/content/*
// @include https://journals.physiology.org/doi/*
// @include https://www.ahajournals.org/doi/*
// @include https://dl.acm.org/doi/*
// @include https://*.asm.org/content/*
// @include https://content.apa.org/*
// @include https://www.thelancet.com/journals/*/article/*
// @include https://jamanetwork.com/journals/*
// @include https://*.aacrjournals.org/content/*
// @include https://royalsocietypublishing.org/doi/*
// @include https://journals.plos.org/*/article*
// @include https://*.psychiatryonline.org/doi/*
// @include https://www.osapublishing.org/*/abstract.cfm*
// @include https://www.thieme-connect.de/products/ejournals/*
// @include https://journals.ametsoc.org/*/article/*
// @include https://www.frontiersin.org/articles/*
// @include https://www.worldscientific.com/doi/*
// @include https://www.nejm.org/doi/*
// @include https://ascopubs.org/doi/*
// @include https://www.jto.org/article/*
// @include https://www.jci.org/articles/*
// ==/UserScript==

jQuery.noConflict(true);

var $ = unsafeWindow.jQuery;

let METAS;
let RIS;

$(document).ready(function () {
    console.log('SCI RIS Helper ———— Dorad, cug.xia@gmail.com')
    // load metas from html
    getMeta()
        .then((metas) => {
            METAS = metas;
            return getRefmanBasedOnMetas(metas);
        })
        .then((ris) => {
            // successed to get the ris.
            RIS = ris;
        })
        .then(() => {
            // generate the download button.
            // risDownloadBtn=downloadRis(RIS, METAS);
            // risDownloadBtn.click();
            generateTheButton(RIS, METAS);
        })
        .catch((err) => {
            // 获取 metas 失败
            console.log('Error with get metas,', err);
        });
})

function generateTheButton(ris, metas) {
    const year = new Date().getFullYear();
    var html = `<a id="risDownload" style="width:100%; height:60px; display: inline-block; line-height:60px; text-align: center;font-size:24px;color:white">
    RIS
    </a>
    <a href="https://blog.cuger.cn" style="width:100%; height:20px; display: inline-block; line-height:20px; text-align: center; font-size:8px;background:#0C344E;color:white;border-bottom-left-radius:10px;border-bottom-right-radius:10px">Dorad © ${year}</a>
    `;
    // create the button
    var sheet = document.createElement('div');
    sheet.innerHTML = html;
    sheet.style = `
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    line-height: 1.42857143;
    font-family: "Arial","微软雅黑","Helvetica,sans-serif","Microsoft YaHei";
    font-size: 16px;
    box-sizing: border-box;
    border-radius: 10px;
    margin: 0;
    padding: 0;
    width: 100px;
    height: 82px;
    cursor: pointer;
    position: fixed;
    bottom: 50px;
    right: 30px;
    z-index: 5000;
    background: #1B2821;
    visibility: visible;
    display:inline-block;
    justify-content:center;
    align-items:bottom;
    font-family:"Times New Roman", Times, serif;
    `
    sheet.id = 'risBox'
    document.body.appendChild(sheet);
    // generate the Blob
    const blob = new Blob([ris], { type: "octet/stream" });
    const url = URL.createObjectURL(blob);
    $("#risDownload").attr("href", url);
    $("#risDownload").attr("download", metas.title.replace("/", "@") + ".ris");
    /**
     * set the style.
     */
    if (!metas.doi) {
        $("#risDownload").attr("href", "javascript:void(0);");
        $("#risDownload").text("NONE");
        $('#risBox').css("background","#1B2821");
    }else{
        if (metas.pdf) {
            $("#risDownload").text("PDF");
            $('#risBox').css("background","#56F569");
        }
    }
    return sheet;
}


// load meta
async function getMeta() {
    const metaDict = {
        title: ["dc.title", "dc.Title", "citation_title", "wkhealth_title"],
        doi: ["citation_doi", "dc.identifier", "dc.Identifier", "dc.Source"],
        pdf: ["citation_pdf_url", "wkhealth_pdf_url"],
        abstract: ["dc.description", "dc.Description", "og:description", "og:Description"]
    }
    let metas = {};
    for (var key in metaDict) {
        for (var name of metaDict[key]) {
            let meta = $('meta[name="' + name + '"]');
            if (meta.length) {
                metas[key] = meta.attr("content");
                break;
            }
        }
    }
    // console.log(metas);
    metas=journalMetasAdaptor(metas);
    // if there is no pdf url in the html, check the sci-hub.
    let pdfUrlFromSciHub = await getPdfLinkFromSciHubBasedOnDoi(metas.doi);
    if (pdfUrlFromSciHub) {
        metas['pdf'] = pdfUrlFromSciHub;
    }
    console.log(metas);
    return metas;
}


// get Refman
function getRefmanBasedOnMetas(metas) {
    return new Promise((resolve, reject) => {
        GM.xmlHttpRequest({
            url: "https://dx.doi.org/" + metas.doi,
            method: "GET",
            headers: {
                "Accept": "application/x-research-info-systems"
            },
            onload: function (res) {
                if (res.status !== 200) {
                    reject(res.status)
                }
                let ris = res.responseText;
                // deal with abstract
                if (metas.hasOwnProperty('abstract')) {
                    const erIndex = ris.indexOf('ER  - ');
                    ris = ris.slice(0, erIndex) + "N2  - " + metas.abstract + "\r\n" + ris.slice(erIndex, ris.length);
                }
                // deal with pdf
                if (metas.hasOwnProperty('pdf')) {
                    const erIndex = ris.indexOf('ER  - ');
                    ris = ris.slice(0, erIndex) + "L1  - " + metas.pdf + "\r\n" + ris.slice(erIndex, ris.length);
                }
                resolve(ris);
            },
            onerror: function (err) {
                reject(err);
            }
        });
    });
}

// get pdf link from sci-hub
function getPdfLinkFromSciHubBasedOnDoi(doi) {
    // console.log(doi);
    return new Promise((resolve, reject) => {
        GM.xmlHttpRequest({
            method: "GET",
            url: "https://sci-hub.se/" + doi,
            headers: {
                'Connection': 'keep-alive',
                'Accept': 'text/plain, */*; q=0.01',
                'X-Requested-With': 'XMLHttpRequest',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Sec-Fetch-Site': 'same-origin',
                'Sec-Fetch-Mode': 'cors'
            },
            onload: function (res) {
                if (res.status == 200) {
                    try {
                        let doc = new DOMParser().parseFromString(res.responseText, 'text/html');
                        let pdfUrl = doc.getElementById('pdf').src;
                        pdfUrl = pdfUrl.slice(0, pdfUrl.indexOf('#'));
                        resolve(pdfUrl);
                    } catch (err) {
                        console.log("Failed to get the pdf from sci-hub, doi:" + doi);
                        resolve("");
                    }
                } else {
                    console.log("HTTP Error when get pdf url from sci-hub. " + res.status);
                    resolve("");
                }
            }
        });
    })
}

/**
 * custom journal metas adaptor
 */

function journalMetasAdaptor(metas){
    /**
     * all the non standard journal
     */
    switch (window.location.host) {
        case 'www.tandfonline.com':
            metas['doi'] = $('meta[name="dc.Identifier"][scheme="doi"]').attr("content");
            metas['abstract'] = $('div.abstractInFull p').text();
            break;
        case 'www.sciencedirect.com':
            metas['abstract'] = $('div[id^="aep-abstract-sec-"] p').text()
            break;
        case 'pubs.acs.org':
            metas['abstract'] = $('meta[property="og:description"]').attr("content");
            break;
        case 'onlinelibrary.wiley.com':
            metas['abstract'] = $('div.abstract-group section div p').text();
            break;
        default:
    }
    return metas;
}
