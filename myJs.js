const intervalId = setInterval(() => {
    const carousel = document.getElementById("carousel")
    carousel.classList.add("move")    
    console.log("moving")
}, 1000);