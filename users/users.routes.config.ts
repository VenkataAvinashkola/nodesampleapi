import {CommonRoutesConfig} from '../common/common.routes.config';
import UsersController from './controllers/users.controller';
import UsersMiddleware from './middleware/users.middleware';
import express from 'express';

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes() {

        this.app.route(`/api/v1/parse`)
            .post(
                UsersMiddleware.validateRequiredRequestBodyFields,
                UsersController.parsev1Data);

        this.app.route(`/api/v2/parse`)
            .post(
                UsersMiddleware.validateRequiredRequestBodyFields,
                UsersController.parsev2Data);

        return this.app;
    }
}