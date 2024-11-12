class Token {
    static #tokens = {
        access_token: '',
        refresh_token: '',
    }

    static tokenKeys = {
        ACCESS_TOKEN: 'access_token',
        REFRESH_TOKEN: 'refresh_token',
    }

    static setTokens = (access_token, refresh_token) => {
        this.#tokens = { access_token, refresh_token }
    }

    static setAccessToken = (access_token) => {
        this.#tokens.access_token = access_token
    }

    static setRefresfToken = (refresh_token) => {
        this.#tokens.refresh_token = refresh_token
    }

    static getTokens = () => {
        return this.#tokens
    }

    static getAccessToken = () => {
        return this.#tokens.access_token
    }

    static getRefresfToken = () => {
        return this.#tokens.refresh_token
    }
}
export { Token }