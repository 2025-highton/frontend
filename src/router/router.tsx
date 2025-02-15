import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRouter";

import { lazy } from "react";
import Onboard from "@/pages/Auth/Onboard";

const Login = lazy(() => import("../pages/Login"));
const Main = lazy(() => import("../pages/Main"));
const Search = lazy(() => import("../pages/Search/Search"));
const FandomDetail = lazy(() => import("../pages/fandom/FandomDetail"));
const Write = lazy(() => import("../pages/Write"));

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 안해도 되는 라우팅 */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/intro" element={<Onboard />} />
        <Route path="/fandom/:id" element={<FandomDetail />} />
        <Route path="/write" element={<Write />} />
        <Route element={<PrivateRoute />}>
          <Route path="/login2" element={<Login />} />
          {/* 로그인 해야되는 라우팅 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
