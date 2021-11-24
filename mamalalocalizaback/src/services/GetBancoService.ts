import prismaClient from "../prisma";

class GetBancoService{
    async execute(){
        const localbanco = await prismaClient.bancoLeite.findMany({
            //take: 3,
            orderBy:{
                nome: 'asc'
            }, 
            include:{
                images: true
            }
        });

        return localbanco;
    }
}

export {GetBancoService}