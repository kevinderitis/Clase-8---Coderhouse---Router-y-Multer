import express from 'express';
import userRouter from './src/routes/user.js';
import petRouter from './src/routes/pet.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/user', userRouter);
app.use('/api/pet', petRouter);


const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Server running on port: ${server.address().port}`))
server.on('error', error => console.log(error))


