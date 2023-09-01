import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

console.log(auth,'auth')
    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/shikshak-admin/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/shikshak-admin/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;
