// console.log("test")
function settime(){
    const date =new Date()
    let houre =document.querySelector(".houre-div")
    let minutes= document.querySelector(".minates-div")
    let second = document.querySelector(".second-div")

    houre.textContent=date.getHours()%12;
    minutes.textContent=date.getMinutes();
    second.textContent=date.getSeconds();
}

// for indivisula component refrashment
setInterval(settime,1000)
settime();
