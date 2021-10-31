// ==UserScript==
// @name         SCI RIS Helper
// @namespace    https://github.com/Doradx/CNKI-PDF-RIS-Helper/blob/master/SCI%20RIS%20Helper.user.js
// @version      0.9.3
// @description  Download ris and associeted pdf for SCI. Blog:https://blog.cuger.cn/p/63499/
// @description:zh-CN  自动关联SCI下载中的RIS文件和PDF, 使得导入RIS时可以自动导入PDF。
// @author       Dorad
// @license      MIT License
// @grant        GM.xmlHttpRequest
// @run-at       document-end
// @homepage     https://greasyfork.org/zh-CN/scripts/434310-sci-ris-helper
// @supportURL   https://blog.cuger.cn/p/63499/
// @icon         data:image/png;base64,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
// @require      https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.slim.min.js
// @connect      cuger.cn
// @connect      dx.doi.org
// @connect      crossref.org
// @connect      elsevier.com
// @connect      springer.com
// @connect      sci-hub.ee
// @connect      sci-hub.se
// @connect      sci-hub.tf
// @connect      sci-hub.st
// @connect      sci-hub.ren
// @connect      sci.hubg.org
// @connect      sci-hub.hkvisa.net
// @connect      sci-hub.shop
// @connect      sci-hub.mksa.top
// @include https://www.webofscience.com/wos/woscc/full-record/*
// @include https://www.scirp.org/journal/*
// @include https://direct.mit.edu/neco/*
// @include https://ieeexplore.ieee.org/*document/*
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
// @include https://*.springer.com/article*
// @include https://*.springer.com/chapter/*
// @include https://*.springeropen.com/article*
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
// @include https://pubmed.ncbi.nlm.nih.gov/*
// @include https://www.spiedigitallibrary.org/conference-*
// @include https://www.ingentaconnect.com/content/*
// @include https://www.taylorfrancis.com/*
// @include https://www.science.org/doi/*
// @include https://www.scinapse.io/papers/*
// @include https://www.semanticscholar.org/paper/*
// @include https://www.researchgate.net/publication/*
// @include https://www.earthdoc.org/content/papers/*
// @include https://era.library.ualberta.ca/items*
// @include https://arxiv.org/abs/*
// ==/UserScript==

// jQuery.noConflict(true);
// var $ = unsafeWindow.jQuery;

const SCI_HUB_HOST = [
    'https://sci-hub.ee/',
    'https://sci-hub.se/',
    'https://sci-hub.mksa.top/',
    'https://sci-hub.tf/',
    'https://sci-hub.st/',
    //    'https://sci-hub.shop/',
    'https://sci.hubg.org/',
    'https://sci-hub.hkvisa.net/',
    'http://sci-hub.ren/'
];

// const SCI_HUB_BASE_URL = 'https://sci-hub.se/';

const PDF_SCIHUB_FIRST = true; // SCI-HUB or JOURNAL first

let METAS;
let RIS;
let Timer;
let MaxRetryTimes = 20;
let HasTriedTimes = 0;

$(document).ready(function () {
    console.log('SCI RIS Helper ———— Dorad, cug.xia@gmail.com')
    // METAS = getMeta();
    Timer = setInterval(function(){
        HasTriedTimes+=1;
        METAS = getMeta();
        if(METAS && METAS.hasOwnProperty('doi') && METAS.doi){
            clearInterval(Timer);
            console.log('DOI FOUND!', METAS);
            // getRisFromCuger(METAS.doi)
            getRisFromOriginSite(METAS).then((ris) => {
                RIS = ris;
            })
                .catch((err) => {
                console.log(err);
            })
                .finally(() => {
                METAS.title = METAS.title ? METAS.title : (__getKeyFromRis(RIS, 'TI') ? __getKeyFromRis(RIS, 'TI') : __getKeyFromRis(RIS, 'T1'));
                // render
                console.log('RIS:\n', RIS);
                console.log('METAS:\n', METAS);
                generateTheButton(RIS, METAS);
            })
        }else{
            console.log('DOI NOT FOUND');
            if(HasTriedTimes>=MaxRetryTimes){
                clearInterval(Timer);
                generateTheButton(RIS, METAS);
            }
        }
    }, 500);
})

