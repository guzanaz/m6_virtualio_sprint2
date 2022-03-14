import Api from "./Api";
import Csrf from "./Csrf";

export default {
    async login (form){
        await Csrf.getCookie();
        return Api.post("/login", form);
    }
}