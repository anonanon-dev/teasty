import { Link } from 'react-router-dom';
import styles from '../pages/signup.module.scss';
import { useState } from 'react';
import { CiUnlock } from 'react-icons/ci';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ResetYourPassFormRep() {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [visablePassword, setVisablePassword] = useState(false);
  const [visablePasswordRep, setVisablePasswordRep] = useState(false);
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const passwordRegexRep =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const isValiedPassword =
    password === ''
      ? 0
      : password.length <= 3
      ? 1
      : passwordRegex.test(password)
      ? 3
      : 2;
  const isValiedPasswordRep =
    repeatPassword === ''
      ? 0
      : repeatPassword.length <= 3
      ? 1
      : passwordRegexRep.test(repeatPassword)
      ? 3
      : 2;

  function toggleVisablePassword() {
    setVisablePassword((v) => !v);
  }

  function toggleVisablePasswordRep() {
    setVisablePasswordRep((v) => !v);
  }
  AOS.init();

  return (
    <div>
      <div
        className={styles.appForms}
        data-aos='fade-right'
        data-aos-offset='0'
        data-aos-easing='ease-in-sine'
        data-aos-duration='500'
      >
        <div className={styles.phoneSvg}>
          <svg
            width='100'
            height='100'
            viewBox='0 0 100 100'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M75 44.7917C73.2917 44.7917 71.875 43.375 71.875 41.6667V33.3333C71.875 20.2083 68.1667 11.4583 50 11.4583C31.8333 11.4583 28.125 20.2083 28.125 33.3333V41.6667C28.125 43.375 26.7083 44.7917 25 44.7917C23.2917 44.7917 21.875 43.375 21.875 41.6667V33.3333C21.875 21.25 24.7917 5.20833 50 5.20833C75.2083 5.20833 78.125 21.25 78.125 33.3333V41.6667C78.125 43.375 76.7083 44.7917 75 44.7917Z'
              fill='#F46D3B'
            />
            <path
              d='M50.0002 80.2083C42.5418 80.2083 36.4585 74.125 36.4585 66.6667C36.4585 59.2083 42.5418 53.125 50.0002 53.125C57.4585 53.125 63.5418 59.2083 63.5418 66.6667C63.5418 74.125 57.4585 80.2083 50.0002 80.2083ZM50.0002 59.375C46.0002 59.375 42.7085 62.6667 42.7085 66.6667C42.7085 70.6667 46.0002 73.9583 50.0002 73.9583C54.0002 73.9583 57.2918 70.6667 57.2918 66.6667C57.2918 62.6667 54.0002 59.375 50.0002 59.375Z'
              fill='#BD0229'
            />
            <path
              d='M70.8335 94.7917H29.1668C10.7918 94.7917 5.2085 89.2083 5.2085 70.8333V62.5C5.2085 44.125 10.7918 38.5417 29.1668 38.5417H70.8335C89.2085 38.5417 94.7918 44.125 94.7918 62.5V70.8333C94.7918 89.2083 89.2085 94.7917 70.8335 94.7917ZM29.1668 44.7917C14.2502 44.7917 11.4585 47.625 11.4585 62.5V70.8333C11.4585 85.7083 14.2502 88.5417 29.1668 88.5417H70.8335C85.7502 88.5417 88.5418 85.7083 88.5418 70.8333V62.5C88.5418 47.625 85.7502 44.7917 70.8335 44.7917H29.1668Z'
              fill='#F46D3B'
            />
          </svg>
        </div>
        <form className={styles.resetPassRepForm}>
          <label>
            <input
              type={visablePassword ? 'text' : 'password'}
              id='password'
              value={password}
              name='password'
              required
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />

            {visablePassword ? (
              <CiUnlock
                className={styles.lockIcon}
                onClick={toggleVisablePassword}
              />
            ) : (
              <svg
                onClick={toggleVisablePassword}
                className={styles.svgPath}
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13.5 8.0625C13.1925 8.0625 12.9375 7.8075 12.9375 7.5V6C12.9375 3.6375 12.27 2.0625 9 2.0625C5.73 2.0625 5.0625 3.6375 5.0625 6V7.5C5.0625 7.8075 4.8075 8.0625 4.5 8.0625C4.1925 8.0625 3.9375 7.8075 3.9375 7.5V6C3.9375 3.825 4.4625 0.9375 9 0.9375C13.5375 0.9375 14.0625 3.825 14.0625 6V7.5C14.0625 7.8075 13.8075 8.0625 13.5 8.0625Z'
                  fill='#979797'
                />
                <path
                  d='M9 14.4375C7.6575 14.4375 6.5625 13.3425 6.5625 12C6.5625 10.6575 7.6575 9.5625 9 9.5625C10.3425 9.5625 11.4375 10.6575 11.4375 12C11.4375 13.3425 10.3425 14.4375 9 14.4375ZM9 10.6875C8.28 10.6875 7.6875 11.28 7.6875 12C7.6875 12.72 8.28 13.3125 9 13.3125C9.72 13.3125 10.3125 12.72 10.3125 12C10.3125 11.28 9.72 10.6875 9 10.6875Z'
                  fill='#979797'
                />
                <path
                  d='M12.75 17.0625H5.25C1.9425 17.0625 0.9375 16.0575 0.9375 12.75V11.25C0.9375 7.9425 1.9425 6.9375 5.25 6.9375H12.75C16.0575 6.9375 17.0625 7.9425 17.0625 11.25V12.75C17.0625 16.0575 16.0575 17.0625 12.75 17.0625ZM5.25 8.0625C2.565 8.0625 2.0625 8.5725 2.0625 11.25V12.75C2.0625 15.4275 2.565 15.9375 5.25 15.9375H12.75C15.435 15.9375 15.9375 15.4275 15.9375 12.75V11.25C15.9375 8.5725 15.435 8.0625 12.75 8.0625H5.25Z'
                  fill='#979797'
                />
              </svg>
            )}
            <div className={styles.strongCheck}>
              {isValiedPassword === 1 && (
                <span
                  className={`${styles.passwordStrength} ${styles.passwordStrength1}`}
                >
                  - Weak
                </span>
              )}
              {isValiedPassword === 2 && (
                <span
                  className={`${styles.passwordStrength} ${styles.passwordStrength2}`}
                >
                  -- Medium
                </span>
              )}
              {isValiedPassword === 3 && (
                <span
                  className={`${styles.passwordStrength} ${styles.passwordStrength3}`}
                >
                  --- Strong
                </span>
              )}
            </div>
          </label>

          <label>
            <input
              type={visablePasswordRep ? 'text' : 'password'}
              id='repeatPassword'
              value={repeatPassword}
              name='repeatPassword'
              required
              placeholder='Repeat Password'
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            {/* <svg
              className={styles.svgPath}
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M13.5 8.0625C13.1925 8.0625 12.9375 7.8075 12.9375 7.5V6C12.9375 3.6375 12.27 2.0625 9 2.0625C5.73 2.0625 5.0625 3.6375 5.0625 6V7.5C5.0625 7.8075 4.8075 8.0625 4.5 8.0625C4.1925 8.0625 3.9375 7.8075 3.9375 7.5V6C3.9375 3.825 4.4625 0.9375 9 0.9375C13.5375 0.9375 14.0625 3.825 14.0625 6V7.5C14.0625 7.8075 13.8075 8.0625 13.5 8.0625Z'
                fill='#979797'
              />
              <path
                d='M9 14.4375C7.6575 14.4375 6.5625 13.3425 6.5625 12C6.5625 10.6575 7.6575 9.5625 9 9.5625C10.3425 9.5625 11.4375 10.6575 11.4375 12C11.4375 13.3425 10.3425 14.4375 9 14.4375ZM9 10.6875C8.28 10.6875 7.6875 11.28 7.6875 12C7.6875 12.72 8.28 13.3125 9 13.3125C9.72 13.3125 10.3125 12.72 10.3125 12C10.3125 11.28 9.72 10.6875 9 10.6875Z'
                fill='#979797'
              />
              <path
                d='M12.75 17.0625H5.25C1.9425 17.0625 0.9375 16.0575 0.9375 12.75V11.25C0.9375 7.9425 1.9425 6.9375 5.25 6.9375H12.75C16.0575 6.9375 17.0625 7.9425 17.0625 11.25V12.75C17.0625 16.0575 16.0575 17.0625 12.75 17.0625ZM5.25 8.0625C2.565 8.0625 2.0625 8.5725 2.0625 11.25V12.75C2.0625 15.4275 2.565 15.9375 5.25 15.9375H12.75C15.435 15.9375 15.9375 15.4275 15.9375 12.75V11.25C15.9375 8.5725 15.435 8.0625 12.75 8.0625H5.25Z'
                fill='#979797'
              />
            </svg> */}
            {visablePasswordRep ? (
              <CiUnlock
                className={styles.lockIcon}
                onClick={toggleVisablePasswordRep}
              />
            ) : (
              <svg
                onClick={toggleVisablePasswordRep}
                className={styles.svgPath}
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13.5 8.0625C13.1925 8.0625 12.9375 7.8075 12.9375 7.5V6C12.9375 3.6375 12.27 2.0625 9 2.0625C5.73 2.0625 5.0625 3.6375 5.0625 6V7.5C5.0625 7.8075 4.8075 8.0625 4.5 8.0625C4.1925 8.0625 3.9375 7.8075 3.9375 7.5V6C3.9375 3.825 4.4625 0.9375 9 0.9375C13.5375 0.9375 14.0625 3.825 14.0625 6V7.5C14.0625 7.8075 13.8075 8.0625 13.5 8.0625Z'
                  fill='#979797'
                />
                <path
                  d='M9 14.4375C7.6575 14.4375 6.5625 13.3425 6.5625 12C6.5625 10.6575 7.6575 9.5625 9 9.5625C10.3425 9.5625 11.4375 10.6575 11.4375 12C11.4375 13.3425 10.3425 14.4375 9 14.4375ZM9 10.6875C8.28 10.6875 7.6875 11.28 7.6875 12C7.6875 12.72 8.28 13.3125 9 13.3125C9.72 13.3125 10.3125 12.72 10.3125 12C10.3125 11.28 9.72 10.6875 9 10.6875Z'
                  fill='#979797'
                />
                <path
                  d='M12.75 17.0625H5.25C1.9425 17.0625 0.9375 16.0575 0.9375 12.75V11.25C0.9375 7.9425 1.9425 6.9375 5.25 6.9375H12.75C16.0575 6.9375 17.0625 7.9425 17.0625 11.25V12.75C17.0625 16.0575 16.0575 17.0625 12.75 17.0625ZM5.25 8.0625C2.565 8.0625 2.0625 8.5725 2.0625 11.25V12.75C2.0625 15.4275 2.565 15.9375 5.25 15.9375H12.75C15.435 15.9375 15.9375 15.4275 15.9375 12.75V11.25C15.9375 8.5725 15.435 8.0625 12.75 8.0625H5.25Z'
                  fill='#979797'
                />
              </svg>
            )}
            <div className={styles.strongCheck}>
              {isValiedPasswordRep === 1 && (
                <span
                  className={`${styles.passwordStrength} ${styles.passwordStrength1}`}
                >
                  - Weak
                </span>
              )}
              {isValiedPasswordRep === 2 && (
                <span
                  className={`${styles.passwordStrength} ${styles.passwordStrength2}`}
                >
                  -- Medium
                </span>
              )}
              {isValiedPasswordRep === 3 && (
                <span
                  className={`${styles.passwordStrength} ${styles.passwordStrength3}`}
                >
                  --- Strong
                </span>
              )}
            </div>
          </label>

          <button type='submit' className={styles.resetPassRepSubmit}>
            Save & Continue
          </button>
        </form>

        <div className={styles.newLogIn}>
          Already have an account ..
          <Link to='/login'> Sign In Now</Link>
        </div>
      </div>
    </div>
  );
}

export default ResetYourPassFormRep;
