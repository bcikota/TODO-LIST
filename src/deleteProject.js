
let deleteProject = (arr) => {
    let deleteProjectBtn = document.querySelectorAll('.deleteProjectBtn');
    
    deleteProjectBtn.forEach(btn => {
        btn.addEventListener('click', () => {

            for (let i = 0; i < arr.length; i++) {
                let name = arr[i].name;

                if (name === btn.getAttribute('name')) {
                    let indx = arr.findIndex(element => element.name === name);

                    arr.splice(indx, 1);
                    localStorage.setItem(`arr`, JSON.stringify(arr));
                    location.reload();
                }
            }
        });
    });

};

export {
    deleteProject
}