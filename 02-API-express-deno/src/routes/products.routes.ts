import { Router } from 'npm:express';
import { createProducts, getAllProducts, updateProduct, deleteProduct, getProductById } from '/Proyecto Final/02-API-express-deno/src/controllers/products.controllers';

const router = Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;