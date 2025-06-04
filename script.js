// Função para salvar no localStorage
function saveWeight(exerciseName, weight) {
    const savedWeights = JSON.parse(localStorage.getItem('weights')) || {};
    savedWeights[exerciseName] = weight;
    localStorage.setItem('weights', JSON.stringify(savedWeights));
  }

  // Função para carregar os pesos salvos
  function loadWeights() {
    const savedWeights = JSON.parse(localStorage.getItem('weights')) || {};
    document.querySelectorAll('tr').forEach(row => {
      const cells = row.querySelectorAll('td');
      if (cells.length) {
        const exerciseName = cells[0].innerText.trim();
        const input = row.querySelector('input.weight-input');
        if (input && savedWeights[exerciseName] !== undefined) {
          input.value = savedWeights[exerciseName];
        }
      }
    });
  }

  // Adiciona eventos para salvar quando mudar o valor
  document.querySelectorAll('input.weight-input').forEach(input => {
    const row = input.closest('tr');
    const exerciseName = row.querySelector('td').innerText.trim();

    input.addEventListener('input', () => {
      saveWeight(exerciseName, input.value);
    });
  });

  // Carrega os pesos quando a página abre
  window.addEventListener('load', loadWeights);
