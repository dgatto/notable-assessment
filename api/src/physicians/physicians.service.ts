import { PhysicianRepository } from './physicians.repository';

export class PhysicianService {
  private repository: PhysicianRepository;

  constructor(private _repository: PhysicianRepository) {
    this.repository = _repository;
  }

  get(): ReturnResult {
    const physicians = this.repository.get();

    if (!physicians) {
      return {
        status: false,
        message: 'No physicians found.',
      };
    }

    return {
      status: true,
      message: 'Physicians successfully found.',
      payload: { physicians },
    };
  }
}

interface ReturnResult {
  status: boolean;
  message: string;
  payload?: {};
}
