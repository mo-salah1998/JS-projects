var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cv', function(req, res, next) {
console.log(req.body);
});
router.post('/cv', function(req, res, next) {
    console.log(req);
});
router.patch('/cv', function(req, res, next) {

});
module.exports = router;
