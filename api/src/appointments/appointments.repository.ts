import { Guid } from 'js-guid';
import { Database } from '../middleware/database';
import { Appointment } from './appointments.model';

export class AppointmentRepository {
  private database: Database;

  constructor(private _database: Database) {
    this.database = _database;
  }

  /**
   * Gets a given Appointment in the database by it's id.
   * @returns Array of Physicians.
   */
  getByIds(ids: string[]): Appointment[] | undefined {
    const guids = ids.map((id) => new Guid(id));

    return this.database.appointments.filter((appointment) =>
      guids.find((guid) => guid.equals(appointment.id))
    );
  }
}
