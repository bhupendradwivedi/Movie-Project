import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODc2NGM0ZjUyYjg0OTVhMDQ2MDBlYmJmYWFlZmQ5MCIsIm5iZiI6MTc0ODQyMDY2Mi4xNzI5OTk5LCJzdWIiOiI2ODM2YzgzNjQyZThhNGQyZGYyYjgwNjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.d8dcn5m3JWPppQlF8gPd2z62eLIIFSSsoc_0FtlYjKk'
  }
});

export default instance;
