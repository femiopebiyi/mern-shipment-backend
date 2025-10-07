import mongoose from "mongoose";

const shipmentSchema = new mongoose.Schema(
    {
        origin: {
            type: String,
            required: true,
        },
        destination: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["Pending", "In Transit", "Delivered"],
            default: "Pending",
        },
    },
    { timestamps: true }
);

const Shipment = mongoose.model("Shipment", shipmentSchema);
export default Shipment;
