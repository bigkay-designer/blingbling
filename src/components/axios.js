import axios from 'axios'

const instance = axios.create({
    baseURL:"https://us-central1-blingbling-b2ccb.cloudfunctions.net/api" // api url (cloud function url)
})

export default instance