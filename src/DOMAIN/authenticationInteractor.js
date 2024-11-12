import { AuthenticationGateway } from "../DAL/gateways/API/authenticationGateway"
import { AuthenticationRoleGateway } from "../DAL/gateways/browser/authenticationRoleStorageGateway"
import { AuthenticationTokenGateway } from "../DAL/gateways/browser/authenticationTokenStorageGateway"
import { Token } from "../entity/tokens"
import { UserCredential } from "../entity/userCredential"
import { UserRole } from "../entity/userRoles"

class AuthenticateInteractor {
    static authenticate = async (email, password, role) => {
        const userCredential = new UserCredential()
        userCredential.setUserCredential(email, password, role)

        const error = await AuthenticationGateway.authenticationSignIn(userCredential)
        if (!error) {
            AuthenticationTokenGateway.setToken(Token.tokenKeys.ACCESS_TOKEN, Token.getAccessToken())
            AuthenticationTokenGateway.setToken(Token.tokenKeys.REFRESH_TOKEN, Token.getRefresfToken())

            AuthenticationRoleGateway.setRole(UserRole.roles.USER_ROLE, role)
        } else {
            return error
        }
    }

    static logoutUser = async () => {
        const token = AuthenticationTokenGateway.getToken(Token.tokenKeys.ACCESS_TOKEN)
        if (!token) return;

        AuthenticationGateway.authenticationSignOut(token)

        AuthenticationTokenGateway.removeToken(Token.tokenKeys.ACCESS_TOKEN)
    }

    static gettingParamsNavigation = () => {
        const token = AuthenticationTokenGateway.getToken.ACCESS_TOKEN
        const role = AuthenticationRoleGateway.getRole.USER_ROLE

        return { token, role }
    }
}
export { AuthenticateInteractor }