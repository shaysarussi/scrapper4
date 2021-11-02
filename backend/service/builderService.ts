import { initDriver } from "./selenuimService";
import axios from "axios";
const newCookies = [
    {
      domain: '.wix.com',
      expiry: 1635703457,
      httpOnly: false,
      name: '_wixAB3|e21ad36e-9397-4334-a1a3-713ce611479b',
      path: '/',
      secure: false,
      value: '175264#2|150438#4|276745#1|286064#2|276744#2|218208#1|286701#2|97055#2|236860#1|282170#3|280816#1|277449#2|277552#1|213671#2|281144#1|278435#2|283453#2|275276#1|171893#1|211047#1|277343#1|269779#2|262718#1|278984#1|97651#1|225455#1|200674#4|185798#1|182661#2|286599#2|232564#1|205715#1|275566#1|277909#2|277484#1|277653#1|199602#1|130803#1'
    },
    {
      domain: '.wix.com',
      httpOnly: false,
      name: '_wix_browser_sess',
      path: '/',
      secure: false,
      value: '8055da0f-c690-43e6-abbc-86878366ee45'
    },
    {
      domain: '.wix.com',
      expiry: 1643465045,
      httpOnly: false,
      name: '_wixUIDX',
      path: '/',
      sameSite: 'None',
      secure: true,
      value: '1470096923|e21ad36e-9397-4334-a1a3-713ce611479b'
    },
    {
      domain: '.wix.com',
      expiry: 1793369045,
      httpOnly: false,
      name: 'wixLanguage',
      path: '/',
      sameSite: 'Lax',
      secure: false,
      value: 'en'
    },
    {
      domain: '.wix.com',
      expiry: 1643465045,
      httpOnly: false,
      name: 'userType',
      path: '/',
      secure: false,
      value: 'REGISTERED'
    },
    {
      domain: '.wix.com',
      expiry: 1641477845,
      httpOnly: false,
      name: 'wixClient',
      path: '/',
      sameSite: 'None',
      secure: true,
      value: 'shayse7||VERIFIED_OPT_IN|0|1635689045451|1641477845451|e21ad36e-9397-4334-a1a3-713ce611479b|{}|wix'
    },
    {
      domain: '.wix.com',
      expiry: 1635689583,
      httpOnly: false,
      name: '_px3',
      path: '/',
      sameSite: 'Lax',
      secure: false,
      value: '20b52f0f8fd61cdc1995acd8f66c034be9b3710a140613b17affcc507f642d9e:srdFAUAgd04JQ+9uQBPy19is0IZ+GWm2sDi1oiHDRYpQh8NO9fYXWYEiLpFqdeELjj9lRpIHVK1EDdOGe41Now==:1000:jXAVS6iqTfxNtlAi5q7mz2nbv/rumA5gnIIlRDn8O5XMPXWnk0KTSDZwmxgRzUHxVPl0sWfeTQVijKq1dZ+9d7a5yDRdKKbA+bE64arZ1lUpoZCuRJDUlb5CVau6+5LlnwC60TE9hnWbUpCVxo4+fzp6FXhQEcBKyjWDMZZtQvA7Vn/yGdgpudAGl+EeN/tLWmlbjJw3NpnCynhg5lny5Q=='
    },
    {
      domain: '.wix.com',
      expiry: 1641477845,
      httpOnly: true,
      name: 'wixSession2',
      path: '/',
      sameSite: 'None',
      secure: true,
      value: 'JWT.eyJraWQiOiJrdU42YlJQRCIsImFsZyI6IlJTMjU2In0.eyJkYXRhIjoie1widXNlckd1aWRcIjpcImUyMWFkMzZlLTkzOTctNDMzNC1hMWEzLTcxM2NlNjExNDc5YlwiLFwidXNlck5hbWVcIjpcInNoYXlzZTdcIixcImNvbG9yc1wiOnt9LFwidWNkXCI6XCIyMDIxLTEwLTI2VDExOjUyOjE2LjAwMCswMDAwXCIsXCJ3eHNcIjp0cnVlLFwiZXd4ZFwiOnRydWUsXCJhb3JcIjp0cnVlLFwiYWNpXCI6XCJlMjFhZDM2ZS05Mzk3LTQzMzQtYTFhMy03MTNjZTYxMTQ3OWJcIixcInJtYlwiOnRydWUsXCJsdmxkXCI6XCIyMDIxLTEwLTMxVDE0OjA0OjA1LjQzMCswMDAwXCIsXCJsYXRoXCI6XCIyMDIxLTEwLTMxVDE0OjA0OjA1LjQzMCswMDAwXCIsXCJ3eGV4cFwiOlwiMjAyMS0xMS0xNVQxNDowNDowNS40NDkrMDAwMFwifSIsImlhdCI6MTYzNTY4OTA0NSwiZXhwIjoxNjM2OTg1MDQ1fQ.VY-yqUecM3xwKLJ6a351i26uV1zmuANu634Ctvto7hGFM1ovVphQdWpooHcKg25HVSvF-jxBGczG51eU4UH1k5f_GCSuPemOxr7L6qeB6WV3vNy5y2h2TEbkQojev5Biywnt2ybXbcylZSzotu8Ulq7ggeddzVbQiDwPDVD_J012X9qOEU5EDEAL7yuwBvhfe7DZlSjdofrG0ObauH3xEkxYDnRvvh6AtmUZbDdI_-DOjRCnbdEaAWlmQHYpIkalBdF5oeUn0NpV4AqynYcCV40dZ-3wdBNyZZq0uBe1Q4X6vzgtrATfpRGqnNJVFqkAYAmCDhRxyg4mZYaOkHKcHQ'
    },
    {
      domain: '.wix.com',
      expiry: 1667224963,
      httpOnly: false,
      name: '_pxvid',
      path: '/',
      sameSite: 'Lax',
      secure: false,
      value: '37a92bf3-3a53-11ec-b0c9-5a5041727056'
    },
    {
      domain: '.wix.com',
      expiry: 1643464962,
      httpOnly: false,
      name: '_wixCIDX',
      path: '/',
      sameSite: 'None',
      secure: true,
      value: '09426907-13dc-448d-a8a5-99759fc675c7'
    },
    {
      domain: '.wix.com',
      expiry: 1651241057,
      httpOnly: false,
      name: '_wixAB3',
      path: '/',
      secure: false,
      value: '227997#2'
    },
    {
      domain: '.wix.com',
      httpOnly: false,
      name: 'XSRF-TOKEN',
      path: '/',
      sameSite: 'None',
      secure: true,
      value: '1635688960|IN5SviTC2uvC'
    }
  ]
