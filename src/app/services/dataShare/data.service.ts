import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {SAREDDATA} from '../interfaces/sharedData.interface';


@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject<SAREDDATA>({name: '', gender: 'ALL', department: 'ALL'});
  currentMessage = this.messageSource.asObservable();

  constructor() {
  }

  changeMessage(data: SAREDDATA) {
    this.messageSource.next(data);
  }

}
