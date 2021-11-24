import {Request, Response} from "express"
import {GetBancoService} from "../services/GetBancoService"

class GetBancoController{
    async handle(request: Request, response:Response){
        const service = new GetBancoService();

        const result = await service.execute();

        return response.json(result);
    }
}

export {GetBancoController};