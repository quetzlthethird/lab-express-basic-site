const express = require('express');
const app = express();
const port = 3000;

app.use (express.static(__dirname+'/public'));

app.get('/', (request,response)=> {
    console.log(`this is the home page`);
    response.sendFile(__dirname+'/views/home.html');
})

app.get('/about', (request,response)=> {
    console.log(`this is the about page`);
    response.sendFile(__dirname+'/views/about.html');
})

app.get('/photos', (request,response)=> {
    console.log(`this is the photos page`);
    response.sendFile(__dirname+'/views/photos.html');
})


app.listen(port, () => {
    console.log(`server listening in on ${port}`);
})