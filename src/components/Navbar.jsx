import { Link, useNavigate } from 'react-router-dom';
import styles from './navbar.module.css';
import Logo from './Logo';
import ChangeLanguage from './ChangeLanguage';
import NotifactionNav from './NotifactionNav';
import FavoriteNav from './FavoriteNav';
import CartNav from './CartNav';
import UserNav from './UserNav';
import MenuBtnNav from './MenuBtnNav';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((store) => store.user);

  // adding the states
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.navleft}>
        <Logo />
        <ul
          className={`${styles.links} ${styles.navMenu} ${
            isActive ? styles.active : ''
          }`}
        >
          <li onClick={removeActive}>
            <Link to='/home'>home</Link>
          </li>
          <li onClick={removeActive}>
            <Link to='/dailyoffers'>daily offers</Link>
          </li>
          <li onClick={removeActive}>
            {/* <Link to='/aboutus'>about us</Link> */}
            <a href='#aboutSection'>about us</a>
          </li>
          <li onClick={removeActive}>
            {/* <Link to='/menuSection'>our menu</Link> */}
            <a href='#menuSection'>our menu</a>
          </li>
          <li onClick={removeActive}>
            {/* <Link to='/location'>location</Link> */}
            <a href='#locationSection'>location</a>
          </li>
          <li onClick={removeActive}>
            <Link to='/contactus'>contact us</Link>
          </li>
          <ChangeLanguage />
        </ul>
        {/* <div
          className={`${styles.hamburger} ${isActive ? styles.active : ''}`}
          onClick={toggleActiveClass}
        >
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
        </div> */}
      </div>
      <div className={styles.navright}>
        {isAuthenticated ? (
          <>
            <NotifactionNav />
            <CartNav />
            <FavoriteNav />
            <UserNav />
            <MenuBtnNav />
          </>
        ) : (
          <div className={styles.btnReg}>
            <button
              className={styles.signUp}
              onClick={() => navigate('/signup')}
            >
              sign up
            </button>
            <button className={styles.logIn} onClick={() => navigate('/login')}>
              log in
            </button>
          </div>
        )}
      </div>
      <div
        className={`${styles.hamburger} ${isActive ? styles.active : ''}`}
        onClick={toggleActiveClass}
      >
        <span className={`${styles.bar}`}></span>
        <span className={`${styles.bar}`}></span>
        <span className={`${styles.bar}`}></span>
      </div>
    </nav>
  );
}

export default Navbar;
