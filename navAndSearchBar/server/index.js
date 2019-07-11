const express = require('express');
const router = require('./router.js');

const port = process.env.PORT || 3072;

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.static(__dirname));
app.use('/api', router);


app.listen(port, () => console.log("Listening on 3072, smooth jazz"));



