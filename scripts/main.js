document.addEventListener('DOMContentLoaded',function(){
   const parentMenu = document.querySelectorAll('.drop > a');
   const btn = document.querySelector('.header__btn');
   const header = document.querySelector('.header');
   const h3 = document.querySelector('.main__build > h3');

   btn.addEventListener('click',function(){
       header.classList.toggle('open');
   })
   for(let i = 0; i < parentMenu.length; i++){
       parentMenu[i].addEventListener('click',function(e){
        e.preventDefault();
        this.classList.toggle('achive');
        this.nextElementSibling.classList.toggle('achive');
    })
   }

   let cb = function(entries, observes){
       console.log(observes);
       entries.forEach(entry => {
           if(entry.isIntersecting){
              entry.target.classList.add('entry');
              observes.unobserve(entry.target);
           }
       });
   }

   const io = new IntersectionObserver(cb);
   io.observe(h3)
})