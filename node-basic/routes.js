const fs = require('fs')

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<body>');
        res.write('<form action="/form" method="POST"><input type="text" name="test"><button type="submit">submit</button></input></form>')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    
    if (url === '/form' && method === 'POST') {
        const body = [];
    
        req.on('data', (chunk) => {
            console.log('chunk:', chunk);
            body.push(chunk);
        })
    
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const inputValue = parsedBody.split('=')[1];
            
            fs.writeFileSync('testFile.txt', inputValue);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
            
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>hello</h1>')
    res.write('</body>');
    res.write('</html>');
}

module.exports = {
    handler: requestHandler,
    someData: 'someata'
};