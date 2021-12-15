import  Book  from './bookModel.js'
const BookController = {
    async getAll(req, res) {
        console.log(req.body);
        const allBooks = await Book.find()
        res.status(200).json(allBooks)
    },
    async findById(req, res) {
        const foundBook = await Book.findById(
        req.params.id
      );
        res.status(200).json(foundBook)
},
    async create(req, res) {
        console.log(req.body);
        const book = new Book(req.body)
        await book.save()
        res.status(200).json(book)
    },
    async update(req, res) {
        const updateBook = await Book.findByIdAndUpdate(req.params.id, {
            ...req.body
        }, {new: true})
        res.status(200).json(updateBook)
    },
    async remove(req, res) {
        const removedBook = await Book.findByIdAndRemove(req.params.id)
        res.status(200).json(removedBook)
    }
}
export default BookController