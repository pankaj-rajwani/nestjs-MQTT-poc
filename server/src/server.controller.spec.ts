import { Test, TestingModule } from '@nestjs/testing';
import { ServerController } from './server.controller';
import { ServerService } from './server.service';

describe('ServerController', () => {
  let serverController: ServerController;

  beforeEach(async () => {
    const server: TestingModule = await Test.createTestingModule({
      controllers: [ServerController],
      providers: [ServerService],
    }).compile();

    serverController = server.get<ServerController>(ServerController);
  });

  describe('root', () => {
    it('should return "Thinkit_IoT_MQTT_Server"', () => {
      expect(serverController.getStartingMsg()).toBe('Thinkit_IoT_MQTT_Server');
    });
  });
});
