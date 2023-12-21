import { Router } from "express";
import {
  getProductos,
  createProductos,
  deleteProductos,
  updateProductos,
} from "../controllers/producto.controller";

const router = Router();

router.get("/", getProductos);
router.post("/", createProductos);
router.put("/:id", updateProductos);
router.delete("/", deleteProductos);

export default router;
