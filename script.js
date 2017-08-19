document.addEventListener("DOMContentLoaded", () => {
    const cells = [...document.getElementsByTagName("td")]
    if (cells.length == 0) return;

    const filenames = cells.map((x, i) => {
	if (i % 3 != 2) return;
	const img = document.createElement("img")
	img.src = `/images${location.pathname}/thumbs/${x.innerText}`
	x.replaceChild(img, x.childNodes[0])
    })
})