import { By, promise } from "selenium-webdriver";


const metaSiteId = 'cb1ebdf0-ca27-4fd9-8bce-443f30b3828b'
const htmlWebInstanceId = 'ebf91cba-53cb-48e2-9dca-96a4aca89277'
const documentServices: any = '';

const intilizeDriverAndSetCookie=async()=>{
    const driver = await initDriver()
    await driver.get(`https://editor.wix.com/html/editor/web/renderer/edit/${htmlWebInstanceId}?metaSiteId=${metaSiteId}`)
    
    for (const cookie of newCookies) {
        if (cookie.domain === '.wix.com') {
          await driver.manage().addCookie(cookie);
        }
    }
    await driver.get(`https://editor.wix.com/html/editor/web/renderer/edit/${htmlWebInstanceId}?metaSiteId=${metaSiteId}`)
    return driver
}

const builderSite =async (driver:any,components:any)=>{
    await navigateToEditorDS(driver)
    console.log("jjj")

    const dsCallback = [
      () => {
        documentServices.components.add({id: 'c1dmp', type: 'DESKTOP'},{
          "componentType": "wysiwyg.viewer.components.WPhoto",
          "style": "wp2",
          "data": {
            "width": 1847,
            "height": 1385,
            "alt": "asd.jpg",
            "name": "asd.jpg",
            "uri": "ebf91c_fabd12b01389497f9e0bbe00d69b94a4~mv2.jpg",
            "type": "Image",
            "description": ""
        },
         'layout':{
            "width": 600,
            "height": 449.918787222523,
            "x": 190,
            "y": 0,
            "rotationInDegrees": 0,
            "scale": 1,
            "fixedPosition": false,
            "anchors": []
         },
          "props": "WPhotoProperties",
        })
      },
    ];

    const response = await driver.executeScript(...dsCallback);
    return response;
}


const uploadImages = async (metaSiteId:string, images:any) => {
  const METASITE_API_BASE_URL = `https://bo.wix.com/site-migration-site-builder`
  const USER_ID = 'ebf91cba-53cb-48e2-9dca-96a4aca89277'
  try {
    const {
      data,
    } = await axios.post(
      `${METASITE_API_BASE_URL}/uploadImages?userId=${USER_ID}&metasiteId=${metaSiteId}`,
      images,
      { 
        headers: { 
           authorization: 'f11f94f6-ba55-4d52-84a7-b42ce92a1ac1',
          'Content-Type': 'application/json'
        }      
      },
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};


export const navigateToEditorDS = async (
    driver:any
  ) => {
    const editorUrl = getEditorUrl();
    await driver.get(editorUrl);
    await sleep(25000);
    const frame = await driver.findElement(By.xpath("//iframe[@id='preview']"));
    await driver.switchTo().frame(frame);
  };

export const getEditorUrl = () =>
  `https://editor.wix.com/html/editor/web/renderer/edit/${htmlWebInstanceId}?metaSiteId=${metaSiteId}`;

const sleep = (ms:number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
};

export { intilizeDriverAndSetCookie,builderSite};