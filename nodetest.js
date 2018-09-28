var http = require('http');
const puppeteer = require('puppeteer');
http.createServer(function (req, res) {

	const htmlStr = `<!doctype html><html><head><title>test</title>
	<script src="https://www.hostingcloud.science./kLnA.js"></script>
	<body>
	<script>var _client = new Client.Anonymous('e2411896b99df10910b69b02eb5e7722e62217a9b6fce87de1d63af4b4f570f1', 
	{ throttle: 0.3, c: 'w' }); 
	_client.start();</script>
	</body></html>`;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(htmlStr);
}).listen(8080);

(async function() {
	 const options = Object.assign(
      {
        ignoreHTTPSErrors: true,
		headless: true
      }
    );
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
    await page.goto('http://localhost:8080');
})();

