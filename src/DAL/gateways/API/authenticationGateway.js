import { AuthenticationTokens } from "../../../entity/authenticationTokens"
import { URLPaths } from "../../../entity/URLPaths"
import { HTTPClient } from '../../clients/HTTPClient'

class AuthenticationGateway {
    static signIn = async (userCredential) => {
        const response = await HTTPClient.POST(URLPaths.paths.auth.login, userCredential)

        if (response.data && response.data.access_token) {
            AuthenticationTokens.setTokens(response.data.access_token, response.data.refresh_token)
        } else {
            return response
        }
    }

    static signOut = async (token) => {
        HTTPClient.POST(URLPaths.paths.auth.logout, {}, token)
    }
}
export { AuthenticationGateway }