let initialPageLoader = function () {  
    
    return document.querySelector('.wrapper').innerHTML = `<div class="inner-container">
    <p>
      <button class="btn btn-success hamburger" type="button" data-toggle="collapse" data-target="#collapseProjects"
        aria-expanded="false" aria-controls="collapseProjects">
        ☰
      </button>
    </p>
    <div class="collapse card-wrapper" id="collapseProjects">
      <div class="card">
        <div class="card-body change-card">
          <h5 class="card-title">All projects</h5>
          <ul>
         
          </ul>
          <button type="button" class="btn btn-success new-project">new project</button>
        </div>
      </div>
    </div>
  </div>
  <img src="img/productivity.jpg" class="" alt="">
</div>`;
};

export {
    initialPageLoader,
}