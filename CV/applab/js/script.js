//Scroll

const smoothLinks = document.querySelectorAll("a[href^='#']");
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute("href");

        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
      });
};

//scrollToUp

const footerScrollBtn = document.querySelector('.footer_logo');
footerScrollBtn.addEventListener('click', () => scrollTo(homePoint));
const homePoint = document.querySelector('.intro');


function scrollTo(object){
  object.scrollIntoView({
    block:"start",
    behavior: "smooth"
  })
}


//Switcher

const switchSlider = document.querySelector('input[type=checkbox]');
const firstPrice = document.querySelector('.first-price');
const secondPrice = document.querySelector('.second-price');

switchSlider.checked = false;

switchSlider.addEventListener('click', function(){
  if(switchSlider.checked){
      firstPrice.innerHTML = "<p><span class=\"h1\">$180</span>/year<br><span class=\"business-class\">Business Class</span><br>For small teams or office</p>";
      secondPrice.innerHTML = "<p><span class=\"h1\">$1200</span>/year<br><span class=\"business-class\">Pro Master</span><br>For small teams or office</p>";
  }else if (switchSlider.checked === false) {
    firstPrice.innerHTML = "<p><span class=\"h1\">$15</span>/month<br><span class=\"business-class\">Business Class</span><br>For small teams or office</p>";
    secondPrice.innerHTML = "<p><span class=\"h1\">$99</span>/month<br><span class=\"business-class\">Pro Master</span><br>For small teams or office</p>";
  }
})

//FAQ Accordion

let toggleBtns = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content');
let icon = document.getElementsByClassName('icon');

console.log(toggleBtns, contentDiv, icon);

for(let i=0; i < toggleBtns.length; i++){
  toggleBtns[i].addEventListener('click', function(e){
    e.preventDefault();
    if(parseInt(contentDiv[i].style.height) !== contentDiv[i].scrollHeight){
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
      icon[i].classList.remove('fa-plus');
      icon[i].classList.add('fa-minus');
    }else{
      contentDiv[i].style.height = "0px";
      icon[i].classList.remove('fa-minus');
      icon[i].classList.add('fa-plus');
    }

    for(let j=0;j<contentDiv.length;j++){
      if(j!=i){
        contentDiv[j].style.height = "0px";
        icon[j].classList.remove('fa-minus');
        icon[j].classList.add('fa-plus');
      }
    }
  })
}
