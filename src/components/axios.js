import axios from 'axios'

const instance = axios.create({
    baseURL:"http://localhost:5001/blingbling-b2ccb/us-central1/api" // api url (cloud function url)
})

export default instance