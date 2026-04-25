import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.freeapi.app/api/v1/users/register', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

