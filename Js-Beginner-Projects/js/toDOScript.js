let submitBtn= document.querySelector("#submit-btn");
        let task= document.querySelector('#todo-content')
        let todolist= document.querySelector('#todolist') 
        
        submitBtn.addEventListener('click',(e)=>{
            e.preventDefault();
            console.log('add todo item '+ task.value);
            todolist.appendChild(createNode(task.value));
        })


        function createNode(text){
            console.log('come in create Node function ' + text)
            const node= document.createElement('div')
            node.classList.add("taskcls");
            var value = "hello world"
            let valueDiv= document.createElement('h4')
            valueDiv.textContent=text;
            
            let editBtn=document.createElement('button')
            editBtn.textContent='Edit Task'
            
            let deletBtn = document.createElement('button')
            deletBtn.textContent='Delete Task'

            // append all the nodes
            node.appendChild(valueDiv);
            node.appendChild(editBtn);
            node.appendChild(deletBtn);

            // Edit button functionality
            editBtn.addEventListener('click', () => {
                let content = prompt("Re-enter your To-do task ", '');
                if (content === null) {
                    alert("You did not want to change");
                } else {
                    valueDiv.textContent = content;
                }
            });

            console.log(value);
            // Delete button functionality
            deletBtn.addEventListener('click', () => {
                todolist.removeChild(node);
            });
            
            return node
        }
        
        // editBtn.addEventListener('click',()=>{
        //     let content= prompt("Re-enter your To-do task ", '');
        //     console.log(''==null)
        //     if (content==null){
        //         alert("you did not want to change")
        //     }
        //     else{
        //         this.valueDiv.textContent=content;
        //     }
        // })

        // deletBtn.addEventListener('click',()=>{
        //     todolist.removeChild(this.node);
        // })