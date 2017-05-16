import {Injectable} from '@angular/core';

import {User} from './User';
import {USERS} from './allUsers';

@Injectable()
export class MyService{
  getUsers(): Promise<User[]>{
    return Promise.resolve(USERS);
  }
}
