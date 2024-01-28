import axios from 'axios';

export default axios.create({
    baseURL:'https://aeb7-27-96-194-65.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});