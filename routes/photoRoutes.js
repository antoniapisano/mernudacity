const express = require('express');
const router = express.Router();
const { getPhotos, getSinglePhoto, getUsernamePhoto} = require("../controllers/photoController.js");


router.get("/", getPhotos);
router.get("/:id", getSinglePhoto);
router.get("/user/:username", getUsernamePhoto);



module.exports = router;