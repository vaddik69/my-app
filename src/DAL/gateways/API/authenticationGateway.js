import { AuthenticationTokens } from "../../../entity/authenticationTokens"
import { HTTPClient } from '../../clients/APIClient'
import { BaseGateway } from "./baseGateway"

class AuthenticationGateway {
    static #endpointFamilyURL = BaseGateway.getBaseURL() + '/auth'

    static signIn = async (userCredential) => {
        const loginURL = this.#endpointFamilyURL + '/login'
        const response = await HTTPClient.POST(loginURL, userCredential)

        if (response.data && response.data.access_token) {
            AuthenticationTokens.setTokens(response.data.access_token, response.data.refresh_token)
        } else {
            return response
        }
    }

    static signOut = async (token) => {
        const logoutURL = this.#endpointFamilyURL + '/logout'
        HTTPClient.POST(logoutURL, {}, token)
    }
}
export { AuthenticationGateway }