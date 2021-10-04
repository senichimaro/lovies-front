import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'
import { useHistory } from 'react-router'


const AuthProviderWrapper = ({ children }) => {
    // auth0 keys
    const domain = process.env.REACT_APP_AUTH0_DOMAIN
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

    // url history
    const history = useHistory()

    // component callback
    const onRedirectCallback = ( appState ) => {
        history.push( appState?.returnTo || window.location.pathname )
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            // redirectUri={window.location.origin}
            redirectUri={`https://senichimaro.github.io/lovies/#/`}
            onRedirectCallback={onRedirectCallback}
        >
            { children }
        </Auth0Provider>
    )
}

export default AuthProviderWrapper