// Import dos Components Globais
import Title from '../../../components/title/Title.jsx';
import Paragraph from '../../../components/paragraph/Paragraph.jsx';
import Tag from '../../../components/tag/Tag.jsx';
// Import dos CSS de Principles
import styles from './Principles.module.css';
// Import do Data de Principles
import { principlesData } from './data/principlesData.js';

export default function Principles() {
  return (
    <section className={styles.principlesBg}>
      {/* HEADER */}
      <div className="container">
        <div className={styles.principlesSection}>
          <Tag text="princípios" />
          <Title line="Aquilo que defendo" highlight="defendo" />
          <Paragraph text="Os princípios aos quais sempre retorno, aqueles que moldam a forma como penso, projeto e colaboro." />
          {/* GRID */}
          <div className={styles.principlesGrid}>
            {principlesData.map((item) => (
              <div key={item.id} className={`${styles.principlesCard} reveal`}>
                <span
                  className={styles.principlesNumber}
                  aria-hidden="true"
                  role="presentation"
                >
                  {item.id}
                </span>
                <h3>{item.principleTitle}</h3>
                <p>{item.principleText}</p>
                <span className={styles.detailsLine}></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
