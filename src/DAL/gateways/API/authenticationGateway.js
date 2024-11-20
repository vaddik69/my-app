import { AuthenticationTokens } from "../../../entity/authenticationTokens"
import { PathsURL } from "../../../entity/pathsURL"
import { HTTPClient } from '../../clients/HTTPClient'

class AuthenticationGateway {
    static signIn = async (userCredential) => {
        const response = await HTTPClient.POST(PathsURL.paths.auth.login, userCredential)

        if (response.data && response.data.access_token) {
            AuthenticationTokens.setTokens(response.data.access_token, response.data.refresh_token)
        } else {
            return response
        }
    }

    static signOut = async (token) => {
        HTTPClient.POST(PathsURL.paths.auth.logout, {}, token)
    }
}
export { AuthenticationGateway }