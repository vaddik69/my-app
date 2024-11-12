import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AuthenticationRoute from './authenticationRoute'
import AnonymousRoute from './anonymousRoute'
import { RoutesConfig } from './routesConfig'
import SignIn from '../pages/SignIn'
import AdminSignIn from '../pages/AdminSignIn'
import Dashboard from '../pages/Dashboard'
import AdminDashbaord from '../pages/AdminDashboard'

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                {/* <Route element={ <AnonymousRoute /> }> */}
                    <Route path={ RoutesConfig.routes.SIGNIN } element={ <SignIn /> }/>
                    <Route path={ RoutesConfig.routes.ADMIN_SIGNIN } element={ <AdminSignIn /> } />
                {/* </Route> */}

                {/* <Route element={ <AuthenticationRoute /> }> */}
                    <Route path={ RoutesConfig.routes.DASHBOARD } element={ <Dashboard /> } />
                    <Route path={ RoutesConfig.routes.ADMIN_DASHBOARD } element={ <AdminDashbaord /> } />
                {/* </Route> */}

                <Route path='*' element={ <Navigate to={ RoutesConfig.routes.SIGNIN } /> } />
            </Routes>
        </Router>
    )
}
export default AppRouter