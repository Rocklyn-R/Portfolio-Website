let submitButton = document.getElementById('submit');
let thankYouMessage = document.getElementById('thank-you-message');
let form = document.getElementById('myForm');
let feelFree = document.getElementById('feel-free-msg')

/*const form2 = document.querySelector('form')
form2.onsubmit = (e) => {
  e.preventDefault()
  console.log('submitted')
}*/

function submitMessage() {
    thankYouMessage.style.display = 'block';
    form.style.display = 'none';
    feelFree.style.display = 'none';
}

submitButton.addEventListener('submit', submitMessage);

let clickElement1 = document.getElementById('about');
let clickElement2 = document.getElementById('projects');
let clickElement3 = document.getElementById('skills');
let clickElement4 = document.getElementById('contact');

let aboutAnim = document.getElementById('about-anim');
let projectsAnim = document.getElementById('projects-anim');
let skillsAnim = document.getElementById('skills-anim');
let contactAnim = document.getElementById('contact-anim');



animateObject1 = () => {
    aboutAnim.style.animation = 'animate 3s';
}

animateObject2 = () => {
    projectsAnim.style.animation = 'animate 3s';
}

animateObject3 = () => {
    skillsAnim.style.animation = 'animate 3s';
}

animateObject4 = () => {
    contactAnim.style.animation = 'animate 3s';
}

window.onload = function() {
clickElement1.addEventListener('click', animateObject1);
clickElement2.addEventListener('click', animateObject2);
clickElement3.addEventListener('click', animateObject3);
clickElement4.addEventListener('click', animateObject4);
}

const nav = document.getElementById('nav');
const toggle = document.getElementById('toggle');
const home = document.getElementById('home-nav');
const about = document.getElementById('about-nav');
const projects = document.getElementById('projects-nav');
const skills = document.getElementById('skills-nav');
const contact = document.getElementById('contact-nav');

toggle.onclick = function() {
    nav.classList.toggle('active');
    home.classList.toggle('active');
    about.classList.toggle('active');
    projects.classList.toggle('active');
    skills.classList.toggle('active');
    contact.classList.toggle('active');
};

