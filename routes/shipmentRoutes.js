// routes/shipmentRoutes.js
import express from "express";
import {
    getAllShipments,
    getShipment,
    createShipment,
    updateShipment,
    deleteShipment
} from "../controllers/shipmentController.js";

const router = express.Router();

router.get("/", getAllShipments);
router.get("/:id", getShipment);
router.post("/", createShipment);
router.put("/:id", updateShipment);
router.delete("/:id", deleteShipment);

export default router;
