// ./routes/index.js
import { Router } from 'express';

const router = Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'App running' });
});

export default router;
