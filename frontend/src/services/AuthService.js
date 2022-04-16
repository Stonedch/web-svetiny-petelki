import api from 'http';

export default class AuthService {
    static async login(email, password) {
        return api.post('auth/login/', {email, password});
    }

    static async registration(email, username, password) {
        return api.post('auth/registration/', {email, username, password});
    }
}

