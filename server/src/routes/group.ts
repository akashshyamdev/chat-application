import { Router } from 'express';
import { createGroup } from '../controllers/groups';

const router = Router();

router.post('/', createGroup);

export default router;
