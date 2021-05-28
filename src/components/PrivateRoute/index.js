import { Route, Redirect } from 'react-router-dom'
import { useAuthContext } from '../Firebase/context'

const PrivateRoute = ({component: Component, ...rest}) => {
    const { currentUser } = useAuthContext()

    return (
        <Route 
            {...rest}
            render={ props => currentUser ? <Component {...props} /> : <Redirect to="/signin"/> }        
        />
    )
}

export default PrivateRoute