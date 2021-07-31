import { Router } from 'express';
import { deleteUser, getAllUsers, login, signup } from '../controllers/users';

const router = Router();

router.get('/', getAllUsers);

router.post('/signup', signup);
router.post('/login', login);

router.delete('/:id', deleteUser);

export default router;
