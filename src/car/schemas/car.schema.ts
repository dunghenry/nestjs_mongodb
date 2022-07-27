import { Schema } from "mongoose";
export const CarSchema = new Schema(
    {
        brand: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        model: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);
