 let task = [];

 function adicionar(){
    let userTask = window.document.getElementById('new-task').value;
    let taskList = window.document.getElementById('task-list');
    task.push(userTask)

    let createLi = document.createElement("li");
    createLi.innerHTML = ` <span class="task"><input type="checkbox"  class="check"/>${task}  
                           <button class="complete-task"> Concluir </buton>
                           <button class="remove-task"> excluir </buton></span>`
    taskList.appendChild(createLi);
    document.getElementById('new-task').value= '';
    let createTask = document.getElementById('task-list').appendChild(createLi);
    task = [];
    createLi.querySelector('.complete-task').addEventListener('click', function(){ createLi.querySelector('span').classList.toggle('completed')})
    
    createLi.querySelector('.remove-task').addEventListener('click', function(){ taskList.removeChild(createLi)})
    
    



}


