const { connect } = require("puppeteer-real-browser");

function delay(params) {
  return new Promise((resolve) => setTimeout(resolve, params));
}

async function getAccount() {
  const { browser } = await connect({
    headless: false,

    args: [],

    customConfig: {},

    turnstile: true,

    connectOption: {},

    disableXvfb: false,
    ignoreAllFlags: false,
    // proxy:{
    //     host:'<proxy-host>',
    //     port:'<proxy-port>',
    //     username:'<proxy-username>',
    //     password:'<proxy-password>'
    // }
  });
  const password = "WaledGamer123!";
  const emailPage = await browser.newPage();

  await emailPage.goto("https://temp-mail.io/en");

  await emailPage.waitForSelector(".email__input");

  const email = await emailPage.evaluate(async () => {
    let inputElement;
    let email = null;

    while (!email) {
      inputElement = document.querySelector("#email");
      if (inputElement) {
        email = inputElement.getAttribute("title");
      }
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    return email;
  });

  console.log(email);

  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1024 });
  await page.goto("https://order.surfshark.com/?frequency=24&slug=one", {
    waitUntil: "domcontentloaded",
  });
  console.log("Going to Website");

  async function waitForNoJsClassRemoval() {
    let hasNoJs = true;

    while (hasNoJs) {
      try {
        hasNoJs = await page.$eval("body", (body) =>
          body.classList.contains("no-js")
        );

        if (hasNoJs) {
          console.log("'no-js' class still exists, waiting...");
          await new Promise((resolve) => setTimeout(resolve, 1000));
        } else {
          console.log("'no-js' class removed.");
        }
      } catch (error) {
        if (
          error.message.includes("Execution context was destroyed") ||
          error.message.includes(
            "Argument should belong to the same JavaScript world as target object"
          )
        ) {
          console.log("CloudFlare - Bypassed");
          return;
        } else {
          throw error;
        }
      }
    }
  }
  await waitForNoJsClassRemoval();
  await page.waitForSelector(".YoSuD.Zswp6");

  await delay(250)
  await page.type(".YoSuD.Zswp6", email);
  console.log("Email Typed");

  const providerSelector = '[data-test="provider-CoinGate"]';
await page.waitForSelector(providerSelector, { visible: true });

// Scroll the element into view (if necessary)
await page.$eval(providerSelector, el => el.scrollIntoView());

// Now attempt to click the element
await page.click(providerSelector);
console.log("Clicked CoinGate provider");
 
  console.log("Picking Crypto");

  const payment =
    "div.lLyrv > div.bj21b > div > div.Ewm0n > div.XgKPH > div.dFvXQ > div.KolGQ > div > div.wT2mk.tOuu9 > div.Wfune.tOuu9 > div > div.g2nAY > button";
  await page.waitForSelector(payment);
  await page.click(payment);

  console.log("Selecting Bitcoin");

  const finishPayment = "label[data-test='Bitcoin-currency']";
  await page.waitForSelector(finishPayment);
  await page.click(finishPayment);

  console.log("Finishing Payment");
  const clickButton =
    "#__next div.e1l050wb1.MuiBox-root.css-1ihl2ke div.MuiContainer-root.MuiContainer-maxWidthLg.e1l050wb0.css-118jj8p div.css-10h2p0h.e1wz9m0w0 div.css-1h7rhxr.e1sjwxkc4 div.css-2v2txs.e1sjwxkc3 div.css-8o7dtg.e1sjwxkc2 div button.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.MuiButtonBase-root.e10oj9ve5.css-1vp1s1k";
  await page.waitForSelector(clickButton);
  await page.click(clickButton);
  await page.click(clickButton);
  await page.click(clickButton);
  await page.click(clickButton);
  await page.waitForSelector(
    "#__next > div > div > div.css-10h2p0h.e1wz9m0w0 > div.css-8atqhb > form > div > div.MuiInput-root > input"
  );
  await page.type(
    "#__next > div > div > div.css-10h2p0h.e1wz9m0w0 > div.css-8atqhb > form > div > div.MuiInput-root > input",
    email
  );
  await page.click(
    "#__next > div > div > div.css-10h2p0h.e1wz9m0w0 > div.css-8atqhb > div.css-aiv1y0 > button"
  );

  console.log("Completed Payment");

  const passwordPage = await browser.newPage();
  await passwordPage.goto("https://my.surfshark.com/auth/reset");

  await passwordPage.waitForSelector(
    "body div#root div.lertL div.zVuif div#login-content.btnA5 div.ira6n div.hQjhW.cGoR9 div.E_enA div.Pq283 form.z85m3 div.WSbPR div.FhOcs.shbyo div.TZwqa input.YoSuD.Zswp6"
  );
  await passwordPage.type(
    "body div#root div.lertL div.zVuif div#login-content.btnA5 div.ira6n div.hQjhW.cGoR9 div.E_enA div.Pq283 form.z85m3 div.WSbPR div.FhOcs.shbyo div.TZwqa input.YoSuD.Zswp6",
    email
  );

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
    let element = document.querySelector(
      'a[href*="links.surfshark.com/u/click"]'
    );
    return element.getAttribute("href");
  });

  console.log(clickPage);

  const newPage = await browser.newPage();
  await newPage.goto(clickPage);

  await newPage.waitForSelector(".YoSuD.F8m7M.Zswp6");
  await newPage.type(".YoSuD.F8m7M.Zswp6", password);
  await newPage.waitForSelector(".Dmuut");
  setTimeout(() => {
    newPage.click(".Dmuut");
  }, 1500);

  console.log("Password Reset Completed");

  setTimeout(() => {
    browser.close();
  }, 3000);
  console.clear();
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
}

getAccount();
