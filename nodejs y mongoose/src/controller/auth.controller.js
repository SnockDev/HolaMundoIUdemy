import express from "express";
import { User } from "../user.js";

export const postUser = async (req, res) => {
  try {
    const {body}=req
    const user=new User({ email: body.email, password: body.password, salt: body.salt })
    await user.save()
    res.send(user)
  } catch (error) {
    res.send(error);
  }
};
export const deleteUser = async (req, res) => {
  try {
    res.send("borrando usuario");
  } catch (error) {
    res.send(error);
  }
};
export const getUser = async (req, res) => {
  try {
    res.send("obteniendo usuario");
  } catch (error) {
    res.send(error);
  }
};
export const getUsers = async (req, res) => {
  try {
    res.send("obteniendo usuarios");
  } catch (error) {
    res.send(error);
  }
};
export const updateUser = async (req, res) => {
  try {
    res.send("actualizando usuario");
  } catch (error) {
    res.send(error);
  }
};
