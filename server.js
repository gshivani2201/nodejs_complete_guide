const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;

	if (url === '/') {
		res.write('<html>');
		res.write('<head><title>Enter message</title></head>');
		res.write("<body><form action='/message' method='POST'><input type='text' name='name'><button type='submit'>Send</button></form></body>");
		res.write('</html>');
		return res.end();
	}

	if (url === '/message' && method === 'POST') {
		const body = [];
		req.on('data', (chunk) => {
			console.log("chunk::",chunk)
			body.push(chunk)
		});
		return req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			const message = parsedBody.split('=')[1];
			fs.writeFileSync('message.txt',message);
			res.statusCode = 302;
			res.setHeader('Location','/')
			return res.end();
		})
	}
	
	res.setHeader('Content-type', 'text/html');
	res.write('<html>');
	res.write('<head><title>My First Page</title></head>');
	res.write('<body><h1>Hello Nodejs Server</h1></body>');
	res.write('</html>');
	res.end();
});

server.listen(2090);