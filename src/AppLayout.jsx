import Navbar from './components/Navbar';
import Footer from './components/Footer';
import styles from './styles/layout.module.css';
import { Outlet } from 'react-router-dom';
import TopNav from './components/TopNav';
function AppLayout() {
  return (
    <div className={styles.layout}>
      <TopNav />
      <Navbar />
      <main className={styles.myMain}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
