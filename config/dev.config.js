const { defineConfig } = require("cypress");

module.exports = defineConfig({

    e2e: {
        // testIsolation: false,
        baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    }
    ,
    env: {
        username: "Admin",
        password: "admin123"
    },

})