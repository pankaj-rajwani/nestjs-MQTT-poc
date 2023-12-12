import { Module } from '@nestjs/common';
import { ServerController } from './server.controller';
import { ServerService } from './server.service';
import { HTTPS } from './core/modules';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    HTTPS.NotificationsModule,
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
export class HttpsServerModule {}
