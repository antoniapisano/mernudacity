const express = require('express');
const router = express.Router();
const {getPhotos} = require("../controllers/photoController.js");

router.get("/", getPhotos);



module.exports = router;