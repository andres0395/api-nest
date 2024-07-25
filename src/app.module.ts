/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TasksGateway } from './tasks.gateway';
import { MidlewMiddleware } from './midlew/midlew.middleware';
import { PruebasModule } from './pruebas/pruebas.module';
import { PrismaService } from './prisma.service';
@Module({
  imports: [TasksModule, PruebasModule],
  controllers: [AppController],
  providers: [AppService, TasksGateway, PrismaService],
})
export class AppModule implements NestModule {
  // para tener un middleware que se aplique a todas las peticiones del controlador seleccionado es asi 
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(MidlewMiddleware).forRoutes('task')
  // }
  // para configurar mas especifico es asi
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MidlewMiddleware).forRoutes({path:'/task/numbers', method: RequestMethod.GET})
  }
}
