/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { env } from 'process';
import { task } from './tasks.dto';
import { TasksGateway } from './tasks.gateway';
import { PrismaService } from './prisma.service';


@Injectable()
export class AppService {
  constructor(private readonly tasksGateway:TasksGateway, private prisma:PrismaService){}
  tasksArr:any= [];
  getHello(): any {
    const arr:any = [123423423,2756767564234,3,45,100,13,15,52,100];
    arr.push(env);
    return arr;
  }
  async postTasks(task:task){
    const newTaks = await this.prisma.user.create({data:task});
    this.tasksGateway.emitTaskUpdate(newTaks);
    console.log(newTaks);
    return newTaks;
  }
  getTasks(){ 
    return this.prisma.user.findMany();
  }
  getTask(id:number):task | NotFoundException{
    // una forma de manejar errores con nest es asi 
    return this.tasksArr.find(t => t.id === id) || new NotFoundException('nose encontro la tarea');
  }
}
