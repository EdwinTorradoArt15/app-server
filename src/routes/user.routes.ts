import { Router } from "express";
import { getUsers } from "../controllers/user.controller";
import { authenticateToken } from "../middleware/jtw_verification";

const router = Router();

router.get("/", authenticateToken, getUsers);

export default router;
