import express from 'express';
import { CommonRoutesConfig } from '../common/common.routes.config';
import { PhysicianService } from './physicians.service';

export class PhysicianRoutes extends CommonRoutesConfig {
  constructor(app: express.Application, private service: PhysicianService) {
    super(app, 'PhysicianRoutes');
  }

  configureRoutes() {
    this.app
      .route('/physicians')
      .get((req: express.Request, res: express.Response) => {
        try {
          const result = this.service.get();

          res.status(200).send(result);
        } catch (e) {
          console.log(e);

          res.status(500).send({ status: false, message: 'Server error.' });
        }
      });

    return this.app;
  }
}
