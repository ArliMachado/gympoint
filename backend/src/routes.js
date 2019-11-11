import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';
import RegistrationController from './app/controllers/RegistrationController';

import validateUserStore from './app/validators/UserStore';
import validateSessionStore from './app/validators/SessionStore';
import validateStudentStore from './app/validators/StudentStore';
import validateStudentUpdate from './app/validators/StudentUpdate';
import validationPlanStore from './app/validators/PlanStore';
import validationPlanUpdate from './app/validators/PlanUpdate';

import authMiddleware from './app/middlewares/auth';
import Registration from './app/models/Registration';

const routes = new Router();

routes.post('/users', validateUserStore, UserController.store);

routes.post('/sessions', validateSessionStore, SessionController.store);

routes.use(authMiddleware);

routes.post('/students', validateStudentStore, StudentController.store);
routes.put('/students/:id', validateStudentUpdate, StudentController.update);

routes.get('/plans', PlanController.index);
routes.post('/plans', validationPlanStore, PlanController.store);
routes.put('/plans/:id', validationPlanUpdate, PlanController.update);
routes.delete('/plans/:id', PlanController.delete);

routes.get('/registrations', RegistrationController.index);
routes.post('/registrations', RegistrationController.store);

export default routes;
