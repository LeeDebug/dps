const puppeteer = require('fast-install-puppeteer');
const ppteer = require('./src/pp');

async function pp() {
  const browser = await puppeteer.launch({
    headless: false,  // 关闭无头模式
  });
  
  const page = await browser.newPage();
  page.setViewport({width: '1920', height: '1080'});
  // page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1');
  await page.goto('http://192.168.100.123:8083/free-U51.11.V204.14.L082621/index-free.html#/', {
    timeout: 2 * 60 * 1000,
    waitUntil: 'networkidle0'
  });
  // await browser.close();
}
pp()

async function start() {
  const pp = await ppteer({
    device: 'pc',
    headless: 'false'
  });
  // console.log('======= pp:', pp)
}
// start()
