const puppeteer = require("puppeteer");
const fs = require("fs");
const cheerio = require("cheerio");
const os = require("os");
const mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '3365245110',
  database: 'comic'
});
connection.connect();

let reTry = 0;

function isLinux() {
  return os.platform() === "linux";
}
let browser;

async function getPageContent(url) {
  console.time("1");
  console.time("2");

  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/108.0.0.0"
  );
  await page.setRequestInterception(true);
  page.on("request", (request) => {
    if (
      request.resourceType() === "script" ||
      request.resourceType() == "image"
    )
      request.abort();
    else request.continue();
  });

  await page.goto(url);

  const content = await page.content();
  await page.close();
  // await browser.close();
  return content;
}
const getComicList = async () => {
  try {
    const content = await getPageContent("https://18comic.vip/albums?o=mv&t=t");
    console.timeEnd("1");
    const $ = cheerio.load(content);
    let sql = [];
    $(".thumb-overlay-albums").each(function (i, ele) {
      const parent = $(ele).parent();
      const titleEle = $(parent.find(".video-title")[0]);
      let title = titleEle.text();
      if (title) {
        //特殊字符处理
        title = title.replaceAll("'", "\"");
        title = title.replaceAll("+", "加");

      }
      let id = $($(ele).find("a")[0]).attr("href").split("/").filter((_) => _).pop();
      let img = $($(ele).find("a img")[0])
        .attr("src")
        .replaceAll("blank.jpg", `${id}_3x4.jpg?v=${Date.now()}`);
      let likes = $($(ele).find(`#albim_likes_${id}`)[0]).text();
      let tags = $($(parent).find(".tag"))
        .map((j, v) => {
          return $(v).text();
        })
        .toArray().join(",");

      sql.push([id, title, img, likes, tags, new Date()]);
    });
    //如果id已存在则不插入,则忽略
    connection.query("INSERT IGNORE INTO list (id,title,img,likes,tags,date) VALUES ?", [sql], () => { });

    console.timeEnd("2");
  } catch (error) {
    console.log("出错了，第" + (reTry + 1) + "次重试");
    if (reTry < 3) {
      reTry++;
      await getComicList();
    }
  }

};

(async () => {
  if (!browser) {
    browser = await puppeteer.launch({
      ignoreHTTPSErrors: true,
      // headless: false,
      args: [
        isLinux() ? "" : `--proxy-server=127.0.0.1:10809`,
        "--no-sandbox",
        "--disable-setuid-sandbox",
        `--disable-javascript=true`,
        `--disable-images=true`,
        "-–ash-host-window-bounds=240x320",
      ],
    });
  }

  await getComicList();
  console.log("爬取完毕");

  await browser.close();
  browser = null;
  //关闭connection
  connection.end();
  //退出进程
  process.exit(0);
})();
