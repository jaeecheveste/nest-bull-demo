import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      logger: ['log', 'error', 'warn', 'debug', 'verbose'],
      transport: Transport.NATS,
      options: {
        servers: ['nats://localhost:4222'],
        queue: 'my-demo-project',
      },
    },
  );

  await app.listen();
}

bootstrap();
