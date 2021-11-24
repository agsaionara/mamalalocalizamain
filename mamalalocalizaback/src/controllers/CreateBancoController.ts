import {Request, Response} from "express"
import { CreateBancoService } from "../services/CreateBancoService";

class CreateBancoController{
    async handle(request: Request, response:Response){
        const {
            nome, 
            longitude, 
            latitude,
            estoque,
        } = request.body;
        const id = Number(request);
        const requestImages = request.files as Express.Multer.File[];
    
        const images = requestImages.map(image =>{
            return{
                path: image.filename,
            }    
        })     
    const service = new CreateBancoService(); 

    const result = await service.execute();
    
    return response.json(result)

    } 
}

export {CreateBancoController}