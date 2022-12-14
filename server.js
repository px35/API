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

// parse JSON
app.use(express.json());
// parse URL encoded data
app.use(express.urlencoded({ extended: true }));

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
  var Difference_In_Time = Math.abs(dDatefin - dDatejour);
  var smonth = Math.round(Difference_In_Time / (1000 * 3600 * 24 * 30));
  var sday = Math.round(Difference_In_Time / (1000 * 3600 * 24));
  var shour = Math.round(Difference_In_Time / (1000 * 3600));
  var sminute = Math.round(Difference_In_Time / (1000 * 60));
  var ssecond = Math.round(Difference_In_Time / 1000);
  var jsonRep = {
    set_attributes: {
		futureDate: dDatefin,
		timeUntil: 'commentaire',
		yearsUntil: '???',
		monthsUntil: smonth,
		daysUntil: sday,
		hoursUntil: shour,
		minutesUntil: sminute,
		secondsUntil: ssecond
	}
  };
  var jsonContent = JSON.stringify(jsonRep);
  console.log("jsonContent=" + jsonContent);
  res.send(jsonRep);
});

// Tri d'une structure JSON
app.post('/tri', function(req, res) {
  var items = req.body; // JSON
  items.sort(function(a, b) {
  return a.id - b.id;
	});
  console.log("Msg entree=" + items);
  console.log("Msg entree (stringify)=" + JSON.stringify(items));
  var input = JSON.parse(JSON.stringify(req.body)); // OBJECT
  console.log("input[0].title=" + input[0].title);
  console.log("input[1].title=" + input[1].title);
  //console.log("Tab trie=" + sortJsonArray(items, 'id'));
  res.send(items);
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
