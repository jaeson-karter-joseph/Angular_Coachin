import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectExampleService {

  constructor() { }

  private bhSubject = new BehaviorSubject<string>('');
  bhSubject$ = this.bhSubject.asObservable();

  changeValue(value: string) {
    this.bhSubject.next(value);
  }

  getValue() {
    return this.bhSubject.value;
  }
}
