class diffurl{
    getBaseUrl(){
        let envi = Cypress.env('ENV');
        if(envi === 'DEV'){
            return "https://www.saucedemo.com/"
        }
        else if(envi === 'QA'){
            return "https://ultimateqa.com/automation"
        }
    }
}
export let difurl = new diffurl();