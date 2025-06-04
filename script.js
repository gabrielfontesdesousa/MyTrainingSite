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
