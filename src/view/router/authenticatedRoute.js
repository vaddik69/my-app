import { AuthenticationInteractor } from "../../domain/authenticationInteractor"
import { Navigate, Outlet } from 'react-router-dom';
import { UserRoles } from "../../entity/userRoles";
import { RoutesConfig } from "./routesConfig";

const AuthenticatedRoute = () => {
    const token = AuthenticationInteractor.getAccessToken()
    const role = AuthenticationInteractor.getUserRole()
    
    if (role === UserRoles.roles.MLO) {
        return token ? <Outlet /> : <Navigate to={RoutesConfig.routes.SIGNIN} />
    } 
    else if (role === UserRoles.roles.ADMIN) {
        return token ? <Outlet /> : <Navigate to={RoutesConfig.routes.ADMIN_SIGNIN} />
    }

    return <Navigate to={RoutesConfig.routes.SIGNIN} />;
}
export default AuthenticatedRoute