const puppeteer = require("puppeteer");

(async () => {
  const password = "WaledGamer123!";

  const browser = await puppeteer.launch({ headless: false });
  const emailPage = await browser.newPage();
  
  await emailPage.goto("https://temp-mail.io/en");
  
  await emailPage.waitForSelector("html body div#__tempmail div#__layout div.wrapper header.header div.email div.email__wrapper div.email__input-wrapper input#email.email__input");
  
  const email = await emailPage.evaluate(() => {
      let inputElement = document.querySelector('#email');
      return inputElement.getAttribute('title');
  });
  console.log(email);
  
  const page = await browser.newPage();
  await page.goto("https://order.surfshark.com/checkout?frequency=24&slug=one");
  
  console.log("Going to Website");
  
  await page.setViewport({ width: 1080, height: 1024 });
  await page.waitForSelector(".YoSuD.Zswp6");
  await page.type(".YoSuD.Zswp6", email);
  console.log("Email Typed");

  const searchResultSelector = "div[data-test='provider-crypto']";
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);
  
  console.log("Picking Crypto");
  
  const payment = "#root > div.lLyrv > div.bj21b > div > div.Ewm0n > div.XgKPH > div.dFvXQ > div.KolGQ > div > div.wT2mk.tOuu9 > div.Wfune.tOuu9 > div > div.g2nAY > button";
  await page.waitForSelector(payment);
  await page.click(payment);
  
  console.log("Selecting Payment");
  
  const cryptoPayment = ".e7kd91g0 > label:nth-child(1) > span:nth-child(2) > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)";
  await page.waitForSelector(cryptoPayment);
  await page.click(cryptoPayment);
  
  console.log("Selecting Bitcoin");
  
  const finishPayment = ".css-8o7dtg";
  await page.waitForSelector(finishPayment);
  await page.click(finishPayment);
  
  console.log("Finishing Payment");
  
  await page.type("#__next > div > div > div.css-10h2p0h.e1wz9m0w0 > div.css-8atqhb > form > div > div.MuiInput-root > input", email);
  await page.click("#__next > div > div > div.css-10h2p0h.e1wz9m0w0 > div.css-8atqhb > div.css-aiv1y0 > button");
  
  console.log("Completed Payment");
  
  const passwordPage = await browser.newPage();
  await passwordPage.goto("https://my.surfshark.com/auth/reset");
  
  await passwordPage.waitForSelector("html.notranslate body div#root div.lertL div.zVuif div#login-content.btnA5 div.ira6n div.hQjhW.cGoR9 div.E_enA div.Pq283 form.z85m3 div.WSbPR div.FhOcs.shbyo div.TZwqa input.YoSuD.Zswp6");
  await passwordPage.type("html.notranslate body div#root div.lertL div.zVuif div#login-content.btnA5 div.ira6n div.hQjhW.cGoR9 div.E_enA div.Pq283 form.z85m3 div.WSbPR div.FhOcs.shbyo div.TZwqa input.YoSuD.Zswp6", email);
  
  console.log("Adding Password");
  
  const passwordReset = "#resetSubmit";
  await passwordPage.waitForSelector(passwordReset);
  setTimeout(() => {
      passwordPage.click(passwordReset);
  }, 500);
  
  console.log("Password Resetting");
  setTimeout(() => {
      emailPage.bringToFront();
  }, 600);
  
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
console.log(`Email is ${email} and the password is ${password}`);
})();
