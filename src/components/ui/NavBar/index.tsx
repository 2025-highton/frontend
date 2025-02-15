import { Link } from "react-router-dom";
import s from "./style.module.scss";

import Bubble from "@/components/icon/bubble";
import Home from "@/components/icon/home";
import Profile from "@/components/icon/profile";

export default function NavBar() {
  return (
    <>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li>
            <Link to="/login" className={s.link}>
              <Home />
            </Link>
          </li>

          <li>
            <button className={s.centerButton}>
              <Bubble />
            </button>
          </li>
          <li>
            <Link to="/fandom/1" className={s.link}>
              <Profile />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
