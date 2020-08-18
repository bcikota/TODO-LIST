
import { newProjectInStorage } from '../src/newProjectInStorage';

let newProjectBtnListener = (changeCardList, arr) => {

    let newProjectBtn = document.querySelector('.new-project');

    newProjectBtn.addEventListener('click', function () {    

        let name = prompt('name');
    
        newProjectInStorage(name, arr);
        let project = document.createElement('li');
        project.innerHTML = `<a href="#" class="card-link"  data-toggle="collapse" data-target="#collapseExample"
            aria-expanded="false" aria-controls="collapseExample">${name}</a>`;
        changeCardList.appendChild(project);
        location.reload();
    });
}


export {
    newProjectBtnListener,
}