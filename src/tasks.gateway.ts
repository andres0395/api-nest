import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { task } from 'src/tasks.dto';
@WebSocketGateway({
  cors: {
    origin: 'http://localhost:4200', // O la URL que necesites permitir
    methods: ['GET', 'POST'],
    credentials: true,
  },
})
export class TasksGateway {
  @WebSocketServer()
  server:Server
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
  emitTaskUpdate(task: task) {
    this.server.emit('taskUpdated', task);
  }
}
