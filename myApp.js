'use strict';
var express = require('express');
const bodyParser = require('body-parser');
var app = express();

// --> 7)  Mount the Logger middleware here


// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */
app.use(bodyParser.urlencoded({extended: false}));
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});
app.use(express.static(`${__dirname}/public`))


/** 2) A first working Express Server */
app.get('/', (req, res) => {
    return res.sendFile(`${__dirname}/views/index.html` );
});



/** 3) Serve an HTML file */


/** 4) Serve static assets  */


/** 5) serve JSON on a specific route */
const MESSAGE_STYLE = process.env.MESSAGE_STYLE;

function jsonHandler(req, res) {
    let messageObject = {'message': 'Hello json'};
    if(MESSAGE_STYLE && MESSAGE_STYLE === 'uppercase') {
        messageObject.message = messageObject.message.toUpperCase();
    }
    return res.json(messageObject);
}

app.get('/json', jsonHandler);

/** 6) Use the .env file to configure the app */
 
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server */
app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    return res.json({
        'time': req.time
    })
});

/** 9)  Get input from client - Route parameters */
app.get('/:word/echo', (req, res) => {
    let echo =  req.params.word;
    return res.json({
        echo
    })
});

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
app.route('/name').get((req, res) => {
    const firstname = req.query.first;
    const lastname = req.query.last;
    return res.json({
        'name': `${firstname} ${lastname}`
    })
}).post((req, res) => {
    const firstname = req.body.first;
    const lastname = req.body.last;
    return res.json({
        'name': `${firstname} ${lastname}`
    })
});
  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
