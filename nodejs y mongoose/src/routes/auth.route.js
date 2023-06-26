import { Router } from "express";
import { postUser,getUser,getUsers,updateUser,deleteUser } from "../controller/auth.controller.js";


export const router=Router()

router.get('/user',(req,res)=>{
    res.send('obteniendo usuario')
})
router.get('user',getUser)
router.post('/register',postUser)
router.patch('user',updateUser)
router.delete('user',deleteUser)