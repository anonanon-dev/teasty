import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from '../pages/signup.module.scss';
import { useState } from 'react';
import { CiUnlock } from 'react-icons/ci';
import AOS from 'aos';
import 'aos/dist/aos.css';

function SignUpForm() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
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
        <form>
          <label>
            <input
              type='text'
              id='fullName'
              value={fullName}
              name='fullName'
              required
              placeholder='Full Name'
              onChange={(e) => setFullName(e.target.value)}
            />
            <svg
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle
                cx='9'
                cy='4.5'
                r='3'
                stroke='#979797'
                strokeWidth='1.5'
              />
              <ellipse
                cx='9'
                cy='12.75'
                rx='5.25'
                ry='3'
                stroke='#979797'
                strokeWidth='1.5'
              />
            </svg>
          </label>
          <label>
            <input
              type='text'
              id='lastName'
              value={lastName}
              name='lastName'
              required
              placeholder='Last Name'
              onChange={(e) => setLastName(e.target.value)}
            />
            <svg
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle
                cx='9'
                cy='4.5'
                r='3'
                stroke='#979797'
                strokeWidth='1.5'
              />
              <ellipse
                cx='9'
                cy='12.75'
                rx='5.25'
                ry='3'
                stroke='#979797'
                strokeWidth='1.5'
              />
            </svg>
          </label>
          <label>
            <input
              type='phone'
              id='phone'
              value={phone}
              name='phone'
              required
              placeholder='Phone Number'
              onChange={(e) => setPhone(e.target.value)}
            />
            <svg
              className={styles.svgPathStroke}
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.52819 3.98713L8.01495 4.85933C8.45423 5.64644 8.27789 6.67899 7.58604 7.37085C7.58603 7.37085 7.58603 7.37085 7.58603 7.37085C7.58592 7.37097 6.74694 8.21016 8.26839 9.73161C9.78918 11.2524 10.6283 10.4148 10.6291 10.414C10.6292 10.4139 10.6292 10.414 10.6292 10.4139C11.321 9.72211 12.3536 9.54578 13.1407 9.98505L14.0129 10.4718C15.2014 11.1351 15.3418 12.8019 14.2971 13.8466C13.6693 14.4744 12.9003 14.9629 12.0502 14.9951C10.6191 15.0493 8.18871 14.6872 5.75078 12.2492C3.31285 9.81129 2.95066 7.38092 3.00491 5.94982C3.03714 5.0997 3.5256 4.33068 4.15335 3.70292C5.19807 2.65821 6.86488 2.79858 7.52819 3.98713Z'
                stroke='#979797'
                strokeWidth='1.5'
                strokeLinecap='round'
              />
            </svg>
          </label>
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

          <button type='submit' onClick={() => navigate('/verify')}>
            SIGN UP
          </button>
        </form>
        <div className={styles.or}>OR</div>
        <div className={styles.signupwith}>Sign Up With Your Social </div>
        <div className={styles.signupwithmethodes}>
          <div>
            <a href='#'>
              <span>
                <img src='/Icon.png' />
              </span>
              <span>Continue with Google</span>
            </a>
          </div>
          <div>
            <a href='#'>
              <span>
                <img src='/image1.png' />
              </span>
              <span>Continue with Google</span>
            </a>
          </div>
        </div>
        <div className={styles.newsignin}>
          Already have an account ..
          <Link to='/login'> Sign In Now</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
