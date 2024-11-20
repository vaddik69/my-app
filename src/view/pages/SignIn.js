import SignInForm from "../components/SignInForm"
import { RoutesConfig } from "../router/routesConfig"
import { UserRoles } from "../../entity/userRoles"
import { flushSync } from 'react-dom';
import { useState } from "react";
import { Errors } from "../../entity/errors";
import { useNavigate } from 'react-router-dom'
import { AuthenticationInteractor } from "../../domain/authenticationInteractor";

const SignIn = () => {
    const navigate = useNavigate()
    const [errorKey, setErrorKey] = useState(Errors.getError())

    const handleUserSigningIn = async (email, password) => {
        flushSync(() => {
            setErrorKey(Errors.getError())
        })

        const error = await AuthenticationInteractor.authenticate(email, password, UserRoles.roles.MLO);
        if (!error) {
            navigate(RoutesConfig.routes.DASHBOARD)
        } else {
            setErrorKey(error)
        }
    }

    return (
        <div>
            <SignInForm
                linkPath={RoutesConfig.routes.ADMIN_SIGNIN}
                userRole={UserRoles.roles.ADMIN}
                onUserSigningIn={handleUserSigningIn}
                errorKey={errorKey}
            />
        </div>
    )
}
export default SignIn