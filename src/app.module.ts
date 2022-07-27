import { HttpModule, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CarModule } from "./car/car.module";

@Module({
    imports: [HttpModule, CarModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
