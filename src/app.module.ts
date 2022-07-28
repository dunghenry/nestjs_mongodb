/* eslint-disable @typescript-eslint/no-var-requires */
import { HttpModule, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CarModule } from "./car/car.module";
import { MongooseModule } from "@nestjs/mongoose";
require("dotenv").config({ path: ".env.dev" });
@Module({
    imports: [
        MongooseModule.forRoot(process.env.MONGODB_URL),
        HttpModule,
        CarModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
