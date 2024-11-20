import { AuthenticationInteractor } from "../../domain/authenticationInteractor"
import { Navigate, Outlet } from 'react-router-dom';
import { UserRoles } from "../../entity/userRoles";
import { RoutesConfig } from "./routesConfig";

const AnonymousRoute = () => {
    const token = AuthenticationInteractor.getAccessToken()
    const role = AuthenticationInteractor.getUserRole()

    if (role === UserRoles.roles.MLO) {
        return token ? <Navigate to={RoutesConfig.routes.DASHBOARD} replace /> : <Outlet />
    } 
    else if (role === UserRoles.roles.ADMIN) {
        return token ? <Navigate to={RoutesConfig.routes.ADMIN_DASHBOARD} replace /> : <Outlet />
    }

    return <Outlet />
}
export default AnonymousRoute