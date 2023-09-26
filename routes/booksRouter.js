import express from 'express';
import {
  addNewBook,
  deleteBook,
  getAllbooks,
  getBookById,
  updateBook,
} from '../controllers/books.js';

const booksRouter = express.Router();

booksRouter.route('/').get(getAllbooks).post(addNewBook);
booksRouter.route('/:id').get(getBookById).put(updateBook).delete(deleteBook);

export default booksRouter;
