import { AuthenticationInteractor } from "../../domain/authenticationInteractor"
import Header from "../components/Header"
import { useNavigate } from 'react-router-dom'
import { RoutesConfig } from "../router/routesConfig"

const Dashboard = () => {
    const navigate = useNavigate()

    const handleUserSigningOut = () => {
        AuthenticationInteractor.logoutUser();

        navigate(RoutesConfig.routes.SIGNIN)
    }

    return (
        <Header 
            title={'Dashboard'}
            onUserSigningOut={handleUserSigningOut}
            linkTitle={'Dashboard'}
            linkPath={RoutesConfig.routes.DASHBOARD}
        />
    )
}
export default Dashboard