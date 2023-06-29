import { Router } from "express";
import { postUser,getUser,getUsers,updateUser,deleteUser } from "../controller/auth.controller.js";


export const router=Router()

router.get('/user/:id',getUser,)
router.get('/users',getUsers)
router.post('/register',postUser)
router.put('/user/:id',updateUser)
router.delete('/user/:id',deleteUser)