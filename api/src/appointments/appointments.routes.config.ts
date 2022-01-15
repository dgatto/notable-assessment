import express from 'express';
import { CommonRoutesConfig } from '../common/common.routes.config';
import { AppointmentService } from './appointments.service';

export class AppointmentRoutes extends CommonRoutesConfig {
  constructor(app: express.Application, private service: AppointmentService) {
    super(app, 'AppointmentRoutes');
  }

  configureRoutes() {
    this.app
      .route('/appointments/')
      .post((req: express.Request, res: express.Response) => {
        try {
          const ids: string[] = req.body.ids;

          const result = this.service.getByIds(ids);

          res.status(200).send(result);
        } catch (e) {
          console.log(e);

          res.status(500).send({ status: false, message: 'Server error.' });
        }
      });

    return this.app;
  }
}
