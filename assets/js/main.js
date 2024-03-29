 /* ==================  Menu SHOW Y HIDDEN  ======================== */

 const  navMenu = document.getElementById('nav-menu');
 const  navToggle = document.getElementById('nav-toggle');
 const  navClose = document.getElementById('nav-close');

 /* ==================  Menu SHOw   ======================== */
 /* Validate if constant exists */
 if ( navToggle) {
    navToggle.addEventListener('click',()=>{
            navMenu?.classList.add('show-menu')
    })
 }

  /* Validate if constant exists */
  if(navClose) {
    navClose.addEventListener('click',() => 
      navMenu?.classList.remove('show-menu'))
  }

   /* ==================  Remove Menu Mobile   ======================== */
   const navLink = document.querySelectorAll('.nav_link');
   function linkAction () {
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link, we remove the show-menu class
    navMenu?.classList.remove("show-menu");
   }
   navLink.forEach(n=>n.addEventListener('click', linkAction))

      /* ==================  ACCORDION SKILLS   ======================== */
      const skillsContent = document.getElementsByClassName('skills_content')

      const skillsHeader = document.querySelectorAll('.skills_header')

      function toggleSkills(){
        let itemClass = this.parentNode.className
       for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills_content skills_close';
       }
       if (itemClass === 'skills_content skills_close') {
        this.parentNode.className = "skills_content skills_open"
       }
      }
      
      skillsHeader.forEach((el)=>{
        el.addEventListener('click', toggleSkills)
      })

     /* ==================  Qualification Tabs  ======================== */

  const tabs = document.querySelectorAll('[data-target]');
  const tabContetns = document.querySelectorAll('[data-content]');

  tabs.forEach(tab => {
    tab.addEventListener('click',()=>{
      const target = document.querySelector(tab.dataset.target)
      tabContetns.forEach(tabContent => {
        tabContent.classList.remove('qualification_active')
      })
      target.classList.add('qualification_active')

      tabs.forEach(tab => {
        tab.classList.remove('qualification_active')
      })

      tab.classList.add('qualification_active')
    })
  })



/* =====================  CHANGE BACKGROUND HEADER  ======================== */
// function scrollHeader(){
//   const nav = document.getElementById('header')
//   // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  
//   if (this.scrollY >= 80) nav?.classList.add('scroll-header'); else nav?.classList.remove('scroll-header')
// }
// window.addEventListener('scroll',scrollHeader)

// /* =====================  SHOW SCROLL up  ======================== */

// function scrollUp(){
//   const scrollUp = document.getElementById('scroll-up')
//   // When the scroll is greater than 560 viewport height, add the scroll-header class to the header tag
  
//   if (this.scrollY >= 560) scrollUp?.classList.add('show-scroll'); else scrollUp?.classList.remove('show-scroll')
// }
// window.addEventListener('scroll',scrollUp)

/* =====================  DARK LIGHT THEME  ======================== */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'
// Previously Selected topic ( if user selected )
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class 
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark':'light'
const getCurrentIcon = () => themeButton?.classList.contains(iconTheme) ?  'uil-moon' : 'uil-sun'

// we validate if the user previously chose a topic 
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme 
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)
  document.body.classList[selectedTheme === 'uil-moon' ? 'add' : 'remove'] (iconTheme)
}

// Activate / deactivate the theme manualy with the button

themeButton?.addEventListener('click',()=>{
  //Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // we save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme',getCurrentTheme())
  localStorage.setItem('selected-icon',getCurrentIcon())
})
/* =====================  Contact   ======================== */

// contact form

const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit',(e) =>checkData(e))

function checkData(e) {
  let formIsOkay = true;
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const project = document.getElementById('project');
  const message = document.getElementById('message');

  if (!name.value) {
    name?.parentNode.classList.add('invalidGroup');
    formIsOkay=false;
    name?.focus()
  } else {
    name?.parentNode.classList.remove('invalidGroup')
  }

  if (!email.value || !isValidEmail(email.value)) {
    email?.parentNode.classList.add('invalidGroup');
    formIsOkay=false;
    email?.focus()
  } else {
    email?.parentNode.classList.remove('invalidGroup')
  }


  if (!project.value ) {
    project?.parentNode.classList.add('invalidGroup');
    formIsOkay=false;
    project?.focus()
  } else {
    project?.parentNode.classList.remove('invalidGroup')
  }

  if (!message.value ) {
    message?.parentNode.classList.add('invalidGroup');
    formIsOkay=false;
    message?.focus()
  } else {
    message?.parentNode.classList.remove('invalidGroup')
  }
  
  if(!formIsOkay) {
    e.preventDefault();
    return false
  }
}




function sendMail () {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const project = document.getElementById('project');
  const message = document.getElementById('message');

  try {
    let formIsOkay = true;

    let params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      project: document.getElementById("project").value,
      message: document.getElementById("message").value,

  };
 

  if (!name.value) {
    name?.parentNode.classList.add('invalidGroup');
    formIsOkay=false;
    name?.focus()
  } else {
    name?.parentNode.classList.remove('invalidGroup')
  }


  if (!email.value || !isValidEmail(email.value)) {
    email?.parentNode.classList.add('invalidGroup');
    formIsOkay=false;
    email?.focus()
  } else {
    email?.parentNode.classList.remove('invalidGroup')
  }


  if (!project.value) {
    project?.parentNode.classList.add('invalidGroup');
    formIsOkay=false;
    project?.focus()
  } else {
    project?.parentNode.classList.remove('invalidGroup')
  }


  if (!message.value) {
    message?.parentNode.classList.add('invalidGroup');
    formIsOkay=false;
    message?.focus()
  } else {
    message?.parentNode.classList.remove('invalidGroup')
  }


  const serviceId = "service_y79wy9z";
  const templateId = "template_77yuyan";
  if (formIsOkay) {
    const res = emailjs.send(serviceId, templateId, params);
    if (res) {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("project").value = "";
      document.getElementById("message").value = "";
      message?.parentNode.classList.remove('invalidGroup');
      project?.parentNode.classList.remove('invalidGroup');
      email?.parentNode.classList.remove('invalidGroup') ;
      name?.parentNode.classList.remove('invalidGroup') ;

      alert("Your communication has been successfully transmitted . ")
  }}else {
  }
  } catch (error) {
alert("Error: Unable to transmit your communication. Please send an email to azyzdarraji@gmail.com.");

  }
}

function isValidEmail (email) {
  const emailReg =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  return emailReg.test (email)
     
}

