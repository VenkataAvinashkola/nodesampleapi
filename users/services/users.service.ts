import UsersDao from '../daos/users.dao';
import {CRUD} from "../../common/interfaces/crud.interface";
import {UserDto} from "../dto/user.dto";
import {RequestDto} from "../dto/request.dto";

class UsersService implements CRUD {

    async parsev1(resource: RequestDto) {
        return UsersDao.parseDatav1(resource);
    }
    async parsev2(resource: RequestDto) {
        return UsersDao.parseDatav2(resource);
    }


}

export default new UsersService();