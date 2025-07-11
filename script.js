const data = Array.from({ length: 16 }, (_, i) => ({
  semana: `Semana ${i + 1}`,
  ejercicios: Array.from({ length: 5 }, (_, j) => ({
    titulo: `Ejercicio ${j + 1}`,
    contenido: `Contenido del ejercicio ${j + 1} de la semana ${i + 1}.`
  }))
}));

const tabsContainer = document.getElementById('tabs');
const contentContainer = document.getElementById('content');

function renderTabs() {
  data.forEach((semana, index) => {
    const tab = document.createElement('button');
    tab.className = 'tab';
    tab.textContent = semana.semana;
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderContent(index);
    });
    if (index === 0) tab.classList.add('active');
    tabsContainer.appendChild(tab);
  });
}

function renderContent(index) {
  contentContainer.innerHTML = '';
  data[index].ejercicios.forEach(ej => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h2>${ej.titulo}</h2><p>${ej.contenido}</p>`;
    contentContainer.appendChild(card);
  });
}

  function abrirModal(src) {
    const modal = document.getElementById("modalImagen");
    const img = document.getElementById("imagenAmpliada");
    img.src = src;
    modal.style.display = "block";
  }

  function cerrarModal() {
    document.getElementById("modalImagen").style.display = "none";
  }

renderTabs();
renderContent(0);

