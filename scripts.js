const profileImgContainer = document.querySelector(".profileImgContainer");
const navBar = document.getElementById("navBar");
const responsiveMenu = document.querySelector(".responsiveMenu");
const openResponsiveMenu = document.getElementById("openResponsiveMenu");
const closeResponsiveMenu = document.getElementById("closeResponsiveMenu");
const videos = Array.from(document.querySelectorAll("video"));

if (window.innerWidth >= 425 && profileImgContainer) {
	profileImgContainer.style.height = `calc(100vh - ${navBar.offsetHeight}px)`;
}
closeResponsiveMenu.addEventListener("click", () => {
	responsiveMenu.style.display = "none";
});
openResponsiveMenu.addEventListener("click", () => {
	responsiveMenu.style.display = "flex";
});

videos.forEach((video) => {
	const videoWidth = getComputedStyle(video).width;
	video.style.height = `calc(${videoWidth} * 0.5625)`;
	window.addEventListener("resize", () => {
		video.style.height = `calc(${videoWidth} * 0.5625)`;
	});
});
