const {booksModel} = require("../models");

//* Aqui se genera la logica de control

/** Get books from Db
 * @param {*} req
 * @param {*} res
 */
const getBooks = async (req, res) => {
    const data = await booksModel.find({});
    res.send({data})
};

/** Get unique book by ID info from Db
 * @param {*} req
 * @param {*} res
 */
const getBookById = (req, res) => {};

/** create book
 * @param {*} req
 * @param {*} res
 */
const createBook = async (req, res) => {
    const {body} = req;
    console.log(body)
    const data = await booksModel.create(body)
    res.send({data})
};

/** update book by ID
 * @param {*} req
 * @param {*} res
 */
const updateBook = (req, res) => {};

/** Delete book by ID 
 * @param {*} req
 * @param {*} res
 */
const deleteBook = (req, res) => {};

module.exports = { getBooks, getBookById, createBook, updateBook, deleteBook };
