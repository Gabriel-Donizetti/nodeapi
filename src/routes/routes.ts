import { Router } from 'express'
import { AuthenticateUserController } from '../controller/authenticateUserController'
import { CreateMessageController } from '../controller/createMessageController'
import { GetLast3MessagesController } from '../controller/getLast3MessagesControler'
import { ProfileUserController } from '../controller/profileUserController'
import { ensureAuthenticated } from '../middleware/ensureAuthenticated'

const router: Router = Router()

router.post('/auth', new AuthenticateUserController().handle)

router.post('/messages', ensureAuthenticated ,new CreateMessageController().handle)

router.get('/messages/last3', new GetLast3MessagesController().handle)

router.get('/profile',ensureAuthenticated, new ProfileUserController().handle)

export default router