let taskFactory = (taskName) => {
    if(taskName === undefined) {
        taskName = prompt('task name');
    }
    return {
        taskName,
    }
}

export {
    taskFactory
}