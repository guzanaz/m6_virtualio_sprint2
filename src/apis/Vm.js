import Api from "./Api";
import Csrf from "./Csrf";


export default {
     async getAll(){
        let csrf = await Csrf.getCookie();
        Api.defaults.headers.common.Authorization = 'Bearer '+ localStorage.token;
        localStorage.setItem("csrf", csrf );
        return Api.get("/VirtualMachine");
    }
}