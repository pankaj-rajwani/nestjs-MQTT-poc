import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientService {
  getWelcomeMsg(): string {
    return 'Thinkit_IoT_MQTT_Client';
  }
}
