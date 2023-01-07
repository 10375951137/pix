const puppeteer = require('puppeteer');
const fs = require('fs');
const cheerio = require('cheerio')
const os = require("os")

console.log(os.platform());

function isLinux() {
  return os.platform() === "linux";
}

async function getPageContent(url) {
  console.time("1")
  console.time("2")
  const browser = await puppeteer.launch({
    ignoreHTTPSErrors:true,
    args: [
      isLinux() ? "" : `--proxy-server=127.0.0.1:10809`,
      '--no-sandbox', '--disable-setuid-sandbox',
      `--disable-javascript=true`,
      `--disable-images=true`,
      "-–ash-host-window-bounds=240x320"
    ]
  });
  // console.log(browser);
  const page = await browser.newPage();
  await page.setUserAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/108.0.0.0");
  await page.goto(url);

  const content = await page.content();
  await browser.close();
  return content;
}

getPageContent('https://18comic.vip/albums?o=mv&t=t').then((content) => {
  // console.log(content);
  console.timeEnd("1")
  const $ = cheerio.load(content)
  console.log($(".thumb-overlay-albums").length);
  console.timeEnd("2")

  // fs.writeFileSync('temp.html', content);
});