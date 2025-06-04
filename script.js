document.addEventListener('DOMContentLoaded',function(){

var menuBtn = document.getElementById('menuBtn');
var closeBtn = document.getElementById('closeBtn');
var menu1 = document.getElementById('menu1');

menuBtn.addEventListener('click',()=>{
     menu1.classList.add('flex');
     menu1.classList.remove('hidden');
     
     
     

})

closeBtn.addEventListener('click',()=>{
      menu1.classList.remove('flex');
     menu1.classList.add('hidden');
    
     

})



})

