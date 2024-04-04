const ques = document.querySelector('.qel');
const quesInput = document.querySelector('.email');
const sent = document.querySelector('.sent');


const nothing = document.querySelector('.nothing');
const notSent = document.querySelector('.not-sent');


const ct = document.querySelectorAll('.ct');
const con = document.querySelectorAll('.ct-con');

const nav = document.querySelector('nav');



// Function to run to display popup in the contact page.





function plough(){
  del.style.transform= 'rotate(90)';
}

function remove(){
  del.style.transform = 'rotate(0)';
}

const logo = document.querySelector('.logo');
const pages = document.querySelector('.pages');
const activeBar = document.querySelector('#hidden-icon');
const activeX = document.getElementById('active-x');
const icons = document.querySelector('.icons');


const hicons = document.querySelector('#hidden-icon');
const dropDown = document.querySelector('.drop-down');
const arr = document.querySelector('#arr');

function scatter(){
  pages.style.display = 'none';
  logo.style.display = 'none';
  icons.style.display = 'none';
  nav.style.padding = '0';
  nav.style.height = '200px';
  dropDown.style.display = 'block';
  dropDown.style.justifyContent = 'space-around';
}
function closeDropDown(){
  dropDown.style.display = 'none';
  pages.style.display = 'none';
  logo.style.display = 'block';
  nav.style.padding = '6px';
  nav.style.paddingBottom = '10px';
  nav.style.height = '90px';
  icons.style.display = 'flex';
} 

// When it's on GitHub, the buttons don't work.

/// Routing
const global = {
  currentPage: window.location.pathname,
  search: {
      term: '',
      type: '',
      page: 1,
      totalPages: 1,
      totalResults: 0,
  }
};

function init(){
  switch (global.currentPage){
    case '/':
  case '/index.html':
ques.addEventListener('submit',(e)=>{
  e.preventDefault();
  if(quesInput.value !== ''){
    sent.style.display = 'block';
    setTimeout(()=>{
      sent.style.display = 'none'
    },2300);
  } else if(quesInput.value === ''){
    nothing.style.display = 'block';
    setTimeout(()=>{
      nothing.style.display = 'none'
    },2300);
  } else{
    notSent.style.display = 'block';
    setTimeout(()=>{
      notSent.style.display = 'none'
    },2300);
  }
  quesInput.value = '';
})
    // activeBar.addEventListener('click',demande);
    function scatter(){
      pages.style.display = 'none';
      logo.style.display = 'none';
      icons.style.display = 'none';
      nav.style.padding = '0';
      nav.style.height = '200px';
      dropDown.style.display = 'block';
      dropDown.style.justifyContent = 'space-around';
    }
    function closeDropDown(){
      dropDown.style.display = 'none';
      pages.style.display = 'none';
      logo.style.display = 'block';
      nav.style.padding = '6px';
      nav.style.paddingBottom = '10px';
      nav.style.height = '90px';
      icons.style.display = 'flex';
    } 
    
    hicons.addEventListener('DOMContentLoaded', function(){
      hicons.style.animation = 'SlideInLeft 2s infinte';    
    });
  
  
    
  break;
  case '/about.html':
    function scatter(){
      pages.style.display = 'none';
      logo.style.display = 'none';
      icons.style.display = 'none';
      nav.style.padding = '0';
      nav.style.height = '200px';
    dropDown.style.display = 'block';
    dropDown.style.justifyContent = 'space-around';
  }
  

  
  function closeDropDown(){
    dropDown.style.display = 'none';
    pages.style.display = 'none';
    logo.style.display = 'block';
    nav.style.height = '90px';
    nav.style.padding = '6px';
    nav.style.paddingBottom = '10px';
    icons.style.display = 'flex';
  } 
  
  break
  case '/services.html':
  function scatter(){
    pages.style.display = 'none';
    logo.style.display = 'none';
    icons.style.display = 'none';
    nav.style.padding = '0';
    nav.style.height = '200px';
    dropDown.style.display = 'block';
    dropDown.style.justifyContent = 'space-around';
  }
  

  
  function closeDropDown(){
    dropDown.style.display = 'none';
    pages.style.display = 'none';
    nav.style.height = '90px';
    nav.style.padding = '6px';
    nav.style.paddingBottom = '10px';
    logo.style.display = 'block';
    icons.style.display = 'flex';
  } 
  break
case '/contact.html':
  
  }
}
 function run(e) {
  e.target.firstElementChild.firstElementChild.style.color = 'white';
}

function remove(e){
  e.target.firstElementChild.firstElementChild.style.color = 'rgb(245,116,51)';
}

ct.forEach((c)=>{
  c.addEventListener('mouseenter',run);
  console.log("It worked, Oshey Ohhh");
})

ct.forEach((c)=>{
  c.addEventListener('mouseleave',remove);
})

function spin(element){
  element.style.animation = 'spin 3s infinite';
}



// spin();



const an = document.querySelector(".cm1");



// too bad Javascript isn't declarative , it's imperative

init();


window.addEventListener('scroll', function() {
  const works = document.querySelectorAll('#work');
  const history = this.document.querySelectorAll('.history-image');
  var windowHeight = window.innerHeight;

  works.forEach(function(work) {
    var workTop = work.getBoundingClientRect().top;

    // Check if the box is within the viewport
    if (workTop < windowHeight ) {
      work.style.transform = 'scale(1)';
    } else {
      work.style.transform = 'scale(0.4)'; // Initial scale down effect
    }
  });
  history.forEach(function(work) {
    var workTop = work.getBoundingClientRect().top;

    // Check if the box is within the viewport
    if (workTop < windowHeight ) {
      work.style.transform = 'scale(1)';
    } else {
      work.style.transform = 'scale(0.4)'; // Initial scale down effect
    }
  });


});