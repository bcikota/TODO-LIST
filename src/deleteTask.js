let deleteTask = (arr) => {

    let deleteTaskBtn = document.querySelectorAll('.deleteTaskBtn');
    let projectName = document.querySelector('.changeProjectPage h5').textContent;
    deleteTaskBtn.forEach(btn => {
        btn.addEventListener('click', () => {

            let project;
            for (let i = 0; i < arr.length; i++) {
                let getName = arr[i].name;

                if (getName === projectName) {
                    project = arr[i];
                }
            };

            for (let i = 0; i < project.tasks.length; i++) {
                if (project.tasks[i].taskName === btn.getAttribute('name')) {
                   
                    console.log(i);
                    project.tasks.splice(i, 1);
                    localStorage.setItem(`arr`, JSON.stringify(arr));
                    location.reload();
                }
            };
        });
    });
};

export {
    deleteTask
}