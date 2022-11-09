import React from 'react'
import {useAuth} from "../context/AuthContext";
import LogIn from "./login";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuth()

    return <>{user ? children : <LogIn/>}</>
}

export default ProtectedRoute