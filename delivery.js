function ridestart(){
    let image = document.getElementById("image")
    let heading = document.getElementById("head-status")
    let para = document.getElementById("para-status")
    image.src = "https://a.storyblok.com/f/62776/x/ca59b51c51/map-min.svg"
    image.style.height = "300px"
    image.style.width = "500px"
    heading.textContent = "On The Way"
    para.textContent = "Reaches you in 15min..."
}