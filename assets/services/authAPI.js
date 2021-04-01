import axios from "axios";


function authenticate(credentials) {
    return axios.post("http://localhost:8000/api/login_check", credentials)
        .then(response => response.data.token)
        .then(token => {
            // Je stocke le token dans mon localStorage
            window.localStorage.setItem("authToken", token)
            //On prévient Axios qu'on a maintenant un header par défaut sur toutes nos futures requêtes HTTP
            axios.defaults.headers["Authorization"] = "Bearer " + token;

            return true;

        })
}

export default {
    authenticate
};