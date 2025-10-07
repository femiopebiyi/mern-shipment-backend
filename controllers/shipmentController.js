import Shipment from "../models/Shipment.js";

// GET all shipments
export const getShipments = async (req, res) => {
    try {
        const shipments = await Shipment.find();
        res.status(200).json(shipments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET one shipment
export const getShipmentById = async (req, res) => {
    try {
        const shipment = await Shipment.findById(req.params.id);
        if (!shipment) return res.status(404).json({ message: "Shipment not found" });
        res.status(200).json(shipment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST create shipment
export const createShipment = async (req, res) => {
    const { origin, destination, status } = req.body;
    if (!origin || !destination)
        return res.status(400).json({ message: "Origin and destination are required" });

    try {
        const shipment = new Shipment({ origin, destination, status });
        const saved = await shipment.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// PUT update shipment
export const updateShipment = async (req, res) => {
    try {
        const updated = await Shipment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: "Shipment not found" });
        res.status(200).json(updated);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// DELETE shipment
export const deleteShipment = async (req, res) => {
    try {
        const deleted = await Shipment.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: "Shipment not found" });
        res.status(200).json({ message: "Shipment deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
