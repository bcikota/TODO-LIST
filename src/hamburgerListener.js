let hamburgerListener = (hamburger, projectPage, wrapper) => {
    hamburger.addEventListener('click', () => {
        projectPage.style.display = 'none';
        wrapper.style = `display: block;`;
    });
};

export {
    hamburgerListener,
}