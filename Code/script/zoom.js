const zoom_image_1 = document.querySelector(".zoom_image_1");
const zoom_image_2 = document.querySelector(".positionnement");
const zoom_image_3 = document.querySelector(".grandeImage");

zoom_image_1.style.width = "509px";
zoom_image_1.style.height = "435px";

zoom_image_1.addEventListener("mouseover", () => {
    zoom_image_1.style.transform = "scale(1.36)";
})

zoom_image_1.addEventListener("mouseout", () => {
    zoom_image_1.style.transform = "scale(1)";
})

zoom_image_2.style.width = "374px";
zoom_image_2.style.height = "527px";

zoom_image_2.addEventListener("mouseover", () => {
    zoom_image_2.style.transform = "scale(1.20)";
})

zoom_image_2.addEventListener("mouseout", () => {
    zoom_image_2.style.transform = "scale(1)";
})

zoom_image_3.addEventListener("mouseover", () => {
    zoom_image_3.style.transform = "scale(1.31)";
})

zoom_image_3.addEventListener("mouseout", () => {
    zoom_image_3.style.transform = "scale(1)";
})






