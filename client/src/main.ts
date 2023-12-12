import { NestFactory } from '@nestjs/core';
import { ClientModule } from './client.module';

const bootstrap= async()=> {
  const app = await NestFactory.create(ClientModule);
  const port = 3001;
  await app.listen(port);
  console.log(`client is running on port : ${port}`)
}
bootstrap();