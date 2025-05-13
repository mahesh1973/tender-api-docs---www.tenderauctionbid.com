const fetch = require("node-fetch");

const API_URL = "https://api.yourwebsite.com/tenders";
const API_KEY = "your-api-key";

fetch(API_URL, {
    method: "GET",
    headers: {
        "X-API-Key": API_KEY
    }
})
.then(response => response.json())
.then(data => console.log("Tender Data:", data))
.catch(error => console.error("Error:", error));
