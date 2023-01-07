//sc-dIvrsQ
//https://www.pixiv.net/novel/show.php?id=16640076
const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')
const { log } = require('console')
let id = '18814680'//18686537 18686547 18686548 18686552 18686554 18690834 18692582
//1163
request({
    url: `https://www.pixiv.net/touch/ajax/novel/details?novel_id=${id}&ref=https%3A%2F%2Faccounts.pixiv.net%2F&lang=zh`,
    method: 'get',
    proxy: 'http://127.0.0.1:10809',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 Edg/96.0.1054.62',
        'Referer': 'https://www.pixiv.net/novel/show.php?id=' + id,
    },
    
}, (error, response, body) => {
    if (error) console.log(error);
    // fs.writeFile('test.txt', body,()=>{})
    // const $ = cheerio.load(body)
    // log(JSON.parse($('#meta-preload-data').attr('content')));
    // fs.writeFile('test.txt',JSON.parse($('#meta-preload-data').attr('content')).novel[id].content,()=>{})
    fs.writeFileSync('test.txt', JSON.parse(body).body.novel_details.text)
    console.log('ok');
})