const http = require('http');
const url = require('url');
const fs = require('fs');
const replaceTemplate = require('./Modules/replaceTemplate');



const tempProduct = fs.readFileSync(`${__dirname}/template/template-product.html`, 'utf-8');
const tempOverview = fs.readFileSync(`${__dirname}/template/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/template/template-card.html`, 'utf-8');
const data1 = fs.readFileSync(`./data.json`, 'utf-8');
const dataObj = JSON.parse(data1);

const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true);
    // const pathname = req.url;
    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
        res.end(output);

    } else if (pathname === '/product') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        const product = dataObj[query.id];
        const output = replaceTemplate(tempProduct, product);
        res.end(output);

    } else if (pathname === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(data1);
        
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'My-Own-Header': 'Hello-server'
        })
        res.end("You entered wrong url")
    }
});

server.listen(7000, '127.0.0.1', () => {

})