import { Producto } from "../models/Producto";
import { Request, Response } from "express";

export const getProductos = async (_req: Request, res: Response) => {
  try {
    const roles = await Producto.findAll();

    return res.status(200).json({ roles });
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

export const createProductos = async (req: Request, res: Response) => {
  try {
    const { name, descripcion, talla, precio } = req.body;

    const existingProducto = await Producto.findOne({
      where: {
        name: name,
      },
    });

    if (existingProducto) {
      return res.status(400).json({ message: "El producto ya existe." });
    }

    const producto = await Producto.create({
      name,
      descripcion,
      talla,
      precio,
    });

    return res.status(201).json({ producto });
  } catch (error) {
    console.error("Error al crear el producto:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

export const updateProductos = async (req: Request, res: Response) => {
  try {
    const { name, descripcion, talla, precio } = req.body;

    const existingProducto = await Producto.findOne({
      where: {
        name: name,
      },
    });

    if (!existingProducto) {
      return res.status(400).json({ message: "El producto no existe." });
    }

    const producto = await Producto.update(
      {
        name,
        descripcion,
        talla,
        precio,
      },
      {
        where: {
          name: name,
        },
      }
    );

    return res.status(201).json({ producto });
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

export const deleteProductos = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const existingProducto = await Producto.findOne({
      where: {
        name: name,
      },
    });
    console.log("nombre ->", existingProducto);
    if (!existingProducto) {
      return res.status(400).json({ message: "El producto no existe." });
    }

    await existingProducto.update({
      estado: false,
    });

    return res
      .status(200)
      .json({ message: "Estado del producto actualizado." });
  } catch (error) {
    console.error("Error al cambiar el estado del producto:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};
