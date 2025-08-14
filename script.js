const inputs = document.querySelectorAll('.weight-input');
  inputs.forEach((input, index) => {
    const savedValue = localStorage.getItem(`weightInput-${index}`);
    if (savedValue) {
      input.value = savedValue;
    }
    input.addEventListener('blur', () => {
      localStorage.setItem(`weightInput-${index}`, input.value);
    });
  });

  // Salvar e carregar CARGA
const weightInputs = document.querySelectorAll('.weight-input');
weightInputs.forEach((input, index) => {
  const savedValue = localStorage.getItem(`weightInput-${index}`);
  if (savedValue) {
    input.value = savedValue;
  }
  input.addEventListener('blur', () => {
    localStorage.setItem(`weightInput-${index}`, input.value);
  });
});

// Salvar e carregar REPS
const repsInputs = document.querySelectorAll('.reps-input');
repsInputs.forEach((input, index) => {
  const savedValue = localStorage.getItem(`repsInput-${index}`);
  if (savedValue) {
    input.value = savedValue;
  }
  input.addEventListener('blur', () => {
    localStorage.setItem(`repsInput-${index}`, input.value);
  });
});

