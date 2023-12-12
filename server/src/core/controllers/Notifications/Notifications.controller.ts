import { Controller, Get } from '@nestjs/common';
import { NotificationsService } from '../../services';
import { Notifications } from '../../entities';

@Controller('api/v1/notifications')
export class NotificationsController {
  constructor(private notificationsService: NotificationsService) {}

  @Get()
  fetchAllNotifications(): Promise<Notifications[]> {
    return this.notificationsService.findAll();
  }
}
