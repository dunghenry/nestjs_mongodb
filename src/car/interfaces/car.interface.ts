import { Document } from "mongoose";
export interface ICar extends Document {
    readonly brand: string;
    readonly color: string;
    readonly model: string;
}
