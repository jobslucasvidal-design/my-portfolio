import styles from './About.module.css';
import { aboutTags } from './data/aboutData.js';

import Title from '../../../components/title/Title.jsx';
import Paragraph from '../../../components/paragraph/Paragraph.jsx';
import Tag from '../../../components/tag/Tag.jsx';

import SuaImagem from '../../../assets/images/background/foto-about.jpg';

function InfoItem({ label, text }) {
  return (
    <div className={styles.aboutInfoItem}>
      <dt className={styles.label}>{label}</dt>
      <dd className={styles.text}>{text}</dd>
    </div>
  );
}

export default function About() {
  return (
    <section className={`${styles.aboutSectionBg} reveal delay-2`} id='sobre'>
      <div className="container">
        <div className={styles.aboutSection}>
          <Tag text="Um pouco sobre mim" />
          <Title line="Além do portfólio" highlight="portfólio" />
          {/* CONTENT */}
          <div className={styles.aboutContent}>
            {/* LEFT */}
            <div className={`${styles.aboutSectionDescription} reveal`}>
              <img
                src={SuaImagem}
                alt="Foto pessoal"
                className={styles.aboutSectionMedia}
              />

              <Paragraph text="Sou desenvolvedor focado na construção de aplicações web, com experiência em HTML, CSS, JavaScript e React. Atualmente, também venho aprofundando meus conhecimentos em Python, SQL e desenvolvimento full stack. Gosto de transformar ideias em soluções funcionais, bem estruturadas e estou sempre buscando evoluir tecnicamente por meio de projetos práticos e novos desafios." />
              <Paragraph text="Minha jornada na programação começou há cerca de um ano e meio e desde então, venho me dedicando ao desenvolvimento de aplicações web e ao aprimoramento constante das minhas habilidades. Gosto de enfrentar desafios técnicos, entender problemas e buscar soluções eficientes, sempre utilizando projetos práticos para transformar conhecimento em experiência." />
            </div>

            {/* RIGHT */}
            <div className={`${styles.aboutSectionInfo} reveal delay-1`}>
              {/* INFOS */}
              <dl className={styles.aboutInfoList}>
                <InfoItem label="morando em" text="São Roque, SP — Brasil" />
                <InfoItem
                  label="idiomas"
                  text="Português (nativo) e Inglês em evolução"
                />
                <InfoItem
                  label="estudos"
                  text="ADS (Infnet) + Front-end (Origamid)"
                />
                <InfoItem
                  label="hobbies"
                  text="Artes Marciais, Pesca Espotiva, Viagens ,Tecnologia e Games"
                />
              </dl>

              {/* TAGS */}
              <div className={styles.aboutTagsBlock}>
                <span className={styles.aboutTagsTitle}>
                  COMO MEUS COLEGAS ME DESCREVEM
                </span>

                <ul className={styles.aboutTags}>
                  {aboutTags.map((tag) => (
                    <li key={tag.id} className={styles.aboutTagsList}>
                      {tag.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
