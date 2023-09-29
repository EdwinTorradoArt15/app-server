import { User } from "../models/User";
import { Request, Response } from "express";

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.findAll();

    return res.status(200).json({ users });
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};
