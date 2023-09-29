import { Router } from "express";
import { createRoles, getRoles } from "../controllers/roles.controller";

const router = Router();

router.get("/", getRoles);
router.post("/", createRoles);

export default router;
