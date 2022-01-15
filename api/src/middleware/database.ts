import { Physician } from '../physicians/physicians.model';
import { Guid } from 'js-guid';
import { Appointment } from '../appointments/appointments.model';

export class Database {
  physicians: Physician[];
  appointments: Appointment[];

  constructor() {
    const guid1 = Guid.newGuid().toString();
    const guid2 = Guid.newGuid().toString();
    const guid3 = Guid.newGuid().toString();
    const guid4 = Guid.newGuid().toString();
    const guid5 = Guid.newGuid().toString();
    const guid6 = Guid.newGuid().toString();

    this.physicians = [
      {
        id: Guid.newGuid().toString(),
        name: 'Julius Hibbert',
        email: 'julius@hibbert.com',
        appointmentIds: [guid1],
      },
      {
        id: Guid.newGuid().toString(),
        name: 'Kreiger Algernop',
        email: 'kreiger@algernop.com',
        appointmentIds: [guid2, guid3],
      },
      {
        id: Guid.newGuid().toString(),
        name: 'Nick Riveria',
        appointmentIds: [guid4, guid5, guid6],
        email: 'nick@riveria.com',
      },
    ];

    this.appointments = [
      {
        id: guid1,
        patientName: 'Sterling Archer',
        type: AppointmentType.NewPatient,
        date: new Date('2022-01-15T22:15:06.393Z'),
      },
      {
        id: guid2,
        patientName: 'Ray Gilette',
        type: AppointmentType.NewPatient,
        date: new Date('2022-01-15T22:45:06.393Z'),
      },
      {
        id: guid3,
        patientName: 'Lana Kane',
        type: AppointmentType.FollowUp,
        date: new Date('2022-01-15T22:55:06.393Z'),
      },
      {
        id: guid4,
        patientName: 'Jonah Hill',
        type: AppointmentType.FollowUp,
        date: new Date('2022-01-15T22:50:06.393Z'),
      },
      {
        id: guid5,
        patientName: 'Solid Snake',
        type: AppointmentType.FollowUp,
        date: new Date('2022-01-15T23:15:06.393Z'),
      },
      {
        id: guid6,
        patientName: 'Pam Poovey',
        type: AppointmentType.FollowUp,
        date: new Date('2022-01-15T23:30:06.393Z'),
      },
    ];
  }
}

export enum AppointmentType {
  NewPatient = 'NewPatient',
  FollowUp = 'FollowUp',
}
