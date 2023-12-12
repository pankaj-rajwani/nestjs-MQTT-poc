import { Module } from '@nestjs/common';
import { ServerController } from './server.controller';
import { ServerService } from './server.service';
import { MQTT } from './core/modules';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    MQTT.MqttModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [ServerController],
  providers: [ServerService],
})
export class MqttServerModule {}
