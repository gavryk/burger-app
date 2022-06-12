import Link from "next/link";
import { FaHamburger } from "react-icons/fa";
import style from '../styles/Header.module.scss'

const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.headerWrapper}>
          <a href="/" className={style.logo}>
            <FaHamburger />
            <span>BurgerApp</span>
          </a>
          <nav className={style.navigation}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/reviews"><a>Reviews</a></Link>
            <Link href="/burgers"><a>Burgers</a></Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
