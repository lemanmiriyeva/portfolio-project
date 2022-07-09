(function(){

    'use strict';


    var $projects = $('.projects');

    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('ul.filters > li').on('click', function(e){

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');

        $projects.isotope({filter: filter});

    });



})(jQuery);
const root = document.querySelector('html')

// Real cursor element
const cursor = document.createElement('div')
cursor.classList.add('cursor')
root.appendChild(cursor)

// Following extra cursor element
const follower = document.createElement('div')
follower.classList.add('cursor', 'cursor__follower')
root.appendChild(follower)


root.addEventListener('mousemove', (e) => {
  setPosition(follower, e)
  setPosition(cursor, e)
})

function setPosition(element, e) {
  element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
}



let mode =document.querySelector('#mode');
let link =document.querySelector('.style');
let moon=document.querySelector('#sun');
mode.addEventListener('click',()=>{
    let result=mode.classList.toggle('active');
    if(result){
        link.getAttribute("href");
        link.setAttribute("href","./assets/css/light/gallery.css");
        moon.classList="fa fa-moon-o"
    }
    else{
        link.getAttribute("href");
        link.setAttribute("href","./assets/css/dark/gallery.css");
        moon.classList="fas fa-sun"
    }
})
