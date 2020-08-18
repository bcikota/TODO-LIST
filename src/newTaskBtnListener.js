import { newTaskInStorage } from '../src/newTaskInStorage';

let newTaskBtnListener = (newTaskBtn, taskFactory, project, arr, projectIndex ) => {
    newTaskBtn.addEventListener('click', ()=>{
        
        newTaskInStorage(taskFactory, project, arr, projectIndex);

        let changeProjectPageUl = document.querySelector('.changeProjectPage ul'); 
        
        location.reload();
    })
}

export {
    newTaskBtnListener
}