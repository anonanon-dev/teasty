import { useState } from 'react';
import { MdOutlineTranslate } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import styles from './changeLanguage.module.css';

function ChangeLanguage() {
	const [droped, setDroped] = useState(false);
	return (
		<div
			className={styles.changeLang}
			onMouseEnter={() => setDroped(true)}
			onMouseLeave={() => setDroped(false)}>
			<div className={styles.changeLangTwo}>
				<MdOutlineTranslate />
				العربية
				<IoIosArrowDown />
			</div>
			{droped && (
				<ul>
					<li>englih</li>
					{/* <li>english</li> */}
				</ul>
			)}
		</div>
	);
}

export default ChangeLanguage;
