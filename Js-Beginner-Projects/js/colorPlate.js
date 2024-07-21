let colorBox=document.querySelector("#colorbox")
let value=0

colorBox.addEventListener('change',(e)=>{
    e.preventDefault()
    document.querySelector("body").style.backgroundColor=colorBox.value
    console.log(colorBox.value);
})
// console.log(colorBox.value);
// if (hexadecimalValue.value){
//     colorBox.style.backgroundColor=hexadecimalValue.value
//     hexaTorgb(hexadecimalValue.value)
// }
// else{
//     colorBox.style.backgroundColor=rgbToHexa(redColor.value,greenColor.value,blueColor.value);
//     hexadecimalValue.value=rgbToHexa(redColor.value,greenColor.value,blueColor.value);
// }
