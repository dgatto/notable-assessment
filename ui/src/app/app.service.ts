import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  constructor(private http: HttpClient) {}

  getPhysicians(): Observable<Physician[]> {
    return this.http
      .get('http://localhost:5000/physicians/')
      .pipe(pluck('payload', 'physicians'));
  }

  getAppointmentsByIds(ids: string[]): Observable<Appointment[]> {
    return this.http
      .post(`http://localhost:5000/appointments/`, { ids }, this.httpOptions)
      .pipe(pluck('payload', 'appointment'));
  }
}

export interface Physician {
  id: string;
  name: string;
  appointmentIds: string[];
  email;
}

export interface Appointment {
  id: string;
  patientName: string;
  type: AppointmentType;
}

export enum AppointmentType {
  NewPatient = 'NewPatient',
  FollowUp = 'FollowUp',
}
