import { Component } from '@angular/core';
import { Appointment, AppService, Physician } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  physicians = [];
  appointments = [];
  headerPhysician: Physician;

  constructor(private service: AppService) {
    this.service
      .getPhysicians()
      .subscribe((physicians: Physician[]) => (this.physicians = physicians));
  }

  onClick(physician: Physician) {
    this.headerPhysician = physician;

    this.service
      .getAppointmentsByIds(physician.appointmentIds)
      .subscribe((res: Appointment[]) => (this.appointments = res));
  }
}
