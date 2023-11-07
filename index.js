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
 const divsToAnimateCloud1 = document.getElementsByClassName('cloud-icon1')
 const divsToAnimateCloud2 = document.getElementsByClassName('cloud-icon2')
 const divsToAnimateCloud3 = document.getElementsByClassName('cloud-icon3')
 const observer = new IntersectionObserver(entries => {
   entries.forEach(entry => {
     if (entry.isIntersecting) {
        // console.log('hello')
        for (let i = 0; i < divsToAnimateCloud1.length; i++) {
          const element = divsToAnimateCloud1[i];
          element.classList.add('cloud-animation1')
          observer.unobserve(element)
        }

        for (let i = 0; i < divsToAnimateCloud2.length; i++) {
          const element = divsToAnimateCloud2[i];
          element.classList.add('cloud-animation2')
          observer.unobserve(element)
        }

        for (let i = 0; i < divsToAnimateCloud3.length; i++) {
          const element = divsToAnimateCloud3[i];
          element.classList.add('cloud-animation3')
          observer.unobserve(element)
        }

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

 for (let i = 0; i < divsToAnimateCloud1.length; i++) {
  observer.observe(divsToAnimateCloud1[i]);
}

for (let i = 0; i < divsToAnimateCloud2.length; i++) {
  observer.observe(divsToAnimateCloud2[i]);
}

for (let i = 0; i < divsToAnimateCloud3.length; i++) {
  observer.observe(divsToAnimateCloud3[i]);
}
 
  
  
