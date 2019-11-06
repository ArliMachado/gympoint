import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';

import validateUserStore from './app/validators/UserStore';
import validateSessionStore from './app/validators/SessionStore';
import validateStudentStore from './app/validators/StudentStore';

const routes = new Router();

routes.post('/users', validateUserStore, UserController.store);

routes.post('/sessions', validateSessionStore, SessionController.store);

routes.post('/students', validateStudentStore, StudentController.store);

export default routes;
