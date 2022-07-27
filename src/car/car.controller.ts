import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Delete,
    Put,
} from "@nestjs/common";
import { CarService } from "./car.service";
import { CarDto } from "./car.dto";
import mongoose from "mongoose";
@Controller("cars")
export class CarController {
    constructor(private readonly carService: CarService) {}
    @Get()
    async getCars() {
        return await this.carService.getCars();
    }
    @Post()
    async postCar(@Body() newCar: CarDto) {
        return await this.carService.postCar(newCar);
    }
    @Get(":id")
    async getCar(@Param("id") id: mongoose.Types.ObjectId) {
        return await this.carService.getCarById(id);
    }
    @Delete(":id")
    async deleteCarById(@Param("id") id: mongoose.Types.ObjectId) {
        return await this.carService.deleteCarById(id);
    }
    @Put(":id")
    async updateCarById(
        @Param("id") id: mongoose.Types.ObjectId,
        @Body() updateCar: CarDto,
    ) {
        return await this.carService.updateCarById(id, updateCar);
    }
}
