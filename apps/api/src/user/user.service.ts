import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return [
      {
        id: '1',
        name: 'Alice',
        email: 'lM5tH@example.com',
      },
      {
        id: '2',
        name: 'Bob',
        email: 'rVZ5O@example.com',
      },
      {
        id: '3',
        name: 'Charlie',
        email: 'rVZ5O@example.com',
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
