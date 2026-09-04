// Detecta quando elementos com a classe "reveal"
// entram na tela e adiciona a classe "active",
// ativando a animação de entrada.
// O IntersectionObserver é desconectado ao desmontar o componente.
import { useEffect } from "react";
export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}