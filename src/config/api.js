const ENV = import.meta.env.VITE_ENV;

const ENDPOINT = {
    dev: 'http://localhost:3000'
    // dev: 'https://link-node.onrender.com/'
}
console.log(ENV)
const BASE_URL = ENDPOINT.dev;

export default BASE_URL;