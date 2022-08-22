const prev = document.querySelector(".scroll-right");
const next = document.querySelector(".scroll-left");
const navWrapper = document.querySelector(".horizontal-scrolling-cards");
const cards = document.querySelectorAll(".card");

next.addEventListener("click", function () {
	var btnX = next.getBoundingClientRect().x;
	var navX = navWrapper.getBoundingClientRect().x;
	var diff = (btnX - navX) / 16;
	/* navWrapper.style ='transform: translate((navX-10),0px)' */ if (diff >= 2) {
		/*  		 navWrapper.style = 'transition: 2s ease; left:'+(navX + diff)+'px'; */
		navWrapper.style =
			"transform: translate(" +
			(navX + diff) +
			"px" +
			"); transition: 2s ease;";
		console.log(`diff: ${diff} btnX: ${btnX} navX: ${navX}`);
	}
});

prev.addEventListener("click", function () {
	navWrapper.style = "transform: translate(-10px,0px)";
});
