import { Controller, Get, Render } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}
    @Get()
    @Render("index")
    root() {
        return { title: "Home Page" };
    }
    @Get("hello")
    getHello(): string {
        return this.appService.getHello();
    }
    @Get("todos")
    getTodos() {
        return this.appService.getTodos();
    }
}
