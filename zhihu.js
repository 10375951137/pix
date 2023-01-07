//sc-dIvrsQ
//https://www.pixiv.net/novel/show.php?id=16640076
const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')
const async = require("async");
const cookie = "_zap=ecf8c39b-21b3-4026-a4a7-50f9c21d09de; _xsrf=QpSq8Ag464wPknXHlDrGSl7Cc9aa0dDa; d_c0=AMCXsj396RWPTgr4KFCnZNFF1NIqs-a6a3Q=|1669260003; captcha_session_v2=2|1:0|10:1669260004|18:captcha_session_v2|88:dTQraWpkaExwekdta3NvYzhLUzE5NExIY1krUlNJV2ZjV0FaTTFtV1hQcDVCeXp2a2JmTzdvdzlNRTZ2ZTNnSA==|f8987f767a5e4573e33e83139e0cbc15f1141d6d1541f4dab5aa4fca1e573b56; __snaker__id=v2k5HXkmSSfJ1Dnb; gdxidpyhxdE=KGCJ13ImdOnzOYPq8DbDrWeAk2jQ6DYKUpkxeY5JHhAeerR8yCkPBMbV6hBnx0ih8W2ZXJRzW%2Fy3vZJz2Bqvab8JpakCeg%2FXts4%5CnSxsS%2BNQeqmn3XQEPSy67g1ula1teQiWl2XnB7dNGcSyRtz5mcrv%2BdJSaiBi4qojwaS%2F9ro53Se3%3A1669260905370; YD00517437729195%3AWM_NI=B9ykF442ulz0%2FfxeF5uTvahKoB3bGWjJX7YC%2Biqk%2BkXkN6LDqyfB5FXUgfdWgSk%2B%2Bpt65joUQwkDNn8VbVcyPmzBQHIB9cvewHfqV8AnusOYbWFCWHVj0K67ZPyZ6LDsUEM%3D; YD00517437729195%3AWM_NIKE=9ca17ae2e6ffcda170e2e6ee82b6338deee18be461af8e8bb3d84f878a8e83c1469ba8bb8bd27df18e8590d42af0fea7c3b92a82e7b78cc540f8eebb8df93cedbab886c53fb78cba82eb41ad9efd83c65daa9698d8dc49e9b7bf8caa619cb582d7cf50b3a7aaa3b84e9c8ba987e75da58da5ccaa7cb8eafb8bee5f93a9a5a5cd66fc8aaeb7e27394b3b6a3d4448b9ef784f56fb598aa92d53483b2bb94ce53a2898aa4d64496b600acb53d9a90b7bbb54888ad9ba6d037e2a3; YD00517437729195%3AWM_TID=Db1atSk1CxxFQAUFERPAIJh%2FyW1zUP9U; captcha_ticket_v2=2|1:0|10:1669260009|17:captcha_ticket_v2|704:eyJ2YWxpZGF0ZSI6IkNOMzFfcF9NX0REcmpoanItcVhsLTZOLlh0cmMySzlZYllMS1RKaC11VmJpOGs5RkRLTTQ2aEE2a1ZYc29kc1VQZ1YwZEpFUl81eVJYdlBnSzBqN2Jfbmt0N2JBeXRhZ1VlYmIuelJOQmlFREg4WGloZThwZXouc3ctN1RmUjA0Vkh2LjZCay04Vi4ySlFlUF9NZmFseTBvcjlXNkI5X19yTWlDbGo4emdsYkM1cTllS09SNFlKaExrV2VSeGhvbjFhVndaX1dMX3poYlZXLVBvMWRwLS5Ra1lfWHllLkRGRzBfQnRrTUJOc3RldzBDeWRMbGtnS1VWN29FRXlMT0V2Tkd3T1I4OWp6c1B4WFJKTmF4dWh4bFFwcWlVZ0o0al9wMGZHdC5FcUU2LVVFRjFaa0JKeEtVTm1BRmdXTHpGelB1akpqaDQwS2g4SVcya0c0T0NEckN4ZXhRMnQ5dk9HV3I3TTFRRWhyRllfOVQ2VHM5aTFXZjZsSWNLLnRWQ2hPc1BNV3pXNXJiNjBpSFlsV1BpNGg3cTdmYjVJRUs1NG1qVG5GSTV6eTFqZG5keHA0dDhJMG5NRFNrRWplWi0tS3MxZVN5VXQxRlJFWjlNTHBiSmhCOFJHcDZ5QThQNF96WmZpRGJlZlpjMEZycmpRZUpmdGsyeUU1VXB2U2dJMyJ9|9450aa7662c1eb2e83da9b1d52afc6a599f43cf32082e8e3ae63838cd6020916; q_c1=955affdd7e1240579e60ae23efc06c2f|1669343490000|1669343490000; tst=r; z_c0=2|1:0|10:1669702294|4:z_c0|92:Mi4xbG9hUEF3QUFBQUFBd0pleVBmM3BGU1lBQUFCZ0FsVk5BREZzWkFCeFZvX09tR25wUmI5b0FtQXFmcU1QZ2h2QXhB|54a00b7b1b96f86bb1164e93919dd82bfadc1dfa8b0497b36e3cc3582e0e897b; Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49=1670374238,1670466478,1670999072,1671417883; SESSIONID=MYjxBF99UwLHhBJsrgopOFzEvrtXUMp8RYWUJoI8ZQQ; JOID=V1EUAU4j1OlTV44hMySIuydtdMQiYoWALBXEEAl2r60YOMxnSDsPcjdbiio3F4dBXqvSRD5C355gtihK_KrrdHs=; osd=U10TB0In2O5VW4otNCKEvytqcsgmboKGIBHIFw96q6EfPsBjRDwJfjNXjSw7E4tGWKfWSDlE05pssS5G-Kbscnc=; Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49=1671417912; ariaDefaultTheme=undefined; KLBRSID=b33d76655747159914ef8c32323d16fd|1671502715|1671499081";
const UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/108.0.0.0"
// import fetch from "node-fetch";
// const { log } = require('console')
// let id = '18731800'//18686537 18686547 18686548 18686552 18686554 18690834 18692582
// //1163
// request({
//     url: `https://www.pixiv.net/touch/ajax/novel/details?novel_id=${id}&ref=https%3A%2F%2Faccounts.pixiv.net%2F&lang=zh`,
//     method: 'get',
//     proxy: 'http://127.0.0.1:10809',
//     headers: {
//         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 Edg/96.0.1054.62',
//         'Referer': 'https://www.pixiv.net/novel/show.php?id=' + id,
//     },

