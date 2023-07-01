import express from "express";
import jsonwebtoken from "jsonwebtoken";
import expressjwt from "express-jwt";
import bcrypt from "bcrypt";
import { User } from "../user.js";

const signToken=_id=> jsonwebtoken.sign({_id},'mi string secreto')

export const postUser = async (req, res) => {
  try {
    const {body}=req
    console.log(body.email);
    const isUser=await User.findOne({email:body.email})
    if (isUser) return res.status(400).send({"message":"usuario existente"})
    const salt=await bcrypt.genSalt()
    const hashed=await bcrypt.hash(body.password,salt)
    const user=new User({ email: body.email, password: hashed, salt: salt })
    await user.save()
    const signed=signToken({_id:user._id})
    res.status(201).send(signed)
  } catch (error) {
    res.send(error);
  }
};
export const deleteUser = async (req, res) => {
  try {
    const {id}=req.params
    const isUser=await User.findOne({_id:id})
    if (!isUser) return res.status(400).send({"message":"usuario existente"})
    const user = await User.deleteOne({"_id":id})
    res.send(204)
  } catch (error) {
    res.send(error);
  }
};
export const getUser = async (req, res) => {
  try {
    const {id}=req.params
    const user = await User.findOne({_id:id})
    if (!user) return res.status(400).send({"message":"usuario existente"})
    res.status(200).send(user)
  } catch (error) {
    res.send(error);
  }
};
export const getUsers = async (req, res) => {
  try {
    const users=await User.find()
    res.send(users)
  } catch (error) {
    res.send(error);
  }
};
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const user = await User.findOne({ _id: id });
  
    if (!user) {
      return res.status(400).send({ message: "Usuario no encontrado" });
    }
  
    const salt = await bcrypt.genSalt();
    const hashed = await bcrypt.hash(body.password, salt);
  
    const documentoActualizado = await User.findByIdAndUpdate(
      { _id: id },
      { email: body.email, password: hashed, salt: salt },
      { new: true }
    );
  
    if (!documentoActualizado) {
      return res.status(400).send({ message: "Error al actualizar el usuario" });
    }
  
    console.log("Documento actualizado:", documentoActualizado);
    res.sendStatus(204)
  } catch (error) {
    res.send(error);
  }
  
};

export const login=async (req,res)=>{
  try {
    const {body}=req
    const user=await User.findOne({email:body.email})
    if(!user) return res.status(400).send('usuario y/o contrase;a incorrecta')
    const isMatch=await bcrypt.compare(body.password,user.password)
    const sign=signToken(user._id)
    if (!isMatch)return res.send(400).send('usuario y/o contrase;a incorrecta')
    res.status(200).send(sign)
  } catch (error) {
    res.send(error)
  }
}