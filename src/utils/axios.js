import axios from "axios";

const instance = axios.create({
  baseURL: 'https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/departures'
})

export default instance;