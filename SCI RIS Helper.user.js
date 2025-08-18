// ==UserScript==
// @name         SCI RIS Helper - EndNote+Scihub
// @name:zh-CN   SCI RIS Helper - EndNote+Sci-hub强强联合一键下载导入论文
// @name:de      SCI RIS Helper - EndNote+Scihub
// @name:ja      SCI RIS Helper - EndNote+Scihub
// @name:es      SCI RIS Helper - EndNote+Scihub
// @description  Download the Refman(*.ris) with pdf URL queried from Sci-hub. Supported 80+ sites include Web of science, Researchgate, Springer, ScienceDirect, IEEE, MDPI, Scopus, etc. Just see: https://blog.cuger.cn/p/63499/
// @description:zh-CN 一键下载带论文PDF链接的Refman(*.ris)文件，快速导入EndNote并自动下载关联PDF文件，已适配WOS、Researchgate、Springer、ScienceDirect、Scopus和MDPI等80+种网站。
// @description:de Laden Sie den Refman(*.ris) mit der von Sci-hub abgefragten pdf-URL herunter. Zu den über 80 unterstützten Websites gehören Web of Science, Researchgate, Springer, ScienceDirect, IEEE, MDPI, Scopus usw.
// @description:ja Refman(*.ris)のpdf URLをSci-hubから照会してダウンロードします。Web of science, Researchgate, Springer, ScienceDirect, IEEE, MDPI, Scopus など、80以上のサイトに対応しています。
// @description:es Laadige Refman(*.ris) alla Sci-hubist küsitud pdf URL-iga. Toetatud 80+ saidi hulka kuuluvad Web of science, Researchgate, Springer, ScienceDirect, IEEE, MDPI, Scopus jne.
// @namespace    https://github.com/Doradx/CNKI-PDF-RIS-Helper/blob/master/SCI%20RIS%20Helper.user.js
// @homepage     https://greasyfork.org/zh-CN/scripts/434310-sci-ris-helper
// @supportURL   https://blog.cuger.cn/p/63499/
// @version      0.12.5
// @author       Dorad
// @license      MIT License
// @grant        GM_xmlhttpRequest
// @run-at       document-end
// @icon         data:image/png;base64,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
// @require      https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.4.1.min.js
// @connect      cuger.cn
// @connect      dx.doi.org
// @connect      crossref.org
// @connect      elsevier.com
// @connect      springer.com
// @connect      sci-hub.ee
// @connect      sci-hub.se
// @connect      sci-hub.tf
// @connect      sci-hub.st
// @connect      sci-hub.ru
// @connect      sci-hub.red
// @connect      sci.hub.box
// @connect      data.crosscite.org
// @connect      mdpi.com
// @connect      mdpi-res.com
// @connect      serve.mdpi.com
// @connect      ieeexplore.ieee.org
// @connect      fjfsdata01prod.blob.core.windows.net
// @match        *://www.astm.org/*
// @match        *://www.scirp.org/journal/*
// @match        *://direct.mit.edu/neco/*
// @match        *://ieeexplore.ieee.org/*document/*
// @match        *://ascelibrary.org/doi/*
// @match        *://nhess.copernicus.org/articles/*
// @match        *://www.cambridge.org/core/journals/*
// @match        *://www.mdpi.com/*
// @match        *://en.cgsjournals.com/article/doi/*
// @match        *://adgeo.copernicus.org/articles/*
// @match        *://papers.ssrn.com/*
// @match        *://www.sciencedirect.com/science/article/*
// @match        *://onlinelibrary.wiley.com/doi/*
// @match        *://*.onlinelibrary.wiley.com/doi/*
// @match        *://pubs.acs.org/doi/*
// @match        *://www.tandfonline.com/doi/*
// @match        *://www.beilstein-journals.org/*
// @match        *://www.eurekaselect.com/*/article*
// @match        *://*.springeropen.com/article*
// @match        *://aip.scitation.org/doi/*
// @match        *://www.nature.com/articles*
// @match        *://*.sciencemag.org/content*
// @match        *://journals.aps.org/*/abstract/10*
// @match        *://www.nrcresearchpress.com/doi/10*
// @match        *://iopscience.iop.org/article/10*
// @match        *://www.cell.com/*/fulltext/*
// @match        *://journals.lww.com/*
// @match        *://*.biomedcentral.com/articles/*
// @match        *://journals.sagepub.com/doi/*
// @match        *://academic.oup.com/*/article/*
// @match        *://www.karger.com/Article/*
// @match        *://www.cambridge.org/core/journals/*/article/*
// @match        *://www.annualreviews.org/doi/*
// @match        *://www.jstage.jst.go.jp/article/*
// @match        *://www.hindawi.com/journals/*
// @match        *://www.cardiology.theclinics.com/article/*
// @match        *://www.liebertpub.com/doi/*
// @match        *://thorax.bmj.com/content/*
// @match        *://journals.physiology.org/doi/*
// @match        *://www.ahajournals.org/doi/*
// @match        *://dl.acm.org/doi/*
// @match        *://*.asm.org/content/*
// @match        *://content.apa.org/*
// @match        *://www.thelancet.com/journals/*/article/*
// @match        *://jamanetwork.com/journals/*
// @match        *://*.aacrjournals.org/content/*
// @match        *://royalsocietypublishing.org/doi/*
// @match        *://journals.plos.org/*/article*
// @match        *://*.psychiatryonline.org/doi/*
// @match        *://www.osapublishing.org/*/abstract.cfm*
// @match        *://www.thieme-connect.de/products/ejournals/*
// @match        *://journals.ametsoc.org/*/article/*
// @match        *://www.frontiersin.org/articles/*
// @match        *://www.worldscientific.com/doi/*
// @match        *://www.nejm.org/doi/*
// @match        *://ascopubs.org/doi/*
// @match        *://www.jto.org/article/*
// @match        *://www.jci.org/articles/*
// @match        *://pubmed.ncbi.nlm.nih.gov/*
// @match        *://www.spiedigitallibrary.org/conference-*
// @match        *://www.ingentaconnect.com/content/*
// @match        *://www.taylorfrancis.com/*
// @match        *://www.science.org/doi/*
// @match        *://www.scinapse.io/papers/*
// @match        *://www.semanticscholar.org/paper/*
// @match        *://www.researchgate.net/publication/*
// @match        *://www.earthdoc.org/content/papers/*
// @match        *://era.library.ualberta.ca/items*
// @match        *://arxiv.org/abs/*
// @match        *://asmedigitalcollection.asme.org/IPC*
// @match        *://open.library.ubc.ca/soa/cIRcle/collections/*
// @match        *://pubs.geoscienceworld.org/aeg/eeg/article/*
// @match        *://othes.univie.ac.at/*
// @match        *://www.atlantis-press.com/journals/*
// @match        *://www.koreascience.or.kr/article/*
// @match        *://www.geenmedical.com/article*
// @match        *://www.ncbi.nlm.nih.gov/pmc/articles/*
// @match        *://qjegh.lyellcollection.org/content/*
// @match        *://cdnsciencepub.com/doi/*
// @match        *://ojs.aaai.org//index.php/AAAI/article/*
// @match        *://www.ijcai.org/proceedings/*
// @match        *://www.scopus.com/record/display.uri*
// @match        *://avs.scitation.org/doi/*
// @match        *://pubs.rsc.org/*/content/*
// @match        *://*.copernicus.org/articles/*
// @match        *://europepmc.org/article/*
// @match        *://www.futuremedicine.com/doi/*

