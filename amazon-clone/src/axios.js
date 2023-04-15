import axios from "axios";
// axios -  fetching library - allows to interact with api

const instance = axios.create({
    //The API (Cloud function) URL
    baseURL: 'http://localhost:5001/clone-f246b/us-central1/api' 
});

export default instance;