const anoInicioTrabalho = 2016;

window.addEventListener("load", () => {
  const anoAtual = new Date().getFullYear();

  document.getElementById("ano-atual").textContent = anoAtual;
  document.getElementById("anos-trabalhando").textContent =
    anoAtual - anoInicioTrabalho;
});