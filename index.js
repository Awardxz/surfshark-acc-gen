const puppeteer = require('puppeteer-extra')

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin());

 function delay(params) {
  return new Promise(resolve => setTimeout(resolve , params))
}

(async () => {
  const password = "WaledGamer123!";

  const browser = await puppeteer.launch({ headless: false});
  const emailPage = await browser.newPage();
  const customUA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36';
 
  // Set custom user agent
  await emailPage.setUserAgent(customUA);
  
  await emailPage.goto("https://temp-mail.io/en");
  
  await emailPage.waitForSelector(".email__input");
  await delay(150)
  
  const email = await emailPage.evaluate(() => {
      let inputElement = document.querySelector('#email');
      return inputElement.getAttribute('title');
  });

  console.log(email);
  
  const page = await browser.newPage();
  await page.goto("https://order.surfshark.com/?frequency=24");
  await page.setUserAgent(customUA);
  console.log("Going to Website");
  
  await page.setViewport({ width: 1080, height: 1024 });
  await page.waitForSelector(".YoSuD.Zswp6");
  await page.type(".YoSuD.Zswp6", email);
  console.log("Email Typed");

  const searchResultSelector = "div.lLyrv > div.bj21b > div > div.Ewm0n > div.XgKPH > div.dFvXQ > div.KolGQ > div > div:nth-child(5)";
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);
  await page.click(searchResultSelector);

  console.log("Picking Crypto");
  
  const payment = "div.lLyrv > div.bj21b > div > div.Ewm0n > div.XgKPH > div.dFvXQ > div.KolGQ > div > div.wT2mk.tOuu9 > div.Wfune.tOuu9 > div > div.g2nAY > button";
  await page.waitForSelector(payment);
  await page.click(payment);

  console.log("Completed Payment");
  
  const passwordPage = await browser.newPage();
  await passwordPage.goto("https://my.surfshark.com/auth/reset");
  
  await passwordPage.waitForSelector("body div#root div.lertL div.zVuif div#login-content.btnA5 div.ira6n div.hQjhW.cGoR9 div.E_enA div.Pq283 form.z85m3 div.WSbPR div.FhOcs.shbyo div.TZwqa input.YoSuD.Zswp6");
  await passwordPage.type("body div#root div.lertL div.zVuif div#login-content.btnA5 div.ira6n div.hQjhW.cGoR9 div.E_enA div.Pq283 form.z85m3 div.WSbPR div.FhOcs.shbyo div.TZwqa input.YoSuD.Zswp6", email);
  
  console.log("Adding Password");
  
  const passwordReset = "#resetSubmit";
  await passwordPage.waitForSelector(passwordReset);
  setTimeout(() => {
      passwordPage.click(passwordReset);
  }, 500);
  
  console.log("Password Resetting");
  setTimeout(() => {
      emailPage.bringToFront();
  }, 900);
  
  await emailPage.waitForSelector(".message__title");
  await emailPage.click(".message__title");
  
  await emailPage.waitForSelector('a[href*="links.surfshark.com/u/click"]');
  
  const clickPage = await emailPage.evaluate(() => {
    let element = document.querySelector('a[href*="links.surfshark.com/u/click"]');
    return element.getAttribute('href');
});

console.log(clickPage);  // This will print the href value

// Open the link in a new page
const newPage = await browser.newPage();
await newPage.goto(clickPage);

await newPage.waitForSelector('.YoSuD.F8m7M.Zswp6');
await newPage.type(".YoSuD.F8m7M.Zswp6", password);
await newPage.waitForSelector(".Dmuut");
setTimeout(() => {
   newPage.click(".Dmuut");
}, 1500);

console.log("Password Reset Completed");
  
setTimeout(() => {
  browser.close();
},3000)
console.clear();
console.log(`Email: ${email}`);
console.log(`Password: ${password}`)
})();
