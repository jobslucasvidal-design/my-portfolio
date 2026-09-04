// Verifica se a media query informada corresponde
// ao tamanho atual da tela e atualiza o estado
// sempre que houver mudança no tamanho da janela.
import React from 'react';
export function useMedia(media) {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    changeMatch();
    window.addEventListener('resize', changeMatch);
    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [media]);

  return match;
};