const header = document.querySelector(".header");

const button = document.querySelector(".scrollup__button");

const triggerElement = document.querySelector(".section__top_fixed");

function changeHeaderColor() {
	if (
		window.scrollY >
		triggerElement.offsetTop + triggerElement.offsetHeight - header.offsetHeight - 30
	) {
		header.style.backgroundColor = "#342E8C";

		header.style.position = "sticky";
		header.style.left = "0";
		header.style.top = "0";

		button.style.transform = "translate(0, 0)";
		console.log("up");
	} else {
		button.style.transform = "translate(0, 150px)";

		header.style.backgroundColor = "transparent";
		header.style.position = "relative";

		console.log("down");
	}
}

window.addEventListener("scroll", changeHeaderColor);
