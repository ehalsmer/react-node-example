var express = require('express');
var router = express.Router();

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
/* GET home page. */
// router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
// });

module.exports = router;
