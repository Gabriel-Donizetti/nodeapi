import { Request, Response } from 'express'
import { CreateMessageService } from '../services/createMessageService'


class CreateMessageController {
    async handle(req: Request, res:Response){
        const {message, user_id} = req.body

        const service = new CreateMessageService()

        const result = await service.execute(message, user_id)
        
        return res.json(result)
    }
}

export { CreateMessageController}
