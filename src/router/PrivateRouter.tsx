import { Navigate, Outlet } from 'react-router'

const PrivateRoute = () => {
    // TODO: 로그인 여부 확인
    const isAuthenticated = false;

    if (!isAuthenticated) {
        //TODO: 로직 구현
        alert('로그인 후 이용이 가능합니다')
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute