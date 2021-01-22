const puppeteer = require('puppeteer');

const finalJson = []



async function scrapeProduct(url) {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto(url)


    const [el] = await page.$x('/html/body/div[2]/div/div[4]/div[1]/div[2]/div/div[3]/div[3]/div[2]/div[2]/div[2]/div/div[1]/div/div/div[1]/div[1]/a/img')
    const src = await el.getProperty('src')
    const srcTxt = await src.jsonValue()


    const [el2] = await page.$x('/html/body/div[2]/div/div[4]/div[1]/div[2]/div/div[3]/div[3]/div[2]/div[2]/div[2]/div/div[1]/div/div/div[1]/div[2]/div[1]/h4/a')
    const name = await el2.getProperty('textContent')
    const nameText = await name.jsonValue()

    const [el3] = await page.$x('/html/body/div[2]/div/div[4]/div[1]/div[2]/div/div[3]/div[3]/div[2]/div[2]/div[2]/div/div[1]/div/div/div[1]/div[2]/ul/li[1]')
    const mileage = await el3.getProperty('textContent')
    const mileageText = await mileage.jsonValue()


    const [el4] = await page.$x('/html/body/div[2]/div/div[4]/div[1]/div[2]/div/div[3]/div[3]/div[2]/div[2]/div[2]/div/div[1]/div/div/div[1]/div[2]/ul/li[2]')
    const engineSize = await el4.getProperty('textContent')
    const engineSizeText = await engineSize.jsonValue()

    const [el5] = await page.$x('/html/body/div[2]/div/div[4]/div[1]/div[2]/div/div[3]/div[3]/div[2]/div[2]/div[2]/div/div[1]/div/div/div[1]/div[2]/ul/li[3]')
    const transimssion = await el5.getProperty('textContent')
    const transimssionText = await transimssion.jsonValue()

    const [el6] = await page.$x('/html/body/div[2]/div/div[4]/div[1]/div[2]/div/div[3]/div[3]/div[2]/div[2]/div[2]/div/div[1]/div/div/div[1]/div[2]/ul/li[4]')
    const fuelType = await el6.getProperty('textContent')
    const fuelTypeText = await fuelType.jsonValue()



    const [el7] = await page.$x('/html/body/div[2]/div/div[4]/div[1]/div[2]/div/div[3]/div[3]/div[2]/div[2]/div[2]/div/div[1]/div/div/div[1]/div[2]/div[2]/div/span/span/strong')
    const price = await el7.getProperty('textContent')
    const priceText = await price.jsonValue()


    const [el8] = await page.$x('/html/body/div[2]/div/div[4]/div[1]/div[2]/div/div[3]/div[3]/div[2]/div[2]/div[2]/div/div[1]/div/div/div[1]/div[2]/span')
    const location = await el8.getProperty('textContent')
    const locationText = await location.jsonValue()


    const [el9] = await page.$x('/html/body/div[2]/div/div[4]/div[1]/div[2]/div/div[3]/div[3]/div[2]/div[2]/div[2]/div/div[1]/div/div/div[2]/div[1]/div/a')
    const number = await el9.getProperty('textContent')
    const numberText = await number.jsonValue()

    const car1 = {srcTxt,nameText,mileageText,engineSizeText,transimssionText,fuelTypeText,priceText,locationText,numberText}
    
    finalJson.push(car1)
    browser.close()
}

