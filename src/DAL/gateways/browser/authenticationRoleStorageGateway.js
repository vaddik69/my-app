import { BrowserStorage } from "../../clients/browserStorageClient";

class AuthenticationRoleGateway {
    static setRole = (userRole, role) => {
        BrowserStorage.setItem(userRole, role)
    }

    static getRole = (userRole) => {
        BrowserStorage.getItem(userRole)
    }

    static removeRole = (userRole) => {
        BrowserStorage.removeItem(userRole)
    }
}
export { AuthenticationRoleGateway }