import { AuthenticateInteractor } from "../../DOMAIN/authenticationInteractor"
import { Navigate, Outlet } from 'react-router-dom';
import { UserRole } from "../../entity/userRoles";
import { RoutesConfig } from "./routesConfig";

const AuthenticationRoute = () => {
    const { token, role } = AuthenticateInteractor.gettingParamsNavigation()

    if (!token) {
        if (role === UserRole.roles.MLO) {
            return <Navigate to={RoutesConfig.routes.SIGNIN} />
        }
        if (role === UserRole.roles.ADMIN) {
            return <Navigate to={RoutesConfig.routes.ADMIN_SIGNIN} />
        }
    } else {
        return <Outlet />
    }
}
export default AuthenticationRoute