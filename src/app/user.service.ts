import { Injectable } from '@angular/core';

export interface User {
  id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  lastLogin: Date;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
}

// users
const users: User[] = [
  {
    id: '001',
    username: 'user01',
    password: '123',
    firstName: 'user',
    lastName: '01',
    lastLogin: new Date()
  },
  {
    id: '002',
    username: 'user02',
    password: '456',
    firstName: 'user',
    lastName: '02',
    lastLogin: new Date()
  }
];
