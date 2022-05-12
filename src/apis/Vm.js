import Api from "./Api";
import Csrf from "./Csrf";


export default {
    async getAll() {
        let csrf = await Csrf.getCookie();
        Api.defaults.headers.common.Authorization = 'Bearer ' + localStorage.token;
        localStorage.setItem("csrfToken", csrf);
        return Api.get("/VirtualMachine");
    },

    async store(vm) {
        return Api.post("/VirtualMachine", vm);
    },

    async destroy(vmid) {
        return Api.delete("/VirtualMachine/" + vmid);
    },

    async start(vmid) {
        return Api.post("/VirtualMachine/start/" + vmid);
    },

    async stop(vmid) {
        return Api.post("/VirtualMachine/stop/" + vmid);
    },

    async update(vmid) {
        return Api.put("/VirtualMachine/" + vmid);
    }

}