document.querySelector('.nav-ul').addEventListener('mousedown', () => headerNavigationClick(event));

function headerNavigationClick(event) {
   document.querySelector('.nav-choosed').classList.remove('nav-choosed');
   event.target.classList.add('nav-choosed');
}


document.querySelector('.portfolio-tags').addEventListener('mousedown', () => portfolioTagClick(event));

function portfolioTagClick(event) {
    document.querySelector('.portfolio-tag-choosed').classList.remove('portfolio-tag-choosed');
    event.target.classList.add('portfolio-tag-choosed');
 }


document.querySelector('.portfolio-projects').addEventListener('mousedown', () => portfolioProjectsClick(event));

function portfolioProjectsClick(event) {
    document.querySelector('.portfolio-projects-item__pressed').classList.remove('portfolio-projects-item__pressed');
    event.target.parentElement.classList.add('portfolio-projects-item__pressed');
 }