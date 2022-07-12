const express = require ("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleBooks");

//TODO routes CRUD books

router.post("/", uploadMiddleware.single("myFilePdf"), (req, res)=>{
    res.send({a:1})
})

module.exports = router