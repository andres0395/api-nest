/* eslint-disable prettier/prettier */
import { Body, Controller, Get, NotFoundException, Param, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { task } from './tasks.dto';
import { AuthGuard } from './auth/auth.guard';
// import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('api')
  getHello1(): string {
    console.log('object',__dirname);
    return 'Hello World!';
  }
  // la forma como lo hace express
  // @Get()
  // getHello(@Req()request:Request,@Res()response:Response): string {
  //  res.status(200).json({ok:ok});
  // }
  @Get()
  getHello() {
    return this.appService.getTasks();
  }
  @Get(':id')
  getTask(@Param('id') id:string): task | NotFoundException {
    return this.appService.getTask(+id);
  }
  // el usepipes es para validar los datos recibidos como lo requiere el dto
  // esto es para validaciones locales tambien se puede hacer con validaciones globales para no repetir codigo
  // @Post('api/post')
  // @UsePipes(new ValidationPipe())
  // postTasks(@Body() taskb:task): task[] {
  //   console.log(taskb);
  //   return this.appService.postTasks(taskb);
  // }
  @Post('api/post')
  @UseGuards(AuthGuard)
  async postTasks(@Body() taskb:task) {
    console.log(taskb);
    return await this.appService.postTasks(taskb);
  }
}
