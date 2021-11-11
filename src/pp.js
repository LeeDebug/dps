const ppteer = require('fast-install-puppeteer');
const { log, getAgrType } = require('./utils');

const devices = {
  mobile: [375, 667, 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'],
  ipad: [1024, 1366, 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1'],
  pc: [1920, 1080, 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1']
};

// 启动 puppeteer 实例
async function pp({device = 'mobile', headless = true}) {
  console.log('======= func pp:')
  const browser = await ppteer.launch({
    headless: false,
    // args: ['--no-sandbox',],
    devtools: true,
  });
  
  async function openPage(url, extraHTTPHeaders) {
    console.log('======= func pp >>> func openPage:')
    const page = await browser.newPage();
    try {
      let deviceSet = devices[device];
      page.setViewport({width: deviceSet[0], height: deviceSet[1]});
      // 设置了 UA 之后，就会出现 Something went wrong
      // page.setUserAgent(deviceSet[2]);

      if(extraHTTPHeaders && getAgrType(extraHTTPHeaders) === 'object') {
        await page.setExtraHTTPHeaders(new Map(Object.entries(extraHTTPHeaders)));
      }
      await page.goto(url, {
        timeout: 2 * 60 * 1000,
        waitUntil: 'networkidle0'
      });
    } catch (e) {
      console.log('\n');
      log.error(e.message);
    }
    return page;
  }
  return {
    browser,
    openPage
  }
};

module.exports = pp;