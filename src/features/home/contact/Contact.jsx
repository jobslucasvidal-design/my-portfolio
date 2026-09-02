import styles from './Contact.module.css';
import Tag from '../../../components/tag/Tag.jsx';

export default function Contact() {
  return (
    <footer className={styles.contactBG} id="contato">
      <div className="container">
        <div className={`${styles.contactSection} reveal`}>
          {/* HEADER */}
          <div className={styles.contactHeader}>
            <Tag text="contato" />
            <h1 className={styles.contactTitle}>
              Vamos nos <br /> conectar
            </h1>
          </div>
          {/* BOTTOM */}
          <div className={styles.contactBottom}>
            <nav className={styles.contactInfo}>
              <a
                href="https://www.linkedin.com/in/lucasgoncalves-dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN
              </a>
              <a href="mailto:jobs.lucasvidal@gmail.com">
                E-MAIL
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
