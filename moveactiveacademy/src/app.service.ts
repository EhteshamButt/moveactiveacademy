import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(): object {
    return {
      app: 'moveactiveacademy',
      status: 'running',
      message: 'Welcome to Move Active Academy API',
      timestamp: new Date().toISOString(),
    };
  }
}
