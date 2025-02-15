import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRouter";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 안해도 되는 라우팅 */}
        <Route element={<PrivateRoute />}>
          {/* 로그인 해야되는 라우팅 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
