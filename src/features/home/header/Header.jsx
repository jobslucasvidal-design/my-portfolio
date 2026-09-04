// Import dos CSS do Header
import styles from './Header.module.css';
// Import do Components de NavMenu e Mobile Menu
import NavMenu from './components/NavMenu.jsx';
import MobileMenu from './components/MobileMenu.jsx';

export default function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.headerLogo}>lucas vidal</span>
      <nav>
        <NavMenu />
        <MobileMenu />
      </nav>
    </header>
  );
}