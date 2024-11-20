import axios from 'axios';
import { Errors } from '../../entity/errors'

class HTTPClient {
    static #api = axios.create({
        baseURL: 'https://dev.api.valoaneducator.tv/v1'
    });

    static POST = async (path, data = {}, token = null) => {
        try {
            const headers = token ? { Authorization: `Bearer ${token}` } : {}

            const response = await this.#api.post(path, data, { headers })
            return response
        } catch (error) {
            console.error(error)
            return Errors.errorKeys.NOT_AUTHENTICATED
        }
    }
}
export { HTTPClient };