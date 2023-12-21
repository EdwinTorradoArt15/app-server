import { Producto } from "../models/Producto";
import { Request, Response } from "express";

export const getAllProductos = (req: Request, res: Response): void => {
    res.json(Producto);
  };
  
  export const getProductoById = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);
    const Producto = productos.find((p) => p.id === id);
    if (!Producto) {
      res.status(404).json({ error: 'Producto no encontrado' });
      return;
    }
    res.json(Producto);
  };
  
  export const createProducto = (req: Request, res: Response): void => {
    const { name, price } = req.body;
    const newProducto: Producto = {
      id: Producto.length + 1,
      name,
      price,
    };
    Producto.push(newProducto);
    res.status(201).json(newProducto);
  };
  
  export const updateProducto = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);
    const { name, price } = req.body;
    const ProductoIndex = Producto.findIndex((p) => p.id === id);
    if (ProductoIndex === -1) {
      res.status(404).json({ error: 'Productoo no encontrado' });
      return;
    }
    Producto[ProductoIndex] = { ...Productos[ProductoIndex], name, price };
    res.json(Productos[ProductoIndex]);
  };
  
  export const deleteProducto = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);
    Productos = Productos.filter((p) => p.id !== id);
    res.sendStatus(204);
  };