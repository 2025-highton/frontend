import { Link, useLocation } from "react-router-dom";
import s from "./style.module.scss";

import Bubble from "@/components/icon/bubble";
import Home from "@/components/icon/home";
import Profile from "@/components/icon/profile";

export default function NavBar() {
  const { pathname } = useLocation();

  return (
    <>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li>
            <Link to="/" className={s.link}>
              <Home color={pathname === "/" ? "#BF3131" : undefined} />
            </Link>
          </li>
          <li>
            <Link to={"/question"}>
              <button className={s.centerButton}>
                <Bubble />
              </button>
            </Link>
          </li>
          <li>
            <Link to="/membership" className={s.link}>
              <Profile
                color={pathname === "/profile" ? "#BF3131" : undefined}
              />
            </Link>
          </li>
        </ul>
      </nav>
      <div className={s.line}></div>
    </>
  );
}
