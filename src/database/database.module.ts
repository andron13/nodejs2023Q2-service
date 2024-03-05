import { Module } from '@nestjs/common';

import { Database } from './database';
import { DatabaseService } from './database.service';

@Module({
  providers: [DatabaseService, Database],
  exports: [DatabaseService, Database],
})
export class DatabaseModule {}
