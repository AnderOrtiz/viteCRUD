

export class User {

    /**
     * 
     * @param {like<User>} userDataLike 
     */
    constructor({id, isactive, balance, avatar, firstName, lastName, gender}){
        this.id = id;
        this.isactive = isactive;
        this.balance = balance;
        this.avatar = avatar;
        this.firstName = firstName;
        this. lastName = lastName;
        this.gender = gender;

    }
}