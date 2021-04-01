import axios from "axios";
import CustomersAPI from "./customersAPI";

function logout() {
    window.localStorage.removeItem("authToken");
    delete axios.defaults.headers["Authorization"];
   
}

function authenticate(credentials) {
    return axios.post("http://localhost:8000/api/login_check", credentials)
        .then(response => response.data.token)
        .then(token => {
            // Je stocke le token dans mon localStorage
            window.localStorage.setItem("authToken", token)
            //On prévient Axios qu'on a maintenant un header par défaut sur toutes nos futures requêtes HTTP
            axios.defaults.headers["Authorization"] = "Bearer " + token;

        });
}



export default {
    authenticate,
    logout
};