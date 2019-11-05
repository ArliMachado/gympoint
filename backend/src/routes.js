import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import validateUserStore from './app/validators/UserStore';

const routes = new Router();

routes.post('/users', validateUserStore, UserController.store);

routes.post('/sessions', SessionController.store);

export default routes;
