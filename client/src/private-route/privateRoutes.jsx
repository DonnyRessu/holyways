import { useContext } from "react"
import { UserContext } from "../context/userContext"
import { Navigate, Outlet } from "react-router-dom"

export const PrivateRouteLogin = () => {
    const [userState] = useContext(UserContext)

    if (!userState.isLogin) {
        // return <Navigate to="/" />
        return <Outlet/>;
    }

    return <Outlet/>;
}