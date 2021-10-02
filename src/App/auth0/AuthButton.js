import React from 'react'
// authentication & login lib
import { useAuth0 } from '@auth0/auth0-react'

// auth buttons
import LoginButton from './AuthLogin'
import LogoutButton from './AuthLogout'

const AuthButton = () => {
    const { isAuthenticated } = useAuth0()
    // console.log("isAuthenticated",isAuthenticated)
    return isAuthenticated ? <LogoutButton /> : <LoginButton />
}

export default AuthButton