import { BrowserStorage } from "../../clients/browserStorageClient";

class AuthenticationTokenGateway {
    static setToken = (token, tokenKey) => {
        BrowserStorage.setItem(token, tokenKey)
    }

    static getToken = (token) => {
        BrowserStorage.getItem(token)
    }

    static removeToken = (token) => {
        BrowserStorage.removeItem(token)
    }
}
export { AuthenticationTokenGateway }