//sc-dIvrsQ
//https://www.pixiv.net/novel/show.php?id=16640076
const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')

request({
    // url:'https://www.pixiv.net/novel/show.php?id=16640076',
    url:'https://www.pixiv.net/novel/ranking.php?mode=daily_r18',
    method:'get',
    proxy:'http://127.0.0.1:10809',
    headers: {
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 Edg/96.0.1054.62',
        'cookie': 'first_visit_datetime_pc=2021-12-24+16%3A17%3A21; p_ab_id=5; p_ab_id_2=2; p_ab_d_id=1571410092; yuid_b=JDN2KQY; __utmc=235335808; __utmz=235335808.1640330243.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); _fbp=fb.1.1640330242987.1158920441; _ga=GA1.2.382667389.1640330243; _gid=GA1.2.1882325952.1640330247; PHPSESSID=61598214_boH1eujHKunvtWPulhzH2Gil3C8h7JRm; device_token=f81a1b7783323c764f088e2a26d02f59; privacy_policy_agreement=3; c_type=27; privacy_policy_notification=0; a_type=0; b_type=1; ki_r=; ki_s=214908%3A0.0.0.0.2%3B214994%3A0.0.0.0.2%3B215190%3A0.0.0.0.2%3B221691%3A0.0.0.0.0; login_ever=yes; __utmv=235335808.|2=login%20ever=yes=1^3=plan=normal=1^5=gender=male=1^6=user_id=61598214=1^9=p_ab_id=5=1^10=p_ab_id_2=2=1^11=lang=zh=1; _gcl_au=1.1.354117379.1640330274; __utma=235335808.382667389.1640330243.1640330243.1640401330.2; __cf_bm=vgqXCXnObwARav68o4pIafoLPRD2mWlrgMA_f8gHhqw-1640401331-0-AZp5wS3F5y6OGDvWZj9GtIKw1hK3OyFVStTYthd4UmJDYFwZMLZqQgDiZWxSc78pgr2GyPjvbVA8DRbn6i8PXcfTYidToZFGgDTWBRQLOlNuVXDhrL9J6ULoClTUALPQDjR8Q8RtFcVGdJHb4wX+JQaoBUg1c9ZvM8UKaPYgQ/T1Kw8+jrbIiO99X7jbFKIaEA==; ki_t=1640330264650%3B1640401331013%3B1640401331013%3B2%3B2; __utmt=1; QSI_S_ZN_5hF4My7Ad6VNNAi=r:10:2; __utmb=235335808.8.10.1640401330'
    },
},(error, response, body)=>{
    if(error) console.log(error);
    fs.writeFile('test.txt', body,()=>{})
    // const $ = cheerio.load(body)
    // fs.writeFile('test.txt',JSON.parse($('.json-data').attr('content')).novel['16640076'].content,()=>{})
    // console.log(JSON.parse($('.json-data').attr('value')));
    // console.log(body);
})