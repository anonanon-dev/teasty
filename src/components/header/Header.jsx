// import SliderOne from './SliderOne';
import SliderTwo from './SliderTwo';

import styles from './header.module.scss';
import 'animate.css/animate.compat.css';
// import ScrollAnimation from 'react-animate-on-scroll';

function Header() {
  return (
    <>
      {/* <ScrollAnimation animateIn='fadeIn'> */}
      <div className={styles.header}>
        {/* <SliderOne /> */}
        <hr />
        <SliderTwo />
        <hr />
      </div>
      {/* </ScrollAnimation> */}
    </>
  );
}

export default Header;
