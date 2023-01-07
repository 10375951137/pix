//sc-dIvrsQ
//https://www.pixiv.net/novel/show.php?id=16640076
const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')
const https = require("https");
const http = require("http");
const http2 = require("http2");





// request({
//     url: `https://18comic.vip/albums?o=mv&t=t`,
//     method: 'get',
//     proxy: 'http://127.0.0.1:10809',
//     headers: {
//         'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/108.0.0.0',

//         "cookie": "AVS=fldq17rjm3nllqf3egdj2hlh7u; ipcountry=HK; ipm5=e1ad3c5e180d2be0f6b3b515264ca3ee",
//         accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
//         // "accept-encoding": "gzip, deflate",
//         "accept-language": "zh-CN,zh;q=0.9",
//         // "sec-fetch-mode": "navigate",
//         // "sec-fetch-site": "none",
//         // "sec-fetch-user": "?1",
//         // "upgrade-insecure-requests": "1",
//     },

// }, (error, response, body) => {
//     if (error) console.log(error);
//     // console.log("response",response);
//     console.log(body);
//     // thumb-overlay-albums
//     // fs.writeFile('test.txt', body,()=>{})
//     // const $ = cheerio.load(body)
//     // log(JSON.parse($('#meta-preload-data').attr('content')));
//     // fs.writeFile('test.txt',JSON.parse($('#meta-preload-data').attr('content')).novel[id].content,()=>{})
//     // fs.writeFileSync('test.txt', JSON.parse(body).body.novel_details.text)
//     // fs.writeFileSync("temp.html",body)
//     console.log('ok');
// })
// request({
//         url: `https://18comic.vip/albums?o=mv&t=t`,
//         method: 'get',
//         proxy: 'http://127.0.0.1:10809',
//         headers: {
//             'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/108.0.0.0',
//             "Connection": "keep-alive",
//             "content-length": "",
//             // "cookie": "AVS=fldq17rjm3nllqf3egdj2hlh7u; ipcountry=HK; ipm5=e1ad3c5e180d2be0f6b3b515264ca3ee",
//             accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
//             "Cache-Control": "no-cache",
//             "href": "https://18comic.vip/albums?o=mv&t=t",
//             "proxy-connection": "keep-alive",
//             "sec-ch-ua": '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
//             "sec-ch-ua-mobile": "?0",
//             "sec-ch-ua-platform": '"Windows"',
//             "sec-fetch-dest": "document",
//             "sec-fetch-mode": "navigate",
//             "sec-fetch-site": "none",
//             "sec-fetch-user": "?1",
//             "upgrade-insecure-requests": "1",

//             // // "accept-encoding": "gzip, deflate",
//             // "accept-language": "zh-CN,zh;q=0.9",
//             // "content-type": "application/x-www-form-urlencoded",
//             // "sec-fetch-mode": "navigate",
//             // "sec-fetch-site": "none",
//             // "sec-fetch-user": "?1",
//             // "upgrade-insecure-requests": "1",
//         },

//         // rejectUnauthorized: false,
//         // ca: fs.readFileSync('FiddlerRoot.cer'),
    
//     }, (error, response, body) => {
//         if (error) console.log(error);
//         // console.log("response",response);
//         console.log(response);
//         // thumb-overlay-albums
//         // fs.writeFile('test.txt', body,()=>{})
//         // const $ = cheerio.load(body)
//         // log(JSON.parse($('#meta-preload-data').attr('content')));
//         // fs.writeFile('test.txt',JSON.parse($('#meta-preload-data').attr('content')).novel[id].content,()=>{})
//         // fs.writeFileSync('test.txt', JSON.parse(body).body.novel_details.text)
//         // fs.writeFileSync("temp.html",body)
//         console.log('ok');
//     })

var options = {
    'method': 'GET',
    'url': 'https://18comic.vip/albums?o=mv&t=t',
    proxy: 'http://127.0.0.1:10809',
    'headers': {
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/108.0.0.0',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'Cookie': 'AVS=fldq17rjm3nllqf3egdj2hlh7u; ipcountry=HK; ipm5=20d3f14b2d78daf9abf275623e65f397'
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });
  