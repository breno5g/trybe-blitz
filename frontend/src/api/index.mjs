import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:3001'
});

// instance.post('/user/login', {
//   email: 'bola8@gmail.com',
//   password: 'vaiRolarLilFarm?'
// }).then((res) => console.log(res.data));