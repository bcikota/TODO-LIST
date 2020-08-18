
import { newTaskBtnListener } from '../src/newTaskBtnListener';
import { projectPageStyle } from '../src/projectPageStyle';
import { renderAllTasks } from './renderAllTasks';
import { deleteTask } from './deleteTask';

let displayProjectPage = (wrapper, projectPage, hamburger, arr, taskFactory) => {

  

  let links = document.querySelectorAll('.change-card ul li a');

  links.forEach(link => {

      link.addEventListener('click', function () {
        
        projectPageStyle(wrapper, projectPage);

          let project;
          let projectName;
          let projectIndex;
          
          for (let i = 0; i < arr.length; i++) {
              let name = arr[i].name;

              if (name === link.textContent) {
                  projectName = arr[i].name;
                  project = arr[i];
                  projectIndex = i;
              }
          }

          projectPage.innerHTML = `<div class="projectPage">
          <div class="card">
            <div class="card-body changeProjectPage">
              <h5 class="card-title">${projectName}</h5>
              <ul>
                
              </ul>
              <button type="button" class="btn btn-success newTask">new task</button>
            </div>
          </div>
        </div>`;
          if (link.textContent === 'Example Project') {
              projectPage.innerHTML = `<div class="projectPage">
              <div class="card">
                <div class="card-body changeProjectPage">
                  <h5 class="card-title">${projectName}</h5>
                  <ul>
                      <!--<li></li>-->
                  </ul>
                  <button type="button" class="btn btn-success newTask">new task</button>
                </div>
              </div>
            </div>`;
          }

          hamburger.style = `grid-row: 1;`;

          let newTaskBtn = document.querySelector('.newTask');

          newTaskBtnListener(newTaskBtn, taskFactory, project, arr, projectIndex);

          renderAllTasks(arr);

          deleteTask(arr);

      })
  });


}

export {
    displayProjectPage
}