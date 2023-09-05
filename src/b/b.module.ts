import { DynamicModule } from '@nestjs/common';
import { UtilModule } from 'src/util/util.module';

export class BModule {
  static async forRoot(): Promise<DynamicModule> {
    return {
      module: BModule,
      imports: [UtilModule.forRoot()],
    };
  }
}
