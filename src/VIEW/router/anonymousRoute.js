import { AuthenticateInteractor } from "../../DOMAIN/authenticationInteractor"
import { Navigate, Outlet } from 'react-router-dom';
import { UserRole } from "../../entity/userRoles";
import { RoutesConfig } from "./routesConfig";

const AnonymousRoute = () => {
    const { token, role } = AuthenticateInteractor.gettingParamsNavigation()

    if (token) {
        if (role === UserRole.roles.MLO) {
            return <Navigate to={RoutesConfig.routes.DASHBOARD} />
        }
        if (role === UserRole.roles.ADMIN) {
            return <Navigate to={RoutesConfig.routes.ADMIN_DASHBOARD} />
        }
    } else {
        return <Outlet />
    }
}
export default AnonymousRoute