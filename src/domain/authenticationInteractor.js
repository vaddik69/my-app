import { AuthenticationGateway } from "../DAL/gateways/API/authenticationGateway"
import { AuthenticationRoleGateway } from "../DAL/gateways/browser/authenticationRoleStorageGateway"
import { AuthenticationTokenGateway } from "../DAL/gateways/browser/authenticationTokenStorageGateway"
import { AuthenticationTokens } from "../entity/authenticationTokens"
import { UserCredential } from "../entity/userCredential"
import { UserRoles } from "../entity/userRoles"

class AuthenticationInteractor {
    static authenticate = async (email, password, role) => {
        let userCredential = UserCredential.findByCredentials(email, password, role)
        if (!userCredential) {
            userCredential = new UserCredential(email, password, role)
        }

        const error = await AuthenticationGateway.signIn(userCredential.getUserCredential())
        console.log(UserCredential.getAllCredentials())
        if (!error) {
            AuthenticationTokenGateway.setToken(AuthenticationTokens.tokenKeys.ACCESS_TOKEN, AuthenticationTokens.getAccessToken())
            AuthenticationTokenGateway.setToken(AuthenticationTokens.tokenKeys.REFRESH_TOKEN, AuthenticationTokens.getRefresfToken())

            AuthenticationRoleGateway.setRole(UserRoles.roles.USER_ROLE, role)
        } else {
            userCredential.removeUserCredential()
            return error
        }
    }

    static logoutUser = async () => {
        const token = AuthenticationTokenGateway.getToken(AuthenticationTokens.tokenKeys.ACCESS_TOKEN)
        if (!token) return;

        AuthenticationGateway.signOut(token)

        AuthenticationTokenGateway.removeToken(AuthenticationTokens.tokenKeys.ACCESS_TOKEN)
    }

    static getAccessToken = () => {
        const token = AuthenticationTokenGateway.getToken(AuthenticationTokens.tokenKeys.ACCESS_TOKEN)
        return token
    }

    static getUserRole = () => {
        const role = AuthenticationRoleGateway.getRole(UserRoles.roles.USER_ROLE)
        return role
    }
}
export { AuthenticationInteractor }