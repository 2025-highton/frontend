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
            <button className={s.centerButton}>
              <Bubble />
            </button>
          </li>
          <li>
            <Link to="/fandom/1" className={s.link}>
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
