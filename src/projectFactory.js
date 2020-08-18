
let projectFactory = function (name) {
    let now = new Date();
    let tasks = [];
   
    return {
        name,
        tasks,
        now,
    }
}

export {
    projectFactory,
}