// controllers/shipmentController.js
import Shipment from "../models/Shipment.js";
import mongoose from "mongoose";

function validateObjectId(id) {
    return mongoose.Types.ObjectId.isValid(id);
}

export const getAllShipments = async (req, res, next) => {
    try {
        const shipments = await Shipment.find().sort({ createdAt: -1 });
        res.json({ success: true, data: shipments });
    } catch (err) {
        next(err);
    }
};

export const getShipment = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!validateObjectId(id)) return res.status(400).json({ success: false, message: "Invalid shipment id" });
        const shipment = await Shipment.findById(id);
        if (!shipment) return res.status(404).json({ success: false, message: "Shipment not found" });
        res.json({ success: true, data: shipment });
    } catch (err) {
        next(err);
    }
};

export const createShipment = async (req, res, next) => {
    try {
        const { origin, destination, status, notes } = req.body;
        if (!origin || !destination) return res.status(400).json({ success: false, message: "origin and destination are required" });

        const newShipment = await Shipment.create({ origin, destination, status, notes });
        res.status(201).json({ success: true, data: newShipment, message: "Shipment created" });
    } catch (err) {
        next(err);
    }
};

export const updateShipment = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!validateObjectId(id)) return res.status(400).json({ success: false, message: "Invalid shipment id" });

        const updates = req.body;
        const updated = await Shipment.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
        if (!updated) return res.status(404).json({ success: false, message: "Shipment not found" });
        res.json({ success: true, data: updated, message: "Shipment updated" });
    } catch (err) {
        next(err);
    }
};

export const deleteShipment = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!validateObjectId(id)) return res.status(400).json({ success: false, message: "Invalid shipment id" });

        const deleted = await Shipment.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({ success: false, message: "Shipment not found" });
        res.json({ success: true, data: deleted, message: "Shipment deleted" });
    } catch (err) {
        next(err);
    }
};
