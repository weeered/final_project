const header = document.querySelector(".header");

const button = document.querySelector(".scrollup__button");

const triggerElement = document.querySelector(".section__top_fixed");

function changeHeaderColor() {
	if (
		window.scrollY >
		triggerElement.offsetTop +
			triggerElement.offsetHeight -
			header.offsetHeight -
			150
	) {
		header.style.backgroundColor = "#342E8C";
		header.style.position = "sticky";
		header.style.left = "0";
		header.style.transform = "translate(0, 0)";

		button.style.transform = "translate(0, 0)";
	} else {
		header.style.backgroundColor = "transparent";
		header.style.position = "absolute";
		header.style.left = "50%";
		header.style.transform = "translate(-50%, 0)";

		button.style.transform = "translate(0, 150px)";
	}
}

window.addEventListener("scroll", changeHeaderColor);
