// routes/api/index.js
import { Router } from 'express';

const router = Router();

import { all, byId, create, update, remove } from '../../controllers/product';

import { all as _all } from '../../controllers/manufacturer';


router.get('/manufacturers', _all);

router.get('/products', all);
router.get('/products/:id', byId);
router.post('/products', create);
router.put('/products/:id', update);
router.delete('/products/:id', remove);

export default router; // need to double check it export all routes
