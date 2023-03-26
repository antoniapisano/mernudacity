const express = require('express');
const router = express.Router();
const { noPhotoApi } = require("../controllers/photoController.js");

router.get("/", noPhotoApi);



module.exports = router;