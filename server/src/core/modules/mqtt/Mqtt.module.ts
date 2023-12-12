import { Module } from '@nestjs/common';
import { NotificationsService } from '../../services';
import { MqttController } from '../../controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notifications } from '../../entities';

@Module({
  imports: [TypeOrmModule.forFeature([Notifications])],
  providers: [NotificationsService],
  controllers: [MqttController],
})

export class MqttModule {}
