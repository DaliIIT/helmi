import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {STUDENTS} from '../interfaces/students';

@Injectable({
  providedIn: 'root'
})
export class ClassrromService {

  configUrl = 'https://my-json-server.typicode.com/DaliIIT/students/students';

  constructor(private http: HttpClient) {
  }

  getClass() {
    return this.http.get<STUDENTS[]>(this.configUrl);
  }

  update(obj) {
    return this.http.put(this.configUrl, obj);
  }

}
