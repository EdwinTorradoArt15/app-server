import { Role } from "../models/Role";
import { Request, Response } from "express";

export const getRoles = async (_req: Request, res: Response) => {
  try {
    const roles = await Role.findAll();

    return res.status(200).json({ roles });
  } catch (error) {
    console.error("Error al obtener los roles:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

export const createRoles = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const existingRole = await Role.findOne({
      where: {
        name: name,
      },
    });

    if (existingRole) {
      return res.status(400).json({ message: "El rol ya existe." });
    }

    const role = await Role.create({
      name,
    });

    return res.status(201).json({ role });
  } catch (error) {
    console.error("Error al crear el rol:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

export const updateRoles = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    let { name } = req.body;

    const role = await Role.findOne({
      where: {
        id_role: id,
      },
    });

    if (!role) {
      return res.status(404).json({ message: "El rol no existe." });
    }

    name = name.toUpperCase();

    await Role.update(
      {
        name,
      },
      {
        where: {
          id_role: id,
        },
      }
    );

    return res
      .status(200)
      .json({ message: "El rol se actualizó correctamente." });
  } catch (error) {
    console.error("Error al actualizar el rol:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

export const deleteRoles = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const role = await Role.findOne({
      where: {
        id_role: id,
      },
    });

    if (!role) {
      return res.status(404).json({ message: "El rol no existe." });
    }

    await Role.destroy({
      where: {
        id_role: id,
      },
    });

    return res
      .status(200)
      .json({ message: "El rol se eliminó correctamente." });
  } catch (error) {
    console.error("Error al eliminar el rol:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};
