import prismaClient from "../prisma";
import {io} from '../app'
import BancosLeite from "../controllers/BancosLeite";

class CreateBancoService{    
    async execute() { 
        const bancosleite = await prismaClient.bancoLeite.create({
            data:{
                nome: "",
                latitude: Number(),
                longitude:Number(),
                estoque:Boolean(),
            images:{
                create:[]
            },
            }, include:{
                images:true
            }
        }) 
        const data = {
            nome: bancosleite.nome, 
            longitude: bancosleite.longitude, 
            latitude: bancosleite.latitude,
            estoque:bancosleite.estoque,
            images: [],
        }
        io.emit("new_banco", data);
        //return bancoleite;
        return data;
    }
}
export {CreateBancoService};
