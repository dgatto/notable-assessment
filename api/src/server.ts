import * as http from 'http';
import express from 'express';
import cors from 'cors';
import { CommonRoutesConfig } from './common/common.routes.config';
import { Database } from './middleware/database';
import { PhysicianRepository } from './physicians/physicians.repository';
import { PhysicianService } from './physicians/physicians.service';
import { PhysicianRoutes } from './physicians/physicians.routes.config';
import { AppointmentRepository } from './appointments/appointments.repository';
import { AppointmentService } from './appointments/appointments.service';
import { AppointmentRoutes } from './appointments/appointments.routes.config';

const port = process.env.PORT || 5000;
const routes: Array<CommonRoutesConfig> = [];

const app: express.Application = express();
const server: http.Server = http.createServer(app);

app.use(cors());
app.use(express.json());

const database = new Database();

const physicianRepository = new PhysicianRepository(database);
const physicianService = new PhysicianService(physicianRepository);

const appointmentRepository = new AppointmentRepository(database);
const appointmentService = new AppointmentService(appointmentRepository);

routes.push(new PhysicianRoutes(app, physicianService));
routes.push(new AppointmentRoutes(app, appointmentService));

server.listen(port, () => {
  routes.forEach((route: CommonRoutesConfig) => {
    console.log(`✔  Routes configured for ${route.getName()}`);
  });

  console.log(`⚡️ Server running at http://localhost:${port}`);
});
