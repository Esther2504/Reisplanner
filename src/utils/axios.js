import axios from "axios";

const instance = axios.create({
  baseURL: 'https://eb5e-2a02-fe9-c1f-135a-a89a-a08f-3c35-921d.eu.ngrok.io/', 
  headers:{
    "ngrok-skip-browser-warning": "123",
  }
})

export default instance;