//variables

let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');

let botones = document.getElementsByClassName('btn-header');
let cerrado = true;

function menus(){

     let Desplazamiento_Actual = window.pageYOffset;

     if(Desplazamiento_Actual <= 300)
     {
         nav.classList.remove('nav2');
         nav.className = ('nav1');
         nav.style.transition = '1s';
     }else
     {
         nav.classList.remove('nav1');
         nav.className = ('nav2');
          nav.style.transition = '1s';
        
     }
}



function apertura(){
    if(cerrado){
         menu.style.width = '70vw';
        cerrado= false;
    }
    else{
        menu.style.width = '0%';
        menus.style.overflow = 'hidden';
        cerrado= false;

    }
}

/*
windows.addEventListener('load',function(){

    menus();
}); */



window.addEventListener('scroll', function(){
menus();
console.log(window.pageYOffset);

});

abrir.addEventListener('click', function(){

apertura();

});


