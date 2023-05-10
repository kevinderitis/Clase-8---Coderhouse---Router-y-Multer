import { Router } from 'express';
import { upload } from '../middlewares/index.js';
const petRouter = Router();

const pets = [];

petRouter.get('/', (req, res) => {
    res.send(pets)
})

petRouter.post('/', (req, res) => {
    let pet = req.body;
    pets.push(pet)
    res.send({ status: "success", msg: "pet added", payload: pet })
})

petRouter.post('/image', upload.single('miArchivo'), (req, res) => {
    const file = req.file;
    if(!file){
        console.log('No existe file')
    }
    res.send(`Archivo ${file.originalname} subido correctamente`)
})


export default petRouter;