import { useState } from 'react';
import { MdOutlineTranslate } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import styles from './changeLanguage.module.css';
import { useTranslation } from 'react-i18next';

function ChangeLanguage() {
  const [droped, setDroped] = useState(false);
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);

    // Change direction based on language
    if (lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }
  };
  return (
    <div
      className={styles.changeLang}
      onMouseEnter={() => setDroped(true)}
      onMouseLeave={() => setDroped(false)}
    >
      <div className={styles.changeLangTwo}>
        <MdOutlineTranslate />
        العربية
        <IoIosArrowDown />
      </div>
      {droped && (
        <ul>
          <li onClick={() => handleLanguageChange('en')}>englih</li>
          <li onClick={() => handleLanguageChange('ar')}>arabic</li>

          {/* <li>english</li> */}
        </ul>
      )}
    </div>
  );
}

export default ChangeLanguage;
