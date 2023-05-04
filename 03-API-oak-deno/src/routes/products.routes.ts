import { Router } from '../config/deps';
import { createProducts, getAllProducts, updateProduct, deleteProduct, getProductById } from '../controllers/products.controllers';

const router = new Router({
    prefix: '/products',
  });

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;