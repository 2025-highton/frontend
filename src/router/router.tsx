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
const FanQnA = lazy(() => import("../pages/fanQnA"));
const QnAResponseFan = lazy(() => import("../pages/QnAResponse/Fan"));
const QnAResponseToday = lazy(() => import("../pages/QnAResponse/Today"));
const Membership = lazy(() => import("../pages/Membership"));
const Signup = lazy(() => import("../pages/Signup"));
const MembershipConfirm = lazy(() => import("../pages/Membership/confirm"));
const SignupConfirm = lazy(() => import("../pages/SignupConfirm"));

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 안해도 되는 라우팅 */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Main />} />
        <Route path="/intro" element={<Onboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/question/today/response" element={<QnAResponseToday />} />
        <Route path="/question" element={<QnA />} />
        <Route path="/question/fan" element={<FanQnA />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/membership/confirm" element={<MembershipConfirm />} />
        <Route path="/signup/confirm" element={<SignupConfirm />} />

        <Route path="/fandom/:id" element={<FandomDetail />} />
        <Route path="/question/:id" element={<Question />} />
        <Route path="/question/fan/response/:id" element={<QnAResponseFan />} />

        <Route element={<PrivateRoute />}>{/* 로그인 해야되는 라우팅 */}</Route>
      </Routes>
    </BrowserRouter>
  );
}
