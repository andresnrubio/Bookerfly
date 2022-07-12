const express = require("express");
const router = express.Router();
const fs = require("fs")

const PATH_ROUTES = __dirname;

//* remove file extension
const removeExtension = (fileName)=>{
return fileName.split('.').shift()
}

//* create a new access to every route
fs.readdirSync(PATH_ROUTES).filter((file)=>{
const name = removeExtension(file)
if (name !== 'index'){
    console.log(`Cargando ruta ${name}`)
    router.use(`/${name}`, require(`./${file}`))
}
})


module.exports = router