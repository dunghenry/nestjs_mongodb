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
export interface ICar {
    brand: string;
    color: string;
    model: string;
}
@Controller("cars")
export class CarController {
    constructor(private readonly carService: CarService) {}
    @Get()
    async getCars() {
        return await this.carService.getCars();
    }
    @Post()
    async postCar(@Body() newCar: ICar) {
        return await this.carService.postCar(newCar);
    }
    @Get(":id")
    async getCar(@Param("id") id: string) {
        return await this.carService.getCarById(id);
    }
    @Delete(":id")
    async deleteCarById(@Param("id") id: string) {
        return await this.carService.deleteCarById(id);
    }
    @Put(":id")
    async updateCarById(@Param("id") id: string, @Body() updateCar: ICar) {
        return await this.carService.updateCarById(id, updateCar);
    }
}