function generateTheButton(ris, metas) {
    const year = new Date().getFullYear();
    let sheet = $(`
    <div id="risBox">
    <a id="noneDownload" href="javascript:void(0);" style="width:100%; height:60px; display: inline-block; line-height:60px; text-align: center;font-size:24px;color:white;text-decoration:none;padding:0;margin:0;background: #6E7582";>NONE</a>
    <a id="risDownload" style="width:100%; height:60px; display: inline-block; line-height:60px; text-align: center;font-size:24px;color:white;text-decoration:none;padding:0;margin:0;background: #118ab2";>RIS</a>
    <a id="pdfDownload" style="width:100%; height:60px; display: inline-block; line-height:60px; text-align: center;font-size:24px;color:white;text-decoration:none;padding:0;margin:0;background: #6ECB63";">RIS+</a>
    <a href="https://blog.cuger.cn" style="width:100%; height:25px; display: inline-block; line-height:28px; text-align: center; font-size:8px;background:#0C344E;color:white;padding:0;margin:0;border-bottom-left-radius:10px;border-bottom-right-radius:10px;text-decoration:none;">Dorad © ${year}</a></div>`)
        var css = {
        'line-height': '1.42857143',
        'font-family': '"Arial","微软雅黑","Helvetica,sans-serif","Microsoft YaHei"',
        'font-size': '16px',
        'box-sizing': 'border-box',
        'border-radius': '10px',
        'margin': '0',
        'padding': '0',
        'width': '100px',
        'height': '145px',
        'cursor': 'pointer',
        'position': 'fixed',
        'bottom': '10%',
        'right': '20px',
        'z-index': '2147483647',
        'visibility': 'visible',
        'display': 'inline-block',
        'justify-content': 'center',
        'align-items': 'bottom',
    }
    var radiusCSS = {
        'border-top-left-radius': '10px',
        'border-top-right-radius': '10px'
    }
    $('body').append(sheet);
    $('div#risBox').css(css);
    if (ris) {
        // generate the Blob
        const risBlobWithPdf = new Blob([ris], {
            type: "octet/stream"
        });
        const risWithPdfUrl = URL.createObjectURL(risBlobWithPdf);
        var risWithPdfUrlDownloadName = metas.doi.length > 0 ? metas.doi.replace("/", "@") + ".ris" : "download.ris";
        $("#pdfDownload").attr("href", risWithPdfUrl);
        $("#pdfDownload").attr("download", risWithPdfUrlDownloadName);
        // for ris button, remove the L1
        const risBlob = new Blob([__setKeyForRis(ris, 'L1', '')], {
            type: "octet/stream"
        });
        const risUrl = URL.createObjectURL(risBlob);
        var risDownloadName = metas.doi.length > 0 ? metas.doi.replace("/", "@") + ".ris" : "download.ris";
        $("#risDownload").attr("href", risUrl);
        $("#risDownload").attr("download", risDownloadName);
    }
    /**
     * set the style.
     */
    let key = 'SCI-RIS-Helper_NONE';
    if (ris && metas.hasOwnProperty('pdf') && metas.pdf) {
        $("#risDownload").css(radiusCSS);
        $("#noneDownload").hide();
        key = 'SCI-RIS-Helper_PDF';
    } else if (ris) {
        $("#risDownload").css(radiusCSS);
        $("#noneDownload").hide();
        $("#pdfDownload").hide();
        $("#risBox").css({
            'height': '80px'
        });
        // $("#risDownload").text("RIS");
        // $('#risBox').css("background", "#118ab2");
        key = 'SCI-RIS-Helper_RIS';
    } else {
        $("#noneDownload").css(radiusCSS);
        $("#risBox").css({
            'height': '80px'
        });
        $("#risDownload").hide();
        $("#pdfDownload").hide();
        key = 'SCI-RIS-Helper_NONE';
    }
    getCountFromCuger(key);
    return sheet;
}

