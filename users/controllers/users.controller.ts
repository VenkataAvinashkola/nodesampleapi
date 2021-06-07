import express from 'express';
import usersService from '../services/users.service';
import argon2 from 'argon2';
import debug from 'debug';

const log: debug.IDebugger = debug('app:users-controller');
class UsersController {

    async parsev1Data(req: express.Request, res: express.Response) {
        const user = await usersService.parsev1(req.body);
        res.status(200).send(user);
    }

    async parsev2Data(req: express.Request, res: express.Response) {
        const user = await usersService.parsev2(req.body);
        res.status(200).send(user);
    }


}

export default new UsersController();