import { Route } from 'react-router-dom'
import { withAuthenticationRequired } from '@auth0/auth0-react'

import LoadingSpinner from '../components/LoadingSpinner'

const ProtectedRoute = ({ component, ...args }) => (
    <Route
        component={withAuthenticationRequired( component,{
            onRedirecting: () => <LoadingSpinner />
        })}
        {...args}
    />
)

export default ProtectedRoute