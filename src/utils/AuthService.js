import axios from 'axios';
const BASE_URL_API = 'http://192.168.43.235:8080/EMSMain/main';
class AuthService {
    login(credentials) {
        console.log("login")
        return axios.post(BASE_URL_API + "/studentlogin", credentials);
    }

    logOut() {
        localStorage.removeItem('token');
    }

    isAuthenticated() {
        console.log(localStorage.getItem("token") !== null);
        return localStorage.getItem("token") !== null;
    }
}

export default new AuthService();