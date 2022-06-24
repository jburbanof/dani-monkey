const params = new Proxy(new URLSearchParams(window.location.search), {
	get: (searchParams, prop) => searchParams.get(prop),
});
let projectId = params.project_id ? params.project_id : "1";
console.log("🚀 ~ file: collectiveScripts.js ~ line 5 ~ projectId", projectId)
const projects = Array.from(document.querySelectorAll(".CMProject"));
const header = document.getElementById("header");
const headerBackground = new Image();

const setProjectVisivility = () => {
	const projectVisible = projects.filter((project) => project.id === projectId);
	projectVisible[0].style.display = "flex";
};
setProjectVisivility();

headerBackground.src =
	"../assets/CMonkey_render/Cmonkey_Header_Llustration_v02.png";
["resize", "load"].forEach((event) => {
	window.addEventListener(event, () => {
		const imgRatio = headerBackground.width / headerBackground.height;
		const newHeight = (window.innerWidth - 200) / imgRatio;
		header.style.minHeight = `${newHeight}px`;
	});
});
