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

console.log(os.platform());

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

(async () => {
  if (!browser) {
    browser = await puppeteer.launch({
      ignoreHTTPSErrors: true,
      headless: false,
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
  await getPageContent("https://18comic.vip/albums?o=mv&t=t").then(
    (content) => {
      console.timeEnd("1");
      const $ = cheerio.load(content);
      $(".thumb-overlay-albums").each(function (i, ele) {
        const parent = $(ele).parent();
        const titleEle = $(parent.find(".video-title")[0]);
        let title = titleEle.text();
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
        connection.query(`insert into comic (id,title,img,likes,tags,date) values (${id},'${title}','${img}',${likes},'${tags}',now())`, function (error, results, fields) {
          if (error) throw error;
          console.log(results);
        });

      });
      console.timeEnd("2");
    }
  );

  await getPageContent("https://18comic.vip/albums?o=mv&t=t").then((content) => {
    console.timeEnd("1");
    console.timeEnd("2");
  });
  await browser.close();
})();
