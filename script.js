function showPopup(imageSrc) {
    document.getElementById("popup-img").src = imageSrc;
    document.getElementById("popup").style.display = "block";
    console.log(document.getElementById("popup-img").src);
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}


