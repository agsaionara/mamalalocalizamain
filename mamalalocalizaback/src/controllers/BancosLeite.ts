import {Request, Response, text} from 'express'
import { Image, PrismaClient } from '.prisma/client';
import { io } from '../app';

const prisma = new PrismaClient();

export default{
    async index(request: Request, response: Response){
        const bancosLeite = await prisma.bancoLeite.findMany({
            orderBy: {
                nome: "asc"
            },
            include:{
                images: true
            }
        });
        response.json(bancosLeite);
    },

    async show(request: Request, response: Response){
        const id= request.params.id;
        const bancoLeite = await prisma.bancoLeite.findUnique({
            where:{
                id: Number(id),
            },
            include:{
                images: true
            }
        });
        response.json(bancoLeite);
    },

    async createImage(request: Request, response: Response){
    const {imagesList} = request.body

    const images = imagesList.map(image => {
        return { path: image.filename}
    }) 

    const imagesUp = await prisma.image.create({
        data: images,
    });

    return response.json(imagesUp);
},
    async create(request: Request, response: Response){
        const {
            nome, 
            longitude, 
            latitude,
            estoque,
        } = request.body;

        const requestImages = request.files as Express.Multer.File[];

        const images = requestImages.map(image =>{
            return{
                path: image.filename,
            }    
        })
    
        const bancoleite = await prisma.bancoLeite.create({
            data:{
                nome: nome, 
                longitude: Number(longitude), 
                latitude: Number(latitude),
                estoque: Boolean(estoque),
            },    
            include:{
                images: true,
            }        
        });
        const data = {
            nome: bancoleite.nome, 
            longitude: bancoleite.longitude, 
            latitude: bancoleite.latitude,
            estoque:bancoleite.estoque,
            images:{
                
            },
        }

        io.emit("new_banco", data);
        //return bancoleite;
        return response.json(bancoleite)
    },


 }

// "id": 3,
//     "nome": "Hospital DeBase Luis Eduardo Magalhães",
//     "latitude": -39.2921244,
//     "longitude": -14.7888968,
//     "estoque": true,
//     "images": []