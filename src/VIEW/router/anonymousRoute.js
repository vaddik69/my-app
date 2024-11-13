import { AuthenticateInteractor } from "../../DOMAIN/authenticationInteractor"
import { Navigate, Outlet } from 'react-router-dom';
import { UserRole } from "../../entity/userRoles";
import { RoutesConfig } from "./routesConfig";

const AnonymousRoute = () => {
    const { token, role } = AuthenticateInteractor.gettingParamsNavigation()

    if (role === UserRole.roles.MLO) {
        return token ? <Navigate to={RoutesConfig.routes.DASHBOARD} replace /> : <Outlet />
    } 
    else if (role === UserRole.roles.ADMIN) {
        return token ? <Navigate to={RoutesConfig.routes.ADMIN_DASHBOARD} replace /> : <Outlet />
    }

    return <Outlet />

}
export default AnonymousRoute