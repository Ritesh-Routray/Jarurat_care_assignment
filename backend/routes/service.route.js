import express from 'express';
import {getService, createService, updateService, deleteService} from "../controllers/service.controller.js";

const router = express.Router();

router.post("/",createService)

router.get("/",getService)

router.put("/:id", updateService)

router.delete("/:id",deleteService)

export default router;