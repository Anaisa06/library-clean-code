import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import IResponse from '../interfaces/response.interface';
import { Response } from 'express';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, IResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<IResponse<T>> {
    return next.handle().pipe(
      map(body => {
        const response: Response = context.switchToHttp().getRequest();


        return {
          statusCode: response.statusCode,
          message: body ? 'Request was succesful' : '',
          data: body !== undefined ? body : null
        }
      })
    );
  }
}
