export class UserModel {
    constructor(
        public id: String,
        public firstName: String,
        public lastName: String,
        public email: String,
        public password: String,
        public phone: Number
    ) { }
}