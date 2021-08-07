import { Router } from 'express';
import { createGroup, getAllGroups, getGroup } from '../controllers/groups';

const router = Router();

router.get('/', getAllGroups);
router.get('/:id', getGroup);

router.post('/', createGroup);

export default router;
