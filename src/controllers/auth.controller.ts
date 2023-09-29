import { User } from "../models/User";
import { Role } from "../models/Role";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Contraseña incorrecta." });
    }

    const token = jwt.sign({ userId: user.id_user }, "secret", {
      expiresIn: "1h",
    });

    return res.status(200).json({
      user: {
        id_user: user.id_user,
        name: user.name,
      },
      token,
    });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "El usuario ya está registrado." });
    }

    const defaultRole = await Role.findOne({
      where: {
        id_role: 1,
      },
    });

    if (!defaultRole) {
      return res
        .status(500)
        .json({ message: "El rol por defecto no está configurado." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      id_rol: defaultRole.id_role,
    });

    return res.status(201).json({ user });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};
