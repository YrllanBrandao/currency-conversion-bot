const pup = require("puppeteer");
const readline = require("readline-sync");



(async () => {
    console.log("[===Starting currency bot===]")
    const browser = await pup.launch();

    const currency = readline.question("Enter a currency: ");

    const URL = `https://www.google.com/search?q=${currency}%20hoje`;


    const page = await browser.newPage();

    await page.goto(URL);

    await page.waitForSelector("input.a61j6")
    //get the  input value in google page
    const quotation = await page.$eval("input.a61j6", (element) => element.value);


    console.log("currently currency is: " + quotation);

    const tryConvert =  readline.keyInYN("Do you want to convert some value?");

    if(tryConvert)
    {
    const value = readline.questionFloat("Enter a value to convert");
    const result =  Number(value) * quotation;
    console.log("Converted value in R$: ", result);
    console.log("]===FINESHED===[")
    await browser.close(4000)
    }
    else{
        console.log("]====FINESHED===[")
    await browser.close(4000)
    }
    

})()