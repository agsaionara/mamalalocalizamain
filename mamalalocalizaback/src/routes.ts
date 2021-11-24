import {Router} from 'express'
//import { PrismaClient } from '.prisma/client';
import BancosLeite from './controllers/BancosLeite';
import multer from 'multer';

import uploadConfig from './config/upload'
import { GetBancoController } from './controllers/GetBancoController';
import { CreateBancoController } from './controllers/CreateBancoController';

const router = Router();
const upload = multer(uploadConfig);

router.get("/bancos", new GetBancoController().handle)
router.get("/bancos/:id", BancosLeite.show);
router.post("/bancos", upload.array("images"),BancosLeite.create);
//router.post("/bancos", upload.array('images'), new CreateBancoController().handle);

// router.put("/", async (request, response) => {
//     const {id, nome} = request.body;
//     const updateBancosLeite = await prisma.bancoLeite.update({
//         where:{
//             id: id,
//         }, 
//         data:{
//             nome: nome, 
//         }
//     });
//     response.json(updateBancosLeite);
// })


export {router}
