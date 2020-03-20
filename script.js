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
    if (document.querySelector('.portfolio-projects-item__pressed')){
        document.querySelector('.portfolio-projects-item__pressed').classList.remove('portfolio-projects-item__pressed');
    }
    event.target.parentElement.classList.add('portfolio-projects-item__pressed');
 }


 document.getElementById('submit').addEventListener('mousedown', () => sendInfo());

 function sendInfo() {
    const subject = document.querySelector('#getaquote-subject').value;
    const description = document.querySelector('#getaquote-description').value;

    let message = '';

    if (subject == '' || description == '') {
        message = `<strong>Письмо отправлено</strong><br>Без темы<br>Без описания`;
    } else {
        message = `<strong>Письмо отправлено</strong><br>Тема: ${subject}<br>Описание: ${description}`;
    }

    const popup = document.createElement('div');
    popup.className = 'getaquote-popup';
    document.body.prepend(popup);

    const popupMessage = document.createElement('div');
    popupMessage.innerHTML = message;
    popup.append(popupMessage);

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('getaquote-popup-close');
    closeBtn.innerHTML = 'Ok';
    popup.append(closeBtn);

    closeBtn.addEventListener('click', () => {
        popup.style.display = "none";
    })

 }