import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRouter";

import { lazy } from "react";

const Login = lazy(() => import("../pages/Login"));
const Main = lazy(() => import("../pages/Main"));
const Search = lazy(() => import("../pages/Search/Search"));
const Question = lazy(() => import("../pages/Question"));
const QnA = lazy(() => import("../pages/qna"));
const Onboard = lazy(() => import("../pages/Auth/Onboard"));
const FandomDetail = lazy(() => import("../pages/fandom/FandomDetail"));
const Write = lazy(() => import("../pages/Write"));
const FanQnA = lazy(() => import("../pages/fanQnA"));
const QnAResponseFan = lazy(() => import("../pages/QnAResponse/Fan"));
const QnAResponseToday = lazy(() => import("../pages/QnAResponse/Today"));
const Membership = lazy(() => import("../pages/Membership"));

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 안해도 되는 라우팅 */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />

        <Route path="/search" element={<Search />} />

        <Route path="/question" element={<QnA />} />
        <Route path="/question/fan" element={<FanQnA />} />
        <Route path="/question/fan/response" element={<QnAResponseFan />} />
        <Route path="/question/today/response" element={<QnAResponseToday />} />

        <Route path="/intro" element={<Onboard />} />

        <Route path="/membership" element={<Membership />} />

        <Route path="/fandom/:id" element={<FandomDetail />} />
        <Route path="/write" element={<Write />} />
        <Route path="/question/:id" element={<Question />} />
        <Route element={<PrivateRoute />}>
          <Route path="/login2" element={<Login />} />
          {/* 로그인 해야되는 라우팅 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
