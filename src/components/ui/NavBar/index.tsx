import { Link } from "react-router-dom";
import s from "./style.module.scss";

import { MdHome } from "react-icons/md";

export default function NavBar() {
  return (
    <>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li>
            <Link to="/login" className={s.link}>
              <MdHome size={26} />
              <span>로그인</span>
            </Link>
          </li>
          <li>
            <Link to="/intro" className={s.link}>
              Onboard
            </Link>
          </li>

          <li>
            <button className={s.centerButton}>가운데</button>
          </li>
          <li>
            <Link to="/intro" className={s.link}>
              Onboard
            </Link>
          </li>
          <li>
            <Link to="/fandom/1" className={s.link}>
              FandomDetail
            </Link>
          </li>
        </ul>
      </nav>
      <div className={s.line}></div>
    </>
  );
}
