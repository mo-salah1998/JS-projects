var express = require('express');
var router = express.Router();
const axios = require('axios');
const mindee = require("mindee");

const multer = require('multer');

const storage = multer.memoryStorage(); // Store the file in memory as a Buffer
const upload = multer({ storage: storage });
/* GET home page. */
router.get('/cv', function(req, res, next) {

});
router.post('/cv', upload.single('file'),function(req, res, next) {
    //console.log(req.body);
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    // Access the uploaded file via req.file
    const uploadedFile = req.file;
    console.log(uploadedFile);
    const mindeeClient = new mindee.Client({ apiKey: "80eb38587a94e3f58e2d838eaf6639d3" });
    const inputSource = mindeeClient.docFromPath("/home/mo-salah/Downloads/Mohamed Salah Naija (1) (1).pdf");

   const apiResponse = mindeeClient.parse(
        mindee.product.fr.CarteVitaleV1,
        inputSource
    );
    apiResponse.then((resp) => {
        // print a string summary
        console.log(resp.document.toString());
    });


    res.status(200).json({ message: "ok" });

});
router.patch('/cv', function(req, res, next) {

});
module.exports = router;
