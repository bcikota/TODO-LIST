import { projectFactory } from '../src/projectFactory';
let newProjectInStorage = function (name, arr) {
    let newProject = projectFactory(name);

    arr.push(newProject);
    localStorage.setItem(`arr`, JSON.stringify(arr));
    return localStorage;
};

export {
    newProjectInStorage,
}