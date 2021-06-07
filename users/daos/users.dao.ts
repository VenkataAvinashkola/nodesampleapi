import {UserDto} from "../dto/user.dto";
import shortid from "shortid";
import debug from 'debug';
import {RequestDto} from "../dto/request.dto";

const log: debug.IDebugger = debug('app:in-memory-dao');

class UsersDao {
    user: UserDto = {clientId: "", firstName: "", lastName: ""};

    constructor() {
        log('Created new instance of UsersDao');
    }


    async parseDatav1(request: RequestDto) {

        let array = request.data.split('000');
        if(array.length > 0) {
            this.user.clientId = array[2];
            this.user.firstName = array[0].replace(/[0-9]/g, '') + '0000';
            this.user.lastName = array[1].replace(/[0-9]/g, '') + '000';
        }

        return this.user;
    }
    async parseDatav2(request: RequestDto) {

        let array = request.data.split('000');
        if(array.length > 0) {
            this.user.clientId = array[2];
            this.user.firstName = array[0].replace(/[0-9]/g, '');
            this.user.lastName = array[1].replace(/[0-9]/g, '');
        }
        return this.user;
    }
}

export default new UsersDao();