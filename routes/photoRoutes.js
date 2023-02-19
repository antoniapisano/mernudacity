const express = require('express');
const router = express.Router();
const {getPhotos, getSinglePhoto} = require("../controllers/photoController.js");

router.get("/", getPhotos);
router.get("/:id", getSinglePhoto);



module.exports = router;