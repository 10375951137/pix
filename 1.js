const { default: axios } = require("axios");
const fs = require("fs")
const cheerio = require('cheerio');
//引入ws模块
const WebSocket = require('ws');
//创建websocket服务器
const wss = new WebSocket.Server({ port: 18080 });
//监听客户端的连接
wss.on('connection', function (ws) {
    console.log('有客户端连接');
    //监听客户端的消息
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });
    //向客户端发送消息
    ws.send('something');
});

wss.on("error", (err) => {
    console.log("err", err)
})

function substring(data, startStr, endStr) {
    let start = data.indexOf(startStr) + startStr.length;
    let end = data.indexOf(endStr, start);
    return data.substring(start, end);
}

function getData(ws, url) {

    if (url.indexOf("www.ikandy.fun") == -1) {
        ws.send({ code: 0, msg: "不支持的网站", type: "error" });
        return;
    }

    axios.get(url).then(({ data }) => {
        ws.send({ code: 1, msg: "获取网站页面成功", type: "percent", data: 20 });
        //截取字符串 var player_data=到</script>
        let player_data = JSON.parse(substring(data, "var player_data=", "</script>"))
        axios({
            url: "https://x.mmiyue.com/x/player/index.php?video_id=" + player_data.url,
            method: "get",
            headers: {
                referer: "https://x.mmiyue.com/",
                "user-agent": "Mozilla/5.0 (Linux; Android 10; MI 9 Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36"
            }
        }).then(({ data }) => {
            ws.send({ code: 1, msg: "获取iframe页面成功", type: "percent", data: 40 });
            let $ = cheerio.load(data)
            let url = $("#player").attr("src")
            axios({
                url: "https:" + url,
                method: "get",
                headers: {
                    referer: "https://x.mmiyue.com/",
                    "user-agent": "Mozilla/5.0 (Linux; Android 10; MI 9 Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36"
                }
            }).then(({ data }) => {
                ws.send({ code: 1, msg: "获取参数页面成功", type: "percent", data: 60 });
                let id = substring(data, `var id="`, `";`);
                let sk = substring(data, `var sk="`, `";`);
                let pt = substring(data, `var pt="`, `";`);
                let ti = substring(data, `var ti="`, `";`);
                let src = "play/" + id;
                axios({
                    url: "https://pcc.mmiyue.com/hls/" + src,
                    method: "post",
                    headers: {
                        referer: "https://pcc.mmiyue.com/",
                        "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/109.0.0.0",
                        "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                    },
                    data: {
                        'bkn': getBkn(sk),
                        'gtk': getGtk(pt),
                        'skey': sk,
                        'pt_token': pt,
                        'time': ti
                    }
                }).then(res => {
                    ws.send({ code: 1, msg: "获取数据成功", type: "data", data: decrypt(res.data) });
                })
            })
        })
    })
}








var decrypt = function (_0x101428) {
    var _0x5486ef = _0x101428.substr(0x0, 0x6e);
    var _0x51b176 = _0x101428.substr(0x6e, 0x20);
    // console.log(_0x51b176);
    var _0x102984 = _0x101428.substr(110 + 32);
    _0x101428 = '';
    var tmp1 = 0;
    for (var i = 0; i < 32; i++) {
        tmp1 += parseInt(_0x51b176[i], 16);
    }

    tmp1 = tmp1 % 5;
    console.log(tmp1);
    for (var i = 0; i < _0x102984.length; i += 3) {
        if ('tAOeH' === 'ofPTd') {
            var _0x5121a9 = _0xbdcb20[_0x47dd('21', 'S(VF')][_0x47dd('22', '$U#T')]('|')
                , _0x21d056 = 0x0;
            while (!![]) {
                switch (_0x5121a9[_0x21d056++]) {
                    case '0':
                        var _0x4e4298 = _0xbdcb20[_0x47dd('23', 'h]Eu')](_0x3347bb, _0xbdcb20[_0x47dd('24', '7Oj4')](i, 0x3), 0x5);
                        continue;
                    case '1':
                        _0x403748 = _0xbdcb20[_0x47dd('25', 'QXww')](parseInt, _0x403748, 0x10);
                        continue;
                    case '2':
                        var _0x572cbd = _0xbdcb20[_0x47dd('26', 'qCc$')](tmp1, _0x4e4298);
                        continue;
                    case '3':
                        _0x572cbd = _0xbdcb20[_0x47dd('27', 'ZWU!')](_0x572cbd, 0x0) ? 0x1 : _0x572cbd;
                        continue;
                    case '4':
                        _0x101428 += String[_0x47dd('28', 'V(Sr')](_0x403748);
                        continue;
                    case '5':
                        _0x403748 -= _0x572cbd;
                        continue;
                    case '6':
                        var _0x403748 = _0x102984[_0x47dd('29', 'Y*5i')](i, 0x3);
                        continue;
                    case '7':
                        _0x403748 = _0xbdcb20[_0x47dd('2a', 'V(Sr')](_0x3ea730, _0x403748, _0x572cbd);
                        continue;
                    case '8':
                        _0xbdcb20[_0x47dd('2b', '[Zk0')](_0x572cbd, 0x0) ? _0x572cbd += 0x5 : _0x572cbd;
                        continue;
                }
                break;
            }
        } else {
            var _0x3db7e7 = _0x102984.substr(i, 0x3);
            var _0x80d38d = (i / 3) % 5;
            var _0x423973 = tmp1 - _0x80d38d;
            _0x423973 < 0 ? _0x423973 += 5 : _0x423973;
            _0x423973 = _0x423973 == 0 ? 1 : _0x423973;
            _0x3db7e7 = parseInt(_0x3db7e7, 16);
            _0x3db7e7 -= _0x423973;
            _0x3db7e7 = _0x3db7e7 >> _0x423973;
            _0x101428 += String.fromCharCode(_0x3db7e7);
            // console.log(_0x101428);
        }
    }
    // console.log(_0x5486ef, _0x101428);
    return _0x5486ef + _0x101428;
};
var id = "1e55bc5fb157f2fa58acc9269e30105d3c5432e7ea5fd8aa51d28d637834c0b08a5bb11e1daec05af48b341a23267c16d5e6f67646d217a3454409b2218806b16cf04b0c373d42daef3ef079e73f1087e29d";
var src = "play/" + id;
var sk = "6576e97d44d97a361841f962192c97bf7a196ea026a0e68c";
var pt = "df9d73ccf9f90b6c09890390d3b0499f8ca67178d23123fa476e8d47f1ef96a451302e794fc170d75610f398500d698857cc373fe7516517";
var ti = "1674376964";



function getBkn(skey) {
    var obj = {
        'sZJsW': function (a, b) {
            return a > b;
        },
        'HtKWt': function (a, b) {
            return a + b;
        },
        'avfjC': function (a, b) {
            return a << b;
        },
        'CXZuG': function (a, b) {
            return a & b;
        }
    };
    var _0x46d134, _0x344de3 = skey;
    if (!_0x344de3)
        return '';
    for (var _0x26c8d = 6492, i = 0, length = skey.length; obj.sZJsW(length, i); ++i) {
        _0x26c8d += obj.HtKWt(obj.avfjC(_0x26c8d, 0x5), skey.charAt(i).charCodeAt());
    }
    return obj.CXZuG(0x7fffffff, _0x26c8d);
}




function getGtk(pt) {
    var num1 = 0;
    for (var i = 0; i < pt.length; i += 4) {
        num1 += parseInt("" + pt[i] + pt[i + 1] + pt[i + 2] + pt[i + 3], 16);
        num1 %= 0x400a;
    }
    var x = num1 % 0xa;
    function charCodeAt1(i) {
        return pt.charCodeAt(i) * (i + x)
    }
    var gtk = 0;
    for (var i = 0; i < pt.length; i++) {
        gtk += charCodeAt1(i);
        gtk %= num1;
    }
    return gtk
}

// axios({
//     url: "https://pcc.mmiyue.com/hls/" + src,
//     method: "post",
//     headers: {
//         referer: "https://pcc.mmiyue.com/",
//         "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/109.0.0.0",
//         "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
//     },
//     data: {
//         'bkn': getBkn(sk),
//         'gtk': getGtk(pt),
//         'skey': sk,
//         'pt_token': pt,
//         'time': ti
//     }
// }).then(res => {
//     fs.writeFileSync("1.m3u8", decrypt(res.data))
// })



