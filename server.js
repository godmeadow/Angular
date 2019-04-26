const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/Milano'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname+'/dist/Milano/index.html'));
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server started in port: ${PORT}`);
});