// @include      /^http[s]?:\/\/[\S\s]*webofscience[\S\s]+$/
// @include      /^http[s]?:\/\/[\S\s]*springer[\S\s]*/(article|chapter)/
// @include      /^http[s]?:\/\/[\S\s]*onepetro.org/[\S\s]+/(article|proceedings)/
// @downloadURL https://update.greasyfork.org/scripts/434310/SCI%20RIS%20Helper%20-%20EndNote%2BScihub.user.js
// @updateURL https://update.greasyfork.org/scripts/434310/SCI%20RIS%20Helper%20-%20EndNote%2BScihub.meta.js
// ==/UserScript==

// jQuery.noConflict(true);
// var $ = unsafeWindow.jQuery;

const SCI_HUB_HOST = [
    'https://sci-hub.se/',
    'https://sci-hub.st/',
    'https://sci-hub.ru/',
    'https://sci-hub.red/',
    'https://sci-hub.box/',
];

let bestScihubHost = SCI_HUB_HOST[0];

const PDF_SCIHUB_FIRST = true; // SCI-HUB or JOURNAL first
const MaxRetryTimes = 25;

let METAS;
let RIS;
let Timer;
let HasTriedTimes = 0;

addEvents();

// 事件监听
function addEvents() {
    const _historyWrap = function (type) {
        const orig = history[type];
        const e = new Event(type);
        return function () {
            const rv = orig.apply(this, arguments);
            e.arguments = arguments;
            window.dispatchEvent(e);
            return rv;
        };
    };
    history.pushState = _historyWrap('pushState');
    history.replaceState = _historyWrap('replaceState');

    window.addEventListener('pushState', function (event) {
        console.log('页面重新加载-pushState')
        start()
    })

    window.addEventListener('popstate', function (event) {
        console.log('页面重新加载-popstate')
        start()
    })
    $(document).ready(start)
}

