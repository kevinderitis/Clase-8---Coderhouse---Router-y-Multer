import { Router } from 'express';
import { middleware1, middleware2 } from '../middlewares/index.js';
const userRouter = Router();

const users = [];
userRouter.use(middleware2)

userRouter.get('/', middleware1, (req, res) => {
    res.send(users)
})

userRouter.post('/', (req, res) => {
    let user = req.body;
    users.push(user)
    res.send({ status: "success", msg: "user added", payload: user })
})


export default userRouter;