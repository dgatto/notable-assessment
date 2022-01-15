import { AppointmentRepository } from './appointments.repository';

export class AppointmentService {
  private repository: AppointmentRepository;

  constructor(private _repository: AppointmentRepository) {
    this.repository = _repository;
  }

  getByIds(id: string[]): ReturnResult {
    const appointment = this.repository.getByIds(id);

    if (!appointment) {
      return {
        status: false,
        message: 'No appointment found.',
      };
    }

    return {
      status: true,
      message: 'Appointment successfully found.',
      payload: { appointment },
    };
  }
}

interface ReturnResult {
  status: boolean;
  message: string;
  payload?: {};
}
