import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReminderComponent } from './reminder.component';

const routes: Routes = [
  {
    path: '',
    component: ReminderComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReminderRoutingModule { }
