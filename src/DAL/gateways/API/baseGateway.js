class BaseGateway {
    static #baseURL = 'https://dev.api.valoaneducator.tv/v1'

    static getBaseURL = () => { return this.#baseURL }
} 
export { BaseGateway }