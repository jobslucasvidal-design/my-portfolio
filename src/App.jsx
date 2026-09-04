// Import de Todas as Components Features do Projeto
import { About, Contact, Education, Header, Hero, Intro, Principles, Projects } from './features/home';
// Import do CSS Global
import'../src/styles/global.css';
// Import dos Hooks useReveal e useMedia
import { useReveal } from './hooks/useReveal';
import { useMedia } from './hooks/useMedia';

function App() {
  useReveal();
  useMedia();

  return <>
    <Header />
    <Hero />
    <About />
    <Intro />
    <Projects />
    <Education />
    <Principles />
    <Contact />
  </>;
}

export default App;