import {User} from '../models/user.js';

/**
 * 
 * @param {Like<User>} localhostUser 
 * @returns {User}
 */
export const localhostUserToModel = (localhostUser) => {

    const {
        avatar,
        balance,
        first_name,
        gender,
        id,
        isactive,
        last_name
    } = localhostUser

    return new User ({
        avatar,
        balance,
        firstName:first_name,
        gender,
        id,
        isactive,
        lastName: last_name,
    })

}