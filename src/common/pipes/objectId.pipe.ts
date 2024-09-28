import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import * as mongoose from 'mongoose';

@Injectable()
export class ValidateObjectIdPipe implements PipeTransform<string> {
  transform(value: string): string {
    if (!mongoose.Types.ObjectId.isValid(value)) {
      throw new BadRequestException('El ID proporcionado no es un ObjectId válido');
    }
    return value;
  }
}