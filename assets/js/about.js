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


//Mode
let mode =document.querySelector('#mode');
let link =document.querySelector('.style');
let moon=document.querySelector('#sun');
mode.addEventListener('click',()=>{
    let result=mode.classList.toggle('active');
    if(result){
        link.getAttribute("href");
        link.setAttribute("href","./assets/css/light/about.css");
        moon.classList="fa fa-moon-o"
    }
    else{
        link.getAttribute("href");
        link.setAttribute("href","./assets/css/dark/about.css");
        moon.classList="fas fa-sun"
    }
})



var forEach = function (array, callback, scope) {
	for (var i = 0; i < array.length; i++) {
		callback.call(scope, i, array[i]);
	}
};
window.onload = function(){
	var max = -219.99078369140625;
	forEach(document.querySelectorAll('.progress'), function (index, value) {
	percent = value.getAttribute('data-progress');
		value.querySelector('.fill').setAttribute('style', 'stroke-dashoffset: ' + ((100 - percent) / 100) * max);
		value.querySelector('.value').innerHTML = percent + '%';
	});
}

