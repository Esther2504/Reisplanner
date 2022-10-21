import axios from "axios";

const instance = axios.create({
  baseURL: 'https://stoplight.io/mocks/blehteam/bleh-team/101174452/'
})

export default instance;