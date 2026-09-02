 import ImgNexus from '../../../../../assets/images/projects/img_nexusbjj.jpg'
 import ImgDetector from '../../../../../assets/images/projects/detector.jpg'
 import ImgBikestar from '../../../../../assets/images/projects/img_bikestar.jpg'
 import ImgSaintrock from '../../../../../assets/images/projects/img_saintrock.jpg'


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
       id: 'detector',
       img: ImgDetector,
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
       id: 'bikestar',
       img: ImgBikestar,
       eyebrow: 'São Roque - São Paulo - 2026',
       title: 'Bikestar',
       bullets: [
         'Reestruturei layout originalmente da Origamid com foco em explorar meus conhecimentos',
         'Melhorei navegação e consistência visual',
         'Interface moderna baseada no Bikecraft utilizando apenas o Vanilla JS',
       ],
       techs: [
         'HTML5',
         'CSS3',
         'JavaScript',
         'Figma',
         'UX/UI',
         'Responsivo',
       ],
       deploy: 'https://newbikestar.netlify.app/',
       github: 'https://github.com/lucasvidaldev/bikestar',
     },
     {
       id: 'saintrock',
       img: ImgSaintrock,
       eyebrow: 'São Roque - São Paulo - 2026',
       title: 'Saintrock',
       bullets: [
         'Projeto criado do zero, inspirado em sites como Artwalk',
         'Buscando aplicar uma consistencia visual mais refinada',
         'Aplicando tecnicas de posicionamento das sections',
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
       deploy: 'https://saintrock.netlify.app/',
       github: 'https://github.com/lucasvidaldev/saintrock-sneakers',
     }
];