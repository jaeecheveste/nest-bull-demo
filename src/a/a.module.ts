import { DynamicModule } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { databaseProvider } from 'src/database/database.provider';
import { UtilModule } from 'src/util/util.module';

export class AModule {
  static async forRoot(): Promise<DynamicModule> {
    await new Promise((r) => setTimeout(r, 3000));

    return {
      module: AModule,
      imports: [DatabaseModule, UtilModule.forRoot()],
      providers: [...databaseProvider],
      exports: [AModule, ...databaseProvider],
    };
  }
}
