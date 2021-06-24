import axios from 'axios';
const API = axios.create({ baseURL: 'http://geodb-free-service.wirefreethought.com' });
export default API;