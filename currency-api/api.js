
import axios from 'axios';

export default axios.create({
  baseURL: 'http://data.fixer.io/api',
  params: {
    access_key: 'e95125049d4562dbcb38543e739aca37',
    base: 'EUR',
  },
});
