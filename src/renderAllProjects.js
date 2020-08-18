
let renderAllProjects = function (changeCardList, arr) {
    
    for(let i = 0; i < arr.length; i++) {
        let getName = arr[i].name;
       
        let project = document.createElement('li');
        project.innerHTML = `<a href="#" class="card-link"  data-toggle="collapse" data-target="#collapseProjects"
        aria-expanded="false" aria-controls="collapseProjects">${getName}</a>
        <!-- <button type="button" class="m-1 p-1 btn btn-primary editProjectBtn">edit</button> -->
        <button type="button" name="${getName}" class="m-1 p-1 btn btn-danger deleteProjectBtn">delete</button>`;
        changeCardList.appendChild(project);
    }

    return changeCardList;
};

export {
    renderAllProjects,
}