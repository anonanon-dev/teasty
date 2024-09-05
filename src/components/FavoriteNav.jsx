import { useSelector } from 'react-redux';
import FavIcon from './icons/FavIcon';
import styles from './navbar.module.css';

function FavoriteNav() {
  const { user } = useSelector((store) => store.user);
  const favLength = user.favourites.length;
  return (
    <div className={styles.userIcons}>
      <FavIcon />
      {favLength > 0 ? (
        <span className={styles.favNum}>{favLength}</span>
      ) : null}
    </div>
  );
}

export default FavoriteNav;
