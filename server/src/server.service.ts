import { Injectable } from '@nestjs/common';

@Injectable()
export class ServerService {
  getWelcomeMsg(): string {
    return 'Thinkit_IoT_MQTT_Server';
  }
}
