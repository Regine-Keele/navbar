import { Component } from '@angular/core';
import { ReminderService } from './services/reminder.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent {
  title = 'Reminder Section';
  account$: Observable<string>;
  email$: Observable<string>;
  date$: Observable<string>;
  note$: Observable<string>;

  constructor(private _reminderService: ReminderService) {
    this.account$ = this._reminderService.getField$('account');
    this.email$ = this._reminderService.getField$('email');
    this.date$ = this._reminderService.getField$('date');
    this.note$ = this._reminderService.getField$('note');
  }

  public executeHelloWorld() {
    window.alert('Your reminder has been recorded!');
    this.title = 'Reminder recorded';
  }

  // Generic method to modify any field
  public modifyField(event: Event, field: 'account' | 'email' | 'date' | 'note') {
    const input = event.target as HTMLInputElement;
    this._reminderService.setField(field, input.value);
  }
}
