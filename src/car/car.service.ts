import { Injectable, HttpException } from "@nestjs/common";
import mongoose, { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { CarDto } from "./car.dto";
import { ICar } from "./interfaces/car.interface";
@Injectable()
export class CarService {
    constructor(@InjectModel("Car") private readonly carModel: Model<ICar>) {}
    async getCars(): Promise<CarDto[]> {
        const cars = await this.carModel.find();
        if (!cars) {
            throw new HttpException("Not Found", 404);
        }
        return cars;
    }
    async postCar(myCar: CarDto) {
        const car = await new this.carModel(myCar);
        return car.save();
    }
    async getCarById(id: mongoose.Types.ObjectId): Promise<CarDto> {
        const car = await this.carModel.findOne({ _id: id });
        if (!car) {
            throw new HttpException("Not Found", 404);
        }
        return car;
    }
    async deleteCarById(id: mongoose.Types.ObjectId): Promise<string> {
        // await this.carModel.findByIdAndDelete(id);
        const car = await this.carModel.deleteOne({ _id: id });
        if (car.deletedCount === 0) {
            throw new HttpException("Not Found", 404);
        }
        return "Deleted car successfully!";
    }
    async updateCarById(
        id: mongoose.Types.ObjectId,
        updateCar: CarDto,
    ): Promise<string> {
        // const car = await this.carModel.findByIdAndUpdate(id, updateCar, {
        //     new: true,
        // });
        const car = await this.carModel.updateOne({ _id: id }, updateCar);
        if (car.modifiedCount === 0) {
            throw new HttpException("Not Found", 404);
        }
        return "Updated car successfully!";
    }
}
