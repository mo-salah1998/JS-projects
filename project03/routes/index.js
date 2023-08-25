var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cv', function(req, res, next) {

});
router.post('/cv', function(req, res, next) {
    console.log(req);
    res.send(200).json({message:"ok"});
});
router.patch('/cv', function(req, res, next) {

});
module.exports = router;
