// const http = require("http");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello World\n");
//   })
//   .listen(process.env.PORT || 8080, "127.0.0.1");

// console.log("Server currently listening...");

const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello server is running')
    .end();
});


// Defining get request at '/multiple' route
app.get('/multiple', function(req, res) {
  res.json({
    number: 1,
    name: 'John',
    gender: 'male'
  });
});
 
// Ecart entre 2 dates
// Requesting /countdown/post?futureDate=2022-12-18
app.get('/countdown/post', function(req, res) {
  var dDatefin = new Date(req.query.futureDate); // 2022-12-18
  var dDatejour = Date.now();
  var Difference_In_Time = dDatefin.getTime() - dDatejour.getTime();
  var smonth = Math.round(Difference_In_Time / (1000 * 3600 * 24 * 30));
  var sday = Math.round(Difference_In_Time / (1000 * 3600 * 24));
  var shour = Math.round(Difference_In_Time / (1000 * 3600));
  var sminute = Math.round(Difference_In_Time / (1000 * 60));
  var ssecond = Math.round(Difference_In_Time / 1000);
  res.json({
    futureDate: dDatefin,
	timeUntil: 'commentaire',
    yearsUntil: '???',
    monthsUntil: smonth,
    daysUntil: sday,
    hoursUntil: shour,
    minutesUntil: sminute,
    secondsUntil: ssecond
  });
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
