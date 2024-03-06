import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DatabaseModule } from '../database/database.module';
import { UuidValidatorMiddleware } from '../middleware/validUUID';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

// export class UserModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(UuidValidatorMiddleware).forRoutes('user/:id');
//   }
// }
