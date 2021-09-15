let stepOne = document.querySelector(`.step1`),
  stepTwo = document.querySelector(`.step2`),
  arr = document.querySelectorAll(`.step1 .tri div`),
  youPick = document.querySelector(`.you`),
  housePick = document.querySelector(`.house`),
  state = document.querySelector(`.state h3`),
  play = document.querySelector(`button`),
  score = document.querySelector(`.score p`),
  rules = document.querySelector(`.rules`),
  modal = document.querySelector(`.modal`),
  modalClose = document.querySelector(`.close`);

function handleClick(event) {
  let choice = event.currentTarget.cloneNode(true);
  youPick.appendChild(choice);
  stepOne.style.display = `none`;
  stepTwo.style.display = `block`;
  let house = Array.from(arr).filter(
    (e) => e.classList.value !== choice.classList.value
  );
  let houseChoice = house[Math.floor(Math.random() * 2)].cloneNode(true);
  housePick.appendChild(houseChoice);
  if (choice.classList.value === `paper`) {
    if (houseChoice.classList.value === `rock`) {
      state.innerHTML = `You Win`;
      score.innerHTML = +score.innerHTML + 1;
    } else {
      score.innerHTML = +score.innerHTML - 1;
      state.innerHTML = `You Lose`;
    }
  }
  if (choice.classList.value === `rock`) {
    if (houseChoice.classList.value === `scissors`) {
      state.innerHTML = `You Win`;
      score.innerHTML = +score.innerHTML + 1;
    } else {
      score.innerHTML = +score.innerHTML - 1;
      state.innerHTML = `You Lose`;
    }
  }
  if (choice.classList.value === `scissors`) {
    if (houseChoice.classList.value === `paper`) {
      state.innerHTML = `You Win`;
      score.innerHTML = +score.innerHTML + 1;
    } else {
      score.innerHTML = +score.innerHTML - 1;
      state.innerHTML = `You Lose`;
    }
  }
  arr.forEach((element) => {
    element.removeEventListener(`click`, handleClick);
  });
}
arr.forEach((element) => {
  element.addEventListener(`click`, handleClick);
});

play.onclick = () => {
  stepOne.style.display = `block`;
  stepTwo.style.display = `none`;
  document.querySelector(`.content .you div`).remove();
  document.querySelector(`.content .house div`).remove();
  arr.forEach((element) => {
    element.addEventListener(`click`, handleClick);
  });
};

rules.onclick = () => (modal.style.display = `block`);

modalClose.onclick = () => (modal.style.display = `none`);
