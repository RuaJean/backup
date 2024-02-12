const express = require('express');
require('dotenv').config();



const app = express();

// app.use(express.static('/public'));
// app.use('/resources', express.static(__dirname + '/public'));

// app.use('/', require('./router'));

app.set('port', process.env.PORT || 80);
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/', require('./router'));
app.listen(8080, ()=>{
    console.log('Server is listening on port 8080');
});
  