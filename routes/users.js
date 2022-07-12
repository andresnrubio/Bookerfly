const express = require ("express");
const router = express.Router();
const {getUsers, getUserById, createUser, updateUser, deleteUser} =require ("../controllers/users")


//TODO routes CRUD users

router.get("/", getUsers)
router.post("/", createUser)
router.get("/:id", getUserById)
router.get("/:id", updateUser)
router.get("/:id", deleteUser)

module.exports = router