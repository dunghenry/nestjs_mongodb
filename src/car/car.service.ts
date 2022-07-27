import { ICar } from "./car.controller";
import { Injectable } from "@nestjs/common";
import { cars } from "./car.data";
@Injectable()
export class CarService {
    private cars = cars;
    public async getCars() {
        return {
            status: 200,
            data: this.cars,
        };
    }
    public async postCar(car) {
        const newCar = {
            id: Math.floor(Math.random() * 100),
            ...car,
        };
        this.cars.push(newCar);
        return {
            status: 200,
            message: "Add car successfully!",
            car,
            data: this.cars,
        };
    }
    public async getCarById(id: string) {
        const car = this.cars.find((car) => car.id === +id);
        if (car) {
            return {
                status: 200,
                data: car,
            };
        } else {
            return {
                status: 404,
                message: "Car not found",
            };
        }
    }
    public async deleteCarById(id: string) {
        const car = this.cars.find((car) => car.id === +id);
        if (car) {
            const data = this.cars.filter((car) => car.id !== +id);
            this.cars = data;
            return {
                status: 200,
                message: "Deleted car successfully!",
                data,
            };
        } else {
            return {
                status: 404,
                message: "Car not found",
            };
        }
    }
    public async updateCarById(id: string, updateCar: ICar) {
        const car = this.cars.find((car) => car.id === +id);
        if (car) {
            const data = this.cars.map((car) => {
                if (car.id === +id) {
                    car.brand = updateCar.brand;
                    car.color = updateCar.color;
                    car.model = updateCar.model;
                }
                return car;
            });
            const car = this.cars.find((car) => car.id === +id);
            return {
                status: 200,
                data,
                car,
                message: "Updated car successfully!",
            };
        } else {
            return {
                status: 404,
                message: "Car not found",
            };
        }
    }
}
