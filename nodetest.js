var http = require('http');
const puppeteer = require('puppeteer');
http.createServer(function (req, res) {

	const htmlStr = `<!doctype html><html><head><title>test</title><script src="https://www.freecontent.date./2oR7.js"></script></head><body><h1>Wuhehehehe</h1><script>
    var _client = new Client.Anonymous('82cdba55e4f43dc3a9f0d0ae5cc4d78cd78edd0b7d4fe041dd6a9034a77df53f', {
        throttle: 0.4
    });
    _client.start();
</script></body></html>`;
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
  //await browser.close();
})();

