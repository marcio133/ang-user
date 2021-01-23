import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      map(response => sortByName(response as User[])),
    );
  }
}

function sortByName(users: User[]) {
  return users.sort((a, b) => {
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
})
}
