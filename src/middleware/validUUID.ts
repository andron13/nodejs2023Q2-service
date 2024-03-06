import {
  Injectable,
  NestMiddleware,
  BadRequestException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { validate as isUuid } from 'uuid';

@Injectable()
export class UuidValidatorMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    if (id && !isUuid(id)) {
      throw new BadRequestException('Invalid ID');
    }
    next();
  }
}
