// about section color change script
document.getElementById("button2").addEventListener("click", color);
function color() {
    document.getElementById("button2").style.backgroundColor = "rgb(72,78,86)";
    document.getElementById("button1").style.backgroundColor = "rgb(40,43,48)";
}
document.getElementById("button1").addEventListener("click", colorChange);
function colorChange() {

    document.getElementById("button1").style.backgroundColor = "rgb(72,78,86)";
    document.getElementById("button2").style.backgroundColor = "rgb(40,43,48)";
}



// corosoul script
const carouselItems = document.querySelectorAll(".carousel_item");
let i = 1;

setInterval(() => {
    // Accessing All the carousel Items
    Array.from(carouselItems).forEach((item, index) => {

        if (i < carouselItems.length) {
            item.style.transform = `translateX(-${i * 100}%)`
        }
    })


    if (i < carouselItems.length) {
        i++;
    }
    else {
        i = 0;
    }
}, 2000)