// load meta
function getMeta() {
    let metas = journalMetasAdaptor();
    const metaDict = {
        title: ["dc.title", "dc.Title", "DC.title", "citation_title", "wkhealth_title"],
        doi: ["citation_doi", "dc.identifier", "dc.Identifier", "DC.identifier", "dc.Source"],
        pdf: ["citation_pdf_url", "wkhealth_pdf_url"],
        abstract: ["dc.description", "dc.Description", "og:description", "og:Description", "citation_abstract"]
    }
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
            // console.log(`Get common meta, ${key} = ${meta.attr("content")}`);
        }
    }
    // check doi using regrex
    if (metas.hasOwnProperty('doi') && !metas.doi.match(/10\.[^\s\/]+\/[^\s]+/)) {
        delete metas.doi;
    }
    if (metas.hasOwnProperty('doi') && metas.doi.match(/10\.[^\s\/]+\/[^\s]+/).length) {
        metas.doi = metas.doi.match(/10\.[^\s\/]+\/[^\s]+/)[0];
    }
    return metas;
}

/**
 * RIS
 */

// get ris from different site
function getRisFromOriginSite(metas) {
    // remove useless pdf url
    if (!metas.hasOwnProperty('pdf') || !metas.pdf || metas.pdf.indexOf('.pdf') < 0)
        delete metas.pdf;
    let risPromise;
    switch (document.domain) {
    case 'link.springer.com':
        risPromise = __getRisFromSpringer(metas.doi);
        break;
    case 'www.sciencedirect.com':
        risPromise = __getRisFromScienceDirect(metas.pid);
        break;
    default:
        risPromise = new Promise((resolve, reject) => {
            reject("No ref from origin site.")
        });
        break;
    }
    // 同时请求 sci-hub 进行处理
    return new Promise((resolve, reject) => {
        Promise.allSettled([risPromise, __getRisFromCrossCite(metas.doi), getPdfUrlFromScihub(metas.doi)])
        .then((res) => {
            // console.log(res);
            let ris;
            if (res[0].status == 'rejected' && res[1].status == 'rejected') {
                reject("Failed to get RIS from origin site.");
            }
            if (res[0].status == 'fulfilled') {
                ris = res[0].value;
            }
            if (res[1].status == 'fulfilled') {
                if (!ris) {
                    ris = res[1].value;
                } else {
                    let r = res[1].value;
                    for (var key of __getRisKeys(r)) {
                        ris = __setKeyForRis(ris, key, __getKeyFromRis(r, key))
                    }
                }
            }
            if (res[2].status == 'fulfilled' && (!metas.hasOwnProperty('pdf') || PDF_SCIHUB_FIRST)) {
                metas.pdf = res[2].value;
            }
            // update abstract
            if (ris && ris.indexOf('N2  - ') < 0 && ris.indexOf('AB  - ') < 0 && metas.hasOwnProperty('abstract') && metas.abstract.length) {
                ris = __setKeyForRis(ris, 'N2', metas.abstract)
            }
            // update pdf url
            if (ris && ris.indexOf('L1  - ') < 0 && metas.hasOwnProperty('pdf') && metas.pdf.length) {
                ris = __setKeyForRis(ris, 'L1', metas.pdf.replace(/(\?|#)[^'"]*/, ''))
            }
            ris = __setKeyForRis(ris, 'DO', metas.doi)
                // push update to cuger.cn
                if (__getKeyFromRis(ris, 'L1'))
                    pushRisToCuger(metas.doi, ris);
                resolve(ris);
        })
        .catch((err) => {
            reject(err);
        })
    })
}

// get ris from crosscite
function __getRisFromCrossCite(doi) {
    return __httpRequestPromise("https://dx.doi.org/" + doi, 'GET', {}, {
        "Accept": "application/x-research-info-systems"
    }, (resolve, reject, res) => {
        let ris = res.responseText;
        if (ris.match(/<html>[\s\S]*<\/html>/))
            reject('Error format');
        resolve(ris);
    })
}

function __getRisFromSpringer(doi) {
    return __httpRequestPromise(`https://citation-needed.springer.com/v2/references/${doi}?format=refman&flavour=citation`, 'GET', {}, {
        "Accept": "application/x-research-info-systems",
        'accept-language': 'en-CN,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,en-GB;q=0.6,en-US;q=0.5',
    }, (resolve, reject, res) => {
        let ris = res.responseText;
        if (ris.match(/<html>[\s\S]*<\/html>/))
            reject('Error format');
        resolve(ris);
    })
}

// get ris from sciencedirect
function __getRisFromScienceDirect(id) {
    return __httpRequestPromise(`https://www.sciencedirect.com/sdfe/arp/cite?pii=${id}&format=application/x-research-info-systems&withabstract=true`, 'GET', {}, {
        'authority': 'www.sciencedirect.com',
        "Accept": "application/x-research-info-systems",
        'accept-language': 'en-CN,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,en-GB;q=0.6,en-US;q=0.5',
    }, (resolve, reject, res) => {
        let ris = res.responseText;
        if (ris.match(/<html>[\s\S]*<\/html>/))
            reject('Error format');
        resolve(ris);
    })
}

/**
 * PDF url - SCI-HUB
 */

function getPdfUrlFromScihub(doi) {
    return __httpRequestPromise(__getScihubHost() + doi, 'GET', {}, {}, (resolve, reject, res) => {
        let doc = new DOMParser().parseFromString(res.responseText, 'text/html');
        let pdfUrl = doc.getElementById('pdf').src;
        pdfUrl = pdfUrl.slice(0, pdfUrl.indexOf('#'));
        resolve(pdfUrl);
    })
}

function __getScihubHost() {
    const key = 'SCIHUB-HOST-Cache';
    const cacheTTL = 3600 * 24 * 7;
    let bestHost = SCI_HUB_HOST[0];
    try {
        let cache = JSON.parse(localStorage.getItem(key));
        if (cache.expAt <= new Date().getTime() / 1000)
            throw Error('Cache expired');
        // console.log('cache:',cache);
        bestHost = cache.value;
    } catch (err) {
        let jobs = [];
        for (var host of SCI_HUB_HOST) {
            jobs.push(__pingHost(host));
        }
        Promise.any(jobs)
        .then((host) => {
            localStorage.setItem(key, JSON.stringify({
                    value: host,
                    expAt: new Date().getTime() / 1000 + cacheTTL
                }));
            bestHost = host;
        })
        .catch((err) => {
            console.log('All the hosts of SCI-HUB are down, please check.' + err.toString());
        })
    }
    console.log('Fastest SCI-HUB host: ' + bestHost);
    return bestHost;
}

function __pingHost(host) {
    return new Promise(async(resolve, reject) => {
        return __httpRequestPromise(host + 'favicon.ico', 'GET', {}, {}, (r, j, res) => {
            r(res);
        })
        .then(() => {
            resolve(host);
        })
        .catch((err) => {
            reject(err);
        })
    })
}

/**
 *  API of cuger.cn
 */

// get ris from cuger.cn
function getRisFromCuger(doi) {
    return __cugerAPI('https://api.cuger.cn/article/' + doi, 'GET', {}, {}, (data) => {
        if (!data.hasOwnProperty('ris'))
            reject('NO RIS FOUND IN cuger.cn');
        console.log('Success to get RIS from cuger.cn');
        return data.ris;
    })
}

function pushRisToCuger(doi, ris) {
    return __cugerAPI('https://api.cuger.cn/article/', 'POST', {
        doi: doi,
        ris: ris
    }, {}, (data) => {
        console.log('Success to push RIS to cuger.cn');
        return data;
    })
}

function getCountFromCuger(key) {
    return __cugerAPI('https://api.cuger.cn/count/' + key, 'GET', {}, {}, (data) => {
        console.log(`Key: ${data.key},Count: ${data.count}`);
        return data;
    })
}

function __cugerAPI(url, method = 'GET', data = null, headers = null, callback = (data) => {
    return data;
}) {
    return __httpRequestPromise(url, method, data, headers, (resolve, reject, res) => {
        const data = JSON.parse(res.responseText);
        if (data.code)
            reject(`code:${data.code},msg:${data.msg}`);
        resolve(callback(data.data));
    })
}

function __httpRequestPromise(url, method = 'GET', data = null, headers = null, responseHandler = function (resolve, reject, res) {
    resolve(res)
}) {
    return new Promise((resolve, reject) => {
        GM.xmlHttpRequest({
            method: method,
            url: url,
            data: typeof(data) == 'string' ? data : new URLSearchParams(data).toString(),
            headers: $.extend({
                'Connection': 'keep-alive',
                'Accept': 'text/plain, */*; q=0.01',
                'X-Requested-With': 'XMLHttpRequest',
                'User-Agent': navigator.userAgent,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Sec-Fetch-Site': 'same-origin',
                'Sec-Fetch-Mode': 'cors',
                'cookie': document.cookie
            }, headers),
            onload: function (res) {
                // console.log(res.responseText);
                try {
                    if (res.status !== 200)
                        reject("HTTP Code:" + res.status)
                        responseHandler(resolve, reject, res);
                } catch (err) {
                    reject("Unknown error, " + err.toString())
                }
            },
            onerror: function (err) {
                reject(err);
            }
        })
    })
}

function __getRisKeys(ris) {
    if (!ris)
        return undefined;
    const reg = /^(\w+)  \- .*[\r]{0,1}$/gm
        var m = reg.exec(ris);
    var keys = [];
    while (m) {
        keys.push(m[1])
        m = reg.exec(ris);
    }
    console.log(keys);
    return keys;
}

function __getKeyFromRis(ris, key) {
    if (!key.length || !ris)
        return undefined;
    let matchRes = ris.match(RegExp(key + '  \- (.*)[\r]{0,1}\n'))
        return matchRes ? matchRes[1] : undefined;
}

function __setKeyForRis(ris, key, value) {
    if (!key.length || !ris)
        return undefined;
    if (ris.match(RegExp(key + '  \- (.*)[\r]{0,1}\n'))) {
        ris = ris.replace(RegExp(key + '  \- (.*)[\r]{0,1}\n'), key + '  - ' + value + '\n')
    } else {
        const erIndex = ris.indexOf('ER  - ');
        ris = ris.slice(0, erIndex) + key + "  - " + value + "\n" + ris.slice(erIndex, ris.length);
    }
    return ris
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
    case 'dl.acm.org':
        metas.doi = $('meta[name="dc.Identifier"][scheme="doi"],meta[property="og:url"]').attr("content");
        metas.title = $('h1.citation__title,.NLM_article-title').text();
        metas.abstract = $('div.abstractInFull p').text();
        break;
    case 'www.sciencedirect.com': {
            if (!$('script[type="application/json"][data-iso-key="_0"]').text().length)
                break;
            const articleConfig = $.parseJSON($('script[type="application/json"][data-iso-key="_0"]').text());
            // console.log(articleConfig);
            // doi
            metas.doi = articleConfig.article.doi;
            // pid
            metas.pid = articleConfig.article.pii;
            // title
            metas.title = articleConfig.article.titleString;
            // abstract
            const abstractDivId = articleConfig.abstracts.content.slice(-1)[0]['$$'].slice(-1)[0]['$']['id'];
            // console.log('abstractDivId',abstractDivId);
            metas.abstract = $('div[id="' + abstractDivId + '"] p').text();
            break;
        }
    case 'pubs.acs.org':
        metas.abstract = $('meta[property="og:description"]').attr("content");
        break;
    case 'onlinelibrary.wiley.com':
        metas.abstract = $('div.abstract-group section div p').text();
        break;
    case 'agupubs.onlinelibrary.wiley.com':
        metas.abstract = $('div.article-section__content p').text();
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
    case 'academic.oup.com':
        metas.doi = $('span.article-link-citation a').attr("href");
        break;
    case 'www.ingentaconnect.com':
        metas.abstract = $('div#Abst').text();
        break;
    case 'www.science.org':
        metas.doi = $('meta[name="dc.Relation"]').attr("content");
        break;
    case 'www.semanticscholar.org':
        metas.doi = $('meta[name="citation_pdf_url"]').attr("content");
        break;
    case 'www.researchgate.net':
        metas.doi = $('div.research-detail-meta div ul li.nova-legacy-e-list__item a.nova-legacy-e-link').attr("href");
        metas.title = $('div.content-page-header div div div div.nova-legacy-e-text').text();
        break;
    case 'www.earthdoc.org': {
            const pdf = $('div.download-pdf div div form').attr("action");
            metas.pdf = 'https://' + window.location.host + pdf;
            break;
        }
    case 'www.webofscience.com':
        metas.doi = $('#FullRTa-DOI').text();
        metas.abstract = $('#FullRTa-abstract-basic p').text();
        metas.title = $('#FullRTa-fullRecordtitle-0').text();
        break;
    default:
    }
    console.log(metas);
    return metas;
}
