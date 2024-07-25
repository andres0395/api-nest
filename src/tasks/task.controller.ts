import { Controller, Get } from "@nestjs/common";

@Controller('task')
export class TaskController {
    @Get('/numbers')
    getnumbers(arr=[1,2,3,4,5,6,7,8,9]){
        return arr;
    }
    @Get()
    getTask(task='hola desde tareas'):string{
        return task;
    }
}