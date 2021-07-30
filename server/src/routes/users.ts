import { Router } from 'express';
import { signup } from '../controllers/users';

const router = Router();

router.post('/', signup);

export default router;
