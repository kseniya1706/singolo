document.querySelector('.nav-ul').addEventListener('mousedown', () => headerNavigationClick(event));

function headerNavigationClick(event) {
   document.querySelector('.nav-choosed').classList.remove('nav-choosed');
   event.target.classList.add('nav-choosed');
}
