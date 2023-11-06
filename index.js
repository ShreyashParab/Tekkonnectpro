const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')

 const divToAnimate1 = document.getElementById('line1');
 const divToAnimate2 = document.getElementById('line2');

 const observer = new IntersectionObserver(entries => {
   entries.forEach(entry => {
     if (entry.isIntersecting) {
        // console.log('hello')
        if(window.innerWidth <= 900){
            divToAnimate1.classList.add('line-animated-mobile');
            divToAnimate2.classList.add('line-animated-mobile');   
        }
        else{
            divToAnimate1.classList.add('line-animated');
            divToAnimate2.classList.add('line-animated');
        }
       observer.unobserve(divToAnimate1);
       observer.unobserve(divToAnimate2);
     }
   });
 });

 observer.observe(divToAnimate1);
 observer.observe(divToAnimate2);
  
  
