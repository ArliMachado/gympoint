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

const routes = new Router();

const USERS_ENDPOINT = '/users';
const SESSIONS_ENDPOINT = '/sessions';
const STUDENTS_ENDPOINT = '/students';
const PLANS_ENDPOINT = '/plans';
const REGISTRATIONS_ENDPOINT = '/registrations';

routes.post(USERS_ENDPOINT, validateUserStore, UserController.store);

routes.post(SESSIONS_ENDPOINT, validateSessionStore, SessionController.store);

routes.use(authMiddleware);

routes.post(STUDENTS_ENDPOINT, validateStudentStore, StudentController.store);
routes.put(
  `${STUDENTS_ENDPOINT}/:id`,
  validateStudentUpdate,
  StudentController.update
);

routes.get(PLANS_ENDPOINT, PlanController.index);
routes.post(PLANS_ENDPOINT, validationPlanStore, PlanController.store);
routes.put(
  `${PLANS_ENDPOINT}/:id`,
  validationPlanUpdate,
  PlanController.update
);
routes.delete(`${PLANS_ENDPOINT}/:id`, PlanController.delete);

routes.get('/registrations', RegistrationController.index);
routes.post('/registrations', RegistrationController.store);
routes.put('/registrations/:id', RegistrationController.update);
routes.delete('/registrations/:id', RegistrationController.delete);

export default routes;
