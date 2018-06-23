import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CLASSROOM} from '../interfaces/classroom.interface';

@Injectable({
  providedIn: 'root'
})
export class ClassrromService {

  configUrl = 'https://my-json-server.typicode.com/DaliIIT/students/class';

  constructor(private http: HttpClient) {
  }

  getClass() {
    return this.http.get<CLASSROOM[]>(this.configUrl);
  }

  update(obj) {
    return this.http.put(this.configUrl, obj);
  }

}
