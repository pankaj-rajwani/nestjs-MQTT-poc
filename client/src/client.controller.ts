import { Controller, Post, Get, Inject, Body } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ClientService } from './client.service';

@Controller()
export class ClientController {
  constructor(
    @Inject('MQTT_SERVICE') private client: ClientProxy,
    private readonly clientService: ClientService
  ) {}

  @Get()
  getStartingMsg(): string {
    return this.clientService.getWelcomeMsg();
  }

  @Post('notifications')
  sendNotifications(@Body() notification) {
    return this.client.send('notification_channel', notification);
  }
}
