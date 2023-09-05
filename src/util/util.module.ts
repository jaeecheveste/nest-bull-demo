import { BullModule } from '@nestjs/bull';
import { DynamicModule } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { databaseProvider } from 'src/database/database.provider';

export class UtilModule {
  static async forRoot(): Promise<DynamicModule> {
    return {
      module: UtilModule,
      imports: [
        DatabaseModule,
        BullModule.registerQueue({ name: 'queue_eze' }),
      ],
      providers: [...databaseProvider],
      exports: [...databaseProvider],
    };
  }
}
