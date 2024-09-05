import { useSelector } from 'react-redux';

import BellIcon from './icons/BellIcon';

// import styles from './navbar.module.css';
import styles from './cartl.module.scss';

function NotifactionNav() {
  const { user } = useSelector((store) => store.user);
  const notificationsLength = user.notifications.length;
  return (
    <div className={`${styles.cartIcons}`}>
      <BellIcon />
      {notificationsLength > 0 ? (
        <span className={styles.dot}>
          <sup></sup>
          {/* {notificationsLength} */}
        </span>
      ) : null}
    </div>
  );
}
export default NotifactionNav;
