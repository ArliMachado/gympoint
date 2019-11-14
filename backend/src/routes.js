import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';
import RegistrationController from './app/controllers/RegistrationController';
import CheckinController from './app/controllers/CheckinController';
import HelpOrderController from './app/controllers/HelpOrderController';

import validateUserStore from './app/validators/UserStore';
import validateSessionStore from './app/validators/SessionStore';
import validateStudentStore from './app/validators/StudentStore';
import validateStudentUpdate from './app/validators/StudentUpdate';
import validationPlanStore from './app/validators/PlanStore';
import validationPlanUpdate from './app/validators/PlanUpdate';
import validationRegistrationStore from './app/validators/RegistrationStore';
import validationRegistrationUpdate from './app/validators/RegistrationUpdate';
import validationHelpOrdersStore from './app/validators/HelpOrdersStore';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

const USERS_ENDPOINT = '/users';
const SESSIONS_ENDPOINT = '/sessions';
const STUDENTS_ENDPOINT = '/students';
const PLANS_ENDPOINT = '/plans';
const REGISTRATIONS_ENDPOINT = '/registrations';
const HELP_ORDERS_ENDPOINT = '/help-orders';

routes.post(USERS_ENDPOINT, validateUserStore, UserController.store);

routes.post(SESSIONS_ENDPOINT, validateSessionStore, SessionController.store);

routes.use(authMiddleware);

routes.post(STUDENTS_ENDPOINT, validateStudentStore, StudentController.store);
routes.put(
  `${STUDENTS_ENDPOINT}/:id`,
  validateStudentUpdate,
  StudentController.update
);
routes.post(`${STUDENTS_ENDPOINT}/:id/checkins`, CheckinController.store);
routes.get(`${STUDENTS_ENDPOINT}/:id/checkins`, CheckinController.index);

routes.post(
  `${STUDENTS_ENDPOINT}/:id${HELP_ORDERS_ENDPOINT}`,
  validationHelpOrdersStore,
  HelpOrderController.store
);

routes.get(`${HELP_ORDERS_ENDPOINT}`, HelpOrderController.index);

routes.get(PLANS_ENDPOINT, PlanController.index);
routes.post(PLANS_ENDPOINT, validationPlanStore, PlanController.store);
routes.put(
  `${PLANS_ENDPOINT}/:id`,
  validationPlanUpdate,
  PlanController.update
);
routes.delete(`${PLANS_ENDPOINT}/:id`, PlanController.delete);

routes.get(REGISTRATIONS_ENDPOINT, RegistrationController.index);
routes.post(
  REGISTRATIONS_ENDPOINT,
  validationRegistrationStore,
  RegistrationController.store
);
routes.put(
  `${REGISTRATIONS_ENDPOINT}/:id`,
  validationRegistrationUpdate,
  RegistrationController.update
);
routes.delete(`${REGISTRATIONS_ENDPOINT}/:id`, RegistrationController.delete);

export default routes;
