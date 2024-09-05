import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import styles from './topNav.module.scss';
function TopNav() {
  return (
    <div className={styles.topnav}>
      FOLLOW US
      <a href='https://www.facebook.com/'>
        <FaFacebookF />
      </a>
      <a href='https://www.linkedin.com/'>
        <FaLinkedinIn />
      </a>
    </div>
  );
}

export default TopNav;
