const URL ="https://api.quotable.io/quotes/random";
let quotesBtn=document.querySelector("#quotes");

quotesBtn.addEventListener('click',()=>{
    let responce= fetch(URL);
    responce.then((data)=>{
        return data.json();
    }).then((content)=>{
        let obj=content[0];
        alert(`${obj['content']} ${'\n'}->${obj['author']}`,);
        // console.log(obj);

    }).catch((err)=>{
        alert(err);
    })
})