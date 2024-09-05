import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import styles from './footer.module.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className={styles.mainFooter}>
        <div className={styles.footer}>
          <img src='/logo2.png' />
          <h2>FOOD, THAT COOKED WITH LOVE.</h2>
          <hr />
          <div className={styles.footerAllLinks}>
            <div>
              <ul>
                <li>
                  <Link to='/home'>home</Link>
                </li>
                <li>
                  <Link to='/dailyoffers'>daily offers</Link>
                </li>
                <li>
                  <Link to='/aboutus'>about us</Link>
                </li>
                <li>
                  <Link to='/menu'>our menu</Link>
                </li>
                <li>
                  <Link to='/location'>location</Link>
                </li>
                <li>
                  <Link to='/contactus'>contact us</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>FOLLOW US</li>
                <li>
                  <a href='https://www.facebook.com/'>
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/'>
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.lastFooter}>
          <div>
            <ul>
              <li>
                <Link to='/faqs'>faqs</Link>
              </li>
              <li>
                <Link to='/termsandconditiond'>terms&conditions</Link>
              </li>
              <li>
                <Link to='/privacypolicy'>privacy policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>All rights reserved © 2023 CREATIVE MINDS CO.</h3>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
