/* eslint-disable @typescript-eslint/no-var-requires */
import { HttpModule, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CarModule } from "./car/car.module";
import { MongooseModule } from "@nestjs/mongoose";
require("dotenv").config({ path: ".env" });
@Module({
    imports: [
        MongooseModule.forRoot(
            "mongodb+srv://trandung:trandung@cluster0.ykkgz.mongodb.net/Car_Manager?retryWrites=true&w=majority",
        ),
        HttpModule,
        CarModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
