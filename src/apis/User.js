import Api from "./Api";
import Csrf from "./Csrf";

export default {
    async login(form){
        await Csrf.getCookie();
        var response = await Api.post("/login", form);
        localStorage.setItem("token", response.data.data.token);
        return response;
    },

    async logout(){
        await Csrf.getCookie();
        return Api.post("/logout");
    }, 

    auth(){
        Api.defaults.headers.common.Authorization = 'Bearer '+localStorage.token;
        return Api.get("/user");
    }
}