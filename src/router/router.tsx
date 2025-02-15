import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRouter";

import { lazy } from "react";

const Login = lazy(() => import("../pages/Login"))

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 안해도 되는 라우팅 */}
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
        <Route path="/login2" element={<Login />} />
          {/* 로그인 해야되는 라우팅 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
