const button = document.querySelector('.burger-header__button')
const buger = document.querySelector('body')
button.onclick = function () {
	buger.classList.toggle("_active");
}
