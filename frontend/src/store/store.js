import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthService';

export default class Store {
    user = {};
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(isAuth) {
        this.isAuth = isAuth;
    }

    setUser(user) {
        this.user = user;
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem('access', response.data.access);
            localStorage.setItem('refresh', response.data.access);
            this.setAuth(true);
            this.setUser(response.data.user);
            return response
        } catch (e) {
            console.error(e.response?.data?.message);
        }
    }

    async registration(email, username, password) {
        try {
            const response = await AuthService.registration(email, username, password);
            localStorage.setItem('access', response.data.access);
            localStorage.setItem('refresh', response.data.access);
            this.setAuth(true);
            this.setUser(response.data.user);
            return response
        } catch (e) {
            console.error(e.response?.data?.message);
        }
    }

    async logout() {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        this.setAuth(false);
        this.set();
    }
}

