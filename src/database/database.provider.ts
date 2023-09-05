import * as mongoose from 'mongoose';

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION_',
    useFactory: async (): Promise<unknown> =>
      await mongoose.createConnection('mongodb://localhost:27017/demo', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }),
  },
];
