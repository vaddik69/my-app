import { Token } from "../../../entity/tokens"
import api from "../../clients/HTTPClient"
import { Error } from "../../../entity/errors"
import { UserCredential } from "../../../entity/userCredential"

class AuthenticationGateway {
    static authenticationSignIn = async () => {
        try {
            const response = await api.post('/login', UserCredential.getUserCredential())
            // console.log('/login', UserCredential.getUserCredential())
            // console.log(response.data)
            if (response.data && response.data.access_token) {
                Token.setTokens(response.data.access_token, response.data.refresh_token)
            } else {
                return Error.errorKeys.MISSING_TOKEN
            }
        } catch (error) {
            console.error(error)
            return Error.errorKeys.NOT_AUTHENTICATED
        }
    }

    static authenticationSignOut = async (token) => {
        try {
            await api.post('/logout',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
        } catch (error) {
            console.error(error)
        }
    }
}
export { AuthenticationGateway }