import express from 'express';
import FormController from '../controllers/formController.js';

const routes = express.Router();

routes.get('/forms', FormController.getForms);
routes.post('/forms', FormController.createForm);

export default routes;