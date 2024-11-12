import { AuthenticateInteractor } from "../../DOMAIN/authenticationInteractor"
import Header from "../components/Header"
import { useNavigate } from 'react-router-dom'
import { RoutesConfig } from "../router/routesConfig"

const Dashboard = () => {
    const navigate = useNavigate()

    const handleUserSigningOut = () => {
        AuthenticateInteractor.logoutUser();

        navigate(RoutesConfig.routes.SIGNIN)
    }

    return (
        <Header 
            title={'Dashboard'}
            onUserSigningOut={handleUserSigningOut}
        />
    )
}
export default Dashboard