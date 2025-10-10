// models/Shipment.js
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ShipmentSchema = new Schema(
    {
        origin: { type: String, required: true, trim: true },
        destination: { type: String, required: true, trim: true },
        status: {
            type: String,
            enum: ["Pending", "In Transit", "Delivered", "Cancelled"],
            default: "Pending",
        },
        // any other fields you want (carrier, notes, etc.)
        notes: { type: String, default: "" },
    },
    { timestamps: true } // createdAt, updatedAt
);

export default model("Shipment", ShipmentSchema);
