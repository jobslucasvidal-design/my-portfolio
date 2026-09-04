// Import dos Components Globais
import Title from '../../../components/title/Title';
import Paragraph from '../../../components/paragraph/Paragraph.jsx';
import Tag from '../../../components/tag/Tag.jsx';
// Import do CSS de Intro
import style from './Intro.module.css';

export default function Intro() {
  return (
    <section className={style.introBg}>
      <div className=' container'>
        <div className={style.introContainer}>
          <Tag text="bem vindo" />
          <Title
            line="Eu construo soluções que fazem sentido, mesmo quando o problema não está totalmente definido."
            highlight="soluções"
          />
          <div className={style.introText}>
            <Paragraph text="Gosto de transformar problemas complexos em soluções simples, funcionais e bem estruturadas, sempre buscando criar aplicações que ofereçam uma boa experiência para os usuários e facilitem sua manutenção e evolução." />
            <Paragraph text="Meu foco é criar processos e ferramentas que funcionem na prática, entregando valor de forma consistente e confiável, sem complicações desnecessárias." />
          </div>
        </div>
      </div>
    </section>
  );
}