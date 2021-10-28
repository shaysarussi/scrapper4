import { initDriver } from "./selenuimService";
import { By, promise } from "selenium-webdriver";


const scrapperSite = async (url:string):Promise<any>=>{
    const imges = await fetchImages(url);
    const buttons = await fetchbuttons(url)
    return [...buttons,...imges]
}


const fetchImages = async (url: string) => {
    const driver = await initDriver()
    await driver.get(url)
    const imgs = await driver.findElements(By.css("img"))
  
    const imagesPromiseArr = imgs.map(async (img) => {
      const id = await img.getId();
      const tag_name = await img.getTagName()
      const src = await img.getAttribute("src")
      const alt = await img.getAttribute("alt")
      const position = await img.getRect()
      const zIndex =await img.getCssValue("z-index")
    
  
      return { id,type:tag_name, ...position,tag_name, src, alt, zIndex }
    });
  
    return imagesPromiseArr
  };


  const fetchbuttons= async (url:string)=>{
    const driver = await initDriver()
    await driver.get(url)
    const buttons = await driver.findElements(By.className("linkButton"))
    console.log(buttons)

    const buttonsPromiseArr = buttons.map(async (button) => {
        const id = await button.getId();
        const backgroundColor = await button.getCssValue("background-color")
        const color = await button.getCssValue("color")
        const borderRadius = await button.getCssValue("border-radius")
        const borderStyle = await button.getCssValue("border-style")
        const display = await button.getCssValue("display")
        const padding = await button.getCssValue("padding")
        const fontFamily = await button.getCssValue("font-family")
        const fontSize = await button.getCssValue("font-size")
        const fontWeight = await button.getCssValue("font-weight")
        const lineHeight = await button.getCssValue("line-height")
        const textAlign = await button.getCssValue("text-align")
        const zIndex =await button.getCssValue("z-index")
        const text= await button.getText()
        const position = await button.getRect()
        
    
        return { 
            id,
            type:"button", 
            ...position,
            label:text,
            style: {
                backgroundColor,
                borderRadius,
                borderStyle,
                display,
                padding,
                lineHeight,
                zIndex,
                labelstyle: {
                    fontFamily,
                    fontSize,
                    fontWeight,
                    textAlign,
                    color
                }
            }
        }
      });
      
      return buttonsPromiseArr

  }
 
export { scrapperSite};