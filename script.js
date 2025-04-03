async function fetchImages() {
    const response = await fetch("images.json");
    return await response.json();
}

async function startImageRotation() {
    const images = await fetchImages();
    let index = 0;
    const imgElement = document.getElementById("image");

    function changeImage() {
        imgElement.src = images[index];
        index = (index + 1) % images.length;
    }

    changeImage();
    setInterval(changeImage, 3000); // 每 3 秒切换
}

window.onload = startImageRotation;
