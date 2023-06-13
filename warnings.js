const jsWarning = document.getElementById('js-warning');
jsWarning.classList.add('hidden');

const dismissButtons = document.querySelectorAll(".dismiss-button");
dismissButtons.forEach(button => {
  button.addEventListener("click", event => {
    const parentDiv = event.currentTarget.parentNode;
    parentDiv.classList.add("hidden");
  });
});

const movingWarning = document.getElementById('moving-warning');
const currentUrl = window.location.href;
if(currentUrl=="https://pomojs.ignisdev.xyz"){
  movingWarning.classList.add('hidden');
}