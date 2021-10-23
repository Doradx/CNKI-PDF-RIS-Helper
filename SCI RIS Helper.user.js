// ==UserScript==
// @name         SCI RIS Helper
// @namespace    https://github.com/Doradx/CNKI-PDF-RIS-Helper/blob/master/SCI%20RIS%20Helper.user.js
// @version      0.5.7
// @description  download ris and associeted pdf for SCI.
// @description:zh-CN  自动关联SCI下载中的RIS文件和PDF, 使得导入RIS时可以自动导入PDF。
// @author       Dorad
// @license      MIT License
// @grant        GM.xmlHttpRequest
// @run-at       document-end
// @icon         data:image/png;base64,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
// @require      https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.slim.min.js
// @include https://direct.mit.edu/neco/*
// @include https://ieeexplore.ieee.org/abstract/document/*
// @include https://ascelibrary.org/doi/*
// @include https://nhess.copernicus.org/articles/*
// @include https://www.cambridge.org/core/journals/*
// @include https://www.mdpi.com/*
// @include http://en.cgsjournals.com/article/doi/*
// @include https://adgeo.copernicus.org/articles/*
// @include https://papers.ssrn.com/*
// @include https://www.sciencedirect.com/science/article/*
// @include https://onlinelibrary.wiley.com/doi/*
// @include https://*.onlinelibrary.wiley.com/doi/*
// @include https://pubs.acs.org/doi/*
// @include https://www.tandfonline.com/doi/*
// @include https://www.beilstein-journals.org/*
// @include https://www.eurekaselect.com/*/article*
// @include https://pubs.rsc.org/en/Content/*
// @include https://link.springer.com/article*
// @include https://link.springer.com/chapter/*
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

// jQuery.noConflict(true);
// var $ = unsafeWindow.jQuery;

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
            console.log('RIS:', RIS);
            console.log('METAS:', METAS);
            generateTheButton(RIS, METAS);
        })
        .catch((err) => {
            // 获取 metas 失败
            console.log('Error with get metas,', err);
        });
})

function generateTheButton(ris, metas) {
    const year = new Date().getFullYear();
    var html = `<a id="risDownload" style="width:100px; height:60px; display: inline-block; line-height:60px; text-align: center;font-size:24px;color:white">
    RIS
    </a>
    <a href="https://blog.cuger.cn" style="width:96px; height:20px; display: inline-block; line-height:20px; text-align: center; font-size:8px;background:#0C344E;color:white;border-bottom-left-radius:10px;border-bottom-right-radius:10px">Dorad © ${year}</a>
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
    height: 80px;
    cursor: pointer;
    position: fixed;
    bottom: 10%;
    right: 20px;
    z-index: 5000;
    background: #1B2821;
    visibility: visible;
    display:inline-block;
    justify-content:center;
    align-items:bottom;
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
    if (!metas.doi || ris.length == 0) {
        $("#risDownload").attr("href", "javascript:void(0);");
        $("#risDownload").text("NONE");
        $('#risBox').css("background", "#1B2821");
    } else {
        if (metas.pdf) {
            $("#risDownload").text("PDF");
            $('#risBox').css("background", "#56F569");
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
        abstract: ["dc.description", "dc.Description", "og:description", "og:Description", "citation_abstract"]
    }
    let metas = journalMetasAdaptor();
    // search for generic fields
    for (var key in metaDict) {
        if (metas.hasOwnProperty(key)) {
            continue;
        }
        let searchStr = 'meta[name="' + metaDict[key].join('"],meta[name="') + '"]';
        searchStr += ',meta[property="' + metaDict[key].join('"],meta[property="') + '"]';
        let meta = $(searchStr);
        if (meta.length) {
            metas[key] = meta.attr("content");
        }
    }
    // check doi using regrex
    if (metas.hasOwnProperty('doi') && metas.doi.match(/10\.[^\s\/]+\/[^\s]+/)) {
        metas.doi = metas.doi.match(/10\.[^\s\/]+\/[^\s]+/)[0];
    }
    console.log(metas);
    // if there is no pdf url in the metas, check the sci-hub.
    if (!metas.hasOwnProperty('pdf') || metas.pdf.slice(-3) !== 'pdf') {
        let pdfUrlFromSciHub = await getPdfLinkFromSciHubBasedOnDoi(metas.doi);
        metas['pdf'] = pdfUrlFromSciHub;
    }
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
                console.log('Failed to get the refman information based on doi. DOI: ' + metas.doi + '. ERROR: ' + err);
                resolve("");
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

function journalMetasAdaptor() {
    let metas = {};
    /**
     * all the non standard journal
     */
    switch (window.location.host) {
        case 'ieeexplore.ieee.org':
            metas.title = $('meta[property="twitter:title"]').attr("content");
            metas.doi = $('div.stats-document-abstract-doi a').text();
            metas.title = $('h1.document-title span').text();
            break;
        case 'www.tandfonline.com':
            metas.doi = $('meta[name="dc.Identifier"][scheme="doi"]').attr("content");
            metas.abstract = $('div.abstractInFull p').text();
            break;
        case 'www.sciencedirect.com':
            metas.abstract = $('div[id^="aep-abstract-sec-"],[id^="abssec"] p').text()
            break;
        case 'pubs.acs.org':
            metas.abstract = $('meta[property="og:description"]').attr("content");
            break;
        case 'onlinelibrary.wiley.com':
            metas.abstract = $('div.abstract-group section div p').text();
            break;
        case 'www.cambridge.org':
            metas.abstract = $('div.abstract').text();
            break;
        case 'link.springer.com':
            metas.abstract = $('section.abstract,#Abs1-content,section.Abstract p').text();
            break;
        case 'ascelibrary.org':
            metas.abstract = $('article.article div p').text();
            break;
        case 'nhess.copernicus.org':
            metas.abstract = $('div.abstract p').text();
            break;
        case 'www.worldscientific.com':
            metas.title = $('h1.citation__title').text();
            metas.abstract = $('div.NLM_abstract p').text();
            break;
        case 'direct.mit.edu':
            metas.abstract = $('section.abstract p').text();
            break;
        default:
    }
    return metas;
}
