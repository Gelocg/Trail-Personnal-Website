const options = {
    root: null,
    rootMargin: '0px',
    threshold: .1
}

function projectsAppear(entries, observer) {
    for (let entry of entries) {
        if (entry.intersectionRatio > 0.1) {
            entry.target.classList.add('visible');
        }
    }
}

const observer2 = new IntersectionObserver(projectsAppear, options);
for(let projectItem of document.querySelectorAll('.projects__item')) {
    observer2.observe(projectItem);
}

// marquee
let marquee = document.querySelector('.marquee');

const baseElement = document.querySelector('.marquee h1'),
      clone = marquee.innerHTML;

let elementCount = document.body.clientWidth / baseElement.clientWidth;

for(let i = 0; i < elementCount; i++) {
    marquee.insertAdjacentHTML('beforeend', clone);
}

let i = 0;
setInterval(() => {

    let firstElement = marquee.children[0];
    firstElement.style.marginLeft = `-${i}px`;

    if (Math.abs(firstElement.getBoundingClientRect().left) >= firstElement.clientWidth) {
        firstElement.remove();
        marquee.insertAdjacentHTML('beforeend', clone);

        i = 0;
    }

    i++;
}, 0);

window.onresize = () => {

    marquee.children

    elementCount = (document.body.clientWidth / baseElement.clientWidth) - marquee.children.length;
}