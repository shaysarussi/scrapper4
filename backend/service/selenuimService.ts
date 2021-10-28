import { Builder } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";

const initDriver = async () => {
    const opt = new chrome.Options();
    opt.headless();
    const driver = new Builder()
      .forBrowser("chrome")
      // .setChromeOptions(opt)
      .build();
  
    return driver;
};

export { initDriver };