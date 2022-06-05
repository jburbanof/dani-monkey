const navBar = document.getElementById("navBar");

window.addEventListener("scroll", function (e) {
	if (window.scrollY >= window.innerHeight) {
		navBar.classList.remove("horizontalNavBar");
		navBar.classList.add("verticalNavBar");
	} else {
		navBar.classList.remove("verticalNavBar");
		navBar.classList.add("horizontalNavBar");
	}
});