function start() {
    console.log('SCI RIS Helper ———— Dorad, cug.xia@gmail.com');
    printLogo();
    clearAll();
    clearInterval(Timer);
    Timer = setInterval(function () {
        HasTriedTimes += 1;
        METAS = getMeta();
        if (METAS && METAS.hasOwnProperty('doi') && METAS.doi) {
            clearInterval(Timer);
            // getRisFromCuger(METAS.doi)
            // console.log('Final metas:', METAS);
            getRisFromOriginSite(METAS).then((ris) => {
                RIS = ris;
            })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    let risTitle = __getKeyFromRis(RIS, 'TI') ? __getKeyFromRis(RIS, 'TI') : __getKeyFromRis(RIS, 'T1');
                    METAS.title = risTitle ? risTitle : METAS.title;
                    // render
                    console.log('RIS:\n', RIS);
                    console.log('Final metas:', METAS);
                    generateTheButton(RIS, METAS);
                })
        } else {
            console.log('DOI NOT FOUND');
            if (HasTriedTimes >= MaxRetryTimes) {
                clearInterval(Timer);
                generateTheButton(RIS, METAS);
            }
        }
    }, 200);
}

function generateTheButton(ris, metas) {
    clearAll();
    const year = new Date().getFullYear();
    let sheet = $(`
    <div id="risBox">
    <a id="noneDownload" href="javascript:void(0);" style="width:100%; height:60px; display: inline-block; line-height:60px; text-align: center;font-size:24px;color:white;text-decoration:none;padding:0;margin:0;background: #6E7582";>NONE</a>
    <a id="risDownload" href="javascript:void(0);" style="width:100%; height:60px; display: inline-block; line-height:60px; text-align: center;font-size:24px;color:white;text-decoration:none;padding:0;margin:0;background: #118ab2";>RIS</a>
    <a id="risPlusDownload" href="javascript:void(0);" style="width:100%; height:60px; display: inline-block; line-height:60px; text-align: center;font-size:24px;color:white;text-decoration:none;padding:0;margin:0;background: #6ECB63";">RIS+</a>
    <a id="pdfDownload" href="javascript:void(0);" target="_blank" style="width:100%; height:30px; display: inline-block; line-height:30px; text-align: center;font-size:20px;color:white;text-decoration:none;padding:0;margin:0;background: #3B5194";>PDF</a>
    <a id="doiCopy" href="javascript:void(0);" style="width:100%; height:30px; display: inline-block; line-height:30px; text-align: center;font-size:20px;color:white;text-decoration:none;padding:0;margin:0;background: #405F74";>DOI</a>
    <a href="https://blog.cuger.cn" target="_blank" style="width:100%; height:30px; display: inline-block; line-height:30px; text-align: center; font-size:12px;background:#0C344E;color:white;padding:0;margin:0;border-bottom-left-radius:10px;border-bottom-right-radius:10px;text-decoration:none;">Dorad © ${year}</a>
    </div>`)
    var css = {
        'line-height': '1.42857143',
        'font-family': '"Arial","微软雅黑","Helvetica,sans-serif","Microsoft YaHei"',
        'font-size': '16px',
        'box-sizing': 'border-box',
        'border-radius': '10px',
        'margin': '0',
        'padding': '0',
        'width': '100px',
        'height': '210px',
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
    let key = 'SCI-RIS-Helper_NONE'
    if (ris == undefined) {
        key = 'SCI-RIS-Helper_NONE';
    } else {
        // PDF
        const pdf = __getKeyFromRis(ris, 'L1');
        // check if pdf is valid and pdf is end with .pdf
        if (pdf !== undefined && pdf !== '') {
            $("#pdfDownload").attr("href", pdf);
            key = 'SCI-RIS-Helper_PDF';
        } else {
            key = 'SCI-RIS-Helper_RIS';
        }
        // DOI
        $("#doiCopy").click(function () {
            const DOI = __getKeyFromRis(ris, 'DO');
            navigator.clipboard.writeText(DOI);
            Toast(navigator.language == 'zh-CN' ? '复制成功:' + DOI : 'DOI:' + DOI, 1000);
        })
    }
    function click(event) {
        // console.log(event);
        if (event.currentTarget.id == 'risDownload') {
            ris = __setKeyForRis(ris, 'L1', '')
        }
        const UF = generateRisBlob(ris);
        $("#" + event.currentTarget.id).attr("href", UF.blob);
        $("#" + event.currentTarget.id).attr("download", UF.name);
        getCountFromCuger(key);
    }
    // set style according to key
    switch (key) {
        case 'SCI-RIS-Helper_NONE':
            $("#noneDownload").css(radiusCSS);
            $("#risBox").css({
                'height': '90px'
            });
            $("#doiCopy").hide();
            $("#risDownload").hide();
            $("#risPlusDownload").hide();
            $("#pdfDownload").hide();
            break;
        case 'SCI-RIS-Helper_RIS':
            $("#risDownload").css(radiusCSS);
            $("#noneDownload").hide();
            $("#risPlusDownload").hide();
            $("#pdfDownload").hide();
            $("#risBox").css({
                'height': '120px'
            });
            $("a#risDownload").click(click);
            break;
        case 'SCI-RIS-Helper_PDF':
            $("#risDownload").css(radiusCSS);
            $("#noneDownload").hide();
            $("a#risDownload").click(click);
            $("a#risPlusDownload").click(click);
            break;
    }
    // print logo
    printLogo();
    return
}

function generateRisBlob(ris) {
    const title = __getKeyFromRis(ris, 'TI') ? __getKeyFromRis(ris, 'TI') : __getKeyFromRis(ris, 'T1');
    const doi = __getKeyFromRis(ris, 'DO');
    const pdf = __getKeyFromRis(ris, 'L1');
    const risBlob = new Blob([ris], {
        type: "octet/stream"
    });
    const risUrl = URL.createObjectURL(risBlob);
    var fileName = title == undefined ? doi.replace("/", "@") : title;
    fileName += (pdf !== undefined && pdf !== '') ? "-pdf.ris" : "-none-pdf.ris";
    return {
        blob: risUrl,
        name: fileName
    }
}

// clear all button
function clearAll() {
    if ($("#risBox"))
        $("#risBox").remove();
    METAS = undefined;
    RIS = undefined;
    HasTriedTimes = 0;
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
        // console.log(searchStr);
        let meta = $(searchStr);
        if (meta.length) {
            metas[key] = meta.attr("content");
            // console.log(`Get common meta, ${key} = ${meta.attr("content")}`);
        }
    }
    // check doi using regrex
    if (metas.hasOwnProperty('doi') && (!metas.doi || !metas.doi.match(/10\.[^\s\/]+\/[^\s]+/))) {
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
    // if (!metas.hasOwnProperty('pdf') || !metas.pdf || metas.pdf.indexOf('.pdf') < 0)
    if (!metas.hasOwnProperty('pdf') || !metas.pdf)
        delete metas.pdf;
    let risPromise = metas.risPromise;
    let pdfPromise = metas.pdfPromise;
    // 同时请求 sci-hub 进行处理
    return new Promise((resolve, reject) => {
        Promise.allSettled([risPromise(metas), __getRisFromCrossCite(metas.doi), __getPdfUrlFromScihub(metas.doi), pdfPromise(metas)])
            .then((res) => {
                console.log(res);
                // RIS
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
                        let risKeys = __getRisKeys(r);
                        for (var key of risKeys) {
                            if (__getKeyFromRis(ris, key) == undefined || __getKeyFromRis(ris, key) == '') {
                                ris = __setKeyForRis(ris, key, __getKeyFromRis(r, key))
                            }
                        }
                    }
                }
                // PDF url is valid
                if (res[3].status == 'fulfilled' && res[3].value !== undefined) {
                    metas.pdf = res[3].value;
                }
                if (res[2].status == 'fulfilled' && (!metas.hasOwnProperty('pdf') || PDF_SCIHUB_FIRST)) {
                    metas.pdf = res[2].value;
                }

                console.log('updated metas', metas);
                // ris = ris.replace(/(?!\n)(AU|TI)  - /ig, "\n$1  - ");
                // formate ris
                const regstr = "(?!\\n)(" + __getRisKeys(ris).join('|') + ")[ ]{1,3}- ";
                console.log(regstr)
                ris = ris.replace(new RegExp(regstr, 'ig'), "\n$1  - ");
                ris = ris.replace(/(\n){2,}/ig, '\n');
                // update abstract
                if (ris && ris.indexOf('N2  - ') < 0 && ris.indexOf('AB  - ') < 0 && metas.hasOwnProperty('abstract') && metas.abstract.length) {
                    ris = __setKeyForRis(ris, 'N2', metas.abstract)
                }
                // update pdf url
                if (ris && ris.indexOf('L1  - ') < 0 && metas.hasOwnProperty('pdf') && metas.pdf !== undefined && metas.pdf.length) {
                    // ris = __setKeyForRis(ris, 'L1', metas.pdf.replace(/(\?|#)[^'"]*/, ''))
                    ris = __setKeyForRis(ris, 'L1', metas.pdf)
                }
                // add additional property from metas.addPropertyList
                if (metas.hasOwnProperty('addPropertyList')) {
                    metas.addPropertyList.forEach(e => {
                        ris = __setKeyForRis(ris, e.key, e.value)
                    });
                }
                ris = __setKeyForRis(ris, 'DO', metas.doi)
                // push update to cuger.cn
                if (__getKeyFromRis(ris, 'L1'))
                    pushRisToCuger(metas.doi, ris);
                console.log(ris);
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

/**
 * PDF url - SCI-HUB
 */

function __getPdfUrlFromScihub(doi) {
    return __httpRequestPromise(__getScihubHost() + doi, 'GET', {}, {}, (resolve, reject, res) => {
        if (res.status !== 200) {
            reject('Error to get the pdf url from sci-hub');
        }
        let doc = new DOMParser().parseFromString(res.responseText, 'text/html');
        let pdfDomTxt = doc.getElementById('article').innerHTML;
        let src = /src="(\S+)#\S+"/.exec(pdfDomTxt);
        if (!src) {
            reject("Failed to find pdf from sci-hub.")
        }
        let pdfUrl = src[1];
        if (pdfUrl.startsWith('//')) {
            pdfUrl = "https:" + pdfUrl;
        } else if (pdfUrl.startsWith('/')) {
            pdfUrl = __getScihubHost() + pdfUrl.substring(1);
        } else if (pdfUrl.startsWith('http')) {
            pdfUrl = pdfUrl;
        } else {
            reject('Error to get the pdf url from sci-hub');
        }
        // console.log(pdfUrl)
        resolve(pdfUrl);
    })
}

function __getScihubHost() {
    const key = 'SCIHUB-HOST-Cache';
    const cacheTTL = 60 * 10; // 10 minutes
    try {
        let cache = JSON.parse(localStorage.getItem(key));
        if (cache.expAt <= new Date().getTime() / 1000)
            throw Error('Cache expired');
        // console.log('cache:',cache);
        bestScihubHost = cache.value;
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
                bestScihubHost = host;
            })
            .catch((err) => {
                console.log('All the hosts of SCI-HUB are down, please check.' + err.toString());
            })
    }
    console.log('Fastest SCI-HUB host: ' + bestScihubHost);
    return bestScihubHost;
}

function __pingHost(host) {
    return new Promise(async (resolve, reject) => {
        return __httpRequestPromise(host, 'GET', {}, {}, (r, j, res) => {
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
        GM_xmlhttpRequest({
            method: method,
            url: url,
            anonymous: false,
            data: typeof (data) == 'string' ? data : new URLSearchParams(data).toString(),
            headers: $.extend({
                'Connection': 'keep-alive',
                'Accept': 'text/plain, */*; q=0.01',
                'User-Agent': navigator.userAgent,
                'Content-Type': 'application/x-www-form-urlencoded',
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
    const reg = /^(\w+)[ ]+\- .*[\r]{0,1}$/gm
    var m = reg.exec(ris);
    var keys = [];
    while (m) {
        keys.push(m[1])
        m = reg.exec(ris);
    }
    keys.splice(keys.indexOf('ER'), 1)
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
        const erIndex = ris.indexOf('ER  -');
        ris = ris.slice(0, erIndex) + key + "  - " + value + "\n" + ris.slice(erIndex, ris.length);
    }
    return ris
}

//提示信息 封装
function Toast(msg, duration) {
    duration = isNaN(duration) ? 3000 : duration;
    var m = document.createElement('div');
    m.innerHTML = msg;
    m.style.cssText = "font-size: 12px;color: rgb(255, 255, 255);background-color: rgba(0, 0, 0, 0.6);padding: 10px 15px;margin: 0 0 0 -60px;border-radius: 4px;position: fixed;    top: 50%;left: 50%;text-align: center;";
    document.body.appendChild(m);
    setTimeout(function () {
        var d = 0.5;
        m.style.opacity = '0';
        setTimeout(function () { document.body.removeChild(m) }, d * 1000);
    }, duration);
}

function printLogo() {
    console.log(decodeURIComponent(escape(window.atob("CiAgX19fXyAgICBfX19fICBfX18gICBfX19fICAgX19fICBfX19fICAgIF8gICBfICAgICAgICBfICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogLyBfX198ICAvIF9fX3x8XyBffCB8ICBfIFwgfF8gX3wvIF9fX3wgIHwgfCB8IHwgIF9fXyB8IHwgXyBfXyAgICBfX18gIF8gX18gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKIFxfX18gXCB8IHwgICAgIHwgfCAgfCB8XykgfCB8IHwgXF9fXyBcICB8IHxffCB8IC8gXyBcfCB8fCAnXyBcICAvIF8gXHwgJ19ffCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgX19fKSB8fCB8X19fICB8IHwgIHwgIF8gPCAgfCB8ICBfX18pIHwgfCAgXyAgfHwgIF9fL3wgfHwgfF8pIHx8ICBfXy98IHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogfF9fX18vICBcX19fX3x8X19ffCB8X3wgXF9cfF9fX3x8X19fXy8gIHxffCB8X3wgXF9fX3x8X3x8IC5fXy8gIFxfX198fF98ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICBfX19fICAgICAgICAgICAgICAgICAgICAgICAgICBfICAgICAgICAgICAgICAgICAgICAgICAgfF98ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiB8ICBfIFwgICBfX18gICBfIF9fICBfXyBfICAgX198IHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogfCB8IHwgfCAvIF8gXCB8ICdfX3wvIF9gIHwgLyBfYCB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKIHwgfF98IHx8IChfKSB8fCB8ICB8IChffCB8fCAoX3wgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiB8X19fXy8gIFxfX18vIHxffCAgIFxfXyxffCBcX18sX3wgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXyAgICAgICAgICAgX19fXyAgICAgICAgICAgICAgICAgICAgICAgICAgICBfICBfICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgX19fICBfICAgXyAgIF9fIF8gICAgX18gIF9fKF8pICBfXyBfICAgLyBfXyBcICAgX18gXyAgXyBfXyBfX18gICAgX18gXyAoXyl8IHwgICAgX19fICBfX18gICBfIF9fIF9fXyAgCiAgLyBfX3x8IHwgfCB8IC8gX2AgfCAgIFwgXC8gL3wgfCAvIF9gIHwgLyAvIF9gIHwgLyBfYCB8fCAnXyBgIF8gXCAgLyBfYCB8fCB8fCB8ICAgLyBfX3wvIF8gXCB8ICdfIGAgXyBcIAogfCAoX18gfCB8X3wgfHwgKF98IHwgXyAgPiAgPCB8IHx8IChffCB8fCB8IChffCB8fCAoX3wgfHwgfCB8IHwgfCB8fCAoX3wgfHwgfHwgfCBffCAoX198IChfKSB8fCB8IHwgfCB8IHwKICBcX19ffCBcX18sX3wgXF9fLCB8KF8pL18vXF9cfF98IFxfXyxffCBcIFxfXyxffCBcX18sIHx8X3wgfF98IHxffCBcX18sX3x8X3x8X3woXylcX19ffFxfX18vIHxffCB8X3wgfF98CiAgICAgICAgICAgICAgIHxfX18vICAgICAgICAgICAgICAgICAgICAgIFxfX19fLyAgfF9fXy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo="))));
}

/**
 * custom journal metas adaptor
 * here you can add switch case to adaptor new domain according to personalized demand.
 */

function journalMetasAdaptor() {
    let metas = {
        risPromise: function (metas) {
            return new Promise((resolve, reject) => {
                reject("No ref from origin site.")
            })
        },
        pdfPromise: function (metas) {
            return new Promise((resolve, reject) => {
                reject("No pdf from origin site.")
            })
        },
        addPropertyList: []
    };
    /**
     * all the non standard journal
     */
    try {
        let host = window.location.href.match(`^http[s]?:\/\/(.*?)\/`)[1];
        // host translate
        if (host.indexOf('webofscience') > -1) {
            host = 'www.webofscience.com';
        }
        if (host.indexOf('springer') > -1){
            host = 'link.springer.com';
        }
        console.log(host);
        switch (host) {
            case 'ieeexplore.ieee.org':
                metas.title = $('meta[property="twitter:title"]').attr("content");
                metas.doi = $('div.stats-document-abstract-doi a').text();
                metas.title = $('h1.document-title span').text();
                metas.pdfPromise = function (metas) {
                    const url = $('a.stats-document-lh-action-downloadPdf_2').attr("href");
                    return __httpRequestPromise(url, 'GET', {}, {}, (resolve, reject, res) => {
                        if (res.status !== 302 && res.status !== 200) {
                            reject('Error, Not 302 or 200.')
                        }
                        let doc = new DOMParser().parseFromString(res.responseText, 'text/html');
                        let pdfUrl = doc.getElementsByTagName('iframe')[0].src;
                        resolve(pdfUrl);
                    })
                }
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
                metas.pdfDownload = articleConfig.article.pdfDownload;
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
                metas.risPromise = function (metas) {
                    return __httpRequestPromise(`https://www.sciencedirect.com/sdfe/arp/cite?pii=${metas.pid}&format=application/x-research-info-systems&withabstract=true`, 'GET', {}, {
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
                // metas.pdfPromise = function (metas) {
                //     const p = metas.pdfDownload.urlMetadata;
                //     // const url = $('a.accessbar-primary-link').attr('href');
                //     // https://www.sciencedirect.com/science/article/pii/S0003682X21005727/pdfft?md5=7a4fbef5c55adb19a2caf8e20ff2bb02&pid=1-s2.0-S0003682X21005727-main.pdf
                //     // https://www.sciencedirect.com/science/article/pii/PDFFT?md5=7a4fbef5c55adb19a2caf8e20ff2bb02&pid=1-s2.0-S0003682X21005727-main.pdf
                //     const url = `https://www.sciencedirect.com/${p.path}/${p.pii}${p.pdfExtension}?md5=${p.queryParams.md5}&pid=${p.queryParams.pid}&isDTMRedir=Y`;
                //     console.log(url);
                //     return __httpRequestPromise(url, 'GET', {}, {
                //         'authority': 'www.sciencedirect.com',
                //         'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                //         'accept-language': 'en-CN,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,en-GB;q=0.6,en-US;q=0.5',
                //         // 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36 Edg/100.0.1185.29',
                //     }, (resolve, reject, res) => {
                //         // console.log(res)
                //         try {
                //             let doc = new DOMParser().parseFromString(res.responseText, 'text/html');
                //             let pdfUrl = $('a', $('noscript', doc).html()).attr('href');
                //             resolve(pdfUrl);
                //         } catch (err) {
                //             reject(err);
                //         }
                //     })
                // }
                break;
            }
            case 'pubs.acs.org':
                metas.abstract = $('meta[property="og:description"]').attr("content");
                break;
            case 'onlinelibrary.wiley.com':
                metas.abstract = $('div.abstract-group section div p').text();
                metas.risPromise = function (metas) {
                    return __httpRequestPromise('https://onlinelibrary.wiley.com/action/downloadCitation', 'POST', {
                        'doi': metas.doi,
                        'downloadFileName': metas.title,
                        'include': 'abs',
                        'format': 'ris',
                        'direct': 'direct',
                        'submit': 'Download'
                    }, {
                        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
                    }, (resolve, reject, res) => {
                        let ris = res.responseText;
                        if (ris.match(/<html>[\s\S]*<\/html>/))
                            reject('Error format');
                        resolve(ris);
                    })
                }
                // failed to load PDF url for wiley due to its anti-crawler policy
                metas.pdfPromise = function (metas) {
                    // const url = "https://onlinelibrary.wiley.com/doi/pdfdirect/" + metas.doi + "?download=true";
                    return new Promise((resolve, reject) => {
                        resolve("")
                    })
                }
                break;
            case 'agupubs.onlinelibrary.wiley.com':
                metas.abstract = $('div.article-section__content p').text();
                break;
            case 'esajournals.onlinelibrary.wiley.com':
                metas.pdfPromise = function (metas) {
                    const url = document.URL;
                    return new Promise((resolve, reject) => {
                        resolve(window.location.origin + '/doi/pdfdirect/' + metas.doi + '?download=true')
                    })
                }
                break;
            case 'www.cambridge.org':
                metas.abstract = $('div.abstract').text();
                break;
            case 'link.springer.com':
                metas.abstract = $('section.abstract,#Abs1-content,section.Abstract p').text();
                metas.risPromise = function (metas) {
                    return __httpRequestPromise(`https://citation-needed.springer.com/v2/references/${metas.doi}?format=refman&flavour=citation`, 'GET', {}, {
                        "Accept": "application/x-research-info-systems",
                        'accept-language': 'en-CN,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,en-GB;q=0.6,en-US;q=0.5',
                    }, (resolve, reject, res) => {
                        let ris = res.responseText;
                        if (ris.match(/<html>[\s\S]*<\/html>/))
                            reject('Error format');
                        resolve(ris);
                    })
                }
                metas.pdfPromise = function (metas) {
                    const hasAccessToPdf = $('a[data-article-pdf="true"]').length ? true : false
                    return new Promise((resolve, reject) => {
                        if (hasAccessToPdf) {
                            resolve(metas.pdf)
                        } else {
                            // has no access to pdf
                            resolve('')
                        }
                    })
                }
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
                // metas.doi = $('span.article-link-citation a').attr("href");
                break;
            case 'www.ingentaconnect.com':
                metas.abstract = $('div#Abst').text();
                break;
            case 'www.science.org': {
                metas.doi = window.location.href;
                break;
            }
            case 'www.semanticscholar.org':
                metas.doi = $('meta[name="citation_pdf_url"]').attr("content");
                break;
            case 'www.researchgate.net':
                metas.doi = $("div.research-detail-meta div.nova-legacy-e-text ul.nova-legacy-e-list li.nova-legacy-e-list__item a.nova-legacy-e-link[href*=10]").attr("href");
                metas.abstract = $('div.nova-legacy-e-expandable-text__container div:first').text();
                // metas.title = $('div.content-page-header div.content-grid__columns div.content-grid__columns--wide div:eq(0)').text();
                metas.title = $('meta[property="og:title"]').attr("content");
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
                metas.addPropertyList.push({
                    key: "AN",
                    value: $('#HiddenSecTa-accessionNo').text()
                })
                break;
            case 'asmedigitalcollection.asme.org':
                metas.abstract = $('section.abstract p').text();
                break;
            case 'othes.univie.ac.at':
                metas.doi = $('div.ep_summary_content_main div a').attr("href");
                metas.pdf = $('meta[name="eprints.document_url"]').attr("content")
                break;
            case 'www.nature.com':
                metas.doi = $('meta[name="dc.identifier"]').attr("content");
                break;
            case 'aip.scitation.org':
                metas.doi = $('meta[name="citation_doi"]').attr("content");
                break;
            case 'www.mdpi.com':
                metas.pid = $('input[name="articles_ids[]"]').attr("value");
                metas.risPromise = function (metas) {
                    // console.log(metas);
                    return __httpRequestPromise('https://www.mdpi.com/export', 'POST', {
                        'articles_ids[]': metas.pid,
                        'export_format_top': 'ris',
                        'export_submit_top': ''
                    }, {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }, (resolve, reject, res) => {
                        // console.log(res)
                        let ris = res.responseText;
                        if (ris.match(/<html>[\s\S]*<\/html>/))
                            reject('Error format');
                        // ris += '\r\nER  - ';
                        ris = ris.replace(/(AU|TI)  -/ig, '\n$1  -');
                        //console.log(ris);
                        resolve(ris);
                    })
                }
                metas.pdfPromise = function (metas) {
                    const url = document.URL;
                    return __httpRequestPromise(url + '/pdf', 'GET', {}, {}, (resolve, reject, res) => {
                        if (res.status !== 302 && res.status !== 200) {
                            reject('Error, Not 302 or 200.')
                        }
                        // console.log(res)
                        // console.log(`redirect from ${res.responseXML.URL} to ${res.finalUrl}`);
                        resolve(res.finalUrl);
                    })
                }
                break;
            case 'www.frontiersin.org':
                metas.risPromise = function (metas) {
                    const url = $('a[data-test-id="article-referencemanager"]').attr("href");
                    // console.log(metas)
                    return __httpRequestPromise(url, 'GET', {}, {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }, (resolve, reject, res) => {
                        // console.log(res)
                        let ris = res.responseText;
                        if (ris.match(/<html>[\s\S]*<\/html>/))
                            reject('Error format');
                        // ris += '\r\nER  - ';
                        resolve(ris);
                    })
                }
                metas.pdfPromise = function (metas) {
                    const url = $('#SEO_EXP_float_pdf_btn').attr("href");
                    return __httpRequestPromise(url, 'GET', {}, {}, (resolve, reject, res) => {
                        if (res.status !== 302 && res.status !== 200) {
                            reject('Error, Not 302 or 200.')
                        }
                        // console.log(res)
                        console.log(`redirect from ${res.responseXML.URL} to ${res.finalUrl}`);
                        resolve(res.finalUrl);
                    })
                }
                break;
            case 'www.ncbi.nlm.nih.gov':
                metas.pdf = $('li.pdf-link a').attr("href");
                if (metas.pdf.indexOf('http') == -1)
                    metas.pdf = window.location.origin + metas.pdf
            case 'ojs.aaai.org':
                metas.risUrl = $('a[href^="https://ojs.aaai.org/index.php/AAAI/citationstylelanguage/download/ris"]').attr("href");
                metas.risPromise = function (metas) {
                    // console.log(metas);
                    return __httpRequestPromise(metas.risUrl, 'GET', {}, {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }, (resolve, reject, res) => {
                        // console.log(res)
                        let ris = res.responseText;
                        if (ris.match(/<html>[\s\S]*<\/html>/))
                            reject('Error format');
                        resolve(ris);
                    })
                }
                // metas.pdf = $('meta[name="citation_pdf_url"]').attr("content");
                metas.pdfPromise = function (metas) {
                    return new Promise((resolve, reject) => {
                        var pdf = $('meta[name="citation_pdf_url"]').attr("content");
                        if (pdf.indexOf('download')) {
                            resolve(pdf)
                        } else {
                            reject('No pdf url found in the origin site')
                        }
                    })
                }
                break;
            case 'www.ijcai.org':
                metas.doi = $('a.doi').attr('href');
                metas.pdfPromise = function (metas) {
                    return new Promise((resolve, reject) => {
                        var pdf = $('a.button[href$=".pdf"]').attr('href');
                        console.log(pdf);
                        if (pdf.indexOf('download') > -1) {
                            resolve(pdf)
                        } else {
                            reject('No pdf url found in the origin site')
                        }
                    })
                }
            case 'arxiv.org':
                metas.pdfPromise = function (metas) {
                    return new Promise((resolve, reject) => {
                        var pdf = $('a[href*="pdf"]').attr('href');
                        pdf = 'https://arxiv.org/' + pdf + '.pdf'
                        resolve(pdf);
                    })
                }
                break;
            case 'www.scopus.com':
                metas.abstract = $("els-typography[id='abstract']").next().find('span').text();
                break;
            case 'avs.scitation.org':
                metas.abstract = $('meta[name="citation_abstract"]').attr("content");
                break;
            case 'pubs.rsc.org':
                metas.doi = $('meta[name="DC.Identifier"]').attr("content");
                metas.pid = metas.doi.toLowerCase().split('/')[1];
                metas.risPromise = function (metas) {
                    return __httpRequestPromise('https://pubs.rsc.org/en/content/getformatedresult/' + metas.pid + '?downloadtype=article', 'POST', {
                        'ResultAbstractFormat': 'RefWorks',
                        'go': 'Go',
                    }, {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }, (resolve, reject, res) => {
                        // console.log(res)
                        let ris = res.responseText;
                        if (ris.match(/<html>[\s\S]*<\/html>/))
                            reject('Error format');
                        resolve(ris);
                    })
                }
                break;
            default:
        }
    } catch (error) {
        console.error(error);
    }
    if (metas.doi)
        metas.doi = decodeURIComponent(metas.doi);
    console.log('Adapted metas:', metas);
    return metas;
}
