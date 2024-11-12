import SignInForm from "../components/SignInForm"
import { RoutesConfig } from "../router/routesConfig"
import { UserRole } from "../../entity/userRoles"
import { flushSync } from 'react-dom';
import { useState } from "react";
import { Error } from "../../entity/errors";
import { useNavigate } from 'react-router-dom'
import { AuthenticateInteractor } from "../../DOMAIN/authenticationInteractor";

const AdminSignIn = () => {
    const navigate = useNavigate()
    const [errorKey, setErrorKey] = useState(Error.getError())

    const handleUserSigningIn = async (email, password) => {
        flushSync(() => {
            setErrorKey(Error.getError())
        })

        const error = await AuthenticateInteractor.authenticate(email, password, UserRole.roles.ADMIN);
        if (!error) {
            navigate(RoutesConfig.routes.ADMIN_DASHBOARD)
        } else {
            setErrorKey(error)
        }
    }

    return (
        <div>
            <SignInForm
                linkPath={RoutesConfig.routes.SIGNIN}
                userRole={UserRole.roles.MLO}
                onUserSigningIn={handleUserSigningIn}
                errorKey={errorKey}
            />
        </div>
    )
}
export default AdminSignIn