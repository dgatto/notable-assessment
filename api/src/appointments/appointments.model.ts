import { AppointmentType } from '../middleware/database';

export interface Appointment {
  id: string;
  patientName: string;
  type: AppointmentType;
  date: Date;
}
