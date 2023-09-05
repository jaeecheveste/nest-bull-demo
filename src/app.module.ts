import { BullModule } from '@nestjs/bull';
import { NestModule, RequestMethod } from '@nestjs/common';
import { MiddlewareConsumer } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AModule } from './a/a.module';
import { UtilModule } from './util/util.module';
import { BModule } from './b/b.module';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    DatabaseModule,
    AModule.forRoot(),
    UtilModule.forRoot(),
    BModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
