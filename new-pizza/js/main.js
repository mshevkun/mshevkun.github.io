document.getElementById("burger").onclick = function () {
    document.getElementById("mobile-menu").style.display = "block";
    this.style.display = "none";
    document.getElementById("close-button").style.display = "block";
};

document.getElementById("close-button").onclick = function () {
    document.getElementById("mobile-menu").style.display = "none";
    this.style.display = "none";
    document.getElementById("burger").style.display = "block";
};

document.getElementById("close-button").onclick