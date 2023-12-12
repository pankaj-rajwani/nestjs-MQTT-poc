import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { NotificationsService } from '../../services';
import { Notifications } from '../../entities';

@Controller('api/v1/mqtt')
export class MqttController {
  constructor(private notificationsService: NotificationsService) {}

  @MessagePattern('notification_channel')
  receiveNotifications(@Payload() notification: Notifications) {
    console.log('Client data in receiveNotifications: ', notification);
    return this.notificationsService.create(notification);
  }
}
