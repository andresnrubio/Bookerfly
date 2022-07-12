const {usersModel} = require("../models");

//* Aqui se genera la logica de control

/** Get users from Db
 * @param {*} req
 * @param {*} res
 */
const getUsers = async (req, res) => {
    const data = await usersModel.find({});
    res.send({data})
};

/** Get unique user by ID info from Db
 * @param {*} req
 * @param {*} res
 */
const getUserById = (req, res) => {};

/** create user
 * @param {*} req
 * @param {*} res
 */
const createUser = async (req, res) => {
    const {body} = req;
    console.log(body)
    const data = await usersModel.create(body)
    res.send({data})
};

/** update user by ID
 * @param {*} req
 * @param {*} res
 */
const updateUser = (req, res) => {};

/** Delete user by ID 
 * @param {*} req
 * @param {*} res
 */
const deleteUser = (req, res) => {};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
