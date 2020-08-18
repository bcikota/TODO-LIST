let projectPageStyle = (wrapper, projectPage) => {
    let img = document.querySelector('img');
    wrapper.style = `display: grid;
                              grid-template-rows: 5rem auto auto;`;
    wrapper.append(projectPage);
    projectPage.style = `background: white;
                           grid-row: 2;
                           border: 1px solid lightgray;`;

    img.style = `grid-row: 3`;
};

export {
    projectPageStyle
}