import { Router } from "express";
import { postUser,getUser,getUsers,updateUser,deleteUser,login,isAuthenticated} from "../controller/auth.controller.js";


export const router=Router()

router.get('/user/:id',getUser,)
router.get('/users',getUsers)
router.post('/register',postUser)
router.put('/user/:id',updateUser)
router.delete('/user/:id',deleteUser)
router.get('/login',isAuthenticated,login)


router.use((error,req,res,next)=>{
    console.error(`Error : ${error}`);
    next(error)
  })
  router.use((error,req,res,next)=>{
    res.send('ha ocurrido un error :')
  })