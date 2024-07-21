let displayNum=document.querySelector("#display");
let incrimentBtn=document.querySelector("#add")
let decrimentBtn=document.querySelector("#sub");
let resetBtn=document.querySelector("#reset");


let counter=0
incrimentBtn.addEventListener('click',(e)=>{
    counter+=1
    displayNum.textContent=counter;
})
decrimentBtn.addEventListener('click',(e)=>{
    counter-=1
    displayNum.textContent=counter;
})
resetBtn.addEventListener('click',(e)=>{
    counter=0
    displayNum.textContent=counter;
})