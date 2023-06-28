import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        id: 1,
        login: 'admin',
        password: 'admin',
        firstName: 'Ivan',
        lastName: 'Ivanov',
        email: 'ivanov-Ivan@ya.ru',
        webSite: 'https://www.google.com/',
        phone: '+77894561223',
      },
    ];
    return { users };
  }
  constructor() {}
}

// const users = {
//   login: 'admin',
//   password: 'admin',
//   firstName: 'Ivan',
//   lastName: 'Ivanov',
//   email: 'ivanov-Ivan@ya.ru',
//   webSite: 'https://www.google.com/',
//   phone: '+77894561223',
// };
