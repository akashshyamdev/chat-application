import { Router } from 'express';
import { createGroup, deleteGroup, getAllGroups, getGroup, updateGroup } from '../controllers/groups';

const router = Router();

router.get('/', getAllGroups);
router.get('/:id', getGroup);

router.post('/', createGroup);

router.put('/:id', updateGroup);

router.delete('/:id', deleteGroup);

export default router;
