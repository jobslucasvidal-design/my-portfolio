// Import do useState
import { useState } from 'react';
// Import do NavMenu
import NavMenu from './NavMenu';
// Import do CSS do Mobile Menu
import styles from './MobileMenu.module.css';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // animação de botão mobile
    <nav>
      <button
        className={`${styles.navToggle} ${isOpen ? styles.navToggleActive : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menu de navegação"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div
        className={`${styles.navOverlay} ${isOpen ? styles.navOverlayActive : ''}`}
      >
        <NavMenu isMobile onClickLink={() => setIsOpen(false)} />
        <div className={`${styles.mobileMenuFooter}`}>
          <span>FullStack Developer</span>
          <a
            href="https://www.linkedin.com/in/lucasgoncalves-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.mobileMenuFooterLink}`}
          >
            Linkedin
          </a>
        </div>
      </div>
    </nav>
  );
}
