import { AuthenticateInteractor } from "../../DOMAIN/authenticationInteractor"
import { Navigate, Outlet } from 'react-router-dom';
import { UserRole } from "../../entity/userRoles";
import { RoutesConfig } from "./routesConfig";

const AuthenticationRoute = () => {
    const { token, role } = AuthenticateInteractor.gettingParamsNavigation()
    
    if (role === UserRole.roles.MLO) {
        return token ? <Outlet /> : <Navigate to={RoutesConfig.routes.SIGNIN} />
    } 
    else if (role === UserRole.roles.ADMIN) {
        return token ? <Outlet /> : <Navigate to={RoutesConfig.routes.ADMIN_SIGNIN} />
    }

    return <Navigate to={RoutesConfig.routes.SIGNIN} />;
}
export default AuthenticationRoute