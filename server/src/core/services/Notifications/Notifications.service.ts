import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notifications } from '../../entities';

@Injectable()
export class NotificationsService {
  /**
   *
   */
  constructor(
    @InjectRepository(Notifications)
    private notificationRepository: Repository<Notifications>
  ) {}
  /**
   *
   */

  async findAll(): Promise<Notifications[]> {
    return await this.notificationRepository.find();
  }

  async create(notification: Notifications): Promise<Notifications> {
    return await this.notificationRepository.save(notification);
  }
}
