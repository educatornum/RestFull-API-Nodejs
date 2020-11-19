const fs = require("fs")
var dateFormat = require('dateformat');
var day = dateFormat(new Date(), "yyyymmdd");
var dir = day;
var filename =  './' + day + '/config.txt'
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
fs.writeFileSync(filename, day)



// request
const request = require("request")
const URL = "https://www.example.com"
request(URL, (error, response, body ) => {
    console.log(response)
});