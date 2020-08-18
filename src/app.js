import 'bootstrap';
import './scss/app.scss';
import { projectFactory } from '../src/projectFactory';
import { localStorageInit } from '../src/localStorageInit';
import { initialPageLoader } from '../src/initialPageLoader';
import { renderAllProjects } from '../src/renderAllProjects';
import { newProjectBtnListener } from '../src/newProjectBtnListener';
import { displayProjectPage } from '../src/displayProjectPage';
import { hamburgerListener } from '../src/hamburgerListener';
import { deleteProject } from '../src/deleteProject';
import { taskFactory } from '../src/taskFactory';

// import { wrapper,img,hamburger,project,newProjectBtn,changeCardList } from '../src/variables';
// import { test } from '../src/test';

// test();


if (localStorage.length === 0) {
    localStorageInit(projectFactory, taskFactory);
}

initialPageLoader();

let wrapper = document.querySelector('.wrapper');

let hamburger = document.querySelector('.hamburger');

let projectPage = document.createElement('div');

let changeCardList = document.querySelector('.change-card ul');

let arr = JSON.parse(localStorage.getItem('arr'));

// let changeProjectPage = document.querySelector('.changeProjectPage');


renderAllProjects(changeCardList, arr);

newProjectBtnListener(changeCardList, arr);

displayProjectPage(wrapper, projectPage, hamburger, arr, taskFactory);

hamburgerListener(hamburger, projectPage, wrapper);

deleteProject(arr);


console.log('moduleThirdTry');
