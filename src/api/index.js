import axios from 'axios';
import store from '../store';
import { setInterceptors } from './common/interceptors';

function createInstance() {
  const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
      Authorization: store.state.token,
    },
  });
  return setInterceptors(instance);
}
const instance = createInstance();

function registerUser(userData) {
  // const url = 'http://localhost:3000/signup';
  //  axios.post(url, userData);
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}
export { registerUser, loginUser };
