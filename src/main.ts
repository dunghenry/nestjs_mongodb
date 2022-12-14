import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import hbs = require("hbs");
async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.enableCors();
    app.useStaticAssets(join(__dirname, "..", "public"));
    app.setBaseViewsDir(join(__dirname, "..", "views"));
    app.setViewEngine("hbs");
    hbs.registerPartials(join(__dirname, "..", "views", "partials/"));
    await app.listen(process.env.PORT || 3000);
    console.log(`Server listening on http://localhost:3000`);
}
bootstrap();
