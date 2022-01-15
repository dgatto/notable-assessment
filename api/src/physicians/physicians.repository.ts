import { Guid } from 'js-guid';
import { Database } from '../middleware/database';
import { Physician } from './physicians.model';

export class PhysicianRepository {
  private database: Database;

  constructor(private _database: Database) {
    this.database = _database;
  }

  /**
   * Gets all the given Physicians in the database.
   * @returns Array of Physicians.
   */
  get(): Physician[] {
    return this.database.physicians;
  }
}
