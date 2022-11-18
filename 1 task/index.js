const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  // Подстановка нуля если число меньше 10
  const minTwoNumbers = (num) => num < 10 ? '0' + num : num

  return (seconds) => {

    const timer = setInterval(() => {
    buttonEl.disabled = true

      if (seconds === 0) {
        clearInterval(timer);
        buttonEl.disabled = false
        timerEl.innerText = `hh:mm:ss`
      } else {
        const sec = (seconds % 60)
        const min = Math.floor(seconds / 60 % 60);
        const hours = Math.floor(seconds / 60 / 60 % 60);

        timerEl.innerText = `${minTwoNumbers(hours)}:${minTwoNumbers(min)}:${minTwoNumbers(sec)}`
      }

      seconds--

    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/[^0-9]/g, '')
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
