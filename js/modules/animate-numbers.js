export default function initAnimateNumbers() {
  function animateNumbers() {
    const numbers = document.querySelectorAll("[data-number]");

    numbers.forEach((number) => {
      const total = Number(number.innerText);
      const incremento = total / 100;
      let start = 0;

      const timer = setInterval(() => {
        start += incremento;
        number.innerText = start.toFixed();

        if (start > total) {
          numbers.innerText = total;
          clearInterval(timer);
        }
      }, 50 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animateNumbers();
    }
  }

  const observerTarget = document.querySelector(".numbers");

  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
