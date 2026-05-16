import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUserById(id: string) {
    return {
      id,
      message: 'User lookup placeholder for Sprint 1 foundation.',
    };
  }
}