// }, (error, response, body) => {
//     if (error) console.log(error);
//     // fs.writeFile('test.txt', body,()=>{})
//     // const $ = cheerio.load(body)
//     // log(JSON.parse($('#meta-preload-data').attr('content')));
//     // fs.writeFile('test.txt',JSON.parse($('#meta-preload-data').attr('content')).novel[id].content,()=>{})
//     fs.writeFileSync('test.txt', JSON.parse(body).body.novel_details.text)
//     console.log('ok');
// })

const list = [
    {
        "name": "完美犯罪：灭门",
        "id": "1532768200844001281"
    },
    {
        "name": "完美犯罪：破局",
        "id": "1532774564735533056"
    },
    {
        "name": "完美犯罪：重生",
        "id": "1532775653049335808"
    },
    {
        "name": "最后的卧底",
        "id": "1535296513059635200"
    },
    {
        "name": "不合理的凶手",
        "id": "1535319273576112128"
    },
    {
        "name": "寻人启事",
        "id": "1538122613594820608"
    },
    {
        "name": "血色伴娘服",
        "id": "1538897798737334272"
    },
    {
        "name": "正义的凶手",
        "id": "1540700507122831360"
    },
    {
        "name": "恶村",
        "id": "1540793627915087872"
    },
    {
        "name": "水里的漩涡",
        "id": "1540801497943535616"
    },
    {
        "name": "最好的猎物",
        "id": "1541073404710354944"
    },
    {
        "name": "窗外世界",
        "id": "1541383143533170688"
    },
    {
        "name": "看不见的真凶",
        "id": "1543551673397637120"
    },
    {
        "name": "罂粟花的复仇",
        "id": "1545101720069509120"
    },
    {
        "name": "门外有人",
        "id": "1545522563090132992"
    },
    {
        "name": "社恐日记",
        "id": "1545524614444306432"
    },
    {
        "name": "你会说谎吗",
        "id": "1545526333463261185"
    },
    {
        "name": "凶器迷踪",
        "id": "1546541061165699073"
    },
    {
        "name": "恶念",
        "id": "1547666263261982720"
    },
    {
        "name": "消失的男友",
        "id": "1548009402246008832"
    },
    {
        "name": "缅北：罪恶的人奶工厂",
        "id": "1548376706578292736"
    },
    {
        "name": "盲妻的秘密",
        "id": "1548407365938089984"
    },
    {
        "name": "灭门的真相",
        "id": "1548694099624128512"
    },
    {
        "name": "恶报",
        "id": "1549043229395189760"
    },
    {
        "name": "险恶",
        "id": "1549044181720342528"
    },
    {
        "name": "疯狂的口罩",
        "id": "1549131918305947648"
    },
    {
        "name": "烟火",
        "id": "1550533419565531136"
    },
    {
        "name": "诡异来电",
        "id": "1550881140436824064"
    },
    {
        "name": "沉在恶中的花",
        "id": "1551520287379886081"
    },
    {
        "name": "为妻追凶十九年",
        "id": "1551535234277154816"
    },
    {
        "name": "致命时刻：黎明杀机",
        "id": "1551663517035626496"
    },
    {
        "name": "我是连环杀人魔",
        "id": "1553034223816286209"
    },
    {
        "name": "缅北：罪恶工厂的双生花",
        "id": "1553349786308468736"
    },
    {
        "name": "将死之人",
        "id": "1553458859066503168"
    },
    {
        "name": "鱼缸里的美人鱼",
        "id": "1553465195652947968"
    },
    {
        "name": "恶魔",
        "id": "1553746274075160576"
    },
    {
        "name": "和妻子身体互换后我被迫生子",
        "id": "1553838048709951488"
    },
    {
        "name": "绑匪绑架了抑郁患者",
        "id": "1553840647936913409"
    },
    {
        "name": "傀儡师之恋",
        "id": "1553843558678974464"
    },
    {
        "name": "黑暗的村庄",
        "id": "1555190084709937152"
    },
    {
        "name": "被替换的枕边人",
        "id": "1555554243985260544"
    },
    {
        "name": "我是连环杀人魔 ：长明岛",
        "id": "1555565698935689216"
    },
    {
        "name": "阳光之下",
        "id": "1555567873157926912"
    },
    {
        "name": "灰色复仇",
        "id": "1555651591558041600"
    },
    {
        "name": "裸贷骗局",
        "id": "1556737761662746624"
    },
    {
        "name": "罪恶母爱",
        "id": "1557819675106603008"
    },
    {
        "name": "欲加之罪",
        "id": "1557821154890498048"
    },
    {
        "name": "以恶制恶",
        "id": "1558099454624051202"
    },
    {
        "name": "刈草者",
        "id": "1558176184520826880"
    },
    {
        "name": "一个亿的代价",
        "id": "1558184825738973184"
    },
    {
        "name": "姐姐杀了姐姐",
        "id": "1558857794324951041"
    },
    {
        "name": "深山医院",
        "id": "1559934975943942144"
    },
    {
        "name": "我被拐卖的日子",
        "id": "1560770120791830530"
    },
    {
        "name": "以恶制恶：我无罪",
        "id": "1560934053473406976"
    },
    {
        "name": "赎罪的羔羊",
        "id": "1561302315004481536"
    },
    {
        "name": "诈骗集团",
        "id": "1561685277323530240"
    },
    {
        "name": "无辜的凶手",
        "id": "1562418422742212608"
    },
    {
        "name": "请一分钟后解锁",
        "id": "1563136282225782784"
    },
    {
        "name": "杀人记录薄",
        "id": "1563195814670970880"
    },
    {
        "name": "你是下一个",
        "id": "1564290345088729088"
    },
    {
        "name": "误杀",
        "id": "1564306022872911873"
    },
    {
        "name": "看不见的底牌",
        "id": "1564307999350616064"
    },
    {
        "name": "熊娃娃",
        "id": "1565801069321617408"
    },
    {
        "name": "十忌",
        "id": "1565805996072718336"
    },
    {
        "name": "在另一具躯壳里说爱你",
        "id": "1566475090371235840"
    },
    {
        "name": "我是连环杀人魔3：与恶成群",
        "id": "1566825524181049344"
    },
    {
        "name": "复仇事务所",
        "id": "1568255043693969408"
    },
    {
        "name": "目睹丈夫杀人后",
        "id": "1570844192191983616"
    },
    {
        "name": "被重叠的记忆",
        "id": "1571544520864444418"
    },
    {
        "name": "谎言日记",
        "id": "1571546463112445952"
    },
    {
        "name": "消失的女儿",
        "id": "1572972365893623808"
    },
    {
        "name": "水井里的羊羔肉",
        "id": "1572985080561270784"
    },
    {
        "name": "谋杀孕妻",
        "id": "1573732108346105856"
    },
    {
        "name": "假牙",
        "id": "1573738519708827648"
    },
    {
        "name": "杀死82个我自己",
        "id": "1573760933331169280"
    },
    {
        "name": "仓房里的鹦鹉",
        "id": "1575898843056660480"
    },
    {
        "name": "复仇事务所2恶之花",
        "id": "1576209891387219968"
    },
    {
        "name": "妻子的巨额保险",
        "id": "1583135176514818048"
    },
    {
        "name": "这盛世，我来守护",
        "id": "1583153122683068416"
    },
    {
        "name": "虚假身份",
        "id": "1585649819405787136"
    }
]


async.eachLimit(list, 2, function (item, cb) {
    var url = "https://www.zhihu.com/market/paid_column/1532765551247581185/section/" + item.id;
    //获取url最后的名字
    var fileName = item.name + ".txt";
    //去掉/
    let dir = path.join(__dirname, 'data');
    var toPath = path.join(dir, fileName);
    // console.log('开始下载：%s，保存到：%s', fileName, dir);
    //这个地方要详细说了
    request({
        url: url,
        method: "GET",
        headers: {
            cookie: cookie,
            "user-agent": UA
        }
    }, function (err, res, body) {
        if (err) {
            console.log(err);
            cb();
            return;
        }
        const $ = cheerio.load(body);
        fs.writeFileSync(toPath, $("#manuscript").text());
        console.log("下载完成：" + fileName);
        cb();
    })
}, () => {
    console.log('下载完成');
});
// request({
//     url: "https://www.zhihu.com/market/paid_column/1532765551247581185/section/1549131918305947648",
//     method: "GET",
//     headers: {

//     }
// }, (err, res, body) => {

// })