import { Router } from 'express';
import BookController from './bookController.js'

const router = Router()

router.get('/',BookController.getAll)
router.get('/:id', BookController.findById)
router.post('/', BookController.create)
router.put('/:id',BookController.update)
router.delete('/:id', BookController.remove)

export default router