let colorBox=document.querySelector(".color-plate")
let value=0
let redColor=document.querySelector("#red")
let greenColor=document.querySelector("#green")
let blueColor=document.querySelector("#blue")
let hexadecimalValue=document.querySelector("#hexadecimal-value")


function rgbToHexa(r,g,b){
    let hexValue="#000000"
    if ((r>=0 && r<=255) && (g>=0 && g<=255) && (b>=0 && b<=255)){
        hexValue=`#${r>10?r.toString(16):"0"+r.toString(16)}${g>10?g.toString(16):"0"+g.toString(16)}${b>10?b.toString(16):"0"+b.toString(16)}`;
    }
    console.log(hexValue);
    return hexValue;
}
function hexaTorgb(value){
    let red=value.slice(1,3);
    let green=value.slice(3,5);
    let blue=value.slice(5,7);

    redColor.value=parseInt(red,16);
    greenColor.value=parseInt(green,16);
    blueColor.value=parseInt(blue,16);
}

console.log(rgbToHexa(1,255,3));
// document.querySelector("#color-change-btn").addEventListener('click',(e)=>{
//     e.preventDefault()
//     if (hexadecimalValue.value){
//         colorBox.style.backgroundColor=hexadecimalValue.value
//         hexaTorgb(hexadecimalValue.value)
//     }
//     else{
//         colorBox.style.backgroundColor=rgbToHexa(redColor.value,greenColor.value,blueColor.value);
//         hexadecimalValue.value=rgbToHexa(redColor.value,greenColor.value,blueColor.value);
//     }
// })


if (hexadecimalValue.value){
    colorBox.style.backgroundColor=hexadecimalValue.value
    hexaTorgb(hexadecimalValue.value)
}
else{
    colorBox.style.backgroundColor=rgbToHexa(redColor.value,greenColor.value,blueColor.value);
    hexadecimalValue.value=rgbToHexa(redColor.value,greenColor.value,blueColor.value);
}
