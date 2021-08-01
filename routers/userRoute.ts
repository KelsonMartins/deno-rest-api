import { Router } from 'https://deno.land/x/oak/mod.ts';
import { createUser, getUserDetails } from '../controllers/userController.ts';

const router = new Router();

router.get('/user/:id', getUserDetails);
router.post('/user', createUser);

export default router;