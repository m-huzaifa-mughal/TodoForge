import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://api.freeapi.app/api/v1/users/register',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
  data: {
    email: 'user.email@domain.com',
    password: 'test@123',
    role: 'ADMIN',
    username: 'doejohn'
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}

function Register() {
    return (
        

    )};