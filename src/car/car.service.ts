import { Injectable, HttpException } from "@nestjs/common";
import mongoose, { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { CarDto } from "./car.dto";
import { ICar } from "./interfaces/car.interface";
@Injectable()
export class CarService {
    constructor(@InjectModel("Car") private readonly carModel: Model<ICar>) {}
    public async getCars(): Promise<CarDto[]> {
        const cars = await this.carModel.find().exec();
        if (!cars) {
            throw new HttpException("Not Found", 404);
        }
        return cars;
    }
    public async postCar(myCar: CarDto) {
        const car = await new this.carModel(myCar);
        return car.save();
    }
    public async getCarById(id: mongoose.Types.ObjectId): Promise<CarDto> {
        const car = await this.carModel.findById(id).exec();
        if (!car) {
            throw new HttpException("Not Found", 404);
        }
        return car;
    }
    public async deleteCarById(id: mongoose.Types.ObjectId) {
        await this.carModel.findByIdAndDelete(id);
        return "Deleted car successfully!";
    }
    public async updateCarById(
        id: mongoose.Types.ObjectId,
        updateCar: CarDto,
    ): Promise<CarDto> {
        const car = await this.carModel.findByIdAndUpdate(id, updateCar, {
            new: true,
        });
        if (!car) {
            throw new HttpException("Not Found", 404);
        }
        return car;
    }
}
