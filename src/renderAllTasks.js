let renderAllTasks = (arr) => {
    
    let projectName = document.querySelector('.changeProjectPage h5').textContent;
    let changeProjectPageUl = document.querySelector('.changeProjectPage ul');  
    
    let project;
    for(let i = 0; i < arr.length; i++) {
        let getName = arr[i].name;
        
        if(getName === projectName) {
            project = arr[i];
        }
    }

    for(let i = 0; i < project.tasks.length; i++) {
        let changeProjectPageLi = document.createElement('li');
        changeProjectPageLi.innerHTML = `<a href="#" class="task-link">${project.tasks[i].taskName}</a>
        <button type="button" name="${project.tasks[i].taskName}" class="m-1 p-1 btn btn-danger deleteTaskBtn">delete</button>`;
        changeProjectPageUl.appendChild(changeProjectPageLi);
    };
};

export {
    renderAllTasks
}