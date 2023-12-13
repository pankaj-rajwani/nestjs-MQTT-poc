# nestjs-MQTT-poc

### Overview
This Nest.js POC project consists of two backend services: a client service and a server service. The primary goal of this project is to facilitate real-time communication and live updates from IoT devices using the MQTT protocol. The client service connects to the MQTT broker, while the server service manages the handling and distribution of live updates received from IoT devices.

### Project Structure
- `client` : Handles the connection to the MQTT broker and subscribes to relevant topics for live updates.
- `server` : Manages the IOT device communication and distributes live updates from IoT devices to connected clients.

### Prerequisites
Before running the project, make sure you have:

- Node.js installed (version 14.0.0 or later)
- Nest.js CLI installed globally
- MQTT broker (MQTTX) set up for handling IoT device communication

### Installation
1. Clone the repository:
```
git clone https://github.com/pankaj-rajwani/nestjs-MQTT-poc.git
```
2. Install dependencies for both services:
```
cd nestjs-MQTT-poc/client
yarn
```
```
cd ../server
yarn
```

### Running the services
1. Start the client service:
```
cd nestjs-MQTT-poc/client
yarn build
yarn start
```
2. Start the server service:
```
cd nestjs-MQTT-poc/server
yarn build
yarn start
```

### Usage
- Try hitting a `GET` api endpoint from client service via Postman to see if its working
- Try posting a topic via the POST api endpoint `http://localhost:3001/notifications` and you can see it getting logged in server service.
 
- Alternatively, you can install [MQTTX](https://mqttx.app/) on your machine and use it as your MQTT broker
- Enter valid host URL `mqtt://localhost:1883` in MQTTX
- Enter a topic and send a request
- See the request getting logged in server service

### Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

