 import Img1 from '../../../../../assets/images/projects/img1.jpg';
 import ImgNexus from '../../../../../assets/images/projects/nexusbjj.jpg'
 import ImgDetctor from '../../../../../assets/images/projects/detector.jpg'


 export const projects = [
     {
       id: 'nexus',
       img: ImgNexus,
       eyebrow: 'São Roque - São Paulo - 2026',
       title: 'Nexus - BJJ Academy',
       bullets: [
         'Layout construido do Zero, com foco em UX/UI',
         'Melhorei navegação e consistência visual',
         'Interface moderna baseada no em projetos do Awwwards',
       ],
       techs: [
         'React',
         'JavaScript',
         'HTML5',
         'CSS Modules',
         'Responsivo Design',
         'Figma',
         'UX/UI Design',
       ],
       deploy: 'https://nexusbjjacademy.netlify.app/',
       github: 'https://github.com/jobslucasvidal-design/nexusbjjacademy',
     },
     {
       id: 'projeto-2',
       img: ImgDetctor,
       eyebrow: 'São Roque - São Paulo - 2026',
       title: 'Detector de Fraudes em Tempo Real com IA',
       bullets: [
         'Desenvolvi API com FastAPI integrando modelo de IA para detecção de fraudes',
         'Criei dashboard em tempo real com Streamlit para monitoramento de métricas',
         'Simulei ingestão contínua de transações financeiras integradas ao SQLite',
       ],
       techs: [
         'FastAPI (Python)',
         'Streamlit',
         'Scikit-Learn',
         'SQLite',
       ],
       deploy: 'https://github.com/lucasvidaldev/detector-fraudes-ia',
       github: 'https://github.com/lucasvidaldev/detector-fraudes-ia',
     },
     {
       id: 'projeto-3',
       img: Img1,
       eyebrow: 'France - Global - 2024-2026',
       title: 'Projeto em andamento',
       bullets: [
         'Reestruturei layout com foco em UX/UI',
         'Melhorei navegação e consistência visual',
         'Interface moderna baseada no Bikecraft',
       ],
       techs: [
         'HTML5',
         'CSS3',
         'JavaScript',
         'Figma',
         'UX/UI',
         'Responsivo',
       ],
       deploy: '#',
       github: '#',
     },
     {
       id: 'projeto-4',
       img: Img1,
       eyebrow: 'France - Global - 2024-2026',
       title: 'Projeto em andamento',
       bullets: [
         'Reestruturei layout com foco em UX/UI',
         'Melhorei navegação e consistência visual',
         'Interface moderna baseada no Bikecraft',
       ],
       techs: [
         'HTML5',
         'CSS3',
         'JavaScript',
         'Figma',
         'UX/UI',
         'Responsivo',
       ],
       deploy: '#',
       github: '#',
     }
];