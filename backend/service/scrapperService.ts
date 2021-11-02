import { initDriver } from "./selenuimService";
import { By, promise } from "selenium-webdriver";


const scrapperSite = async (url:string):Promise<any>=>{
 
    const textComponentByTitle = await fetchText(url,"title")
    const textComponentByBody = await fetchText(url,"body")
    const imges = await fetchImages(url);
    const buttons = await fetchbuttons(url)
    const containers = await fetchContainer(url)
     return [...buttons,...imges,...textComponentByTitle,...textComponentByBody,...containers]
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


  const fetchText =async (url:string,className:string)=>{
    const driver = await initDriver()
    await driver.get(url)
    const textWarraper = await driver.findElements(By.className(className))
    const textComponent = []
    textWarraper.shift()
    textWarraper.shift()
    for (const subElement of textWarraper) {
      const allElements = await subElement.findElements(By.xpath("./*"))
      let textHtml = ''
      for(const element of allElements){
          textHtml = ''
          const txt = await element.getText()
          const position = await element.getRect()
          const color = await element.getCssValue("color")
          const fontSize = await element.getCssValue("font-size")
          const tag_name = await element.getTagName()
          const zIndex =await element.getCssValue("z-index")
          textHtml = `<${tag_name} style="color:${color};font-size:${fontSize};">${txt}</${tag_name}>`
          textComponent.push({
             type:"text",
             ...position,
             text:textHtml,
             zIndex
          })
      }
    }

    return textComponent 
  }

  const fetchContainer=async(url:string)=>{
    const driver = await initDriver()
    await driver.get(url)
    const containers = await driver.findElements(By.className("simpleRectangle"))
    const containerPromises  = containers.map(async (container) => {
      const id = await container.getId();
      const position = await container.getRect()
      const backgroundColor = await container.getCssValue("background-color")
      const borderWidth = await container.getCssValue("border-width")
      const borderRadius = await container.getCssValue("border-radius")
      const borderColor = await container.getCssValue("border-color")
      const zIndex =await container.getCssValue("z-index")

      return { 
        id,
        type:"container", 
        ...position,
        style: {
            backgroundColor,
            borderRadius,
            borderWidth,
            borderColor          
        },
        zIndex
    }
    })

    return containerPromises

  }
 
export { scrapperSite};