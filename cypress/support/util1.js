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
     generateProjectId() {
        const timestamp = Date.now();
        const randomValue = Math.floor(Math.random() * 1000); // Adjust the range as needed
        return `project_${timestamp}_${randomValue}`;
    }
}
export let difurl = new diffurl();