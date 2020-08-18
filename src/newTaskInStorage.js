let newTaskInStorage = (taskFactory, project, arr, projectIndex) => {
    let task = taskFactory();

    project.tasks.push(task);

    arr[projectIndex] = project;
    localStorage.setItem(`arr`, JSON.stringify(arr));
    // console.log(JSON.parse(localStorage.getItem('arr')));
    return localStorage;
};

export {
    newTaskInStorage
}