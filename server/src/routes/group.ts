import { Router } from 'express';
import { createGroup, getAllGroups, getGroup, updateGroup } from '../controllers/groups';

const router = Router();

router.get('/', getAllGroups);
router.get('/:id', getGroup);

router.post('/', createGroup);

router.put('/:id', updateGroup);

export default router;
