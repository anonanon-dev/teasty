import FoodIcon from './icons/FoodIcon';
import styles from './navbar.module.css';

function MenuBtnNav() {
	return (
		<div className={styles.checkMenuBtn}>
			<FoodIcon />
			<span>CHECK OUR MENU</span>
		</div>
	);
}

export default MenuBtnNav;
