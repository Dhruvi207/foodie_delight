
 const sections=document.querySelectorAll("section");
 const navLinks=document.querySelectorAll(".nav-links a");

 window.addEventListener("scroll",()=>{
  let current="";

  sections.forEach(section=>{
    const sectionTop=section.offsetTop;
    const sectionHeight=section.clientHeight;
    if(pageYOffset >= sectionTop-sectionHeight/3){
      current=section.getAttribute("id");
    }
  });
  navLinks.forEach(link=>{
    link.classList.remove("active");
    if(link.getAttribute("href")=== `#${current}`){
      link.classList.add("active");
    }
  });
 });


 const menuToggle=document.querySelector('.menu-toggle');
    const navBar=document.querySelector('.navbar');
    menuToggle.addEventListener('click',()=>{
      navBar.classList.toggle('active');
    });


    document.querySelectorAll('.nav-links a').forEach(link=>{
      link.addEventListener('click',()=>{
        navBar.classList.remove('active');
      });
    });
  



 


