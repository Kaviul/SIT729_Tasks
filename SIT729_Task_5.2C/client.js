const http = require('http');
setInterval(loadtest, 500); //time is in ms
function loadtest()
{
http.get('http://kav-lb-1-1040127445.us-east-1.elb.amazonaws.com:3000', (res) => {
res.on('data', function (chunk) {
console.log('' + chunk);
});
});
}