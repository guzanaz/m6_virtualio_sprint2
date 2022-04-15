import axios from "axios";

let Api= axios.create({
    baseURL:"http://localhost:8000/api",
    headers: {
        'Access-Control-Allow-Origin': 'true',
      }
});

Api.defaults.withCredentials = true;
export default Api;
