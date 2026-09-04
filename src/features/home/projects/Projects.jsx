// Import dos Componentes Globais
import Title from '../../../components/title/Title.jsx';
import Subtitle from '../../../components/subtitle/Subtitle.jsx';
import Paragraph from '../../../components/paragraph/Paragraph.jsx';
import Tag from '../../../components/tag/Tag.jsx';
// Import do CSS Module de Projects
import style from './Projects.module.css';
// Import dos Components de Projects
import ProjectsCards from './components/ProjectsCard.jsx';
import ProjectNav from './components/ProjectsNav.jsx';
// Import do Data de Projects
import { projects } from './components/data/projectsData.js';

export default function Projects() {
  return (
    <section className={style.projectBg} id='projetos'>
      <div className="container">
        <div className={style.projectSection}>
          <div className={style.projectIntro}>
            <Tag text="melhores trabalhos" />
            <Title
              line="Eis o que eu realmente faço o dia todo"
              highlight="o que eu realmente"
            />
            <Paragraph text="Atualmente, tenho maior experiência no desenvolvimento front-end, criando interfaces modernas, responsivas e funcionais com foco em usabilidade, performance e qualidade de código. Ao mesmo tempo, venho expandindo meus conhecimentos para o desenvolvimento back-end e construção de aplicações full stack." />
            <Paragraph text="Atualmente, curso Análise e Desenvolvimento de Sistemas (ADS) pelo Infnet, reforçando minha base técnica e ampliando minha visão como desenvolvedor." />
          </div>
          <div className={style.projectIntro}>
            <Subtitle line="Projetos em Evidência" highlight="em" />
            <Paragraph text="Aqui estão alguns dos projetos que desenvolvi, aplicando na prática meus conhecimentos em front-end, criando interfaces modernas, funcionais e focadas na experiência do usuário." />
          </div>
          <ProjectNav projects={projects} />
          <ProjectsCards projects={projects} />
        </div>
      </div>
    </section>
  );
}