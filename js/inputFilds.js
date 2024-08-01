let form=document.querySelector('form');
const dataArr=[]

form.addEventListener('submit',(data)=>{
    data.preventDefault();
    let respons=fatchData()
    console.log(respons);
    dataArr.push(respons)
})

function fatchData(){
    let userData=new FormData(form);
    const userDataDto={}
    userData.forEach((key,val)=>{
        userDataDto[val]=key
    })
    return userDataDto
}

