

let arr = [];

let localStorageInit = function(projectFactory, taskFactory) {

    
    
    let project_0 = projectFactory(`Example Project`);

    let testTask = taskFactory('test');

    project_0.tasks.push(testTask);

    arr.push(project_0);
    localStorage.setItem(`arr`, JSON.stringify(arr));

    return localStorage;
}

export {
    localStorageInit,
}