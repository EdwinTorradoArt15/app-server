import { Router } from "express";
import {
  createRoles,
  getRoles,
  deleteRoles,
  updateRoles,
} from "../controllers/roles.controller";

const router = Router();

router.get("/", getRoles);
router.post("/", createRoles);
router.put("/:id", updateRoles);
router.delete("/:id", deleteRoles);

export default router;
