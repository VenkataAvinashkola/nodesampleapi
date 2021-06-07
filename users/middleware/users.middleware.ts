import express from 'express';
import userService from '../services/users.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:users-controller');
class UsersMiddleware {

    async validateRequiredRequestBodyFields(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (req.body.data) {
            next();
        } else {
            res.status(400).send({error: `Missing required data`});
        }
    }

}

export default new UsersMiddleware();