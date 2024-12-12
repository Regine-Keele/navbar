import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  private fields: { [key: string]: BehaviorSubject<string> } = {};

  constructor() {
    this.fields['account'] = new BehaviorSubject<string>('123456789');
    this.fields['email'] = new BehaviorSubject<string>('sample@gmail.com');
    this.fields['date'] = new BehaviorSubject<string>('12-12-2024');
    this.fields['note'] = new BehaviorSubject<string>('Sample note');
  }

  getField$(field: string): Observable<string> {
    return this.fields[field].asObservable();
  }

  setField(field: string, value: string): void {
    if (this.fields[field]) {
      this.fields[field].next(value);
    }
  }
}
