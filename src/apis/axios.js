import axios from "axios";

// axios.interceptors.response.use(undefined, error =>{
//     console.log(error);
// })

export default axios.create({
    baseURL: "https://localhost:7006/api/"
});

