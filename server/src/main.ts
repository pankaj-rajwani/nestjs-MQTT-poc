import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { MqttServerModule } from './mqtt.server.module';
import { HttpsServerModule } from './https.server.module';

const bootstrap = async () => {
  const mqttServer = await NestFactory.createMicroservice<MicroserviceOptions>(
    MqttServerModule,
    {
      transport: Transport.MQTT,
      options: {
        url: 'mqtt://localhost:1883',
      },
    }
  );
  await mqttServer.listen();

  const httpsServer = await NestFactory.create(HttpsServerModule);
  const port = 3000;
  await httpsServer.listen(port);
};
bootstrap();
