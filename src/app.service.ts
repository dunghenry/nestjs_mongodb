import { Injectable, HttpService } from "@nestjs/common";
export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
@Injectable()
export class AppService {
    constructor(private readonly http: HttpService) {}
    async getTodos(): Promise<Todo[]> {
        const response = await this.http
            .get("https://jsonplaceholder.typicode.com/todos?_limit=3")
            .toPromise();
        return response.data;
    }
    getHello(): string {
        return "Hello World!";
    }
}
