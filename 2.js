const { default: axios } = require("axios");
const fs = require("fs")
const cheerio = require('cheerio');

axios.get("https://www.ikandy.fun/").then(({ data }) => {
    const $ = cheerio.load(data)
    $($(".stui-pannel_bd")[0]).find(".stui-vodlist__box").each((index, item) => {
        const thumbDiv = $(item).find(".stui-vodlist__thumb");
        const thumb = thumbDiv.attr("data-original");
        const title = thumbDiv.attr("title");
        const href = thumbDiv.attr("href");
        const pic_text = thumbDiv.find(".pic-text").text();
        console.log(thumb, title, href, pic_text);
    })
})