const scrapeAll = async(url) => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0); 
    await page.goto(url)

    for(let i = 1; i <= 40; i++){
    try {
        
        const [el] = await page.$x(`/html/body/div[2]/div/div[4]/div[1]/div[2]/div/div[3]/div[3]/div[2]/div[2]/div[2]/div/div[${i}]/div/div/div[1]/div[1]/a/img`)
        const src = await el.getProperty('src')
        const srcTxt = await src.jsonValue()
        
        
        const [el2] = await page.$x(`/html/body/div[2]/div/div[4]/div[1]/div[2]/div/div[3]/div[3]/div[2]/div[2]/div[2]/div/div[${i}]/div/div/div[1]/div[2]/div[1]/h4/a`)
        const name = await el2.getProperty('textContent')
        const nameText = await name.jsonValue()
        
        const [el3] = await page.$x(`/html/body/div[2]/div/div[4]/div[1]/div[2]/div/div[3]/div[3]/div[2]/div[2]/div[2]/div/div[${i}]/div/div/div[1]/div[2]/ul/li[1]`)
        const mileage = await el3.getProperty('textContent')
        const mileageText = await mileage.jsonValue()
        
        
        const [el4] = await page.$x(`/html/body/div[2]/div/div[4]/div[1]/div[2]/div/div[3]/div[3]/div[2]/div[2]/div[2]/div/div[${i}]/div/div/div[1]/div[2]/ul/li[2]`)
        const engineSize = await el4.getProperty('textContent')
        const engineSizeText = await engineSize.jsonValue()
        
        const [el5] = await page.$x(`/html/body/div[2]/div/div[4]/div[1]/div[2]/div/div[3]/div[3]/div[2]/div[2]/div[2]/div/div[${i}]/div/div/div[1]/div[2]/ul/li[3]`)
        const transimssion = await el5.getProperty('textContent')
        const transimssionText = await transimssion.jsonValue()
        
        const [el6] = await page.$x(`/html/body/div[2]/div/div[4]/div[1]/div[2]/div/div[3]/div[3]/div[2]/div[2]/div[2]/div/div[${i}]/div/div/div[1]/div[2]/ul/li[4]`)
        const fuelType = await el6.getProperty('textContent')
        const fuelTypeText = await fuelType.jsonValue()
        
        const [el7] = await page.$x(`/html/body/div[2]/div/div[4]/div[1]/div[2]/div/div[3]/div[3]/div[2]/div[2]/div[2]/div/div[${i}]/div/div/div[1]/div[2]/div[2]/div/span/span/strong`)
        const price = await el7.getProperty('textContent')
        const priceText = await price.jsonValue()
        
        
        const [el8] = await page.$x(`/html/body/div[2]/div/div[4]/div[1]/div[2]/div/div[3]/div[3]/div[2]/div[2]/div[2]/div/div[${i}]/div/div/div[1]/div[2]/span`)
        const location = await el8.getProperty('textContent')
        const locationText = await location.jsonValue()
        
        
        const [el9] = await page.$x(`/html/body/div[2]/div/div[4]/div[1]/div[2]/div/div[3]/div[3]/div[2]/div[2]/div[2]/div/div[${i}]/div/div/div[2]/div[1]/div/a`)
        const number = await el9.getProperty('textContent')
        const numberText = await number.jsonValue()
        
        const car = {srcTxt,nameText,mileageText,engineSizeText,transimssionText,fuelTypeText,priceText,locationText,numberText}
        
        finalJson.push(car)
    } catch (TypeError) {
        continue
    }
    }
    // console.log(finalJson)
    browser.close()
}

scrapeAll("https://www.autotrader.co.nz/used-cars-for-sale#!#0=0&1=0&2=0&3=0&4=0&5=0&6=0&7=0&8=1&9=10&10=0&11=48&12=0&13=0&14=0&15=0&16=0&17=0&18=0&19=0&20=0&21=0&22=0&23=0&24=0&25=0&26=0&27=0&28=0&29=0&30=0&31=0&32=0&33=0&34=0&35=0&36=0&37=0&38=0&39=0&40=110&41=0&42=0&43=top&44=0&45=0&46=&a0=%5B%5D&a1=%5B%5D&a2=%5B%5D&a3=%5B%5D&a4=%5B%5D&a5=%5B%5D&a6=%5B%5D&a7=%5B%5D&a8=%5B%5D&a9=%5B%5D&a10=%5B%5D&a11=%5B%5D&d=")


export default finalJson

