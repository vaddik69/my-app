import { AuthenticateInteractor } from "../../DOMAIN/authenticationInteractor"
import Header from "../components/Header"
import { useNavigate } from 'react-router-dom'
import { RoutesConfig } from "../router/routesConfig"

const AdminDashboard = () => {
    const navigate = useNavigate()

    const handleUserSigningOut = () => {
        AuthenticateInteractor.logoutUser();

        navigate(RoutesConfig.routes.ADMIN_SIGNIN)
    }

    return (
        <Header 
            title={'Admin Dashboard'}
            onUserSigningOut={handleUserSigningOut}
        />
    )
}
export default AdminDashboard