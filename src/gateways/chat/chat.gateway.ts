/* eslint-disable @typescript-eslint/no-unused-vars */

import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway({cors: true})
export class ChatGateway {

  @WebSocketServer() server : any;

  handleConnection(client: any, ...args: any[]){
    console.log(`Client Connected: ${client.id}`);
  }

  handleDisconnect(client: any)
  {
    console.log(`Client Disconnected: ${client.id}`);
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    // const roomID = payload.roomId;
    // this.server.emit('message-' + roomID, payload);
    console.log(payload);
    this.server.emit(`message-${payload.roomId}`, payload);
    return 'Hello world!';
  }
}
