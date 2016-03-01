Express
================
## links

* [express](http://expressjs.com/en/4x/api.html#express)
* [Application](http://expressjs.com/en/4x/api.html#app)
* [Request](http://expressjs.com/en/4x/api.html#req)
* [Response](http://expressjs.com/en/4x/api.html#res)
* [Router](http://expressjs.com/en/4x/api.html#router)
* []()

## Response methods
```
res.download()	Prompt a file to be downloaded.
res.end()	End the response process.
res.json()	Send a JSON response.
res.jsonp()	Send a JSON response with JSONP support.
res.redirect()	Redirect a request.
res.render()	Render a view template.
res.send()	Send a response of various types.
res.sendFile()	Send a file as an octet stream.
res.sendStatus()	Set the response status code and send its string representation as the response body.
```

## app.route()
```
app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });
```

## express.Router
```
var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;

//app.js
var users = require('./users');
app.use('/users', users);
```


