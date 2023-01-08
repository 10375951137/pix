const md5 = require('md5');
const Jimp = require('jimp');
const sharp = require('sharp')


function get_num(e, t) {
    // e = aid = 330328   // https://18comic.vip/photo/330328/
    // t = 00002          // 00002.jpg
    var a = 10;
    if (e >= 268850) {
        var n = e + t;
        switch (n = (n = (n = md5(n))
            .substr(-1))
            .charCodeAt(), n %= 10) {
            case 0:
                a = 2;
                break;
            case 1:
                a = 4;
                break;
            case 2:
                a = 6;
                break;
            case 3:
                a = 8;
                break;
            case 4:
                a = 10;
                break;
            case 5:
                a = 12;
                break;
            case 6:
                a = 14;
                break;
            case 7:
                a = 16;
                break;
            case 8:
                a = 18;
                break;
            case 9:
                a = 20
        }
    }
    return a
}

console.log(get_num(409200, "00001"));


async function resize() {
    // 读取图片
    const image = await Jimp.read(await sharp('./00001.webp').jpeg().toBuffer());
    //获取图片的宽高
    const { width, height } = image.bitmap;

    //垂直切割
    const num = get_num(409200, "00001")
    //向下取整
    const h = Math.floor(height / num);
    console.log(h, "h");
    //截取
    let images = []
    for (let i = 0; i < num; i++) {
        if (i == num - 1) {
            images.push(await image.clone().crop(0, h * i, width, height - h * i));
            continue;
        }
        images.push(await image.clone().crop(0, h * i, width, h));

    }
    images.reverse();


    //合并images
    const newImage = new Jimp(width, height);
    let heightSum = 0;
    for (let i = 0; i < images.length; i++) {
        newImage.composite(images[i], 0, heightSum);
        heightSum += images[i].bitmap.height;
    }
    // 保存
    await newImage.writeAsync(`./${Date.now()}_new.jpg`);






    // 缩小成150*150
    // await image.resize(150, 150);
    // 写文件到本地
    // await image.writeAsync(`./${Date.now()}_150x150.png`);
}
resize();

// 图片裁剪
// crop( x, y, w, h)
// 参数分别表示开始位置的x,y以及裁剪的宽和高
// const Jimp = require('jimp');
// // crop( x, y, w, h)
// async function crop() {
//     // 读取图片
//     const image = await Jimp.read('https://s1.ax1x.com/2020/04/07/GgS7FA.jpg');
//     await image.crop(100, 100, 150, 150);
//     // 保存
//     await image.writeAsync(`test/${Date.now()}_crop_50x50.png`);
// }
// crop()

// const Jimp = require('jimp');
// async function rotate() {
//     // 读取图片
//     const image = await Jimp.read('https://s1.ax1x.com/2020/04/07/GgS7FA.jpg');
//     await image.rotate(45);
//     // 保存
//     await image.writeAsync(`./${Date.now()}_rotate_150x150.png`);
// }
// rotate()

// const Jimp = require('jimp');
// async function opacity() {
//     // 读取图片
//     const image = await Jimp.read('https://s1.ax1x.com/2020/04/07/GgS7FA.jpg');
//     await image.opacity(.5);
//     // 保存
//     await image.writeAsync(`./${Date.now()}_opacity_150x150.png`);
// }
// opacity()

// const Jimp = require('jimp');
// async function greyscale() {
//     // 读取图片
//     const image = await Jimp.read('https://s1.ax1x.com/2020/04/07/GgS7FA.jpg');
//     await image.greyscale();
//     // 保存
//     await image.writeAsync(`./${Date.now()}_greyscale_150x150.png`);
// }
// greyscale()