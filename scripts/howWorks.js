const howWorksTab1 = document.getElementById("howWorksTab1");
const howWorksTab2 = document.getElementById("howWorksTab2");
const howWorksTab3 = document.getElementById("howWorksTab3");
const howWorksTab4 = document.getElementById("howWorksTab4");

const howWorksContent1 = document.getElementById("howWorksContent1");
const howWorksContent2 = document.getElementById("howWorksContent2");
const howWorksContent3 = document.getElementById("howWorksContent3");
const howWorksContent4 = document.getElementById("howWorksContent4");

const clearHowWorksActive = () => {
  howWorksTab1.classList.remove("active");
  howWorksTab2.classList.remove("active");
  howWorksTab3.classList.remove("active");
  howWorksTab4.classList.remove("active");
  howWorksContent1.classList.remove("active");
  howWorksContent2.classList.remove("active");
  howWorksContent3.classList.remove("active");
  howWorksContent4.classList.remove("active");
}

howWorksTab1.addEventListener('click', () => {
  clearHowWorksActive();
  howWorksTab1.classList.add("active");
  howWorksContent1.classList.add("active");
})

howWorksTab2.addEventListener('click', () => {
  clearHowWorksActive();
  howWorksTab2.classList.add("active");
  howWorksContent2.classList.add("active");
})

howWorksTab3.addEventListener('click', () => {
  clearHowWorksActive();
  howWorksTab3.classList.add("active");
  howWorksContent3.classList.add("active");
})

howWorksTab4.addEventListener('click', () => {
  clearHowWorksActive();
  howWorksTab4.classList.add("active");
  howWorksContent4.classList.add("active");
})