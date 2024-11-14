let images = Array.from( document.images)
let slideNumber = document.querySelector('.slide-number')
let next = document.querySelector('.next')
let previus = document.querySelector('.previus')
let bulletsBox = document.querySelector('ul')



let bulletNumber = images.length
// slideNumber.innerHTML = `slide-${}`
for (let i = 1; i <= bulletNumber; i++) {
    let li = document.createElement('li')
    let text = document.createTextNode(i)
    li.setAttribute('data-index',i)
    li.appendChild(text)
    bulletsBox.appendChild(li)
}

let currentSlide = 1
let allLis = document.querySelectorAll('ul li')
allLis.forEach(li => {
    li.onclick = ()=>{
        currentSlide = parseInt(li.getAttribute('data-index'))
        check()

    }
});
next.onclick = nextSlide;
previus.onclick = previusSlide;

check()

function nextSlide() {
    
    currentSlide++;
    check()
}

function previusSlide(params) {
    currentSlide--;
    check()
    
}
function removeActive(params) {
    allLis.forEach(li => {
        li.classList.remove('active')
    });

    images.forEach(img => {
        img.classList.remove('active')
    });

}
function check() {
    slideNumber.innerHTML = `slide number ${currentSlide}`    
    removeActive()
    allLis[currentSlide - 1].classList.add('active')
    images[currentSlide - 1].classList.add('active')
    if (currentSlide === 1) {
        previus.classList.add('disabled')
    } else {
        previus.classList.remove('disabled')
        
    }
    if (currentSlide === bulletNumber) {
        next.classList.add('disabled')
    } else {
        next.classList.remove('disabled')
        
    }
}
